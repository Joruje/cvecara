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
        //icons meni
        createIconsMenu();

        //social meni
        createSocials();

        //nav bar
        createNavMenu();

        //about us part
        createAboutUs();

        accordion();

        elFirstName = document.querySelector("#fname");
        elLastName = document.querySelector("#lname");
        elAddress = document.querySelector("#inputAdress");
        elCity = document.querySelector("#inputCity");
        elPhone = document.querySelector("#inputPhone");
        elEmail = document.querySelector("#inputEmail");

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

        let dropdown = document.querySelector("#selectDelivery");
        dropdown.addEventListener("change", selectWarn);

        //proverava celu formu na submit btn
        let submitBtn = document.querySelector("#submitBtn");              
        submitBtn.addEventListener("click", checkFormOnSubmit);

        //sprecava formu da submituje
        var form = document.querySelector("#contact-form");
        function handleForm(event) { event.preventDefault(); } 
        form.addEventListener('submit', handleForm);
        
    }    
}else if(url=="/proizvodi.html"){ //  /proizvodi.html //  /C:/Users/djord/Desktop/cvecara/proizvodi.html
    //Proizvodi  PRETVORITI SVE U F-JE I ISPITATI URL I POZVATI ODGOVARAJCUE F-JE
    window.onload = function(){ 
        //icons meni
        createIconsMenu();
        //social meni
        createSocials();
        //nav bar
        createNavMenu();
        //artikli
        createArticles();

        //jQuery plug-in za uvelicavanje slika proizvoda
        $(".slika-artikla").AutoLightbox();
    }    

}else if(url=="/autor.html"){ //   /autor.html  //  /C:/Users/djord/Desktop/cvecara/autor.html
    window.onload = function(){ 
        //icons meni
        createIconsMenu();
        //social meni
        createSocials();
        //nav bar
        createNavMenu();
        
    }
}


function createIconsMenu(){
    let iconsDivId = ["navigation", "phone"];
    let iconsLink = [
        {
            id: "adr", 
            href: "https://www.google.rs/maps/place/Jovanke+Radakovi%C4%87+27,+Beograd+11160/@44.8019315,20.5171789,17z/data=!3m1!4b1!4m5!3m4!1s0x475a7a716ce5a781:0x21268bad4a0154!8m2!3d44.8019277!4d20.5193676?hl=en&authuser=0"
        },
        {
            id: "tel",
            href: "tel:+381652111492"
        }
    ];
    let menuIconsClass = ["zmdi zmdi-navigation", "zmdi zmdi-smartphone-android"];
    let menuIconsText = ["Jovanke Radaković 27", "+381 65 211 14 92"];
    let menuIconsContent = "";
    for(let i=0;i<iconsDivId.length;i++){
        menuIconsContent += `<div id="${iconsDivId[i]}">
        <a id="${iconsLink[i].id}" href="${iconsLink[i].href}">
            <i class="${menuIconsClass[i]}"></i>
            <p>${menuIconsText[i]}</p>
        </a>
        </div>`;
    }
    document.querySelector("#ikonice").innerHTML = menuIconsContent;

}

function createSocials(){
    let socialHref = ["https://www.instagram.com", "https://www.facebook.com"];
    let socialClass = ["zmdi zmdi-instagram", "zmdi zmdi-facebook-box"];
    let socialContent = "<ul>";
    for(let i=0;i<socialHref.length;i++){
        socialContent += `<li>
        <a href="${socialHref[i]}">
        <i class="${socialClass[i]}"></i>
        </a>
        </li>`;
    }   
    socialContent += "</ul>";
    document.querySelector("#social").innerHTML = socialContent;

}

