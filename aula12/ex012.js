// °Condições Alinhadas°
var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas`)

if (hora < 4){
    console.log('Boa Madrugada!')
}else if(hora < 12) {
    console.log('Bom dia!')
}else if(hora >12 && hora <= 18){
    console.log ('Boa Tarde!')
}else{
    console.log('Boa Noite')
}