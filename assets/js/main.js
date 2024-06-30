let url = window.location.pathname;
const BASE_IMG = "assets/img/";
//regex
var regExName = /^([A-ZČĆŽŠĐ][a-zčćžšđ]{2,12})(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,12})*$/;
var regExEmail = /^[a-zA-Z0-9._-]{3,}\@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,3}$/;
var regExAddress = /^([A-ZČĆŽŠĐa-zčćžšđ0-9'\.\-\s\,]){5,24}(\s[A-Za-z0-9'\.\-\s\,])*$/; // Ne dozvoljava unos simbola u adresu.
var regExPhone = /^(06([0-6]|[8-9])[0-9]{7})$/;
var regExCity = /^([A-ZČĆŽŠĐ][a-zčćžšđ]{2,14})(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14})*$/;
var elFirstName, elLastName, elAddress, elCity, elPhone, elEmail;
var firstNameErr = 0, lastNameErr = 0, addresErr = 0, cityErr = 0, phoneErr = 0, emailErr = 0, clientTypeErr = 0, termsErr = 0, deliveryErr = 0;


if(url=="/" || url=="/index.html")//  /index.html //   /C:/Users/djord/Desktop/cvecara/index.html
{
    window.onload = function()
    { 
        createIcons();
        createSocials();
        createNavbar();
        accordion();

        elFirstName = document.querySelector("#firstName");
        elLastName = document.querySelector("#lastName");
        elAddress = document.querySelector("#adress");
        elCity = document.querySelector("#city");
        elPhone = document.querySelector("#phone");
        elEmail = document.querySelector("#email");

        //upozorava na ne popunjena polja
        elFirstName.addEventListener("blur", function(){
            regExWarn(elFirstName, regExName);
        });

        elLastName.addEventListener("blur", function(){
            regExWarn(elLastName, regExName);
        });

        elAddress.addEventListener("blur", function(){
            regExWarn(elAddress, regExAddress);
        });

        elCity.addEventListener("blur", function(){
            regExWarn(elCity, regExCity);
        });

        elPhone.addEventListener("blur", function(){
            regExWarn(elPhone, regExPhone);
        });

        elEmail.addEventListener("blur", function(){
            regExWarn(elEmail, regExEmail);
        });

        //upozorava na ne izabran nacin placanja
        let dropdown = document.querySelector("#delivery");
        dropdown.addEventListener("change", selectWarn);

        //proverava celu formu na submit btn
        let submitBtn = document.querySelector("#submitBtn");              
        submitBtn.addEventListener("click", checkFormOnSubmit);

        //sprecava formu da submituje
        var form = document.querySelector("#contact-form");
        function handleForm(event) { event.preventDefault(); } 
        form.addEventListener('submit', handleForm);
    }
        
}  


function createIcons(){
    let iconClasses = ["bi bi-geo-alt-fill text-white fa-xs  d-inline", "bi bi-telephone text-white d-inline"];
    let textClasses = ["small text-white  d-inline", "small text-white d-inline"];
    let text = ["Jovanke Radaković 27", "+381 65 211 14 92"];

    let iconsContent = `<ul class="navbar-nav">`;
    for(let i=0;i<text.length;i++){
        iconsContent +=  `<li class="nav-item">
                                <a href="" class="nav-link">
                                    <i class="${iconClasses[i]}"></i>
                                    <p class="${textClasses[i]}">${text[i]}</p>
                                </a>
                            </li>`;

    }
    iconsContent += `</ul>`;
    document.querySelector("#icons").innerHTML = iconsContent;
}





function createSocials(){
    let linkHrefs = ["https://www.instagram.com", "https://www.facebook.com"];
    let iconClasses = ["bi bi-instagram text-white", "bi bi-facebook text-white"];

    let socialContent = `<ul class="navbar-nav">`;
    for(let i = 0;i<linkHrefs.length;i++){
        socialContent += `<li class="nav-item d-inline">
                             <a href="${linkHrefs[i]}" class="nav-link">
                                <i class="${iconClasses[i]}"></i>
                             </a>  
                          </li>`;
    }
    socialContent += `</ul>`;
    document.querySelector("#socials").innerHTML = socialContent;
}


/**
 <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a href="index.html" class="nav-link">
                                Početna
                            </a>
                        </li>
                        
                        **/ 

function createNavbar(){
    let menuHrefs = ["index.html", "#", "proizvodi.html", "#", "#"];
    let text = ["Početna", "O nama", "Proizvodi", "O autoru", `<i class="bi bi-cart text-dark"></i>`];
    let menuContent = `<ul class="navbar-nav ms-auto">`;
    for(let i = 0;i<menuHrefs.length;i++){
        menuContent += `<li class="nav-item">
                             <a href="${menuHrefs[i]}" class="nav-link">
                                ${text[i]}
                             </a>  
                          </li>`;
    }
    menuContent += `</ul>`;
    document.querySelector("#navmenu").innerHTML = menuContent;
}


