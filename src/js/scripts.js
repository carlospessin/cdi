$.ajax({
  url: "https://www2.cetip.com.br/ConsultarTaxaDi/ConsultarTaxaDICetip.aspx",
  async: false // fazendo com que a requisição seja síncrona; Não haverá execução até que o processo dessa função termine.
}).done(function (response) {
  var data = JSON.parse(response);
  var taxaData = new Date(Date.parse(data.dataTaxa.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")));
  DI = data.taxa;
  dia = taxaData.toLocaleString('pt-br', { day: "2-digit", month: "2-digit", year: "2-digit" });
});

var str = DI;
var CDI = str.replace(",", ".");

window.onload = function () {
  document.getElementById("taxaPct").innerHTML = CDI + ' %';
  document.getElementById("data").innerHTML = dia;
  return;
}

function numDias() {
  objData = new Date(),
    numAno = objData.getFullYear(),
    numMes = objData.getMonth() + 1,
    numDias = new Date(numAno, numMes, 0).getDate();

  return numDias;
}

function calculo() {
  investimento = document.getElementById('investimento').value;

  rendimento = document.getElementById('rendimento').value;
  result = (CDI * rendimento);

  taxaAnual = result / 100;
  document.getElementById("taxaAnual").innerHTML = taxaAnual + ' %';

  taxaMensal = taxaAnual / 12;
  document.getElementById("taxaMensal").innerHTML = taxaMensal.toFixed(2) + ' %';

  taxaDiaria = taxaMensal / numDias();
  document.getElementById("taxaDiaria").innerHTML = taxaDiaria.toFixed(2) + ' %';

  rendimentoDiario = investimento * taxaDiaria / 100;
  rendimentoDiario = rendimentoDiario.toFixed(2);
  rendimentoDiario = rendimentoDiario.toString().replace(".", ",");

  document.getElementById("rendimentoDiario").innerHTML = 'R$ ' + rendimentoDiario;

  rendimentoMensal = investimento * taxaMensal / 100;
  rendimentoMensal = rendimentoMensal.toFixed(2);
  rendimentoMensal = rendimentoMensal.toString().replace(".", ",");
  document.getElementById("rendimentoMensal").innerHTML = 'R$ ' + rendimentoMensal;

  rendimentoAnual = investimento * taxaAnual / 100;
  rendimentoAnual = rendimentoAnual.toFixed(2);
  rendimentoAnual = rendimentoAnual.toString().replace(".", ",");
  document.getElementById("rendimentoAnual").innerHTML = 'R$ ' + rendimentoAnual;

  document.getElementById("calcular").disabled = true;

  document.getElementById("novoCalculo").classList.remove("disabled");
}