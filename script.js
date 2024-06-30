
const valores = document.querySelectorAll('.selected-number button');
const paragrafo = document.querySelector('#selected-value')
const container = document.querySelector('.container')
let valorSelecionado = null;


valores.forEach(valor => {
  valor.addEventListener('click', function() {
    
    valores.forEach(r => r.classList.remove('selected'));
    valor.classList.add('selected');


    
    valorSelecionado = valor.getAttribute('value');
  });
});


document.getElementById('submit').addEventListener('click', function() {
  if (valorSelecionado) {
    container.innerHTML = `<div class="numberselected">
                <img src="assets/numberselected.png" alt="" srcset="">

                <span>You selected ${valorSelecionado} out of 5</span>
                <section>
                    <h1>Thank you!</h1>
                    <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                </section>
            </div>`;
  } else {
    paragrafo.innerText = 'Por favor, escolha um dos 5 números para avaliar';
  }
});


