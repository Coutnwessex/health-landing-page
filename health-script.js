const subscribeUrl =
  "https://ffin.life/ru/individuals/freedom-health/subscribe-health?source=OHPR";

const healthTariffs = {
  plans: ["Standard 2", "Standard 1", "Silver", "Platinum"],
  prices: [
    {
      label: "Ежемесячно",
      values: ["25,30 $", "29,37 $", "44,57 $", "51,84 $"],
    },
    {
      label: "Ежеквартально",
      values: ["75,89 $", "88,12 $", "133,71 $", "155,51 $"],
    },
    {
      label: "Раз в полгода",
      values: ["151,78 $", "176,25 $", "267,43 $", "311,02 $"],
    },
    {
      label: "Единоразово",
      values: ["263,97 $", "306,52 $", "465,09 $", "540,91 $"],
    },
  ],
  coverage: [
    {
      label: "Страховой случай",
      values: [
        "Злокачественные заболевания",
        "Злокачественные заболевания; хирургия; кардио/нейрохирургия",
        "Злокачественные заболевания; хирургия; кардио/нейрохирургия; трансплантация",
        "Злокачественные заболевания; хирургия; кардио/нейрохирургия; трансплантация; трансплантация костного мозга для детей до 18 лет",
      ],
    },
    {
      label: "Период ожидания",
      values: ["3 месяца*", "3 месяца*", "3 месяца*", "3 месяца*"],
    },
    {
      label: "Период ожидания по риску «Трансплантация»",
      values: ["6 месяцев", "6 месяцев", "6 месяцев", "6 месяцев"],
    },
    {
      label: "Страховая сумма",
      values: ["150 000 $", "150 000 $", "150 000 $", "150 000 $"],
    },
    {
      label: "Пожизненный лимит",
      values: ["1 000 000 $", "1 000 000 $", "1 000 000 $", "1 000 000 $"],
    },
    {
      label: "Территория лечения",
      values: [
        "Казахстан, Турция, Израиль, Южная Корея, Испания",
        "Казахстан, Турция, Израиль, Южная Корея, Испания",
        "Казахстан, Турция, Израиль, Южная Корея, Испания",
        "Казахстан, Турция, Израиль, Южная Корея, Испания",
      ],
    },
    {
      label: "Перелет и проживание",
      values: ["2 человека", "2 человека", "2 человека", "2 человека"],
    },
    {
      label: "Реабилитация",
      values: ["-", "-", "Включена", "Включена"],
    },
    {
      label: "Второе медицинское мнение",
      values: ["Включено", "Включено", "Включено", "Включено"],
    },
  ],
};

const patientStories = [
  {
    person: "Мужчина, возраст не указан",
    diagnosis: "Аденома щитовидной железы",
    before:
      "Изначально рекомендовали полное удаление органа и пожизненный прием гормональных препаратов.",
    support:
      "Страховая программа Freedom Health подобрала медицинский центр и организовала лечение в Израиле.",
    result:
      "Стоимость лечения составила $40 500. Пациент сохранил орган и избежал пожизненной гормонозаместительной терапии.",
  },
  {
    person: "Мужчина, 37 лет",
    diagnosis: "Рак головного мозга",
    before:
      "Первоначально пациенту рекомендовали стандартную схему без молекулярно-генетического анализа опухоли.",
    support:
      "Страховая программа Freedom Health организовала диагностику в специализированных нейроонкологических центрах и помогла подобрать таргетную терапию.",
    result:
      "Индивидуальная схема лечения помогла улучшить прогноз и качество жизни пациента.",
  },
  {
    person: "Женщина, 42 года",
    diagnosis: "Рак молочной железы 1-й стадии",
    before:
      "Пациентке рекомендовали мастэктомию без возможности одномоментной реконструкции.",
    support:
      "Страховая программа Freedom Health организовала диагностику и генетическое тестирование в нескольких медицинских центрах.",
    result:
      "Удалось провести секторальную резекцию с одномоментной пластикой, вылечить заболевание и сохранить качество жизни.",
  },
  {
    person: "Мужчина, 61 год",
    diagnosis: "Рак предстательной железы",
    before:
      "Рекомендованная операция несла высокий риск потери эректильной функции.",
    support:
      "Страховая программа Freedom Health организовала очные консультации в 3 медицинских центрах и робот-ассистированную операцию Da Vinci.",
    result:
      "Пациент сохранил функциональность органа, программа покрыла операцию стоимостью около $9 500.",
  },
  {
    person: "Женщина, 44 года",
    diagnosis: "Рак шейки матки",
    before:
      "Пациентка планировала лечение за рубежом с длительной организацией визита, диагностикой, операцией и ограничениями на перелет.",
    support:
      "Страховая программа Freedom Health организовала диагностику и операцию у одного из ведущих врачей в течение 3 дней.",
    result:
      "Пациентка получила качественную помощь и вернулась к нормальному образу жизни в течение 1 недели.",
  },
  {
    person: "Женщина, 65 лет",
    diagnosis: "Саркома мягких тканей с тромботическими осложнениями",
    before:
      "Из-за тромбоза начальные рекомендации были на удаление конечности.",
    support:
      "Страховая программа Freedom Health подобрала специализированный центр, врача и подключила реабилитологов.",
    result:
      "Лечение с реабилитацией стоило $8 000. Удалось вылечить заболевание, сохранить конечность и ее функциональность.",
  },
];

