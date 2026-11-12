/* ELIXIR XVI content and interaction settings.
   Replace placeholder values below with confirmed event information. */
const EVENT_CONFIG = {
  // Paste a direct MP4 URL here, or leave blank to show the video thumbnail placeholder.
  videoUrl: "Video.mp4",
  // Use your own hosted image URLs for student/faculty photographs.
  studentPanels: [
    {
      number: "PANEL 01", title: "VIKSIT BHARAT, VIKSIT YOU", icon: "",
      focus: "Preparing for India's Next Decade of Opportunity",
      people: [
        { name: "Chinmayananda Mahapatra", course: "BBA · 2nd Year", role: "", topic: "", image: "chinmaya.jpeg" },
        { name: "Smruti Sulagna Sahu", course: "PSC · 2nd Year", role: "", topic: "", image: "smruti.jpeg" },
        { name: "Kalyani Maharana", course: "BCA · 2nd Year", role: "", topic: "", image: "KALYANI.jpeg" },
        { name: "Chetna Jain", course: "HSS · 1st Year", role: "", topic: "", image: "chetna.jpeg" }
      ]
    },
    {
      number: "PANEL 02", title: "VIKSIT BHARAT, VIKSIT YOU", icon: "",
      focus: "Preparing for India's Next Decade of Opportunity",
      people: [
        { name: "Bhawna Jhawar", course: "BBA · 1st Year", role: "", topic: "", image: "bhawna.jpeg" },
        { name: "Hitesh Deheri", course: "PSC · 1st Year", role: "", topic: "", image: "hitesh.jpeg" },
        { name: "Tanisha Debta", course: "BCA · 2nd Year", role: "", topic: "", image: "tanisha.jpeg" },
        { name: "N. Kavya Anjani", course: "HSS · 1st Year", role: "", topic: "", image: "n. kavya anjani.jpeg" }
      ]
    },
    {
      number: "PANEL 03", title: "VIKSIT BHARAT, VIKSIT YOU", icon: "",
      focus: "Preparing for India's Next Decade of Opportunity",
      people: [
        { name: "Sahil Meher", course: "BBA · 2nd Year", role: "", topic: "", image: "sahil.jpeg" },
        { name: "Dashrathi Rohidas", course: "PSC · 1st Year", role: "", topic: "", image: "dashrathi.jpeg" },
        { name: "Bhanupratap Badi", course: "BCA · 2nd Year", role: "", topic: "", image: "bhanu.jpeg" },
        { name: "Liza Padhan", course: "EDN · 2nd Year", role: "", topic: "", image: "liza.jpeg" }
      ]
    }
  ],
  teachers: [
    { name: "Ms. Kanak Sharma", designation: "TLM", department: "Commerce and Management", topic: "VIKSIT BHARAT, VIKSIT YOU", image: "kanak mam.jpeg" },
    { name: "Mr. Bhesamani Meher", designation: "TLM", department: "Computer Science and Applications", topic: "VIKSIT BHARAT, VIKSIT YOU", image: "meher sir.jpeg" },
    { name: "Mr. Umakanta Mahapatra", designation: "Asst.Professor", department: "Education", topic: "VIKSIT BHARAT, VIKSIT YOU", image: "Umakanta.jpeg" },
    { name: "Mr. Saroj Ku. Behera", designation: "TLM", department: "Higher Secondary School", topic: "VIKSIT BHARAT, VIKSIT YOU", image: "saroj sir.jpeg" },
    { name: "Ms. Pragya Sharma", designation: "TLM", department: "Political Science", topic: "VIKSIT BHARAT, VIKSIT YOU", image: "pragya mam.jpeg" }
  ],
  schedule: [
    { time: "9:00 AM", title: "Reporting to College", description: "", speaker: "", venue: "" },
    { time: "9:05 AM", title: "Team Imperial Group Photograph", description: "", speaker: "", venue: "" },
    { time: "9:07 AM", title: "ERH Residence Group Photograph", description: "", speaker: "", venue: "" },
    { time: "9:09 AM", title: "GRH Residence Group Photograph", description: "", speaker: "", venue: "  " },
    { time: "9:12 AM", title: "12th Arts-Group Photograph", description: "", speaker: "", venue: "  " },
    { time: "9:14 AM", title: "Department of Commerce and Management-Group Photograph", description: "", speaker: "", venue: "  " },
    { time: "9:16 AM", title: "Department of Comuter Science and Applications-Group Photograph", description: "", speaker: " ", venue: "" },
    { time: "9:18 AM", title: "Department of Humanities-Group Photograph", description: "", speaker: " ", venue: "" },
    { time: "9:20 AM", title: "Proceed to Chanakya Auditorium", description: "", speaker: " ", venue: "" },
    { time: "9:30 AM", title: "Introduction to Elixir", description: "", speaker: " ", venue: "" },
    { time: "9:35 AM", title: "Lighting of Lamp", description: "", speaker: " ", venue: "" },
    { time: "9:40 AM", title: "College Anthem", description: "", speaker: " ", venue: "" },
    { time: "9:45 AM", title: "College Video", description: "", speaker: " ", venue: "" },
    { time: "9:50 AM", title: "Imperial College-Annual Report", description: "", speaker: " ", venue: "" },
    { time: "10:00 AM", title: "Panel Discussion-Faculties of Imperial College(5 Persons)", description: "", speaker: " ", venue: "" },
    { time: "10:50 AM", title: "Panel Discussion-Students Group 1(4 Students)", description: "", speaker: " ", venue: "" },
    { time: "11:40 AM", title: "Experience Sharing by Sarita Ma'am", description: "", speaker: " ", venue: "" },
    { time: "11:50 AM", title: "Fire side Chat with Director Sir", description: "", speaker: " ", venue: "" },
    { time: "12:30 PM", title: "Felicitation of Rank Holders(BBA,BCA and BA)", description: "", speaker: " ", venue: "" },
    { time: "12:30 PM", title: "Students Prize Distribution(July-September)", description: "", speaker: " ", venue: "" },
    { time: "12:30 PM", title: "Felicitation-Yash Award", description: "", speaker: " ", venue: "" },
    { time: "12:30 PM", title: "NCC Rank Ceremony", description: "", speaker: " ", venue: "" },
    { time: "12:30 PM", title: "Team Members Award (3C's)", description: "", speaker: " ", venue: "" },
    { time: "01:10 PM", title: "Lunch", description: "", speaker: " ", venue: "" },
    { time: "02:00 PM", title: "Panel Discussion-Students Group 2(4 Students)", description: "", speaker: " ", venue: "" },
    {time: "02:30 PM", title: "Panel Discussion-Students Group 3(4 Students)", description: "", speaker: " ", venue: "" },
    { time: "03:0 PM", title: "Activity for Students(Children's Day)", description: "", speaker: " ", venue: "" }
  ],
  gallery: [
    { title: "", category: "", caption: "", image: "Elixir web.jpg" },
    { title: "", category: "", caption: "", image: "6.jpg" },
    { title: "", category: "", caption: "", image: "4.jpg" },
    { title: "", category: "", caption: "", image: "DSC02257.JPG" },
    { title: "", category: "", caption: "", image: "DSC02151.JPG" },
    { title: "", category: "", caption: "", image: "5.jpg" },
    { title: "", category: "", caption: "", image: "DSC02579.JPG" },
    { title: "", category: "", caption: "", image: "DSC02208.JPG" },
    { title: "", category: "", caption: "", image: "6.jpg" },
    { title: "", category: "", caption: "", image: "Elixir Web 2.jpg" },
    { title: "", category: "", caption: "", image: "0P1A9869.JPG" },
    { title: "", category: "", caption: "", image: "0P1A9962.JPG" },
    { title: "", category: "", caption: "", image: "3.jpg" },
    { title: "", category: "", caption: "", image: "DSC02636.JPG" }
  ]
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function initials(name) {
  return (name || "Student").split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase();
}
function photoMarkup(image, name, className = "profile-photo") {
  if (image) return `<img class="${className}" src="${image}" alt="${name}" loading="lazy">`;
  return `<div class="${className} placeholder" aria-label="Photo placeholder">${initials(name)}</div>`;
}
function renderStudentPanels() {
  const target = $("#studentPanels");
  target.innerHTML = EVENT_CONFIG.studentPanels.map((panel, index) => `
    <article class="panel-block reveal">
      <div class="panel-intro">
        <div><span class="panel-index">${panel.number}</span><div class="panel-icon">${panel.icon}</div><h3>${panel.title}</h3><p>${panel.focus}</p></div>
        <span class="panel-index">ELIXIR XVI / STUDENT VOICES</span>
      </div>
      <div class="panel-people">${panel.people.map(person => `
        <div class="profile-card">
          ${photoMarkup(person.image, person.name)}
          <div class="profile-info"><h4>${person.name}</h4><p>${person.course}</p><small>${person.role}</small><small>${person.topic}</small></div>
        </div>`).join("")}</div>
    </article>`).join("");
}
function renderTeachers() {
  $("#teacherGrid").innerHTML = EVENT_CONFIG.teachers.map(person => `
    <article class="teacher-card reveal">
      ${photoMarkup(person.image, person.name, "teacher-photo")}
      <div><h3>${person.name}</h3><p>${person.designation}</p><p>${person.department}</p><small>${person.topic}</small></div>
    </article>`).join("");
}
function renderSchedule() {
  $("#scheduleTimeline").innerHTML = EVENT_CONFIG.schedule.map(item => `
    <article class="timeline-item reveal">
      <div class="timeline-time">${item.time}</div><span class="timeline-dot"></span>
      <div class="timeline-content"><div><h3>${item.title}</h3><p>${item.description}</p></div>
        <div class="timeline-meta"><span>${item.speaker}</span><small>${item.venue}</small></div>
      </div>
    </article>`).join("");
}
function renderGallery() {
  $("#galleryGrid").innerHTML = EVENT_CONFIG.gallery.map((item, index) => `
    <article class="gallery-item reveal" data-category="${item.category}" data-index="${index}" tabindex="0" role="button" aria-label="Open image: ${item.title}">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-overlay"><small>${item.caption}</small><strong>${item.title}</strong></div>
    </article>`).join("");
}
renderStudentPanels(); renderTeachers(); renderSchedule(); renderGallery();

const introVideo = $("#introVideo");
if (EVENT_CONFIG.videoUrl) {
  introVideo.querySelector("source").src = EVENT_CONFIG.videoUrl;
  introVideo.load();
}
function startVideo() {
  if (!EVENT_CONFIG.videoUrl) {
    alert("Add your introductory video URL in EVENT_CONFIG.videoUrl in script.js to enable playback.");
    return;
  }
  $("#videoPlaceholder").classList.add("hidden");
  introVideo.play().catch(() => { $("#videoPlaceholder").classList.remove("hidden"); });
}
$("#videoPlay").addEventListener("click", startVideo);
$("#videoPlay").addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); startVideo(); } });
introVideo.addEventListener("pause", () => { if (introVideo.currentTime === 0) $("#videoPlaceholder").classList.remove("hidden"); });
introVideo.addEventListener("ended", () => $("#videoPlaceholder").classList.remove("hidden"));