function createNavMenu(){
    let aboutUs;
    if(url=="/" || url=="/index.html"){ // /index.html  // /C:/Users/djord/Desktop/cvecara/index.html
        aboutUs ="#about-us";
    }else{
        aboutUs = "index.html";
    }
    let menuText = ["Početna", "O nama", "Proizvodi", "Kontakt", "O autoru"];
    let menuHref = ["index.html", aboutUs, "proizvodi.html", "#contact-me", "autor.html"];
    let menuContent = "<ul>";

    for(let i=0;i<menuText.length;i++){
        menuContent+=`<li><a href="${menuHref[i]}">${menuText[i]}</a></li>`;
    }
    menuContent+="</ul>";
    document.querySelector("#meni-1").innerHTML = menuContent;
}


function createAboutUs(){
    let aboutUsDesc = [
        {
            heading: "Naša priča",
            text: "Još na početku razvoja svog biznisa, 1998. vlasnica cvećare Bela Ruža, Dragica, je znala šta joj je bio cilj: Da svim svojim klijentima uvek pruži prvoklasnu i najbolju uslugu. Zahvaljujući vedrom duhu, istrajnosti i integritetu njen biznis je veoma brzo procvetao i svrstao je među najbolje cvećare u Beogradu."
        },
        {
            heading: "Uvek sveže cveće na vašoj adresi!",
            text: "Cveće do naše cvećare dolazi  najmodernijim sistemima isporuke sa eko-farmi iz svih delova sveta. Zahvaljujući našim bliskim odnosima sa različitim eko-farmama iz Holandije, Ekvadora, Belgije i Srbije cveće direktno dolazi do naše cvećare. I to je razlog zbog čega garantujemo najsvežije bukete."
        },
        {
            heading: "Pomažemo Vam da realizujete Vaše želje",
            text: "U našoj cvećari vaše ideje i želje se materijalizuju. Naše osoblje pažljivo i pronicljivo bira cveće i dizajn koji će savršeno odgovarati Vašim željama i potrebama. Ukoliko želite da birate određenu boju ili stil, pozovite nas i napravićemo posebne cvetne aranžmane po vašoj želji."
        }
    ];
    let abousUsImg = ["assets/img/galerija/imgaboutus1.jpg", "assets/img/galerija/imgaboutus2.jpeg", "assets/img/galerija/imgaboutus3.jpg"];

    let aboutUsContent = "";
    for(let i=0;i<abousUsImg.length;i++){
        if(i%2==0){
            aboutUsContent += `<div class="row">
            <div class="contentAboutUs">
                <div class="descriptionAboutUs">
                    <div class="heading">
                        <h5>${aboutUsDesc[i].heading}</h5>
                        <hr/>
                        <p>${aboutUsDesc[i].text}</p>
                    </div>
                </div>
                <div class="imgAboutUs">
                    <img src="${abousUsImg[i]}">
                </div>
                
            </div>`;
        }else{
            aboutUsContent += `<div class="row">
            <div class="contentAboutUs">
                <div class="imgAboutUs">
                    <img src="${abousUsImg[i]}">
                </div>
                <div class="descriptionAboutUs">
                    <div class="heading">
                        <h5>${aboutUsDesc[i].heading}</h5>
                        <hr/>
                        <p>${aboutUsDesc[i].text}</p>
                    </div>
                </div>    
            </div>`;
        }
    }
    document.querySelector("#about-us-part").innerHTML = aboutUsContent;
}

