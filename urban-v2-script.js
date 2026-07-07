const subscribeUrl = "https://ffin.life/ru/individuals/freedom-urban/product?policyType=URS";

const urbanSteps = [
  {
    name: "Обычная поездка",
    title: "Обычная поездка по городу может пойти не по плану",
    text:
      "Автобус, метро, троллейбус, трамвай или такси - часть повседневной жизни. Мы садимся в транспорт, думаем о работе, учебе, делах и семье. Но в дороге пассажир не все контролирует: резкое торможение, толпа в салоне или падение могут быстро превратить обычный маршрут в проблему.",
    cta: "Какие расходы появляются?",
    image: "./assets/urban-route-bus-risk-kazakh.webp",
    fallback: "./assets/urban-route-bus-risk-kazakh.png",
    variant: "route",
  },
  {
    name: "Расходы после травмы",
    title: "Расходы, которые никто не планировал",
    text:
      "После несчастного случая могут понадобиться осмотр врача, снимок, лекарства, перевязки, такси до клиники, повторные приемы или госпитализация. Даже если травма кажется небольшой, сумма может оказаться неприятной именно потому, что ее не закладывали в бюджет.",
    cta: "Только ли о себе нужно думать?",
    image: "./assets/urban-clinic-expenses-kazakh-man.webp",
    fallback: "./assets/urban-clinic-expenses-kazakh-man.png",
    variant: "expense",
  },
  {
    name: "Семейная защита",
    title: "Защита нужна не только взрослым",
    text:
      "Ребенок едет в школу, студент - на учебу, родитель - по делам. Вы не можете быть рядом в каждом автобусе и каждом метро, но можете заранее защитить городской маршрут. Freedom Urban помогает семье спокойнее относиться к ежедневным поездкам.",
    cta: "Как работает Freedom Urban?",
    image: "./assets/urban-family-teen-route.webp",
    fallback: "./assets/urban-family-teen-route.png",
    variant: "family",
  },
  {
    name: "Решение Freedom Urban",
    title: "Freedom Urban защищает поездки на общественном транспорте",
    text:
      "Freedom Urban - страховая программа на случай несчастного случая во время поездки на общественном транспорте по Казахстану. Полис оформляется онлайн, а при страховом случае помогает получить выплату по условиям выбранного тарифа.",
    cta: "Посмотреть тарифы",
    image: "./assets/urban-protected-bus-shields.webp",
    fallback: "./assets/urban-protected-bus-shields.png",
    variant: "solution",
  },
  {
    name: "Тарифы",
    title: "Выберите уровень защиты и оформите онлайн",
    text:
      "Freedom Urban от 500 ₸ в месяц: небольшая регулярная сумма, которая помогает заранее подготовиться к расходам, если поездка закончится несчастным случаем.",
    cta: "Оформить",
    image: "./assets/home-v2-urban.webp",
    fallback: "./assets/home-v2-urban.png",
    tariffs: [
      {
        name: "Start",
        price: "6 000 ₸ в год",
        limit: "защита на сумму 1 000 000 ₸",
      },
      {
        name: "Optimum",
        price: "12 000 ₸ в год",
        limit: "защита на сумму 2 000 000 ₸",
      },
      {
        name: "Pro",
        price: "24 000 ₸ в год",
        limit: "защита на сумму 4 000 000 ₸",
      },
    ],
    bullets: [
      "выберите тариф",
      "заполните данные онлайн",
      "оплатите картой",
      "полис придет на email",
    ],
    final: true,
    variant: "tariffs",
  },
];

const urbanFaq = [
  {
    question: "Что такое Freedom Urban?",
    answer:
      "Freedom Urban - программа добровольного онлайн-страхования пассажиров общественного транспорта от несчастных случаев. Защита действует во время поездок на общественном транспорте по Казахстану.",
  },
  {
    question: "Когда действует защита?",
    answer:
      "Защита действует с момента входа застрахованного в общественный транспорт до момента выхода в конечной точке маршрута, включая посадку, нахождение в транспорте и высадку.",
  },
  {
    question: "Что считается страховым случаем?",
    answer:
      "Страховыми случаями являются смерть, установление инвалидности, госпитализация и медицинские расходы в связи с телесной травмой, полученной во время поездки на общественном транспорте.",
  },
  {
    question: "Где действует страховка?",
    answer: "Договор страхования действует на территории Республики Казахстан.",
  },
  {
    question: "Можно ли оформить полис на другого человека?",
    answer:
      "Да. Страхователь и застрахованный могут быть разными лицами. При оформлении нужно указать данные застрахованного человека.",
  },
  {
    question: "Какие документы нужны при страховом случае?",
    answer:
      "Обычно нужны заявление, удостоверение личности, выписка из истории болезни, акт о страховом случае на транспорте, документы о медицинских расходах и билет или квитанция, подтверждающие поездку.",
  },
];