// Responsive navigation
const menuToggle = $("#menuToggle"), mainNav = $("#mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
$$(".nav-link", mainNav).forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false");
}));

// Scroll state, active navigation and back-to-top
const header = $(".site-header"), backToTop = $("#backToTop");
const sections = $$("main section[id]");
function onScroll() {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 30);
  backToTop.classList.toggle("show", y > 550);
  let current = "home";
  sections.forEach(section => { if (y >= section.offsetTop - 160) current = section.id; });
  $$(".nav-link").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
}
window.addEventListener("scroll", onScroll, { passive: true });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Reveal-on-scroll animation
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); revealObserver.unobserve(entry.target); }
  });
}, { threshold: 0.12 });
function observeReveals() { $$(".reveal").forEach(el => revealObserver.observe(el)); }
observeReveals();

// Gallery category filters and accessible lightbox
let activeGalleryIndex = 0;
const lightbox = $("#lightbox"), lightboxImage = $("#lightboxImage"), lightboxCaption = $("#lightboxCaption");
function visibleGalleryItems() { return $$(".gallery-item").filter(item => !item.classList.contains("filtered-out")); }
function openLightbox(index) {
  const items = visibleGalleryItems(); if (!items.length) return;
  activeGalleryIndex = Math.max(0, Math.min(index, items.length - 1));
  const item = items[activeGalleryIndex], img = $("img", item), title = $("strong", item).textContent;
  lightboxImage.src = img.src; lightboxImage.alt = img.alt; lightboxCaption.textContent = title;
  lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
}
function closeLightbox() { lightbox.classList.remove("open"); lightbox.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }
function moveLightbox(step) { const items = visibleGalleryItems(); openLightbox((activeGalleryIndex + step + items.length) % items.length); }
$("#lightboxClose").addEventListener("click", closeLightbox);
$("#lightboxPrev").addEventListener("click", () => moveLightbox(-1));
$("#lightboxNext").addEventListener("click", () => moveLightbox(1));
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") moveLightbox(-1);
  if (e.key === "ArrowRight") moveLightbox(1);
});
$("#galleryGrid").addEventListener("click", e => {
  const card = e.target.closest(".gallery-item"); if (card) openLightbox(visibleGalleryItems().indexOf(card));
});
$("#galleryGrid").addEventListener("keydown", e => {
  const card = e.target.closest(".gallery-item");
  if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openLightbox(visibleGalleryItems().indexOf(card)); }
});
$("#galleryFilters").addEventListener("click", e => {
  const button = e.target.closest(".filter-btn"); if (!button) return;
  $$(".filter-btn").forEach(btn => btn.classList.toggle("active", btn === button));
  const filter = button.dataset.filter;
  $$(".gallery-item").forEach(item => item.classList.toggle("filtered-out", filter !== "all" && item.dataset.category !== filter));
});
$("#year").textContent = new Date().getFullYear();
window.addEventListener("load", () => setTimeout(() => $("#preloader").classList.add("hide"), 350));
onScroll();
