const links = {
  instagram: "https://www.instagram.com/zeroesportsracing?igsh=cXE4b256ZmJremg%3D&utm_source=qr",
  discord: "https://discord.gg/sUtkgQhWdG",
  email: "mailto:zeroesportsracing@gmail.com"
};

["instagramLink","instagramContact"].forEach(id => document.getElementById(id).href = links.instagram);
["discordLink","discordContact"].forEach(id => document.getElementById(id).href = links.discord);
document.getElementById("emailLink").href = links.email;

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".main-nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}));

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".main-nav a")];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
  });
}, {rootMargin:"-40% 0px -50% 0px"});
sections.forEach(section => observer.observe(section));
