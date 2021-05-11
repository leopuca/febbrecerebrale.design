var id = "none";
let prevId = "none";

let mql = window.matchMedia('(max-width: 600px)');
console.log(mql.matches);


function explore() {

  var menu = document.getElementById("menu");
  var style = menu.style.visibility;

  var svg = document.getElementById("starMenu");

  var footer = document.getElementById("footer");

  var content = document.getElementById("content");

  var about = document.getElementById("about");
  about.setAttribute("style", "visibility:hidden; opacity:0; height: 90vh;");

  if (id == "none"){
    if (style == "visible") {
      menu.setAttribute("style", "visibility:hidden; opacity:0; height: 90vh;");
      svg.setAttribute("style", "transform:rotate(0deg);");
      footer.setAttribute("style", "visibility:visible; opacity:1;");
    }

    else {
      menu.setAttribute("style", "visibility:visible; opacity:1; height: 100vh;");
      svg.setAttribute("style", "transform:rotate(90deg);");
      footer.setAttribute("style", "visibility:hidden; opacity:0;");
    }
  }



  else if (id == "an" || id == "ju" || id == "lu" || id == "pe" || id == "se" || id == "ke" || id == "sn" || id == "sk" || id == "tor" || id == "fr") {
    if (style == "visible") {
      menu.setAttribute("style", "visibility:hidden; opacity:0; height: 90vh;");
      svg.setAttribute("style", "transform:rotate(0deg);");
      content.setAttribute("style", "visibility:visible; opacity:1; height: 100vh;");
    }

    else {
      menu.setAttribute("style", "visibility:visible; opacity:1; height: 100vh;");
      svg.setAttribute("style", "transform:rotate(90deg);");
      content.setAttribute("style", "visibility:hidden; opacity:0; height: 90vh;");
    }

  }

  //change text a hover
  //projects
  //an
  $('#an').hover(function(){
    $('#prj').hide().text("Spazi da Riempire").fadeIn(200);
  }, function() {
    $('#prj').hide().text("-projects-").fadeIn(200);
  });

  //ju
  $('#ju').hover(function(){
    $('#prj').hide().text("Just the Four of Us").fadeIn(200);
  }, function() {
    $('#prj').hide().text("-projects-").fadeIn(200);
  });

  //se
  $('#se').hover(function(){
    $('#prj').hide().text("Giudizio").fadeIn(200);
  }, function() {
    $('#prj').hide().text("-projects-").fadeIn(200);
  });

  //lu
  $('#lu').hover(function(){
    $('#prj').hide().text("Lucha Fight Club").fadeIn(200);
  }, function() {
    $('#prj').hide().text("-projects-").fadeIn(200);
  });

  //pe
  $('#pe').hover(function(){
    $('#prj').hide().text("Persona").fadeIn(200);
  }, function() {
    $('#prj').hide().text("-projects-").fadeIn(200);
  });

  //experiments
  //sk
  $('#ke').hover(function(){
    $('#exp').hide().text("Keep it Safe").fadeIn(200);
  }, function() {
    $('#exp').hide().text("-experiments-").fadeIn(200);
  });

  //sk
  $('#sk').hover(function(){
    $('#exp').hide().text("Skull").fadeIn(200);
  }, function() {
    $('#exp').hide().text("-experiments-").fadeIn(200);
  });

  //sn
  $('#sn').hover(function(){
    $('#exp').hide().text("Sneakers Cuphead").fadeIn(200);
  }, function() {
    $('#exp').hide().text("-experiments-").fadeIn(200);
  });

  //to
  $('#tor').hover(function(){
    $('#exp').hide().text("Twisted Torso").fadeIn(200);
  }, function() {
    $('#exp').hide().text("-experiments-").fadeIn(200);
  });

  //fr
  $('#fr').hover(function(){
    $('#exp').hide().text("Fractal Branches").fadeIn(200);
  }, function() {
    $('#exp').hide().text("-experiments-").fadeIn(200);
  });

}



function about(){

  var about = document.getElementById("about");
  var style = about.style.visibility;
  console.log(style)

  if (style == "visible") {
    about.setAttribute("style", "visibility:hidden; opacity:0; height: 90vh;");
  }

  else {
    about.setAttribute("style", "visibility:visible; opacity:1; height: 100vh;");
  }

}



