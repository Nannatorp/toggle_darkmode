import { doc } from "prettier";
import "./style.css";

const btnDark = document.querySelector("#darkMode");
const btnLight = document.querySelector("#lightMode");

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function darkFunction() {
  document.documentElement.classList.add("dark");
  localStorage.theme === "dark";
}

btnDark.addEventListener("click", darkFunction);

function lightFunction() {
  document.documentElement.classList.remove("dark");
  localStorage.theme === "light";
}

btnLight.addEventListener("click", lightFunction);

// const btn = document.querySelector("button");

// function darkMode() {
//   btn.classList.toggle("on");

//   const darkOn = btn.classList.contains("on");

//   if (darkOn) {
//     btn.textContent = "Dark mode on";
//   } else {
//     btn.textContent = "Dark mode off";
//   }
// }

// btn.addEventListener("click", darkMode);
