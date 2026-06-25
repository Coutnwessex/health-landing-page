(function () {
  window.dataLayer = window.dataLayer || [];

  const delayedEvents = new Set(["health_apply_click", "urban_apply_click"]);

  function getLang() {
    return localStorage.getItem("saqta-lang") || "ru";
  }

  function readAnalyticsParams(element) {
    return Object.entries(element.dataset).reduce((params, [key, value]) => {
      if (!key.startsWith("analytics") || key === "analyticsEvent" || value === "") {
        return params;
      }

      const paramName = key
        .replace(/^analytics/, "")
        .replace(/^[A-Z]/, (char) => char.toLowerCase())
        .replace(/[A-Z]/g, (char) => `_${char.toLowerCase()}`);

      params[paramName] = value;
      return params;
    }, {});
  }

  function trackEvent(eventName, params = {}) {
    const payload = {
      event: eventName,
      page_path: window.location.pathname,
      page_title: document.title,
      language: getLang(),
      ...params,
    };

    window.dataLayer.push(payload);
    return payload;
  }

  function shouldDelayNavigation(event, link, eventName) {
    return (
      link &&
      link.href &&
      delayedEvents.has(eventName) &&
      !event.defaultPrevented &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey &&
      link.target !== "_blank"
    );
  }

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-analytics-event]");
    if (!target) return;

    const eventName = target.dataset.analyticsEvent;
    if (!eventName) return;

    const params = readAnalyticsParams(target);
    const link = target.closest("a");

    if (!shouldDelayNavigation(event, link, eventName)) {
      trackEvent(eventName, params);
      return;
    }

    event.preventDefault();

    let navigated = false;
    const navigate = () => {
      if (navigated) return;
      navigated = true;
      window.location.href = link.href;
    };

    window.dataLayer.push({
      event: eventName,
      page_path: window.location.pathname,
      page_title: document.title,
      language: getLang(),
      ...params,
      event_callback: navigate,
      event_timeout: 800,
    });

    window.setTimeout(navigate, 900);
  });

  let chatClickTracked = false;

  document.addEventListener(
    "click",
    (event) => {
      if (chatClickTracked) return;

      const path = event.composedPath?.() || [];
      const isChatClick = path.some((node) => {
        if (!(node instanceof Element)) return false;
        const marker = `${node.id || ""} ${node.className || ""}`.toLowerCase();
        return marker.includes("pulse") || marker.includes("livechat");
      });

      if (!isChatClick) return;

      chatClickTracked = true;
      trackEvent("chat_open_click", {
        product: document.body.dataset.product || "main",
      });
    },
    true,
  );

  document.addEventListener(
    "toggle",
    (event) => {
      const item = event.target;
      if (!item.matches(".faq-item") || !item.open) return;

      const question = item.querySelector("summary")?.textContent.trim() || "";
      const product = document.body.dataset.product || "main";

      trackEvent("faq_open", {
        product,
        question,
      });
    },
    true,
  );

  window.saqtaTrackEvent = trackEvent;
})();
