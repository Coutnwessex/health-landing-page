const claimModal = document.querySelector("[data-claim-modal]");
const claimOpeners = document.querySelectorAll("[data-claim-open]");
const claimClosers = document.querySelectorAll("[data-claim-close]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const siteHeader = document.querySelector(".site-header");

function openClaimModal() {
  if (!claimModal) return;
  closeMobileMenu();
  claimModal.classList.add("is-open");
  claimModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("claim-lock");
}

function closeClaimModal() {
  if (!claimModal) return;
  claimModal.classList.remove("is-open");
  claimModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("claim-lock");
}

function closeMobileMenu() {
  if (!siteHeader || !menuToggle) return;
  siteHeader.classList.remove("is-menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

claimOpeners.forEach((button) => {
  button.addEventListener("click", openClaimModal);
});

claimClosers.forEach((button) => {
  button.addEventListener("click", closeClaimModal);
});

claimModal?.addEventListener("click", (event) => {
  if (event.target === claimModal) {
    closeClaimModal();
  }
});

menuToggle?.addEventListener("click", () => {
  if (!siteHeader) return;
  const isOpen = siteHeader.classList.toggle("is-menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteHeader?.querySelectorAll(".header-nav a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeClaimModal();
    closeMobileMenu();
  }
});
