(function () {
  window.dataLayer = window.dataLayer || [];

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

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-analytics-event]");
    if (!target) return;

    const eventName = target.dataset.analyticsEvent;
    if (!eventName) return;

    const params = readAnalyticsParams(target);

    trackEvent(eventName, params);
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

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".faq-question");
    if (!button) return;

    const item = button.closest(".faq-item");
    if (!item || !item.classList.contains("open")) return;

    const question =
      button.querySelector("span")?.textContent.trim() || button.textContent.trim();
    const product = document.body.dataset.product || "main";

    trackEvent("faq_open", {
      product,
      question,
    });
  });

  window.saqtaTrackEvent = trackEvent;
})();
