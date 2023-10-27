'use extrict'

let btnClean = document.getElementById('clean');
    
btnClean.onclick=function(){
    nombreTxt.value='';
    emailTxt.value='';
    numberTxt.value='';
    mensajeTxt.value='';  
    mensajeAlert.innerHTML='';
}

window.addEventListener('load', init, false);
function init(){
    let nombre = document.getElementById('nombreTxt');
    // let apellido = document.getElementById('apellidosTxt');
    let email = document.getElementById('emailTxt');
    let numero = document.getElementById('numberTxt');
    let mensaje = document.getElementById('mensajeTxt');
    let alerta = document.getElementById('mensajeAlert');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    btnEnviar.onclick=function(){
        nombre=nombreTxt.value;
        // apellido=apellidosTxt.value;
        email=emailTxt.value;
        numero=numberTxt.value;
        mensaje=mensajeTxt.value;

        if (nombre==='' && email===''&&numero===''&& mensaje===''){
        // if (nombre==='' && apellido ==='' && email===''&&numero===''&& mensaje===''){
            alerta.textContent="Hay campos vacíos pendientes de llenar";
            alerta.classList.add('alertaRoja');
        
            alerta.classList.remove('alertaVerde');
        } else if (nombre ===''){
            alerta.textContent="Por favor, completá tu nombre";
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        // } else if (apellido ===''){
        //     alerta.textContent="Por favor, completá tus apellidos";
        //     alerta.classList.add('alertaRoja');
        //     alerta.classList.remove('alertaVerde');
        } else if (email ===''){
            alerta.textContent="Por favor, completá tu corrreo electrónico";
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (expressionEmail.test(email) ===false){
            alerta.textContent="Este no es un correo electrónico válido";
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        }else if (numero ===''){
            alerta.textContent="Por favor, completá tu teléfono";
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        }else if (mensaje ===''){
            alerta.textContent="Por favor, detallar fecha, hora y cantidad de cupos a reservar";
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        }else{
            // alerta.textContent="Mensaje enviado. Pronto te responderemos";
            // alerta.classList.remove('alertaVerde'); 
            // alerta.classList.remove('alertaRoja');
            swal.fire({
                icon:"check",
                title: "Mensaje Enviado",
                text: 'Revisa tu correo para completar tu reserva',
                showConfirmButton: false,
                timer: 2000,
                html:'<iframe width="320" height="240" src="https://embed.lottiefiles.com/animation/90566"></iframe>',
            });
        }
    }
}

function clickHandle(evt, animalName) {
    let i, tabcontent, tablinks;
  
    // This is to clear the previous clicked content.
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Set the tab to be "active".
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Display the clicked tab and set it to active.
    document.getElementById(animalName).style.display = "block";
    evt.currentTarget.className += " active";
  }

