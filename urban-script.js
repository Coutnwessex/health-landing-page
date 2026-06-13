const subscribeUrl = "https://ffin.life/ru/individuals/freedom-urban/product?policyType=URS";

const slides = [
  {
    name: "Обычный маршрут",
    title: "Обычная поездка по городу может закончиться неожиданными расходами",
    text:
      "Автобус, метро, троллейбус, трамвай или такси - это часть повседневной жизни. Мы садимся в транспорт, думаем о работе, учебе, делах и семье. Но даже короткая поездка может пойти не по плану.",
    cta: "Что может случиться в дороге?",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-route",
    color: "#1f2937",
    accent: "#64748b",
    bgA: "#e8eef3",
    bgB: "#c7d3dc",
    bgC: "#f4f7f9",
  },
  {
    name: "Риск в транспорте",
    title: "Резкое торможение, падение, удар о поручень - и день уже идет иначе",
    text:
      "В общественном транспорте не всегда все зависит от пассажира. Дорога, водитель, поток машин, толпа в салоне, резкая остановка - иногда достаточно одного момента, чтобы получить травму и оказаться перед расходами на лечение.",
    cta: "Какие расходы появляются?",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-risk",
    color: "#27204f",
    accent: "#7c3aed",
    bgA: "#e9e7f7",
    bgB: "#bfb7df",
    bgC: "#f4f1fb",
  },
  {
    name: "Расходы после травмы",
    title: "Травма в поездке - это не только боль. Это еще и деньги",
    text:
      "После несчастного случая могут понадобиться осмотр врача, снимок, лекарства, перевязки, такси до клиники, повторные приемы или даже госпитализация. Сумма может оказаться неприятной именно потому, что никто не закладывал ее в бюджет.",
    cta: "А если это случится с ребенком?",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-expense",
    color: "#92400e",
    accent: "#f97316",
    bgA: "#fff1e7",
    bgB: "#f4b48b",
    bgC: "#fff8f2",
  },
  {
    name: "Защита ребенка",
    title: "Ребенок тоже ездит по городу. И родителям спокойнее, когда защита уже есть",
    text:
      "Школа, кружки, секции, поездки с родителями или самостоятельно - городские маршруты становятся частью жизни ребенка. Freedom Urban можно воспринимать как простую защиту на случай непредвиденных расходов в таких поездках.",
    cta: "Как работает защита?",
    image:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-child",
    color: "#0f5f8c",
    accent: "#38bdf8",
    bgA: "#e5f5ff",
    bgB: "#b8dff1",
    bgC: "#f2fbff",
  },
  {
    name: "Решение Freedom Urban",
    title: "Freedom Urban - защита поездок на общественном транспорте",
    text:
      "За пару минут Вы оформляете страховку. Если происходит несчастный случай в общественном транспорте, то Вы получаете выплату на лечение.",
    micro:
      "Saqta Market помогает разобраться в продукте и перейти к оформлению. Условия, лимиты, исключения и порядок выплат определяются договором страхования.",
    cta: "Сколько это стоит?",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-solution",
    color: "#0875a8",
    accent: "#06b6d4",
    bgA: "#e0f7fb",
    bgB: "#aeeaf3",
    bgC: "#f0fbfd",
  },
  {
    name: "От 500 ₸ в месяц",
    title: "От 500 ₸ в месяц - защита поездок по цене маленькой городской покупки",
    text:
      "Freedom Urban стоит от 6 000 ₸ в год. Это можно объяснить как примерно от 500 ₸ в месяц: небольшая сумма, которая помогает заранее подготовиться к расходам, если поездка на общественном транспорте закончится несчастным случаем.",
    cta: "Что входит в тарифы?",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-price",
    color: "#0d9488",
    accent: "#2dd4bf",
    bgA: "#dffbf4",
    bgB: "#a9eadc",
    bgC: "#f2fffb",
  },
  {
    name: "Выберите уровень защиты",
    title: "Три тарифа под разные уровни защиты",
    text: "",
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
    micro:
      "По госпитализации и другим выплатам действуют лимиты и условия договора. Перед оформлением нужно ознакомиться с договором и правилами программы.",
    cta: "Как оформить?",
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-tariffs",
    color: "#0f766e",
    accent: "#5eead4",
    bgA: "#e5fbf7",
    bgB: "#bff4e8",
    bgC: "#f5fffc",
  },
  {
    name: "Оформление онлайн",
    title: "Оформление можно пройти онлайн",
    text:
      "Вы переходите к оформлению, выбираете тариф, вводите необходимые данные, подтверждаете согласия и оплачиваете картой. После оформления полис или подтверждение направляется по email по текущей схеме продукта.",
    benefits: [
      "защита поездок на общественном транспорте;",
      "тарифы от 6 000 ₸ в год;",
      "ориентир от 500 ₸ в месяц для тарифа Start;",
      "оформление онлайн;",
      "продукт Freedom, переход к оформлению через Saqta Market.",
    ],
    cta: "Оформить",
    legal:
      "Перед оформлением внимательно ознакомьтесь с условиями договора, лимитами, исключениями, порядком выплат и требованиями к документам.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=82",
    imagePosition: "center",
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

const sections = [...document.querySelectorAll(".story-section")];
let activeIndex = 0;
let ticking = false;

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

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      activateSection(Number(entry.target.dataset.index));
    });
  },
  { threshold: 0.58 },
);

