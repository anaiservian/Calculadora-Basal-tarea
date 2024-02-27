// let button = document.getElementById ("calcular")

// button.addEventListener ("click", calcular)

// function calcular (){
//     let peso = document.getElementById('peso').value

//     console.log (peso);
// }

const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');


CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO <= 0) {
        ERROR.style.display = 'none'
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';    
    } 
    else if (DATO <= 30) {
        let flujo = HollidaySegar(DATO); 
        let mantenimiento = flujo * 1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2= ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }    
    else {
        let flujo = supCorporal(DATO); 
        FLU.innerHTML = flujo[0].toFixed(0) + ' cc';
        MAN.innerHTML = flujo [1].toFixed(0) + ' cc';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
}
)
function HollidaySegar(peso) {
    let resto = peso;
    let flujo = 0;
    if (resto > 20) {
        let aux = resto - 20;
        flujo += aux * 1;
        resto -= aux;
    }
    if (resto > 10) {
        let aux = resto - 10;
        flujo += aux * 2;
        resto -= aux;
    }
    flujo += resto * 4;
    return flujo;
}

function supCorporal(peso) {
    let aux=0, resultado1, resultado2;
    aux =  ((peso * 4) + 7) / (peso + 90);
    resultado1 = aux * 1500;
    resultado2 = aux * 2000;
    let resultados = [resultado1,resultado2]
    return resultados
}
