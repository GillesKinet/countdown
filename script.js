function getDaysBetween(startDate, endDate) {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((endDate - startDate) / msPerDay);
}

function randomVal(arr) {
  return Math.floor(Math.random() * arr.length);
}

const today = new Date();
const end = new Date(2026, 5, 1);
const daysBetween = getDaysBetween(today, end);

const daysLeft = document.querySelector(".days-left");
const daysLeftText = daysBetween !== 1 ? "days left" : "day left";
daysLeft.textContent = `${daysBetween} ${daysLeftText}`;

const container = document.querySelector(".container");
const img = document.createElement("img");
const button = document.createElement("button");
button.innerText = "Give me another GIF!";

const gifs = [
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDR3amVycXM1dmtrdWk1OXB3aTdmZzljYnR0NDU5dzF3cnFweGV3MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PsHrpsuiZLAEE/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2N0enVvZWVzMG4xano1ZHB6aHVrbmJld2lwOWtodm5uNmd0YnVtMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Idg2rAVGS3xMZtBdhu/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDg1OXJ3b3QxMDFpYWh5dWtiajJncW5sdHFubGFxemlpbHFmOHBicyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aI6mdaYJ3RcB34xHDz/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2s0OGZ4YWhwc3FuNzFzNDJkdXZhMGJjcHdoZjgzbmk1enQ1Z3Z3diZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VNTMx3LkpG2anXpwbr/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2s0OGZ4YWhwc3FuNzFzNDJkdXZhMGJjcHdoZjgzbmk1enQ1Z3Z3diZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1BXa2alBjrCXC/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2s0OGZ4YWhwc3FuNzFzNDJkdXZhMGJjcHdoZjgzbmk1enQ1Z3Z3diZlcD12MV9naWZzX3NlYXJjaCZjdD1n/d2lcHJTG5Tscg/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2s0OGZ4YWhwc3FuNzFzNDJkdXZhMGJjcHdoZjgzbmk1enQ1Z3Z3diZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3QWfMsI8IaarXxtBt6/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2d3MnlxaTZlZWxyemFsMDlvaTN0emx6aTN2M3RzY3VoaXdkZmxjcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/UHV2sgNX8ah6U/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTM3c21vMXp2bTd4M3Z3Zno2bm9oc3dqajYxNmduMzJ1NGczc280cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IJzFyWVbsRanZwJxjn/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Y21ta3FwMDIycmFpa21oN2dnbmZmbnB0dTQ2N2w5Y3B4MGxzdmRzcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ky9TEf6r50gzGp5xLl/giphy.gif",
];

let randomGif = gifs[randomVal(gifs)];

const gifEndDay =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHR2eTY3aGM0ZWVpenNkcHR0MjE5cnRrNWxpdXN1Z2JzdG84c21saiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/smC7liTJL3zKS5AYdG/giphy.gif";
container.appendChild(img);
container.appendChild(button);
img.setAttribute("src", daysBetween > 0 ? randomGif : gifEndDay);

button.addEventListener("click", () => {
  randomGif = gifs[randomVal(gifs)];
  img.setAttribute("src", daysBetween > 0 ? randomGif : gifEndDay);
});
