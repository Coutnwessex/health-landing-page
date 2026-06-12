const subscribeUrl =
  "https://ffin.life/ru/individuals/freedom-health/subscribe-health?source=OHPR";

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
  },
  {
    name: "Решение Freedom Health",
    title: "Freedom Health - защита на случай критической болезни",
    text:
      "Вы оформляете договор и платите регулярный взнос. Если приходит тяжелая болезнь, Freedom рассматривает документы и выплачивает сумму для лечения в лучших клиниках Казахстан, Турции, Израиля, Южной Кореи, Испании и других стран.",
    micro:
      "Saqta Market помогает разобраться в продукте и перейти к оформлению. Условия, лимиты и исключения определяются договором страхования.",
    cta: "Почему это доступно?",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-solution",
    color: "#1375a8",
    accent: "#22d3ee",
  },
  {
    name: "Доступная защита",
    title: "От $25 в месяц - чтобы не искать крупную сумму в самый тяжелый момент",
    text:
      "$25 в месяц - это не цена лечения. Это цена сохранит для Вас и Ваей семьи все, что Вы заработали тяжелым трудом и избавит членов семьи от новых кредитов.",
    cta: "Что я получаю?",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-price",
    color: "#0d9488",
    accent: "#5eead4",
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
    legal:
      "Перед оформлением внимательно ознакомьтесь с условиями договора, лимитами, исключениями и порядком выплат.",
    image:
      "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1600&q=82",
    theme: "theme-final",
    color: "#16a34a",
    accent: "#86efac",
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
  const backButton =
    index > 0
      ? `<button class="ghost-button" type="button" data-back>Назад</button>`
      : `<button class="ghost-button hidden-mobile" type="button" disabled>Назад</button>`;
  const arrow = slide.final ? "↗" : "→";

  return `
    <section
      class="story-section ${slide.theme}"
      id="section-${index + 1}"
      data-index="${index}"
      style="--blue: ${slide.color}; --teal: ${slide.accent};"
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
          </div>
          <div class="section-actions">
            ${backButton}
            <button class="primary-button" type="button" data-next style="background-color: ${slide.color}">
              <span>${slide.cta}</span>
              <span>${arrow}</span>
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
  const slide = slides[index];
  sections.forEach((section, sectionIndex) => {
    section.classList.toggle("active", sectionIndex === index);
  });

  document.documentElement.style.setProperty("--blue", slide.color);
  document.documentElement.style.setProperty("--teal", slide.accent);
  brandMark.style.backgroundColor = slide.color;
  headerCta.style.backgroundColor = slide.color;
  stepLabel.textContent = `Блок ${index + 1} из ${slides.length}`;
  progressFill.style.width = `${((index + 1) / slides.length) * 100}%`;
}
