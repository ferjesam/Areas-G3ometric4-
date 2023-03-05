alert('Bienvenido al programa de calculo de áreas')
alert('A continuación seleccione sobre que figura desea calcular el área: ')
alert('1. triángulo')
alert('2. rectángulo')
alert('3. circulo')
let selection=prompt()

if(selection==1){

let base=prompt('Intruduzca la base del triángulo')
let altura=prompt('Intruduzca la altura del triángulo')
let area=base*altura/2
alert('El área del triángulo es '+ area)

}
else if(selection==2){

 let base=prompt('Intruduzca la base del rectángulo')
 let altura=prompt('Intruduzca la altura del rectángulo')
 let area=base*altura
 alert('El área del rectángulo es '+ area)
}
else if(selection==3){

 let radio=prompt('Intruduzca el radio del circulo')
 let area=Math.PI*radio*radio
 alert('El área del circulo es '+ area)
}
else{
 alert('Seleccione una opción valida')
}
