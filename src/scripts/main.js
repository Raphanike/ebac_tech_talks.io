AOS.init();

const dataDoEvento = new Date("Dec 25, 2024 8:00:00");
const timeStampDoEvento = dataDoEvento.getTime();


const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaEvento % diasEmMs) / horasEmMs);
    const minutosDoEvento = Math.floor((distanciaEvento % horasEmMs) / minutoEmMs);
    const segundosDoEvento = Math.floor((distanciaEvento % minutoEmMs) / 1000);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosDoEvento);
    console.log(segundosDoEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}D ${horasAteOEvento}H ${minutosDoEvento} M ${segundosDoEvento}S`;

    if (diasAteOEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = ' O Evento já comceçou!'
    }
},1000)