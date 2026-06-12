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

const initialSlide = Number.parseInt(new URLSearchParams(window.location.search).get("slide"), 10);
let currentIndex =
  Number.isInteger(initialSlide) && initialSlide >= 1 && initialSlide <= slides.length
    ? initialSlide - 1
    : 0;
let isAnimating = false;

const app = document.querySelector(".story-app");
const storyCopy = document.getElementById("storyCopy");
const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");
const microText = document.getElementById("microText");
const benefitList = document.getElementById("benefitList");
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");
const legalNote = document.getElementById("legalNote");
const progressFill = document.getElementById("progressFill");
const stepLabel = document.getElementById("stepLabel");
const visualImage = document.getElementById("visualImage");
const visualNumber = document.getElementById("visualNumber");
const visualCaption = document.getElementById("visualCaption");
const dots = document.getElementById("storyDots");

slides.forEach((slide, index) => {
  const dot = document.createElement("button");
  dot.className = "story-dot";
  dot.type = "button";
  dot.setAttribute("aria-label", `Перейти к блоку ${index + 1}: ${slide.name}`);
  dot.addEventListener("click", () => goToSlide(index));
  dots.appendChild(dot);
});

document.querySelector("[data-start]").addEventListener("click", (event) => {
  event.preventDefault();
  goToSlide(0);
});

nextButton.addEventListener("click", () => {
  if (slides[currentIndex].final) {
    window.location.href = subscribeUrl;
    return;
  }

  goToSlide(currentIndex + 1);
});

backButton.addEventListener("click", () => {
  goToSlide(currentIndex - 1);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "Enter") {
    if (!slides[currentIndex].final) {
      goToSlide(currentIndex + 1);
    }
  }

  if (event.key === "ArrowLeft") {
    goToSlide(currentIndex - 1);
  }
});

function goToSlide(index) {
  if (isAnimating || index < 0 || index >= slides.length || index === currentIndex) {
    return;
  }

  isAnimating = true;
  storyCopy.classList.add("exiting");
  visualImage.classList.add("switching");

  window.setTimeout(() => {
    currentIndex = index;
    renderSlide();
    storyCopy.classList.remove("exiting");
    storyCopy.classList.add("entering");
    visualImage.classList.remove("switching");

    window.setTimeout(() => {
      storyCopy.classList.remove("entering");
      isAnimating = false;
    }, 620);
  }, 360);
}

function renderSlide() {
  const slide = slides[currentIndex];
  app.className = `story-app ${slide.theme}`;
  app.style.setProperty("--blue", slide.color);
  app.style.setProperty("--teal", slide.accent);
  storyTitle.textContent = slide.title;
  storyText.textContent = slide.text;
  visualImage.style.backgroundImage = `url("${slide.image}")`;
  visualNumber.textContent = String(currentIndex + 1).padStart(2, "0");
  visualCaption.textContent = slide.name;
  progressFill.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
  stepLabel.textContent = `Блок ${currentIndex + 1} из ${slides.length}`;
  backButton.disabled = currentIndex === 0;

  if (slide.micro) {
    microText.textContent = slide.micro;
    microText.classList.remove("hidden");
  } else {
    microText.textContent = "";
    microText.classList.add("hidden");
  }

  benefitList.innerHTML = "";
  if (slide.benefits) {
    slide.benefits.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      benefitList.appendChild(li);
    });
    benefitList.classList.remove("hidden");
  } else {
    benefitList.classList.add("hidden");
  }

  nextButton.querySelector("span:first-child").textContent = slide.cta;
  nextButton.querySelector(".button-arrow").textContent = slide.final ? "↗" : "→";
  nextButton.style.backgroundColor = slide.color;
  legalNote.textContent =
    slide.legal || "Условия, лимиты и исключения определяются договором страхования.";

  document.querySelectorAll(".story-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });

  const shift = currentIndex * 18;
  document.querySelector(".ambient-one").style.transform = `translate(${-shift}px, ${shift}px)`;
  document.querySelector(".ambient-two").style.transform = `translate(${shift}px, ${-shift / 2}px)`;
}

renderSlide();
