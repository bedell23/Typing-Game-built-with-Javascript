window.addEventListener("load", init);

// available
const levels = {
  easy: 7,
  medium: 5,
  hard: 3,
};

const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector("#wordsInput");
const seconds = document.querySelector("#seconds");
const currentWord = document.querySelector("#currentWord");
const message = document.querySelector("#message");
const timeDisplay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");

// array of words
const words = [
  "xender",
  "xamarino",
  "timothy",
  "javascript",
  "lucas roy",
  "chris puski",
  "charito",
  "usman plato",
  "adorable",
  "programming",
  "development",
  "liberia",
  "zebra",
  "zuma",
  "monrovia",
  "elephant",
  "phobia",
  "generate",
  "stubborn",
  "cocktail",
  "well taken",
  "chelsea",
  "divine",
  "disire",
  "israel",
  "christian",
  "richard",
  "bedellson",
  "bedell",
  "forgiveness",
  "joblessness",
  "matorma",
  "beginning",
  "hannah",
  "dorbor",
  "exceptional",
  "lover",
  "favour",
  "disciplane",
  "excellent",
  "excuse",
  "committed",
  "angela",
  "lucas",
  "previous",
  "gave",
  "micky",
  "morris",
  "mayah",
  "hellen",
  "joseph",
  "prince",
  "abraham"


];

// initialize game
function init() {
  seconds.innerHTML = currentLevel;
  showWord(words);
  wordInput.addEventListener("input", startMatch);
  setInterval(countDown, 1000);
  setInterval(checkStatus, 50);
}
function showWord(words) {
  const randonIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randonIndex];
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = "";
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct";
    message.style.color = "#f33ff3";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

function countDown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}
