export default function scrollTextAnimate() {
  const $scrollSection = document.querySelector("#section-12");
  const $scrollText = document.querySelectorAll(".description-list>li");

  // console.log($scrollText);
  let options = {
    // root: d.querySelector("#scrollArea"),
    rootMargin: "-50% 0px",
    threshold: 0,
  };
  const cb = (entries) => {
    // console.log(entries)
    // console.log($scrollText.scrollTop)
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log(entry.target)
        entry.target.classList.add("active");
        entry.target.previousElementSibling.classList.remove("active");
        entry.target.nextElementSibling.classList.remove("active");
      }
    });
  };
  const observer = new IntersectionObserver(cb, options);
  $scrollText.forEach((li) => {
    observer.observe(li);
  });
  // observer.observe();
}