function createArticles(){

    var articles = [
        [
            {
                name: "Aranžman 03",
                price: "3.790 RSD",
                img: "assets/img/galerija/cvec1.jpg"
            },
            {
                name: "Aranžman 06",
                price: "3.490 RSD",
                img: "assets/img/galerija/cvec3.jpg"
            },
            {
                name: "Aranžman 02",
                price: "4.490 RSD",
                img: "assets/img/galerija/cvec5.jpg"
            },
            {
                name: "Aranžman 05",
                price: "3.790 RSD",
                img: "assets/img/galerija/cvec4.jpg"
            },
            {
                name: "Buket 03",
                price: "2.790 RSD",
                img: "assets/img/galerija/cvec2.jpg"
            }
        ],
        [
            {
                name: "Aranžman 01",
                price: "2.790 RSD",
                img: "assets/img/galerija/cvec7.jpg"
            },
            {
                name: "Aranžman 21",
                price: "1.790 RSD",
                img: "assets/img/galerija/cvec6.jpg"
            },
            {
                name: "Buket 07",
                price: "3.490 RSD",
                img: "assets/img/galerija/cvec9.jpg"
            },
            {
                name: "Box Aranžman 12",
                price: "6.490 RSD",
                img: "assets/img/galerija/cvec8.jpg"
            },
            {
                name: "Box Aranžman 11",
                price: "5.790 RSD",
                img: "assets/img/galerija/cvec10.jpg"
            }
        ],
        [
            {
                name: "Aranžman 17",
                price: "1.790 RSD",
                img: "assets/img/galerija/cvec13.jpg"
            },
            {
                name: "Aranžman 23",
                price: "2.790 RSD",
                img: "assets/img/galerija/cvec12.jpg"
            },
            {
                name: "Aranžman 27",
                price: "3.790 RSD",
                img: "assets/img/galerija/cvec11.jpg"
            },
            {
                name: "Aranžman 24",
                price: "4.440 RSD",
                img: "assets/img/galerija/cvec14.jpg"
            },
            {
                name: "Aranžman 22",
                price: "3.790 RSD",
                img:"assets/img/galerija/cvec15.jpg"
            }
        ]
    ];
    console.log(articles[0][0].name);
    let articlesContent = "";
    for(let i=0;i<articles.length;i++){
        articlesContent += `<div class="row">`;
        for(let j=0;j<articles[0].length;j++){
            if(j%2==0){
                articlesContent += `<article class="artikli">
                <div class="slika-artikla">
                    <img src="${articles[i][j].img}"/>
                </div>
                <p>${articles[i][j].name}</p>
                <p>${articles[i][j].price}</p>
                <a href="#" id="stylebutton">Dodaj u korpu</a>
                </article>`;
            }else{
                articlesContent += `<article class="artikli lr-m-30">
                <div class="slika-artikla">
                    <img src="${articles[i][j].img}"/>
                </div>
                <p>${articles[i][j].name}</p>
                <p>${articles[i][j].price}</p>
                <a href="#" id="stylebutton">Dodaj u korpu</a>
                </article>`;
            }
        }
        articlesContent += `<div class="cleaner"></div></div>`;
    }
    
    document.querySelector("#articles-part").innerHTML = articlesContent;
}
function regExWarn(element, regEx){
    if(!regEx.test(element.value)){
        //let err = "err";
        element.nextElementSibling.classList.add("text-danger");
        element.nextElementSibling.innerHTML = "Niste ispravno popunili polje.";
        //arrayErr.push(err);
        //console.log(arrayErr.length);
        


        
    }else{
        element.nextElementSibling.classList.remove("text-danger");
        element.nextElementSibling.innerHTML = "";
        
    }
    
}
function selectWarn(){
    let selectEl = document.querySelector("#selectDelivery");
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
        chBtnParrent.lastElementChild.classList.add("text-danger");
        chBtnParrent.lastElementChild.innerHTML = "Niste se složili sa uslovima korišćenja.";
        //chBtnParrent.nextElementSibling.classList.add("text-danger");
        //chBtnParrent.nextElementSibling.innerHTML = "Niste se složili sa uslovima korišćenja.";
        termsErr = 1;
    }
    else{
        chBtnParrent.lastElementChild.classList.remove("text-danger");
        chBtnParrent.lastElementChild.innerHTML = "";
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

//jQuery kod koji se primenjuje za strelicu na početnoj strani.
$(window).scroll(function(){
    
    if ($(this).scrollTop() > 1000) {
        $('#scroll-up').css("visibility", "visible");
        $('#scroll-up').fadeIn();
    } else {
        $('#scroll-up').fadeOut();
    }
});
$('#scroll-up').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});

//jQuery plug-in za uvelicavanje slika proizvoda


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