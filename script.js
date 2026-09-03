const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

if (toggle && links) {
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

const revealItems = document.querySelectorAll(".reveal, .timeline-item");

revealItems.forEach((item) => {
  const section = item.closest("section");
  const sectionItems = section
    ? section.querySelectorAll(".reveal, .timeline-item")
    : [];
  const itemIndex = Array.from(sectionItems).indexOf(item);

  item.style.setProperty(
    "--reveal-delay",
    `${Math.max(0, Math.min(itemIndex, 5)) * 90}ms`,
  );
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
);

revealItems.forEach((item) => observer.observe(item));