const healthFaq = [
  {
    question: "Что такое Freedom Health?",
    answer:
      "Freedom Health — программа добровольного международного медицинского страхования, которая помогает организовать и оплатить лечение критических заболеваний за рубежом. Страховщик координирует процесс: от поиска клиники до оплаты лечения медицинскому учреждению.",
  },
  {
    question: "Что означает период ожидания 3 месяца?",
    answer:
      "Период ожидания — это первые 3 месяца после оформления полиса, когда страховая защита по критическим заболеваниям еще не действует. Если заболевание возникло или было диагностировано в этот период, оно не будет считаться страховым случаем по договору. Такой период ожидания — стандартная практика для страхования критических заболеваний. Он нужен, чтобы страхование работало как защита от будущего риска, а не как оплата уже существующей или уже начавшейся болезни. После окончания периода ожидания полис начинает работать в полную силу: если страховой случай наступит по условиям договора, страховщик рассмотрит документы и организует помощь в рамках выбранной программы.",
  },
  {
    question: "Кто может оформить полис?",
    answer:
      "Страхователем по Freedom Health может быть физическое лицо. По умолчанию страхуются лица в возрасте до 55 лет на дату заключения или пролонгации договора, если иное не указано в полисе.",
  },
  {
    question: "Кто не может быть застрахован?",
    answer:
      "На страхование не принимаются инвалиды I или II группы, инвалиды с детства, лица 55 лет и старше, если иное не предусмотрено, лица на учете в профильных диспансерах, а также госпитализированные на момент заключения договора.",
  },
  {
    question: "Какие программы доступны?",
    answer:
      "Доступны программы Platinum, Silver, Standard 1 и Standard 2. Они отличаются набором рисков и сервисов: онкология, кардиохирургия, нейрохирургия, трансплантация, реабилитация и второе медицинское мнение зависят от выбранной программы.",
  },
  {
    question: "Какова страховая сумма?",
    answer:
      "По ключевым рискам предусмотрено покрытие до 150 000 USD в год, а пожизненный общий лимит составляет 1 000 000 USD. Для отдельных программ и рисков действуют специальные лимиты по условиям договора.",
  },
  {
    question: "Что считается страховым случаем?",
    answer:
      "Страховым случаем является критическое заболевание, диагностированное в период действия договора, при котором застрахованный обратился к страховщику для организации медицинских и иных услуг по выбранной программе.",
  },
  {
    question: "Какие заболевания покрываются?",
    answer:
      "В зависимости от программы покрываются злокачественные новообразования, кардиохирургия, нейрохирургия, трансплантация органов, трансплантация костного мозга для детей, реабилитация и второе экспертное медицинское мнение.",
  },
  {
    question: "Что не является страховым случаем?",
    answer:
      "Не покрываются заболевания вне выбранной программы, заболевания до начала страхования, случаи в период ожидания, ВИЧ/СПИД, злоупотребление алкоголем или наркотиками, умышленный вред себе, экстремальный спорт и другие исключения по договору.",
  },
  {
    question: "Что такое период ожидания?",
    answer:
      "Период ожидания — срок с начала действия договора, в течение которого страховщик освобожден от выплат. Для большинства рисков он составляет 90 дней, для трансплантации — 180 дней. При непрерывной пролонгации период ожидания повторно не применяется.",
  },
  {
    question: "В каких странах организуется лечение?",
    answer:
      "Основные страны лечения: Турция, Израиль, Южная Корея и Испания. В отдельных случаях лечение возможно в Казахстане, Европе, США или по всему миру для риска трансплантации органов — в зависимости от программы и условий.",
  },
  {
    question: "Что оплачивает страховщик при наступлении случая?",
    answer:
      "В зависимости от программы страховщик организует и оплачивает медицинское лечение, диагностику, операции, лекарства, перелет, проживание, трансфер, перевод, помощь с визой и другие услуги в пределах условий договора.",
  },
  {
    question: "Как сообщить о страховом случае?",
    answer:
      "Нужно незамедлительно уведомить сервисную компанию и/или страховщика через личный кабинет или на бумажном носителе, указав ФИО, номер договора, местонахождение, контактный телефон и обстоятельства случая.",
  },
  {
    question: "Какие документы нужны для подтверждения заболевания?",
    answer:
      "Понадобятся медицинские выписки, результаты исследований, заключения профильных специалистов и копия амбулаторной карты. Точный перечень зависит от заболевания и требований страховщика.",
  },
  {
    question: "В какие сроки принимается решение?",
    answer:
      "Решение принимается в течение 10 рабочих дней с даты получения полного пакета документов. Если документов недостаточно, страховщик уведомляет об этом в течение 3 рабочих дней.",
  },
];

