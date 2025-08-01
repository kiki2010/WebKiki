# My personal web page: KikiWeb
[![Athena Award Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Faward.athena.hackclub.com%2Fapi%2Fbadge)](https://award.athena.hackclub.com?utm_source=readme)

## Idea
I always wanted to have my own web portfolio, mainly to simplify the way of contacting me and to be able to make a gallery where I could group all my projects, or most of them, that's KikiWeb.

## Why?
I thought it was a good idea to present it to Athens, since all my previous attempts at a personal website were never finished, and I'd leave them halfway. I feel this program was a good motivation.

## How?
To create this website, I used HTML, CSS, and JS. To better explain each section, let's first look at how the files are structured.
We have:
An image folder with folders inside, one for each category.
A folder with a script.js file.
A folder with a style.css file.
Index.html
Collage.html

<img width="168" height="344" alt="Captura de pantalla 2025-07-20 200259" src="https://github.com/user-attachments/assets/20ed2650-c590-4132-ae01-ea5db2ede451" />

### Name
I create a card with my photo, name and nickname, the background is yellow and has pink details.
HTML:
```html
    <header>
        <div class="profile-card">
            <img src="img/DSC_2581.JPG" alt="profile picture" class="avatar">
            <div class="name-box">
                <h3>Chiara Catalini</h3>
                <h1>Kiki!</h1>
            </div>
        </div>
    </header>
```
Css:
```css
.profile-card {
  display: flex;
  align-items: center;
  border: 2px solid #F1CCFF;
  padding: 30px 60px;
  border-radius: 20px;
  background: #fff4cd;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transform: scale(1.1);
}

.avatar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-right: 25px;
  border: 2px solid #F1CCFF;
}

.name-box h3 {
  margin: 0%;
  font-size: 3rem;
  color: #555;
}

.name-box h1 {
  margin: 0%;
  font-size: 5rem;
  color: #101820;
}
```

<img width="783" height="300" alt="Captura de pantalla 2025-07-20 205559" src="https://github.com/user-attachments/assets/b7224db6-a791-4995-aaec-d59f4900ccc6" />

### Buttons
> [!CAUTION]
> The category buttons are directly related to the project display. The JS explanation will be on the project display section.

Using them, we can select which project will be shown on the display.
We have three different categories: apps, robots and events.

HTML:
```html
   <div class="button-group">
      <button class="theme-button" onclick="showCategory('apps')">📱</button>
      <button class="theme-button" onclick="showCategory('robots')">🤖</button>
      <button class="theme-button" onclick="showCategory('extra')">➕</button>
   </div>
```

Css:
```css
.button-group {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
}

.theme-button {
  width: 100px;
  height: 100px;
  font-size: 3rem;
  border: none;
  border-radius: 10px;
  background-color: #fff4cd;
  transition: 0.3s;
  cursor: pointer;
}

.theme-button:hover {
  background-color: #F1CCFF;
}
```

>[!NOTE]
>When we hover the cursor over the buttons, it will show as a pointer and change to pink color.

<img width="370" height="123" alt="Captura de pantalla 2025-07-20 210745" src="https://github.com/user-attachments/assets/be035cb5-ebf9-4f01-b9ef-594b33b9ae87" />

### Projects Display
We'll display the projects in this card, which contrasts with the rest of the website.
First, a text simulating typing will be displayed, prompting users to select a category with buttons. If the selected category doesn't have any projects, the user will be notified.
All projects are located within projectData in different categories.
Once a category is selected, the carousel index is updated to start at 0 for that category. You can navigate between projects within the same category using the arrow buttons displayed.

As you browse the category, project cards are created, including titles, images, descriptions, awards, and links.

HTML:
```html
    <div class="display-projects" id="projects-display">
      <p class="placeholder" id="typed-text">Select a Category...</p>
    </div>
```

Js:
```js
const projectData = {
  apps:[
    {
      title: "FlameFighters",
      description: "Is an app to help prevent wildfires by knowing local risk, easy to use and install.",
      image: "img/apps/FlameFighters.png",
      award: "TG 2024 Finalist | TG 2024 Social Impact",
      download: "https://drive.google.com/file/d/18ZRr60LK3G1Hk6mRzfUu4LIiLH605Es7/view?usp=sharing",
      link2: "https://youtu.be/XPj_qefKi-0?si=nxAPOon67m-sdTVK"
    },
    ...
  ],
  robots: [...
  ],
  extra: [...
  ]
}
//Index of the current project displayed nad currently selected category
let currentIndex = 0;
let currentCategory = "";

//Updates the current category. Resets the index to the first project. And calls renderCarousel() to display the projects in that category. 
function showCategory(category) {
  currentCategory = category;
  currentIndex = 0;
  renderCarousel();
}

function renderCarousel() {
  const container = document.getElementById("projects-display");
  container.innerHTML = "";

  const items = projectData[currentCategory];
  //If there are no projects
  if (!items || items.length === 0) {
    container.innerHTML = "<p class='placeholder'>No projects found.</p>";
    return;
  }

  const project = items[currentIndex];

  //Create the project card, showing each value.
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    ${project.image ? `<img src="${project.image}" alt="${project.title}">` : `<div style="width:150px; height:150px; border:2px solid #00ff00; display:flex; align-items:center; justify-content:center; color:#00ff00;">No Image</div>`}
    <div class="project-content">
      <div class="project-title">${project.title}</div>
      <div class="project-description">${project.description || "  "}</div>
      ${project.award ? `<div class="project-awards">🏆 ${project.award}</div>` : ""}
      ${project.download ? `<a class="project-link" href="${project.download}" target="_blank">🔗Check it! </a>` : ""}
      ${project.link2 ? `<a class="project-link" href="${project.link2}" target="_blank">🔗Check it! </a>` : ""}
    </div>
  `;

  container.appendChild(card);

  //Carousel buttons
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

// Please select a category
document.addEventListener("DOMContentLoaded", () => {
  typeText("typed-text", "Select a category...");
});

//Write select category like is typed.
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
```

Css:
```css
.display-projects {
  margin-top: 40px;
  width: 800px;
  height: 400px;
  padding: 20px;
  border: 3px solid #00ff00;
  border-radius: 10px;
  background-color: #111;
  box-shadow: 0 0 20px #00ff00;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}

.placeholder {
  font-size: 1.4rem;
  color: #0f0;
  opacity: 0.8;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

#typed-text::after {
  content: '|';
  animation: blink 1s infinite;
  color: #00ff00;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.project-card {
  display: flex;
  width: 100%;
  height: auto;
  gap: 20px;
  background-color: #000;
  border: 2px solid #00ff00;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px #00ff00;
  box-sizing: border-box;
}

.project-card img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 5px;
  border: 2px solid #00ff00;
}

.project-content {
  text-align: left;
  flex: 1;
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #00ff00;
}

.project-description {
  font-size: 1rem;
  margin-bottom: 10px;
  color: #00ff00
}

.project-awards {
  font-size: 0.9rem;
  opacity: 0.8;
  color: #00ff00
}

.project-link {
  display: block;
  margin-top: 0.1%;
}

/*Carousel Style of the project display*/
.carousel-controls {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.carousel-button {
  background-color: transparent;
  border: 2px solid #00ff00;
  color: #00ff00;
  padding: 5px 15px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.carousel-button:hover {
  background-color: #00ff00;
  color: #000;
}
```
<img width="901" height="476" alt="Captura de pantalla 2025-07-20 212200" src="https://github.com/user-attachments/assets/bd1da9a1-8949-4f51-89c9-691e5736a33f" />
<img width="892" height="475" alt="Captura de pantalla 2025-07-20 212209" src="https://github.com/user-attachments/assets/ae26071c-788b-41cf-8880-2236930cb8f6" />

### Contact Card
Here we can see different ways to contact me, in the form of buttons to make everything easier.
The buttons are accompanied by icons from https://cdnjs.com/libraries/font-awesome
When you hover over the buttons they turn pink.

Html:
```html
<!--Contact Card-->
        <div class="contact-card">
            <div class="contact-content">
                <div class="contact-text">
                    <h2>Contact Kiki!</h2>
                    <a href="https://www.youtube.com/@kiki--" target="_blank">
                        <button>
                            <i class="fab fa-youtube"></i> 
                            Youtube: @Kiki--
                        </button>
                    </a>
                    <a href="https://www.instagram.com/chiarita1000/" target="_blank">
                        <button>
                            <i class="fab fa-instagram"></i>
                            Instagram: @Chiarita1000
                        </button>
                    </a>
                    <a href="https://x.com/CataliniCh90469">
                        <button>
                            <i class="fab fa-x-twitter"></i>
                            X: @CataliniCh90469
                        </button>
                    </a>
                    <a href="https://www.tiktok.com/@chiarita1000?is_from_webapp=1&sender_device=pc" target="_blank">
                        <button>
                            <i class="fab fa-tiktok"></i>
                            Tiktok: @Chiarita1000
                        </button>
                    </a>
                    <a href="https://www.twitch.tv/kikispeedcuber" target="_blank">
                        <button>
                            <i class="fab fa-twitch"></i>
                            Twitch: kikispeedcuber
                        </button>
                    </a>
                    <a href="mailto:chiaraangelinacatalini@gmail.com">
                        <button>
                            Mail: chiaraangelinacatalini@gmail.com
                        </button>
                    </a>
                </div>
                <img src="img\contact\contacto.jpg" alt="kiki-photo" class="contact-avatar">
            </div>
        </div>
```

Css:
```css
/*Contact Card Style*/
.contact-card {
  margin-top: 50px;
  border: 3px solid #F1CCFF;
  padding: 30px 60px;
  border-radius: 20px;
  background: #fff4cd;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: scale(1.15);
  justify-content: center;
  display: flex;
}

.contact-content {
  display: flex;
  align-items: center;
  gap: 25px;
  justify-content: space-between;
}

.contact-avatar {
  width: 250px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #F1CCFF;
  object-fit: cover;
}

.contact-text {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-text h2 {
  margin: 0 0 10px 0;
  font-size: 2.2rem;
  color: #101820;
}

.contact-text button i {
  margin-right: 10px;
  font-size: 1.5rem;
  vertical-align: middle;
}

.contact-text button {
  font-size: 1.2rem;
  padding: 8px 12px;
  border-radius: 10px;
  border: none;
  background-color: #ffde7b;
  color: #101820;
  cursor: pointer;
  transition: 0.3s;
  text-align: left;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-text button:hover {
  background-color: #F1CCFF;
  color: #fff;
}
```

<img width="1267" height="609" alt="Captura de pantalla 2025-07-21 194437" src="https://github.com/user-attachments/assets/14791994-0d54-4de2-af09-02fe463cd13e" />

### Hobby Card
Here you can find some of my hobbies. In the photography section, you'll be redirected to a collage of photos I've taken.
The photos have a pop-up effect to give them more dynamic appeal.
Hobby Card:
HTML:
```html
<div class="hobby-card">
            <div class="hobby-group">
                <h2>SpeedCubing</h2>
                <div class="photo-group">
                    <img src="img\hobby\speedcubing\riocuarto1.jpg" alt="" class="photo-frame">
                    <img src="img\hobby\speedcubing\riocuarto2.jpg" alt="" class="photo-frame">
                    <img src="img\hobby\speedcubing\riocuarto3.jpg" alt="" class="photo-frame">
                    <img src="img\hobby\speedcubing\vcp1.jpg" alt="" class="photo-frame">
                    <img src="img\hobby\speedcubing\vcp2.jpg" alt="" class="photo-frame">
                    <img src="img\hobby\speedcubing\altagracia1.jpg" alt="" class="photo-frame">
                    <img src="img\hobby\speedcubing\altagracia2.jpg" alt="" class="photo-frame">
                    <button class="btnmore" onclick="showMorecubes(this)">➕</button>
                </div>
            </div>
            <div class="hobby-group">
                <h2>VideoGames</h2>
                <div class="photo-group">
                    <img src="img\hobby\games\games (3).png" alt="" class="photo-frame">
                    <img src="img\hobby\games\games (4).png" alt="" class="photo-frame">
                    <img src="img\hobby\games\games (2).png" alt="" class="photo-frame">
                    <img src="img\hobby\games\games (1).png" alt="" class="photo-frame">
                    <img src="img\hobby\games\games (5).png" alt="" class="photo-frame">
                    <img src="img\hobby\games\games (6).png" alt="" class="photo-frame">
                    <button class="btnmore" onclick="showMoreGames(this)">➕</button>
                </div>
            </div>
            <div class="hobby-group">
                <h2>Photography</h2>
                <div class="photo-group">
                    <img src="img\hobby\photography\FOTO (1).JPG" alt="" class="photo-frame">
                    <img src="img\hobby\photography\FOTO (2).JPG" alt="" class="photo-frame">
                    <img src="img\hobby\photography\FOTO (5).JPG" alt="" class="photo-frame">
                    <img src="img\hobby\photography\FOTO (24).JPG" alt="" class="photo-frame">
                    <img src="img\hobby\photography\FOTO (14).JPG" alt="" class="photo-frame">
                    <img src="img\hobby\photography\FOTO (13).JPG" alt="" class="photo-frame">
                    <button class="btnmore" onclick="showMorePhoto(this)">➕</button>
                </div>
            </div>
        </div>
```

Css:
```css
/*Style of the Hobby Card, groups, photos and buttons*/

.hobby-card {
  width: 90%;
  max-width: 800px;
  height: 400px;
  overflow-y: auto;
  padding: 20px;
  border: 3px solid #F1CCFF;
  background-color: #fff4cd;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  scroll-behavior: smooth;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.hobby-group {
  flex: 0 0 auto;
}

.photo-group {
  display: flex;
  flex-direction: row;
  gap: 15px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.photo-group h2 {
  flex: 1 0 100%;
  margin-bottom: 20px;
}

.photo-group::-webkit-scrollbar {
  height: 8px;
}

.photo-group::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 4px;
}

.photo-frame {
  width: 250px;
  height: 250px;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.photo-frame.visible {
  opacity: 1;
  transform: translateX(0);
}

.btnmore {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #ffde7b;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.btnmore:hover {
  background-color: #F1CCFF;
}
```

Js:
```js
//Buttons at the end of each group
function showMorecubes(button) {
  const group = button.parentElement;
  const hiddenImages = group.querySelectorAll('.photo-frame.hidden');
  hiddenImages.forEach(img => img.style.display = 'block');
  button.style.display = 'none';
  window.location.href = 'https://www.worldcubeassociation.org/persons/2023MONS06';
}

function showMoreGames(button) {
  const group = button.parentElement;
  const hiddenImages = group.querySelectorAll('.photo-frame.hidden');
  hiddenImages.forEach(img => img.style.display = 'block');
  button.style.display = 'none';
  window.location.href = 'https://www.youtube.com/@kiki--';
}

function showMorePhoto(button) {
  const group = button.parentElement;
  const hiddenImages = group.querySelectorAll('.photo-frame.hidden');
  hiddenImages.forEach(img => img.style.display = 'block');
  button.style.display = 'none';
  window.location.href = 'collage.html';
}
```

<img width="1204" height="1182" alt="Captura de pantalla 2025-07-21 195613" src="https://github.com/user-attachments/assets/3735df07-d727-4aef-ac53-0044de7714e4" />
<img width="866" height="490" alt="Captura de pantalla 2025-07-21 195549" src="https://github.com/user-attachments/assets/1a3fec2a-732d-41c3-aeb4-4fdcb402a11e" />

Collage:
HTML:
```html
<div class="collage-container">
  <!--All the photos :D-->
  <img src="img\hobby\photography\FOTO (1).JPG" alt="">
  <img src="img\hobby\photography\FOTO (2).JPG" alt="">
  <img src="img\hobby\photography\FOTO (3).JPG" alt="">
  <img src="img\hobby\photography\FOTO (4).JPG" alt="">
  <img src="img\hobby\photography\FOTO (5).JPG" alt="">
  <img src="img\hobby\photography\FOTO (6).JPG" alt="">
  <img src="img\hobby\photography\FOTO (7).JPG" alt="">
  <img src="img\hobby\photography\FOTO (8).JPG" alt="">
  <img src="img\hobby\photography\FOTO (9).JPG" alt="">
  <img src="img\hobby\photography\FOTO (10).JPG" alt="">
  <img src="img\hobby\photography\FOTO (11).JPG" alt="">
  <img src="img\hobby\photography\FOTO (12).JPG" alt="">
  <img src="img\hobby\photography\FOTO (13).JPG" alt="">
  <img src="img\hobby\photography\FOTO (14).JPG" alt="">
  <img src="img\hobby\photography\FOTO (15).JPG" alt="">
  <img src="img\hobby\photography\FOTO (16).JPG" alt="">
  <img src="img\hobby\photography\FOTO (17).JPG" alt="">
  <img src="img\hobby\photography\FOTO (18).JPG" alt="">
  <img src="img\hobby\photography\FOTO (19).JPG" alt="">
  <img src="img\hobby\photography\FOTO (20).JPG" alt="">
  <img src="img\hobby\photography\FOTO (21).JPG" alt="">
  <img src="img\hobby\photography\FOTO (22).JPG" alt="">
  <img src="img\hobby\photography\FOTO (23).JPG" alt="">
  <img src="img\hobby\photography\FOTO (24).JPG" alt="">
</div>
```
Css:
```css
.collage-container {
  column-count: 3;
  column-gap: 15px;
  padding: 20px;
  background-color: #fff4cd;
  border: 3px solid #F1CCFF;
  border-radius: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  max-width: 1000px;
  margin-top: 60px;
  width: 90%;
}

.collage-container img {
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 12px;
  border: 2px solid #F1CCFF;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  break-inside: avoid;
}

.collage-container img:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
```

<img width="846" height="478" alt="Captura de pantalla 2025-07-21 195523" src="https://github.com/user-attachments/assets/876f8006-6b19-4ebb-b7f9-f6fb81e51266" />

## What I learned
I wanted to organize each achievement on a single page.
It allowed me to put into practice what I knew about HTML, CSS, and JS, while maintaining a consistent aesthetic throughout the website. I was organized and tried to make it as scalable as possible to expand over time.
I tried to use the same colors as on my YouTube channel, using cards to organize the content as best as possible.