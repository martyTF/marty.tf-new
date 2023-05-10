window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('searchbox').focus();
    }, 1000);
});

window.addEventListener('load', function () {
  const buttons = document.querySelectorAll("#linksrow a");
  const boxes = document.querySelectorAll(".box-shower");
  
  // set initial active category
  
  // attach click listeners to navbar buttons
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      // remove active class from all categories
      for (let j = 0; j < boxes.length; j++) {
        boxes[j].classList.remove("active");
      }
      document.getElementById("search").classList.add("active");
      // add active class to clicked category
      const id = buttons[i].getAttribute("id").replace("button_", "");
      document.getElementById(id).classList.add("active");
      // add hidden class to all categories except active
      for (let j = 0; j < boxes.length; j++) {
        if (!boxes[j].classList.contains("active")) {
          boxes[j].classList.add("hidden");
        }
      }
      // remove hidden class from active category after slide-out animation
      setTimeout(() => {
        for (let j = 0; j < boxes.length; j++) {
          if (boxes[j].classList.contains("active")) {
            boxes[j].classList.remove("hidden");
          }
        }
      }, 1100);
    });
  }
  });