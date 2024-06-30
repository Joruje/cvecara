var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var swiperDjole = document.querySelector("#swiper-djole");
swiperDjole.innerHTML = "";
for(let i=1;i<7;i++)
{
    swiperDjole.innerHTML+=`<div class="swiper-slide"><img src="assets/img/galerija/cvec${i}.jpg" alt="" height="200px"></div>`;
    
}

//Accordion
accordion();

function accordion(){
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}