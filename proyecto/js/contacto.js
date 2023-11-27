'use extrict'

// function cleanInputs(){
//     nombreTxt.value='';
//     apellidosTxt.value='';
//     emailTxt.value='';
//     numberTxt.value='';
//     mensajeTxt.value='';  
//     mensajeAlert.innerHTML='';
// }


window.addEventListener('load', init, false);
function init(){
    let nombre = document.getElementById('nombreTxt');
    let apellido = document.getElementById('apellidosTxt');
    let email = document.getElementById('emailTxt');
    let numero = document.getElementById('numberTxt');
    let mensaje = document.getElementById('mensajeTxt');
    let alerta = document.getElementById('mensajeAlert');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    btnEnviar.onclick=function(){
        nombre=nombreTxt.value;
        apellido=apellidosTxt.value;
        email=emailTxt.value;
        numero=numberTxt.value;
        mensaje=mensajeTxt.value;

        if (nombre==='' && apellido ==='' && email===''&&numero===''&& mensaje===''){
            alerta.textContent="Hay campos vacíos pendientes de llenar";
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (nombre ===''){
            alerta.textContent="Por favor, completá tu nombre";
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (apellido ===''){
            alerta.textContent="Por favor, completá tus apellidos";
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
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
            alerta.textContent="¿Cuál es tu mensaje?";
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        }else{
            alerta.textContent="Mensaje enviado. Pronto te responderemos";
            alerta.classList.add('alertaVerde'); 
            alerta.classList.remove('alertaRoja');
        }
    }
}

function cleanInputs(){
    location.reload();
}