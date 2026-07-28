const subscribeUrl = "https://ffin.life/ru/individuals/freedom-urban/product?policyType=URS";
const urbanKidDocumentUrl = "./assets/documents/%D0%9A%D0%98%D0%94_Freedom_Urban.pdf";

const urbanProductHero = {
  title: "Freedom Urban",
  text: "Защита для ежедневных поездок на автобусе, метро, трамвае, троллейбусе и такси.",
  cta: "Оформить",
  storyCta: "Посмотреть историю",
  image: "./assets/urban-product-hero-transport.webp",
  fallback: "./assets/urban-product-hero-transport.png",
};

const urbanProductHeroKz = {
  title: "Freedom Urban",
  text: "Автобус, метро, трамвай, троллейбус және таксимен күнделікті сапарларға арналған қорғаныс.",
  cta: "Рәсімдеу",
  storyCta: "Оқиғаны көру",
  image: "./assets/urban-product-hero-transport.webp",
  fallback: "./assets/urban-product-hero-transport.png",
};

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
    title: "Внезапные расходы",
    text:
      "После несчастного случая могут понадобиться осмотр врача, снимок, лекарства, перевязки, такси до клиники, повторные приемы или госпитализация. Даже если травма кажется небольшой, сумма может оказаться неприятной именно потому, что ее не закладывали в бюджет.",
    cta: "Только ли о себе нужно думать?",
    image: "./assets/urban-clinic-expenses-kazakh-man.webp",
    fallback: "./assets/urban-clinic-expenses-kazakh-man.png",
    variant: "expense",
  },
  {
    name: "Семейная защита",
    title: "Забота о детях",
    text:
      "Ребенок едет в школу, студент - на учебу, родитель - по делам. Вы не можете быть рядом в каждом автобусе и каждом метро, но можете заранее защитить городской маршрут. Freedom Urban помогает семье спокойнее относиться к ежедневным поездкам.",
    cta: "Как работает Freedom Urban?",
    image: "./assets/urban-family-teen-route.webp",
    fallback: "./assets/urban-family-teen-route.png",
    variant: "family",
  },
  {
    name: "Решение Freedom Urban",
    title: "Защищает поездки на общественном транспорте",
    text:
      "Freedom Urban - страховая программа на случай несчастного случая во время поездки на общественном транспорте по Казахстану. Полис оформляется онлайн, а при страховом случае помогает получить выплату по условиям выбранного тарифа.",
    cta: "Посмотреть тарифы",
    image: "./assets/urban-protected-bus-shields.webp",
    fallback: "./assets/urban-protected-bus-shields.png",
    variant: "solution",
  },
  {
    name: "Тарифы",
    title: "Выберите защиту",
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

const urbanStepsKz = [
  {
    name: "Әдеттегі сапар",
    title: "Қаладағы әдеттегі сапар жоспардан тыс өтуі мүмкін",
    text:
      "Автобус, метро, троллейбус, трамвай немесе такси - күнделікті өмірдің бір бөлігі. Біз көлікке отырып, жұмыс, оқу, шаруалар және отбасы туралы ойлаймыз. Бірақ жолда жолаушы бәрін бақылап отыра алмайды: кенет тежелу, салондағы адам көптігі немесе құлау әдеттегі маршрутты тез арада мәселеге айналдыруы мүмкін.",
    cta: "Қандай шығындар пайда болады?",
    image: "./assets/urban-route-bus-risk-kazakh.webp",
    fallback: "./assets/urban-route-bus-risk-kazakh.png",
    variant: "route",
  },
  {
    name: "Жарақаттан кейінгі шығындар",
    title: "Күтпеген шығындар",
    text:
      "Жазатайым оқиғадан кейін дәрігердің қарауы, рентген немесе басқа тексеріс, дәрі-дәрмек, таңғыштар, клиникаға такси, қайта қабылдау немесе ауруханаға жату қажет болуы мүмкін. Жарақат жеңіл көрінсе де, бұл шығын бюджетте алдын ала жоспарланбағандықтан, сома жағымсыз болуы мүмкін.",
    cta: "Тек өзіңіз туралы ғана ойлау керек пе?",
    image: "./assets/urban-clinic-expenses-kazakh-man.webp",
    fallback: "./assets/urban-clinic-expenses-kazakh-man.png",
    variant: "expense",
  },
  {
    name: "Отбасылық қорғаныс",
    title: "Балаларға қамқорлық",
    text:
      "Бала мектепке, студент оқуға, ата-ана шаруамен қала ішінде жүреді. Сіз әр автобуста немесе әр метрода жанында бола алмайсыз, бірақ қалалық маршрутты алдын ала қорғай аласыз. Freedom Urban отбасының күнделікті сапарларға сабырлырақ қарауына көмектеседі.",
    cta: "Freedom Urban қалай жұмыс істейді?",
    image: "./assets/urban-family-teen-route.webp",
    fallback: "./assets/urban-family-teen-route.png",
    variant: "family",
  },
  {
    name: "Freedom Urban шешімі",
    title: "Қоғамдық көліктегі сапарларды қорғайды",
    text:
      "Freedom Urban - Қазақстан бойынша қоғамдық көлікте жүрген кезде жазатайым оқиғаға арналған сақтандыру бағдарламасы. Полис онлайн рәсімделеді, ал сақтандыру жағдайы болғанда таңдалған тариф шарттары бойынша төлем алуға көмектеседі.",
    cta: "Тарифтерді көру",
    image: "./assets/urban-protected-bus-shields.webp",
    fallback: "./assets/urban-protected-bus-shields.png",
    variant: "solution",
  },
  {
    name: "Тарифтер",
    title: "Қорғанысты таңдаңыз",
    text:
      "Freedom Urban айына 500 ₸ бастап: сапар жазатайым оқиғамен аяқталса, шығындарға алдын ала дайындалуға көмектесетін шағын тұрақты сома.",
    cta: "Рәсімдеу",
    image: "./assets/home-v2-urban.webp",
    fallback: "./assets/home-v2-urban.png",
    tariffs: [
      {
        name: "Start",
        price: "жылына 6 000 ₸",
        limit: "1 000 000 ₸ сомасына қорғаныс",
      },
      {
        name: "Optimum",
        price: "жылына 12 000 ₸",
        limit: "2 000 000 ₸ сомасына қорғаныс",
      },
      {
        name: "Pro",
        price: "жылына 24 000 ₸",
        limit: "4 000 000 ₸ сомасына қорғаныс",
      },
    ],
    bullets: [
      "тарифті таңдаңыз",
      "деректерді онлайн толтырыңыз",
      "картамен төлеңіз",
      "полис email-ға келеді",
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

const urbanFaqKz = [
  {
    question: "Freedom Urban деген не?",
    answer:
      "Freedom Urban - қоғамдық көлік жолаушыларын жазатайым оқиғалардан ерікті онлайн сақтандыру бағдарламасы. Қорғаныс Қазақстан бойынша қоғамдық көліктегі сапарлар кезінде әрекет етеді.",
  },
  {
    question: "Қорғаныс қашан әрекет етеді?",
    answer:
      "Қорғаныс сақтандырылған адам қоғамдық көлікке кірген сәттен бастап маршруттың соңғы нүктесінде шыққан сәтке дейін әрекет етеді. Оған міну, көлікте болу және түсу кіреді.",
  },
  {
    question: "Сақтандыру жағдайына не жатады?",
    answer:
      "Сақтандыру жағдайларына қоғамдық көліктегі сапар кезінде алынған дене жарақатына байланысты қайтыс болу, мүгедектік белгіленуі, ауруханаға жату және медициналық шығындар жатады.",
  },
  {
    question: "Сақтандыру қай жерде әрекет етеді?",
    answer: "Сақтандыру шарты Қазақстан Республикасының аумағында әрекет етеді.",
  },
  {
    question: "Полисті басқа адамға рәсімдеуге бола ма?",
    answer:
      "Иә. Сақтанушы мен сақтандырылған адам әртүрлі тұлғалар болуы мүмкін. Рәсімдеу кезінде сақтандырылатын адамның деректерін көрсету қажет.",
  },
  {
    question: "Сақтандыру жағдайы кезінде қандай құжаттар қажет?",
    answer:
      "Әдетте өтініш, жеке куәлік, ауру тарихынан үзінді, көліктегі сақтандыру жағдайы туралы акт, медициналық шығындар бойынша құжаттар және сапарды растайтын билет немесе түбіртек қажет.",
  },
];

const urbanUi = {
  ru: {
    faqTitle: "FAQ по Freedom Urban",
    stepLabel: "Шаг",
    stepOf: "из",
    pageTitle: "Freedom Urban | Saqta Market",
  },
  kz: {
    faqTitle: "Freedom Urban бойынша FAQ",
    stepLabel: "Қадам",
    stepOf: "/",
    pageTitle: "Freedom Urban | Saqta Market",
  },
};

const urbanRoot = document.getElementById("urbanRoot");

function getCurrentLang() {
  return localStorage.getItem("saqta-lang") || "ru";
}

function getUrbanProductHero() {
  return getCurrentLang() === "kz" ? urbanProductHeroKz : urbanProductHero;
}

function getUrbanSteps() {
  return getCurrentLang() === "kz" ? urbanStepsKz : urbanSteps;
}

function getUrbanFaqItems() {
  return getCurrentLang() === "kz" ? urbanFaqKz : urbanFaq;
}

function getUrbanUi() {
  return urbanUi[getCurrentLang()] || urbanUi.ru;
}

function renderUrbanPage() {
  if (!urbanRoot) return;
  const lang = getCurrentLang();
  const steps = getUrbanSteps();
  const ui = getUrbanUi();
  document.documentElement.lang = lang === "kz" ? "kk" : "ru";
  document.body.dataset.lang = lang;
  document.title = ui.pageTitle;
  urbanRoot.innerHTML = `
    ${createUrbanProductHero(getUrbanProductHero())}
    <div class="urban-flow">
      ${steps.map((step, index) => createUrbanStep(step, index, steps.length)).join("")}
    </div>
    ${createFaqSection(ui.faqTitle, getUrbanFaqItems())}
  `;
  bindUrbanInteractions();
}

function createUrbanProductHero(hero) {
  return `
    <section class="urban-product-hero" aria-labelledby="urban-product-hero-title">
      <div class="urban-product-hero-copy">
        <h1 id="urban-product-hero-title">${hero.title}</h1>
        <p>${hero.text}</p>
        <div class="urban-product-hero-actions">
          <a
            class="urban-primary-cta"
            href="${subscribeUrl}"
            data-analytics-event="urban_apply_click"
            data-analytics-product="urban"
            data-analytics-location="product_hero"
            data-analytics-button-text="${hero.cta}"
          >${hero.cta}</a>
          <a
            class="urban-secondary-cta"
            href="#urban-step-1"
            data-analytics-event="urban_story_cta_click"
            data-analytics-product="urban"
            data-analytics-location="product_hero"
            data-analytics-button-text="${hero.storyCta}"
          >${hero.storyCta}</a>
        </div>
      </div>
      <div class="urban-product-hero-visual" aria-hidden="true">
        <picture>
          <source srcset="${hero.image}" type="image/webp" />
          <img src="${hero.fallback}" alt="" loading="eager" />
        </picture>
      </div>
    </section>
  `;
}

function createUrbanStep(step, index, total) {
  const number = index + 1;
  const ui = getUrbanUi();
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
  const kidDocument = step.final ? createUrbanKidDocumentLink() : "";

  return `
    <section class="urban-story-step urban-step-${step.variant}" id="urban-step-${number}" aria-labelledby="urban-step-title-${number}">
      <div class="urban-step-shell">
        <div class="urban-step-visual" aria-hidden="true">
          ${visual}
        </div>
        <div class="urban-step-copy">
          <p class="urban-step-counter" aria-label="${ui.stepLabel} ${number} ${ui.stepOf} ${total}">
            <span>${ui.stepLabel}</span>
            <strong>${number}</strong>
            <span>${ui.stepOf} ${total}</span>
          </p>
          <h1 id="urban-step-title-${number}">${step.title}</h1>
          <p class="urban-lead">${step.text}</p>
          ${bullets}
          ${tariffs}
          <div class="urban-step-actions">
            <a class="urban-primary-cta" ${primaryAttrs}>${step.cta}</a>
          </div>
          ${kidDocument}
        </div>
      </div>
    </section>
  `;
}

function createUrbanKidDocumentLink() {
  const label = getCurrentLang() === "kz" ? "Негізгі ақпараттық құжат" : "Ключевой информационный документ";
  return `
    <p class="urban-kid-document">
      <a href="${urbanKidDocumentUrl}" target="_blank" rel="noopener" data-analytics-event="urban_kid_document_click" data-analytics-product="urban" data-analytics-location="story_final">
        ${label}
      </a>
    </p>
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

function createFaqSection(title, items) {
  return `
    <section class="urban-faq-section" id="faq" aria-labelledby="faqTitle">
      <h2 id="faqTitle">${title}</h2>
      <div class="faq-list">
        ${items
          .map(
            (item) => `
              <article class="faq-item">
                <button class="faq-question" type="button" aria-expanded="false">
                  <span>${item.question}</span>
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

function bindUrbanFaqInteractions() {
  if (window.__urbanFaqInteractionsBound) return;
  window.__urbanFaqInteractionsBound = true;

  document.addEventListener(
    "click",
    (event) => {
      const question = event.target.closest(".urban-faq-section .faq-question");
      if (!question) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      const item = question.closest(".faq-item");
      if (!item) return;
      const isOpen = item.classList.toggle("open");
      question.setAttribute("aria-expanded", String(isOpen));
      if (isOpen) {
        window.dataLayer?.push({
          event: "faq_open",
          product: document.body.dataset.product || "urban",
          question: question.textContent.trim(),
          language: getCurrentLang(),
        });
      }
    },
    true,
  );

  document.addEventListener(
    "keydown",
    (event) => {
      const question = event.target.closest(".urban-faq-section .faq-question");
      if (!question) return;
      if (event.key !== "Enter" && event.key !== " ") return;

      event.preventDefault();
      event.stopImmediatePropagation();
      const item = question.closest(".faq-item");
      if (!item) return;
      const isOpen = item.classList.toggle("open");
      question.setAttribute("aria-expanded", String(isOpen));
      if (isOpen) {
        window.dataLayer?.push({
          event: "faq_open",
          product: document.body.dataset.product || "urban",
          question: question.textContent.trim(),
          language: getCurrentLang(),
        });
      }
    },
    true,
  );
}

function bindUrbanInteractions() {
  bindUrbanFaqInteractions();

  document.querySelectorAll("[data-next-step]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.getElementById(link.dataset.nextStep);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

}

document.addEventListener("DOMContentLoaded", renderUrbanPage);
document.addEventListener("saqta:languagechange", renderUrbanPage);
