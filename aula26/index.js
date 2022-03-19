const data = new Date(2021, 8, 1, 17, 30, 500); // ano , mes , dia , hora , minuto , segundo
console.log('Dia' , data.getDate());
console.log('Mês' , data.getMonth() + 1); //mês começa do zero
console.log('Ano' , data.getFullYear());
console.log('Hora' , data.getHours());
console.log('Min' , data.getMinutes());
console.log('Seg' , data.getSeconds());
console.log('Ms' , data.getMilliseconds());
console.log('DiaSemana' , data.getDay()); //dia da semana 0= domingo, 6 Sábado
console.log(data.toString());