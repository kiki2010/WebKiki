const projectData = {
    apps: [
        {
            title: "FlameFighters",
            description: "Is an app to help prevent wildfires by knowing local risk, easy to use and install.",
            image: "",
            award: "TG 2024 Finalist | TG 2024 Social Impact",
            download: "https://drive.google.com/file/d/18ZRr60LK3G1Hk6mRzfUu4LIiLH605Es7/view?usp=sharing",
        },
        {
            title: "RiverStream",
            description: "From 1970 to 2019, floods were the most frequent weather, climate, and water-related disasters, accounting for 44% of all disasters globally. However, flood prediction apps are available only in some countries, leaving many regions unprepared. To address this, we developed RiverStream, an app that can be used worldwide. It allows users to receive and contribute flood data, while AI predicts floods in useful time and notifies users when risk increases. A simulation feature visualizes flood scenarios, raising awareness and preparedness. RiverStream builds a collaborative network to strengthen global disaster response, promoting action, prevention, and education.",
            image: "",
            award: "TG 2025 Regional Honoree Latin America | TG 2025 Special Award ClimatePrize | AI Favorite Coolest Projects 2025",
            download: "https://drive.google.com/file/d/1tl-qEZ-nsGtlDHISIv4JyX_9gIaMRI_h/view?pli=1",
        },
    ],
    robots: [
        {
            title: "Wall-e",
            description: "",
            image: "",
            award: "",
            download: "",
        },
        {
            title: "R2-D2",
            description: "",
            image: "",
            award: "",
            download: "",
        },
        {
            title: "KikiBot",
            description: "",
            image: "",
            award: "",
            download: "",
        }
    ],
    extra: [
        {
            title: "Mes de las Infancias 2023",
            description: "",
            image: "",
            award: "",
            download: "",
        },
        {
            title: "PracTICarlos 2023",
            description: "",
            image: "",
            award: "",
            download: "",
        },
        {
            title: "RandomPlay 2024",
            description: "",
            image: "",
            award: "",
            download: "",
        },
        {
            title: "Encuentro de Innovadores 2024",
            description: "",
            image: "",
            award: "",
            download: "",
        },
        {
            title: "Technovation Girls 2024",
            description: "",
            image: "",
            award: "",
            download: "",
        },
        {
            title: "RandomPlay 2025",
            description: "",
            image: "",
            award: "",
            download: "",
        },
        {
            title: "Technovation Girls 2025",
            description: "",
            image: "",
            award: "",
            download: "",
        },
        {
            title: "Coolest Projects 2025",
            description: "",
            image: "",
            award: "",
            download: "",
        },
    ]
};

let currentIndex = 0;
let currentCategory = "";

function showCategory(category) {
  currentCategory = category;
  currentIndex = 0;
  renderCarousel();
}

function renderCarousel() {
  const container = document.getElementById("projects-display");
  container.innerHTML = "";

  const items = projectData[currentCategory];
  if (!items || items.length === 0) {
    container.innerHTML = "<p class='placeholder'>No projects found.</p>";
    return;
  }

  const project = items[currentIndex];

  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    ${project.image ? `<img src="${project.image}" alt="${project.title}">` : `<div style="width:150px; height:150px; border:2px solid #00ff00; display:flex; align-items:center; justify-content:center; color:#00ff00;">No Image</div>`}
    <div class="project-content">
      <div class="project-title">${project.title}</div>
      <div class="project-description">${project.description || "No description available."}</div>
      ${project.award ? `<div class="project-awards">🏆 ${project.award}</div>` : ""}
      ${project.download ? `<a class="project-link" href="${project.download}" target="_blank">🔗 Download </a>` : ""}
    </div>
  `;

  container.appendChild(card);
  const controls = document.createElement("div");
  controls.className = "carousel-controls";

  const prevBtn = document.createElement("button");
  prevBtn.className = "carousel-button";
  prevBtn.innerText = "◀️";
  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    renderCarousel();
  };

  const nextBtn = document.createElement("button");
  nextBtn.className = "carousel-button";
  nextBtn.innerText = "▶️";
  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % items.length;
    renderCarousel();
  };

  controls.appendChild(prevBtn);
  controls.appendChild(nextBtn);
  container.appendChild(controls);
}

document.addEventListener("DOMContentLoaded", () => {
  typeText("typed-text", "Select a category...");
});

function typeText(elementId, text, speed = 80) {
  const el = document.getElementById(elementId);
  el.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}