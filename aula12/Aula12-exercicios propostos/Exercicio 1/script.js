
function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

//alterar a foto de acordo com o horario do sistema
//alterar a cor de fundo de acordo com o horario do sistema
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'imgs/manha.png'
        msg.innerHTML = `Agora são ${hora} Horas. Bom Dia`
        document.body.style.background = '#f3dcc2'
    } else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'imgs/tarde.png'
        msg.innerHTML = `Agora são ${hora} Horas. Boa Tarde`
        document.body.style.background = '#fe8566'
    }else{
        //boa noite
        img.src = 'imgs/noite.png'
        msg.innerHTML = `Agora são ${hora} Horas. Boa Noite`
        document.body.style.background = '#001b22'
    }




}


