const projectData = {
  apps:[
    {
      title: "FlameFighters",
      description: "Is an app to help prevent wildfires by knowing local risk, easy to use and install.",
      image: "img/apps/FlameFighters.png",
      award: "TG 2024 Finalist | TG 2024 Social Impact",
      download: "https://drive.google.com/file/d/18ZRr60LK3G1Hk6mRzfUu4LIiLH605Es7/view?usp=sharing",
    },
    {
      title: "RiverStream",
      description: "We developed RiverStream, an app that can be used worldwide. It allows users to receive and contribute flood data, while AI predicts floods in useful time and notifies users when risk increases. A simulation feature visualizes flood scenarios, raising awareness and preparedness.",
      image: "img/apps/riverstream.png",
      award: "TG 2025 Regional Honoree Latin America | TG 2025 Special Award ClimatePrize | AI Favorite Coolest Projects 2025",
      download: "https://drive.google.com/file/d/1tl-qEZ-nsGtlDHISIv4JyX_9gIaMRI_h/view?pli=1",
    }
  ],
  robots: [
    {
      title: "Wall-e",
      description: "Inspired by the Disney movie, an educational project with an ESP8266 controlled via Wi-Fi.",
      image: "img/robots/wall-e.jpeg",
      award: " ",
      download: " ",
    },
    {
      title: "R2D2",
      description: "Line follower inspired by the robot from the Star Wars saga.",
      image: "img/robots/r2d2.jpg",
      award: " ",
      download: " ",
    },
    {
      title: "KikiBot",
      description: "Small UFO-shaped battle robot.",
      image: "img/robots/sumo.jpg",
      award: " ",
      download: " ",
    }
  ],
  extra: [
    {
      title: "2016: participation in the ADOPTO project.",
      description: "First contact with citizen science.",
      image: "",
      award: " ",
      download: " ",
    },
    {
      title: "2018: participation in the MATTEO project.",
      description: "Contributing with recorded rainfall data.",
      image: "",
      award: " ",
      download: " ",
    },
    {
      title: "2020: Book Review: 'Fieldwork: Ayla's Adventures on Earth'",
      description: "“...I read it twice yesterday. I liked it because it reinforced all the information I learned last year, like the Mar Chiquita lagoon and the water cycle. It was good because it's easy to understand, and when it talks about evaporation, I like that it mentions plant transpiration...”.",
      image: "",
      award: "",
      download: "https://drive.google.com/file/d/1VK_yglDDCMZPrz-4iQBXhRKt62SiboAO/view"
    },
    {
      title: "2021: Best School average and national flag bearer",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2022: First TV interview",
      description: "Because of the international day of the women and girls in science.",
      image: "",
      award: "",
      download: "https://youtu.be/NKntUT4E0g0?si=7oN4s4yLM3181AhW",
    },
    {
      title: "2022: Creation of the Social Media of 'Guardianes del Lago'",
      description: "Where the care of the San Roque dam and our environment was promoted",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2022: Kiki! Youtube Channel Creation",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "Get B1 english level",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2023:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2023:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2023:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2023: ",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2023:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2024: ",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2024:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2024:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2024:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2024:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2024:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2024:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2024:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2024:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2024:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2024:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2024:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2024:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2024:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2024:",
      description: "",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2025: RandomPlay",
      description: "Showing the new app RiverStream.",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2025: Technovation Girls",
      description: "Submitting the RiverStream application.",
      image: "",
      award: "",
      download: "",
    },
    {
      title: "2025: Coolest Projects",
      description: "Submitting the RiverStream application.",
      image: "",
      award: "",
      download: "",
    },
  ]
}

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
      ${project.download ? `<a class="project-link" href="${project.download}" target="_blank">🔗Check it! </a>` : ""}
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