const urbanRoot = document.getElementById("urbanRoot");

function renderUrbanPage() {
  if (!urbanRoot) return;
  urbanRoot.innerHTML = `
    <div class="urban-flow">
      ${urbanSteps.map((step, index) => createUrbanStep(step, index, urbanSteps.length)).join("")}
    </div>
    ${createFaqSection()}
  `;
  bindUrbanInteractions();
}

function createUrbanStep(step, index, total) {
  const number = index + 1;
  const nextId = number < total ? `urban-step-${number + 1}` : "";
  const visual = step.image
    ? createUrbanImageVisual(step)
    : `<div class="urban-illustration"><strong>${String(number).padStart(2, "0")}</strong></div>`;
  const bullets = Array.isArray(step.bullets)
    ? `<ul class="urban-bullet-list">${step.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>`
    : "";
  const tariffs = Array.isArray(step.tariffs)
    ? `<div class="urban-tariff-grid">${step.tariffs
        .map(
          (tariff) => `
            <a class="urban-tariff-card" href="${subscribeUrl}" data-analytics-event="urban_tariff_card_click" data-analytics-product="urban" data-analytics-location="story_step" data-analytics-step-number="${number}" data-analytics-step-title="${step.name}" data-analytics-tariff-name="${tariff.name}">
              <strong>${tariff.name}</strong>
              <span>${tariff.price}</span>
              <p>${tariff.limit}</p>
            </a>
          `,
        )
        .join("")}</div>`
    : "";
  const primaryAttrs = step.final
    ? `href="${subscribeUrl}" data-analytics-event="urban_apply_click" data-analytics-product="urban" data-analytics-location="story_step" data-analytics-step-number="${number}" data-analytics-step-title="${step.name}"`
    : `href="#${nextId}" data-next-step="${nextId}" data-analytics-event="urban_story_cta_click" data-analytics-product="urban" data-analytics-location="story_step" data-analytics-step-number="${number}" data-analytics-step-title="${step.name}" data-analytics-button-text="${step.cta}"`;

  return `
    <section class="urban-story-step urban-step-${step.variant}" id="urban-step-${number}" aria-labelledby="urban-step-title-${number}">
      <div class="urban-step-shell">
        <div class="urban-step-visual" aria-hidden="true">
          ${visual}
        </div>
        <div class="urban-step-copy">
          <h1 id="urban-step-title-${number}">${step.title}</h1>
          <p class="urban-lead">${step.text}</p>
          ${bullets}
          ${tariffs}
          <div class="urban-step-actions">
            <a class="urban-primary-cta" ${primaryAttrs}>${step.cta}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function createUrbanImageVisual(step) {
  return `
    <picture>
      <source srcset="${step.image}" type="image/webp" />
      <img src="${step.fallback || step.image}" alt="" loading="eager" />
    </picture>
  `;
}

function createFaqSection() {
  return `
    <section class="urban-faq-section" id="faq" aria-labelledby="faqTitle">
      <h2 id="faqTitle">FAQ по Freedom Urban</h2>
      <div class="faq-list">
        ${urbanFaq
          .map(
            (item) => `
              <article class="faq-item">
                <button class="faq-question" type="button" aria-expanded="false">
                  <span>${item.question}</span>
                  <span class="faq-icon" aria-hidden="true"></span>
                </button>
                <div class="faq-answer">${item.answer}</div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function bindUrbanInteractions() {
  document.querySelectorAll("[data-next-step]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.getElementById(link.dataset.nextStep);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

document.addEventListener("DOMContentLoaded", renderUrbanPage);
document.addEventListener("saqta:languagechange", renderUrbanPage);