function regExWarn(element, regEx){
    if(!regEx.test(element.value)){
        element.nextElementSibling.classList.add("text-danger");
        element.nextElementSibling.innerHTML = "Niste ispravno popunili polje.";
            
    }else{
        element.nextElementSibling.classList.remove("text-danger");
        element.nextElementSibling.innerHTML = "";
        
    }
    
}

function selectWarn(){
    let selectEl = document.querySelector("#delivery");
    let selectedInd = selectEl.options.selectedIndex;
    if(selectEl.options[selectedInd].value=="0"){
        selectEl.nextElementSibling.classList.add("text-danger");
        selectEl.nextElementSibling.innerHTML = "Niste izabrali način plaćanja.";
        deliveryErr = 1;
    }
    else{
        selectEl.nextElementSibling.classList.remove("text-danger");
        selectEl.nextElementSibling.innerHTML = "";
        deliveryErr = 0;
    }
}


function checkFormOnSubmit(){
    if(!regExName.test(elFirstName.value)){
        elFirstName.nextElementSibling.classList.add("text-danger");
        elFirstName.nextElementSibling.innerHTML = "Niste ispravno popunili polje.";
        firstNameErr = 1;      
    }else{
        elFirstName.nextElementSibling.classList.remove("text-danger");
        elFirstName.nextElementSibling.innerHTML = "";
        firstNameErr = 0;       
    }

    if(!regExName.test(elLastName.value)){
        elLastName.nextElementSibling.classList.add("text-danger");
        elLastName.nextElementSibling.innerHTML = "Niste ispravno popunili polje.";
        lastNameErr = 1;
    }else{
        elLastName.nextElementSibling.classList.remove("text-danger");
        elLastName.nextElementSibling.innerHTML = "";
        lastNameErr = 0;    
    }

    if(!regExAddress.test(elAddress.value)){
        elAddress.nextElementSibling.classList.add("text-danger");
        elAddress.nextElementSibling.innerHTML = "Niste ispravno popunili polje.";
        addresErr = 1;
    }else{
        elAddress.nextElementSibling.classList.remove("text-danger");
        elAddress.nextElementSibling.innerHTML = "";
        addresErr = 0;
    }

    if(!regExCity.test(elCity.value)){
        elCity.nextElementSibling.classList.add("text-danger");
        elCity.nextElementSibling.innerHTML = "Niste ispravno popunili polje.";
        cityErr = 1;
    }else{
        elCity.nextElementSibling.classList.remove("text-danger");
        elCity.nextElementSibling.innerHTML = "";
        cityErr = 0;
    }

    if(!regExPhone.test(elPhone.value)){
        elPhone.nextElementSibling.classList.add("text-danger");
        elPhone.nextElementSibling.innerHTML = "Niste ispravno popunili polje.";
        phoneErr = 1;
    }else{
        elPhone.nextElementSibling.classList.remove("text-danger");
        elPhone.nextElementSibling.innerHTML = "";
        phoneErr = 0;
    }

    if(!regExEmail.test(elEmail.value)){
        elEmail.nextElementSibling.classList.add("text-danger");
        elEmail.nextElementSibling.innerHTML = "Niste ispravno popunili polje.";
        emailErr = 1;
    }else{
        elEmail.nextElementSibling.classList.remove("text-danger");
        elEmail.nextElementSibling.innerHTML = "";
        emailErr = 0;
    }

    //provera select polja
    selectWarn();
    
    //provera radio buttona
    let radioBtns = document.getElementsByName("type");
    let radioParrent = document.querySelector("#clientType");
    if(!radioBtns[0].checked && !radioBtns[1].checked){
        radioParrent.lastElementChild.classList.add("text-danger")
        radioParrent.lastElementChild.innerHTML = "Niste izabrali tip klijenta."
        clientTypeErr = 1;
    }
    else{
        radioParrent.lastElementChild.classList.remove("text-danger");
        radioParrent.lastElementChild.innerHTML = "";
        clientTypeErr = 0;
    }

    //provera checkboxa
    let chBtn = document.querySelector("#agree");
    let chBtnParrent = document.querySelector("#agreeTerms");
    if(!chBtn.checked){
        //chBtnParrent.lastElementChild.classList.add("text-danger");
        //chBtnParrent.lastElementChild.innerHTML = "Niste se složili sa uslovima korišćenja.";
        chBtnParrent.nextElementSibling.classList.add("text-danger");
        chBtnParrent.nextElementSibling.innerHTML = "Niste se složili sa uslovima korišćenja.";
        termsErr = 1;
    }
    else{
        chBtnParrent.nextElementSibling.classList.remove("text-danger");
        chBtnParrent.nextElementSibling.innerHTML = "";
        termsErr = 0;
        
    }

    let form = document.querySelector("#contact-form");
    
    if(!firstNameErr && !lastNameErr && !addresErr && !cityErr && !phoneErr && !emailErr && !clientTypeErr && !termsErr && !deliveryErr){
        form.lastElementChild.classList.add("text-success");
        form.lastElementChild.innerHTML = "Uspešno ste prosledili podatke.";
    }else{
        form.lastElementChild.innerHTML = "";
    }
}

















































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