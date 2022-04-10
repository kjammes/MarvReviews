const phaseOneMovies = [
  {
    name: "Iron Man",
    imageUrl: "/assets/phase-1/iron-man",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Iron Man 2",
    imageUrl: "/assets/phase-1/iron-man-2",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Thor",
    imageUrl: "/assets/phase-1/thor",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Captain America - The First Avenger",
    imageUrl: "/assets/phase-1/captain-america-the-first-avenger",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Marvel's The Avengers",
    imageUrl: "/assets/phase-1/marvels-the-avengers",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
];

const phaseOne = document.getElementById("phase-one-posters");
phaseOneMovies.forEach(movie => {
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute("id", "image-parent");
  parentDiv.setAttribute("class", "image-parent");

  const img = document.createElement("img");
  img.classList.add("carousel");
  img.setAttribute("src", "." + movie.imageUrl + ".png");
  img.setAttribute("alt", movie.name);

  const link = document.createElement("a");
  link.setAttribute("href", "./details.html");
  link.innerText = "Expand";
  link.style.color = "white";
  link.style.marginInline = "10px";

  parentDiv.appendChild(img);
  // parentDiv.appendChild(link);

  phaseOne.appendChild(parentDiv);
});

const phaseTwoMovies = [
  {
    name: "Iron Man 3",
    imageUrl: "/assets/phase-2/iron-man-3",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Thor: The Dark World",
    imageUrl: "/assets/phase-2/thor-the-dark-world",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Captain America: The Winter Soldier",
    imageUrl: "/assets/phase-2/captain-america-the-winter-soldier",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Guardians of The Galaxy",
    imageUrl: "/assets/phase-2/guardians-of-the-galaxy",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Marvel's Avengers: Age Of Ultron",
    imageUrl: "/assets/phase-2/marvels-avengers-age-of-ultron",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Ant-Man",
    imageUrl: "/assets/phase-2/ant-man",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
];

const phaseTwo = document.getElementById("phase-two-posters");
phaseTwoMovies.forEach(movie => {
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute("id", "image-parent");
  parentDiv.setAttribute("class", "image-parent");

  const img = document.createElement("img");
  img.classList.add("carousel");
  img.setAttribute("src", "." + movie.imageUrl + ".png");
  img.setAttribute("alt", movie.name);

  const link = document.createElement("a");
  link.setAttribute("href", "./details.html");
  link.innerText = "Expand";
  link.style.color = "white";
  link.style.marginInline = "10px";

  parentDiv.appendChild(img);
  // parentDiv.appendChild(link);

  phaseTwo.appendChild(parentDiv);
});

const phaseThreeMovies = [
  {
    name: "Captain America: Civil War",
    imageUrl: "/assets/phase-3/captain-america-civil-war",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Doctor Strange",
    imageUrl: "/assets/phase-3/doctor-strange",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Guardians Of The Galaxy Vol.2",
    imageUrl: "/assets/phase-3/guardians-of-the-galaxy-vol-2",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Thor: Ragnarok",
    imageUrl: "/assets/phase-3/thor-ragnarok",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Black Panther",
    imageUrl: "/assets/phase-3/black-panther",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Avengers: Infinity War",
    imageUrl: "/assets/phase-3/avengers-infinity-war",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Ant-Man And The Wasp",
    imageUrl: "/assets/phase-3/ant-man-and-the-wasp",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Captain Marvel",
    imageUrl: "/assets/phase-3/captain-marvel",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Avengers: Endgame",
    imageUrl: "/assets/phase-3/avengers-endgame",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
];

const phaseThree = document.getElementById("phase-three-posters");
phaseThreeMovies.forEach(movie => {
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute("id", "image-parent");
  parentDiv.setAttribute("class", "image-parent");

  const img = document.createElement("img");
  img.classList.add("carousel");
  img.setAttribute("src", "." + movie.imageUrl + ".png");
  img.setAttribute("alt", movie.name);

  const link = document.createElement("a");
  link.setAttribute("href", "./details.html");
  link.innerText = "Expand";
  link.style.color = "white";
  link.style.marginInline = "10px";

  parentDiv.appendChild(img);
  // parentDiv.appendChild(link);

  phaseThree.appendChild(parentDiv);
});

const liveActionSeries = [
  {
    name: "Loki",
    imageUrl: "/assets/live-action-series/loki",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "The Falcon and The Winter Soldier",
    imageUrl: "/assets/live-action-series/the-falcon-and-the-winter-soldier",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Marvel Studios ASSEMBLED",
    imageUrl: "/assets/live-action-series/marvel-studios-assembled",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Wanda Vision",
    imageUrl: "/assets/live-action-series/wanda-vision",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
  {
    name: "Marvel Studios LEGENS",
    imageUrl: "/assets/live-action-series/marvel-studios-legends",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea tenetur earum deleniti molestiae modi eos, dolor delectus, blanditiis debitis beatae veritatis dicta hic id saepe mollitia perspiciatis, totam laboriosam!`,
  },
];

const liveAction = document.getElementById("live-action-posters");
liveActionSeries.forEach(series => {
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute("id", "image-parent");
  parentDiv.setAttribute("class", "image-parent");

  const img = document.createElement("img");
  img.classList.add("carousel");
  img.setAttribute("src", "." + series.imageUrl + ".png");
  img.setAttribute("alt", series.name);

  const link = document.createElement("a");
  link.setAttribute("href", "./details.html");
  link.innerText = "Expand";
  link.style.color = "white";
  link.style.marginInline = "10px";

  parentDiv.appendChild(img);
  // parentDiv.appendChild(link);

  liveAction.append(parentDiv)
});