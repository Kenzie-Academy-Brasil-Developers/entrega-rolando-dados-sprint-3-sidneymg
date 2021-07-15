
let counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const dice = () => {

    for (let i = 0; i < 1000; i++) {

        let dado1 = Math.floor(Math.random() * 6 + 1);

        let dado2 = Math.floor(Math.random() * 6 + 1);

        soma = dado2 + dado1;

        indice = soma - 2;

        counter[indice] += 1;

    };

};

const showResults = () => {

    for (let i = 0; i < 11; i++){

        let resultado = document.getElementById('resultado');

        let div = document.createElement('div')

        let divGrafico = document.createElement('div')

        let p = document.createElement('p');

        let texto = document.createTextNode((i + 2) + ": " + counter[i]);

        divGrafico.classList.add('grafico', 'width'+i)

        divGrafico.style.width = `${counter[i] / 5}%`;

        p.appendChild(texto);

        div.appendChild(p);

        div.appendChild(divGrafico);

        resultado.appendChild(div);

    };

};

dice();

showResults();