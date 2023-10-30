const cursor = document.querySelector(".pointer");
const body = document.body;

if (cursor) {
  window.onmousemove = (e) => {
    cursor.style.transition = "0s";
    cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY}px)`;
  };

  body.onmouseleave = (e) => {
    cursor.style.transition = ".5s";
    cursor.style.opacity = "0";
  };

  body.onmouseenter = (e) => {
    cursor.style.transition = "0s";
    let opacity = 0;
    const perStepAdd = 0.01;
    const interval = setInterval(() => {
      opacity += perStepAdd;
      cursor.style.opacity = opacity;
      if (cursor.style.opacity >= 1) {
        clearInterval(interval);
      }
    }, 5);
  };
}