const slides = [
  {
    name: "Финансовый риск",
    title:
      "Диагноз может изменить не только здоровье. Он может изменить финансовую жизнь семьи.",
    text:
      "Критическая болезнь часто приходит не по расписанию. В этот момент семье нужны не только врачи и время, но и деньги: на лечение, обследования, поездки, восстановление и обычную жизнь рядом с лечением.",
    cta: "Что происходит дальше?",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-risk",
    color: "#111827",
    accent: "#64748b",
    bgA: "#e6eef2",
    bgB: "#c9d6df",
    bgC: "#eef4f6",
  },
  {
    name: "Вопрос денег",
    title: "После диагноза начинается второй вопрос: где срочно взять деньги?",
    text:
      "Когда расходы становятся большими, у семьи обычно остается несколько вариантов. Продажа своих главных приобретений машины, квартиры или бизнеса. То, ради чего люди тяжело работали годами, и хотели передать своим детям может оказаться под угрозой из-за одного внезапного диагноза.",
    cta: "Что делать если и это не помогло?",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-loss",
    color: "#3f1d5f",
    accent: "#8b5cf6",
    bgA: "#f1e9ff",
    bgB: "#d7c5f2",
    bgC: "#f7efff",
  },
  {
    name: "Долги семьи",
    title: "Кредиты, берут на себя все члены семьи, ради спасения одного.",
    text:
      "Теперь все члены семь в долгах, а другие родственники не всегда могут помочь крупной суммой.",
    cta: "Можно ли подготовиться заранее?",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-debt",
    color: "#8f2f2f",
    accent: "#f97316",
    bgA: "#fff0e5",
    bgB: "#f4c4ad",
    bgC: "#fbe8e4",
  },
  {
    name: "Готовность заранее",
    title: "Критическую болезнь нельзя запланировать. Но финансовую готовность - можно.",
    text:
      "Freedom Health нужен не потому, что вы ждете болезнь. Он нужен, чтобы заранее превратить крупный финансовый риск в совсем небольшой регулярный платеж в обмен на уверенность.",
    cta: "Как это работает?",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-ready",
    color: "#0f4f7a",
    accent: "#38bdf8",
    bgA: "#e2f3ff",
    bgB: "#b8ddf3",
    bgC: "#eef9ff",
  },
  {
    name: "Решение Freedom Health",
    title: "Freedom Health - страховая программа на случай критической болезни",
    text:
      "Вы оформляете договор и платите регулярный взнос. При наступлении страхового случая Freedom рассматривает документы и организует лечение в лучших клиниках мира. Личный координатор берет на себя все: запись к врачу, оформление виз, перелет, проживание и переводчика. Вы просто лечитесь.",
    benefits: [
      "покрытие до $150 000 в год;",
      "пожизненный лимит $1 000 000;",
      "800 клиник-партнеров в Казахстане, Турции, Израиле, Южной Корее и Испании.",
    ],
    micro:
      "Saqta Market помогает разобраться в продукте и перейти к оформлению. Условия, лимиты и исключения определяются договором страхования.",
    cta: "Почему это доступно?",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-solution",
    color: "#1375a8",
    accent: "#22d3ee",
    bgA: "#e0f7fb",
    bgB: "#b4edf5",
    bgC: "#f0fbfd",
  },
  {
    name: "Доступная защита",
    title: "От $25 в месяц - чтобы не искать крупную сумму в самый тяжелый момент",
    text:
      "$25 в месяц - это не цена лечения. Эта цена сохранит для Вас и Вашей семьи все, что Вы заработали тяжелым трудом и избавит членов семьи от новых кредитов.",
    cta: "А это действительно работает?",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-price",
    color: "#0d9488",
    accent: "#5eead4",
    bgA: "#dffbf4",
    bgB: "#aeeadd",
    bgC: "#f2fffb",
  },
  {
    name: "Истории пациентов",
    title: "Freedom Health уже помогает людям",
    text:
      "В этих историях страховая программа Freedom Health делает то, что важно при критической болезни: помогает с выбором клиники, диагностикой, консультациями, лечением и восстановлением по условиям программы.",
    cta: "Что я получаю?",
    reviews: true,
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-stories",
    color: "#11856f",
    accent: "#5eead4",
    bgA: "#e3fbf4",
    bgB: "#b4eadc",
    bgC: "#f3fffb",
  },
  {
    name: "Процветание Вашей семьи",
    title: "Ваша семья не должна терять, а должна процветать",
    text:
      "Freedom Health помогает заранее подготовиться к большим расходам при критической болезни. Исключить риск нельзя, но можно им управлять.",
    benefits: [
      "от $25 в месяц;",
      "сохранение всех жизненных накоплений в семье;",
      "процветание следующих поколений вашей семьи без долгов;",
      "защита при критических заболеваниях по условиям договора;",
      "оформление онлайн.",
    ],
    cta: "Оформить",
    compareTariffs: true,
    legal:
      "Перед оформлением внимательно ознакомьтесь с условиями договора, лимитами, исключениями и порядком выплат.",
    image:
      "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-final",
    color: "#16a34a",
    accent: "#86efac",
    bgA: "#dcfce7",
    bgB: "#b8f4c9",
    bgC: "#f4fff7",
    final: true,
  },
];

