import hamburgerMenu from "./menu_hamburguesa.js";
import { clock, alarm } from "./reloj_alarma.js";
import { moveBall, cleanArrows, shortCuts } from "./eventos_teclado.js";
import { countDown, changeDate } from "./countdown.js";
import scrollTop from "./scroll_top.js";
import darkModeToggle from "./dark_mode.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./responsive_tester.js";
import userDiveceInfo from "./device_detection.js";
import networkStatus from "./network_status.js";
import webcamDetection from "./detecting_webcam.js";
import videoPlayer from "./custom_video-player.js";
import getGeolocation from "./geolocation.js";
import { searchFilter, createCards } from "./search_filter.js";
import randomSelection from "./random_selection.js";
import imgSlider from "./imgs_slider.js";
import scrollSpy from "./scroll_spy.js";
import autoplayVid from "./video_autoplay.js";
// import validateForm from "./form_validator.js";
import contactFormValidator from "./valid_contact_form.js";
import textToSpeech from "./text_to_speech.js";
import scrollTextAnimate from "./scroll_text-animation.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  //Funcion para el menu
  hamburgerMenu("#btn-menu", ".nav-modal", ".item-link");
  // Funciones de los botones de la section 1
  clock("#start-clock", "#stop-clock", "#clock-display");
  alarm("#start-alarm", "#stop-alarm", "#audio-elmt");
  // Funcion del boton del countdown
  changeDate("#countdown-date", "#countdown-btn");
  // Funcion del boton scroll-up
  scrollTop("scroll-up-btn");
  // Funcion para cargar contenido responsive en Mobile y Desktop
  /* Video */
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://youtu.be/JjU-4lFPSDQ" target="_blank">Película: Difícil Para Salir (YouTube)</a>`,
    `<h3>Película: Dificil Para Salir</h3><iframe width="560" height="315" src="https://www.youtube.com/embed/JjU-4lFPSDQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  /* Mapa */
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/qUC981itAwAvkB1BA" target="_blank">Rodaje en: Navarrete (Google Maps)</a>`,
    `<h3>Lugar de Rodaje</h3><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30077.0050494815!2d-70.89141835654813!3d19.557679745946444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1b92d80b5891f%3A0x7d958f6228c8c328!2sNavarrete%2051000!5e0!3m2!1ses-419!2sdo!4v1678457180767!5m2!1ses-419!2sdo" width="560" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  // Funcion para testear Responsive
  responsiveTester("responsive-tester");
  // Device detention
  userDiveceInfo("user-device");
  // Webcam detention
  webcamDetection("webcam");
  // Custom Video Player
  videoPlayer(
    "webcam",
    "player-controls",
    "toggle-play-btn",
    "capture-btn",
    "pic-in-btn"
  );
  // Get geolocation
  getGeolocation("geolocation");
  // Search filter
  createCards();
  searchFilter("#search-input", ".card");
  // Random selection
  randomSelection(".list-item", "#ran-select-btn", "#reset-btn");
  // Images Slider
  imgSlider();
  // Scroll Spy
  scrollSpy();
  //Autoplay Video
  autoplayVid();
  // Animate text on scroll
  scrollTextAnimate();
  //Validate Form
  // validateForm();
  contactFormValidator();
  //Text to speech
  textToSpeech();
});

d.addEventListener("keydown", (e) => {
  shortCuts(e);
  moveBall(e, "#ball-pointer", ".key-tracker-container");
  cleanArrows(".arrow");
});

d.addEventListener("change", (e) => {
  //countDown
  countDown("#countdown-date", ".countdown__display", "#countdown-btn");
});

// Funcion dark-mode
darkModeToggle("dark-mode-btn");
// Función status de Red
networkStatus();
