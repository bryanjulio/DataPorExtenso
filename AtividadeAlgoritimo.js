// Bryan Rodrigues Julio    RA:8110445

let dia = 08 .toString().padStart(2, '0')
let mes = 09 .toString().padStart(2, '0')
let ano = 2022



if (dia< 31){

}if (mes === 01) {
    (mes='Janeiro')
    
} 
else if (mes === 02) {
    (mes='Fevereiro')
} 
else if (mes === 03) {
    (mes='Março')
} 
else if (mes === 04) {
    (mes='Abril')
} 
else if (mes === 05) {
    (mes='Maio')
} 
else if (mes === 06) {
    (mes='Junho')
} 
else if (mes === 07) {
    (mes='Julho')
} 
else if (mes === 08) {
    (mes='Agosto')
} 
else if (mes === 09) {
    (mes='Setembro')
}
else if (mes === 10) {
    (mes='Outubro')
}
else if (mes === 11) {
    (mes='Novembro')
}
else if (mes === 12) {
    (mes='Dezembro')
}

if (dia>31) {
    console.log('Dia inválido!!!!')
} else if (mes>12){
    console.log('Mês inválido')
} else {
console.log ('Hoje é dia', dia, 'de', mes, 'de', ano);
}

let data = dia + mes + ano

function checarData(data) {
    return data instanceof Date && !isNaN(data);
  }