sections.forEach((section) => observer.observe(section));

window.addEventListener("scroll", scheduleParallax, { passive: true });
window.addEventListener("resize", scheduleParallax);

const initialSlide = Number.parseInt(new URLSearchParams(window.location.search).get("slide"), 10);
if (Number.isInteger(initialSlide) && initialSlide >= 1 && initialSlide <= slides.length) {
  window.setTimeout(() => {
    window.scrollTo({ top: sections[initialSlide - 1].offsetTop, behavior: "auto" });
    activateSection(initialSlide - 1);
    updateParallax();
  }, 0);
} else {
  activateSection(0);
  updateParallax();
}

document.addEventListener("keydown", (event) => {
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
  const tariffs = slide.tariffs
    ? `<div class="tariff-grid">${slide.tariffs
        .map(
          (tariff) => `
            <div class="tariff-card">
              <strong>${tariff.name}</strong>
              <span>${tariff.price}</span>
              <p>${tariff.limit}</p>
            </div>
          `,
        )
        .join("")}</div>`
    : "";
  const text = slide.text ? `<p class="story-text">${slide.text}</p>` : "";
  const micro = slide.micro ? `<p class="micro-text">${slide.micro}</p>` : "";
  const backButton =
    index > 0
      ? `<button class="ghost-button" type="button" data-back>Назад</button>`
      : `<button class="ghost-button hidden-mobile" type="button" disabled>Назад</button>`;

  return `
    <section
      class="story-section ${slide.theme}"
      id="section-${index + 1}"
      data-index="${index}"
      style="--blue: ${slide.color}; --teal: ${slide.accent}; --bg-a: ${slide.bgA}; --bg-b: ${slide.bgB}; --bg-c: ${slide.bgC};"
    >
      <div class="section-inner">
        <aside class="visual-panel" aria-hidden="true">
          <div class="visual-image" style="background-image: url('${slide.image}'); background-position: ${
            slide.imagePosition || "center"
          }"></div>
          <div class="visual-shade"></div>
          <div class="route-line"></div>
          <div class="visual-card">
            <strong>${number}</strong>
            <span>${slide.name}</span>
          </div>
        </aside>
        <article class="copy-panel">
          <div class="story-copy">
            <h1>${slide.title}</h1>
            ${text}
            ${tariffs}
            ${micro}
            ${benefits}
          </div>
          <div class="section-actions">
            ${backButton}
            <button class="primary-button" type="button" data-next>
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

function activateSection(index) {
  activeIndex = index;
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

function scheduleParallax() {
  if (ticking) {
    return;
  }

  ticking = true;
  window.requestAnimationFrame(() => {
    updateParallax();
    ticking = false;
  });
}

function updateParallax() {
  const viewport = window.innerHeight || 1;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const progress = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - viewport / 2) / viewport));

    section.style.setProperty("--parallax-image", `${progress * -44}px`);
    section.style.setProperty("--parallax-card", `${progress * 28}px`);
    section.style.setProperty("--parallax-copy", `${progress * -18}px`);
    section.style.setProperty("--parallax-bg", `${progress * 22}px`);
  });
}