function content(clicked_id) {

  prevId = id;
  id = clicked_id;

  console.log(prevId);

  var menu = document.getElementById("menu");
  menu.setAttribute("style", "visibility:hidden; opacity:0; height: 90vh;");

  var svg = document.getElementById("starMenu");
  svg.setAttribute("style", "transform:rotate(0deg);");

  //use id to show different content

  //sinistra
  if(mql.matches === false){
    if (id == "an" || id == "ju" || id == "lu" || id == "pe" || id == "se"){
      document.getElementById("inContent").style.order="1";
      document.getElementById("empty").style.order="2";
    }
  }

  if (id === "an" ){
    document.getElementById("imgContent").src = "imgs/spazi_da_riempire.jpg";
    document.getElementById("titoloprj").innerHTML = "Spazi da Riempire";
    document.getElementById("sottotitoloprj").innerHTML = "Illustration";
    document.getElementById("contentLink").href="http://www.autoridimmagini.it/annual/premiati/";
    document.getElementById("captionContent").innerHTML = "Spazi da Riempire è una delle illustrazioni digitali selezionate per <span>l'Annual 2020 Autori di Immagini</span>, una delle pubblicazioni italiane più autorevoli e comprensive dell’immagine illustrata in Italia e in Europa. L'illustrazione ha ricevuto il <span>primo premio</span> nella categoria studenti ed il <span>Premio Wacom</span> come migliore opera d'arte digitale in concorso.";
  }

  if (id === "ju" ){
    document.getElementById("imgContent").src = "imgs/just_the_four.jpg";
    document.getElementById("titoloprj").innerHTML = "Just the Four of Us";
    document.getElementById("sottotitoloprj").innerHTML = "2D Animation";
    document.getElementById("contentLink").href="#";
    document.getElementById("captionContent").innerHTML = "Just the Four of Us è la storia animata di Billy Milligan, un criminale statunitense affetto da <span>disturbo dissociativo dell'identità</span>. Nel video si riflette sul tema dell'ospite inteso come parassita della mente e sul percorso che porta alla convivenza con il proprio disturbo mentale.";
  }

  if (id === "lu" ){
    document.getElementById("imgContent").src = "imgs/luchadores.jpg";
    document.getElementById("titoloprj").innerHTML = "Lucha Fight Club";
    document.getElementById("sottotitoloprj").innerHTML = "3D Animation";
    document.getElementById("contentLink").href="#";
    document.getElementById("captionContent").innerHTML = "Lucha Fight Club è un corto di animazione in cui si affrontano in combattimento due <span>Luchadores</span>.  La vittoria si gioca sul ring fra El Colibrì VS El Fantasma.";
  }

  if (id === "pe" ){
    document.getElementById("imgContent").src = "imgs/persona.jpg";
    document.getElementById("titoloprj").innerHTML = "Persona";
    document.getElementById("sottotitoloprj").innerHTML = "Speculative Design";
    document.getElementById("contentLink").href="https://www.instagram.com/personabysense/";
    document.getElementById("captionContent").innerHTML = "Cosa succederebbe se le proprie emozioni fossero visibili al nostro interlocutore? Immaginiamo un mondo in cui le relazioni umane siano mediate da un software in grado di svelare le emozioni e prevedere gli sviluppi di ogni rapporto personale. Affective computing, intelligenza artificiale, privacy e dati sensibili, sono questi i temi messi in discussione da Persona by Sense.";
  }


  if (id === "se" ){
    document.getElementById("imgContent").src = "imgs/giudizio.jpg";
    document.getElementById("titoloprj").innerHTML = "Giudizio";
    document.getElementById("sottotitoloprj").innerHTML = "Illustration";
    document.getElementById("contentLink").href="https://www.instagram.com/septarot/";
    document.getElementById("captionContent").innerHTML = "Giudizio è un'illustrazione digitale realizzata per il progetto <span>Septarot</span>, una rassegna annuale in cui vengono esposte le 22 carte dei tarocchi nei primi 22 giorni del mese di Settembre. Ogni carta viene ideata da un artista scelto dagli organizzatori della rassegna.";
  }



  //destra
  if(mql.matches === false){
    if (id == "ke" || id == "sn" || id == "sk" || id == "tor" || id == "fr"){
      document.getElementById("inContent").style.order="2";
      document.getElementById("empty").style.order="1";
    }
  }

  if (id === "ke" ){
    document.getElementById("imgContent").src = "imgs/keep_it_safe.jpg";
    document.getElementById("titoloprj").innerHTML = "Keep it Safe";
    document.getElementById("sottotitoloprj").innerHTML = "3D Modeling";
    document.getElementById("contentLink").href="#";
    document.getElementById("captionContent").innerHTML = "Una gabbia toracica spinata per tenere al sicuro il contenuto, protegge ed intrappola.";
  }

  if (id === "sk" ){
    document.getElementById("imgContent").src = "imgs/skull.gif";
    document.getElementById("titoloprj").innerHTML = "Skull";
    document.getElementById("sottotitoloprj").innerHTML = "3D Modeling";
    document.getElementById("contentLink").href="#";
    document.getElementById("captionContent").innerHTML = "Senso orario o antiorario?";
  }

  if (id === "sn" ){
    document.getElementById("imgContent").src = "imgs/snkrs.jpg";
    document.getElementById("titoloprj").innerHTML = "Sneakers Cuphead";
    document.getElementById("sottotitoloprj").innerHTML = "3D Modeling";
    document.getElementById("contentLink").href="#";
    document.getElementById("captionContent").innerHTML = "Collaborazione fittizia fra Off-White, Nike e Cuphead.";
  }

  if (id === "tor" ){
    document.getElementById("imgContent").src = "imgs/twisted.png";
    document.getElementById("titoloprj").innerHTML = "Twisted Torso";
    document.getElementById("sottotitoloprj").innerHTML = "3D Modeling";
    document.getElementById("contentLink").href="#";
    document.getElementById("captionContent").innerHTML = "Twisted Torso è una scultura digitale che rappresenta un corpo che si contorce convulsamente in un atto di liberazione.";
  }

  if (id === "fr" ){
    document.getElementById("imgContent").src = "imgs/branches.png";
    document.getElementById("titoloprj").innerHTML = "Fractal Branches";
    document.getElementById("sottotitoloprj").innerHTML = "3D Modeling";
    document.getElementById("contentLink").href="https://rarible.com/token/0x60f80121c31a0d46b5279700f9df786054aa5ee5:201027:0xb08052e65e751536eb1cf8bf5d5eb4dd4935be12";
    document.getElementById("captionContent").innerHTML = "Fractal Branches è la rappresentazione tridimensionale di un frattale. I frattali sono entità geometriche complesse caratterizzate dalla ripetizione all'infinito dello stesso modulo con scale diverse. Realizzata come opera di <span>Cryptoarte</span>, è disponibile come NFT su Rarible.";
  }

}