const root = document.getElementById("storyRoot");
const stepLabel = document.getElementById("stepLabel");
const progressFill = document.getElementById("progressFill");
const headerCta = document.querySelector(".header-cta");
const brandMark = document.querySelector(".brand-mark");

root.innerHTML = slides.map(createSection).join("");
root.insertAdjacentHTML("afterend", createFaqSection("FAQ по Freedom Health", healthFaq));
document.body.insertAdjacentHTML("beforeend", createTariffDialog());

const sections = [...document.querySelectorAll(".story-section")];
const reviewCarousels = [...document.querySelectorAll("[data-review-carousel]")];
const tariffDialog = document.getElementById("tariffDialog");
const tariffOpenButtons = [...document.querySelectorAll("[data-tariffs-open]")];
const tariffCloseButtons = [...document.querySelectorAll("[data-tariffs-close]")];

tariffOpenButtons.forEach((button) => {
  button.addEventListener("click", () => openTariffDialog());
});

tariffCloseButtons.forEach((button) => {
  button.addEventListener("click", () => closeTariffDialog());
});

tariffDialog.addEventListener("click", (event) => {
  if (event.target === tariffDialog) {
    closeTariffDialog();
  }
});

sections.forEach((section, index) => {
  const nextButton = section.querySelector("[data-next]");
  const backButton = section.querySelector("[data-back]");

  nextButton.addEventListener("click", () => {
    if (slides[index].final) {
      window.location.href = subscribeUrl;
      return;
    }

    sections[index + 1].scrollIntoView({ behavior: "smooth", block: "start" });
  });

  if (backButton) {
    backButton.addEventListener("click", () => {
      sections[index - 1].scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});

reviewCarousels.forEach((carousel) => {
  const prevButton = carousel.querySelector("[data-review-prev]");
  const nextButton = carousel.querySelector("[data-review-next]");

  prevButton.addEventListener("click", () => {
    const currentIndex = Number(carousel.dataset.activeIndex || 0);
    updateReviewCarousel(carousel, currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    const currentIndex = Number(carousel.dataset.activeIndex || 0);
    updateReviewCarousel(carousel, currentIndex + 1);
  });

  updateReviewCarousel(carousel, 0);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const index = Number(entry.target.dataset.index);
      activateSection(index);
    });
  },
  { threshold: 0.58 },
);

sections.forEach((section) => observer.observe(section));

const initialSlide = Number.parseInt(new URLSearchParams(window.location.search).get("slide"), 10);
if (Number.isInteger(initialSlide) && initialSlide >= 1 && initialSlide <= slides.length) {
  window.setTimeout(() => {
    window.scrollTo({ top: sections[initialSlide - 1].offsetTop, behavior: "auto" });
    activateSection(initialSlide - 1);
  }, 0);
} else {
  activateSection(0);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && tariffDialog.classList.contains("open")) {
    closeTariffDialog();
    return;
  }

  if (event.target.closest("button, a, .faq-section")) {
    return;
  }

  const activeIndex = sections.findIndex((section) => section.classList.contains("active"));

  if ((event.key === "ArrowDown" || event.key === "Enter") && activeIndex < sections.length - 1) {
    sections[activeIndex + 1].scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (event.key === "ArrowUp" && activeIndex > 0) {
    sections[activeIndex - 1].scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

function createSection(slide, index) {
  const number = String(index + 1).padStart(2, "0");
  const benefits = slide.benefits
    ? `<ul class="benefit-list">${slide.benefits.map((item) => `<li>${item}</li>`).join("")}</ul>`
    : "";
  const micro = slide.micro ? `<p class="micro-text">${slide.micro}</p>` : "";
  const reviews = slide.reviews ? createReviewCarousel() : "";
  const compareButton = slide.compareTariffs
    ? `<button class="tariff-button" type="button" data-tariffs-open>Сравнить тарифы</button>`
    : "";
  const backButton =
    index > 0
      ? `<button class="ghost-button" type="button" data-back>Назад</button>`
      : `<button class="ghost-button hidden-mobile" type="button" disabled>Назад</button>`;
  return `
    <section
      class="story-section ${slide.theme} ${slide.reviews ? "has-reviews" : ""}"
      id="section-${index + 1}"
      data-index="${index}"
      style="--blue: ${slide.color}; --teal: ${slide.accent}; --bg-a: ${slide.bgA}; --bg-b: ${slide.bgB}; --bg-c: ${slide.bgC};"
    >
      <div class="section-inner">
        <aside class="visual-panel" aria-hidden="true">
          <div class="visual-image" style="background-image: url('${slide.image}')"></div>
          <div class="visual-shade"></div>
          <div class="visual-card">
            <strong>${number}</strong>
            <span>${slide.name}</span>
          </div>
        </aside>
        <article class="copy-panel">
          <div class="story-copy">
            <h1>${slide.title}</h1>
            <p class="story-text">${slide.text}</p>
            ${micro}
            ${benefits}
            ${reviews}
          </div>
          <div class="section-actions">
            ${backButton}
            ${compareButton}
            <button class="primary-button" type="button" data-next style="background-color: ${slide.color}">
              <span>${slide.cta}</span>
            </button>
          </div>
          <p class="legal-note">${
            slide.legal || "Условия, лимиты и исключения определяются договором страхования."
          }</p>
        </article>
      </div>
    </section>
  `;
}

function createFaqSection(title, items) {
  return `
    <section class="faq-section" id="faq">
      <div class="faq-container">
        <div class="faq-heading">
          <p>Справочные материалы</p>
          <h2>${title}</h2>
        </div>
        <div class="faq-list">
          ${items
            .map(
              (item) => `
                <details class="faq-item">
                  <summary>${item.question}</summary>
                  <p>${item.answer}</p>
                </details>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function createReviewCarousel() {
  return `
    <div class="review-carousel" data-review-carousel data-active-index="0">
      <div class="review-track">
        ${patientStories
          .map(
            (story, index) => `
              <article class="review-card ${index === 0 ? "active" : ""}" data-review-card>
                <p class="review-meta">${story.person}</p>
                <h3>${story.diagnosis}</h3>
                <dl>
                  <div>
                    <dt>До обращения</dt>
                    <dd>${story.before}</dd>
                  </div>
                  <div>
                    <dt>Что сделала программа</dt>
                    <dd>${story.support}</dd>
                  </div>
                  <div>
                    <dt>Результат</dt>
                    <dd>${story.result}</dd>
                  </div>
                </dl>
              </article>
            `,
          )
          .join("")}
      </div>
      <div class="review-controls">
        <button class="review-arrow" type="button" data-review-prev aria-label="Предыдущая история">Назад</button>
        <span data-review-status>1 из ${patientStories.length}</span>
        <button class="review-arrow" type="button" data-review-next aria-label="Следующая история">Дальше</button>
      </div>
    </div>
  `;
}

function updateReviewCarousel(carousel, nextIndex) {
  const cards = [...carousel.querySelectorAll("[data-review-card]")];
  const normalizedIndex = (nextIndex + cards.length) % cards.length;
  const status = carousel.querySelector("[data-review-status]");

  carousel.dataset.activeIndex = String(normalizedIndex);

  cards.forEach((card, index) => {
    card.classList.toggle("active", index === normalizedIndex);
  });

  status.textContent = `${normalizedIndex + 1} из ${cards.length}`;
}

function createTariffDialog() {
  return `
    <div class="tariff-dialog" id="tariffDialog" aria-hidden="true">
      <div class="tariff-sheet" role="dialog" aria-modal="true" aria-labelledby="tariffTitle">
        <div class="tariff-sheet-header">
          <div>
            <p class="tariff-kicker">Freedom Health</p>
            <h2 id="tariffTitle">Полные тарифы</h2>
          </div>
          <button class="tariff-close" type="button" data-tariffs-close aria-label="Закрыть">×</button>
        </div>
        <div class="tariff-scroll">
          <section class="tariff-section">
            <h3>Стоимость</h3>
            ${createTariffTable(healthTariffs.prices)}
            <p class="tariff-note">
              При оплате стоимость тарифа, указанная в долларах США, пересчитывается в тенге по курсу Национального Банка Республики Казахстан на день оплаты.
            </p>
          </section>
          <section class="tariff-section">
            <h3>Что входит</h3>
            ${createTariffTable(healthTariffs.coverage)}
            <p class="tariff-note">
              * Страховка включается через 3 месяца после оформления — стандарт для всего рынка критического страхования. Как КАСКО, которое начинает действовать не сразу после покупки. После окончания периода ожидания полис работает в полную силу.
            </p>
            <p class="tariff-note">
              Кроме исключений, указанных в правилах страхования. Если лечение недоступно в указанных странах, порядок лечения определяется условиями программы.
            </p>
          </section>
        </div>
        <div class="tariff-footer">
          <a class="primary-button tariff-submit" href="${subscribeUrl}">Оформить</a>
        </div>
      </div>
    </div>
  `;
}

function createTariffTable(rows) {
  return `
    <div class="tariff-table-wrap">
      <table class="tariff-table">
        <thead>
          <tr>
            <th>Тариф</th>
            ${healthTariffs.plans.map((plan) => `<th>${plan}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <th>${row.label}</th>
                  ${row.values.map((value) => `<td>${value}</td>`).join("")}
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function openTariffDialog() {
  tariffDialog.classList.add("open");
  tariffDialog.setAttribute("aria-hidden", "false");
  document.body.classList.add("dialog-open");
  tariffDialog.querySelector("[data-tariffs-close]").focus();
}

function closeTariffDialog() {
  tariffDialog.classList.remove("open");
  tariffDialog.setAttribute("aria-hidden", "true");
  document.body.classList.remove("dialog-open");
}

function activateSection(index) {
  const slide = slides[index];
  sections.forEach((section, sectionIndex) => {
    section.classList.toggle("active", sectionIndex === index);
  });

  document.documentElement.style.setProperty("--blue", slide.color);
  document.documentElement.style.setProperty("--teal", slide.accent);
  headerCta.style.backgroundColor = slide.color;
  stepLabel.textContent = `Блок ${index + 1} из ${slides.length}`;
  progressFill.style.width = `${((index + 1) / slides.length) * 100}%`;
}
