const generateOption = (valor)=> {
  const selectOption = document.getElementById("dia");

  const options = document.createElement('option','');
  options.value = valor;
  options.textContent = valor;
  
  selectOption.appendChild(options);
  
}

for(let i =1;i<= 31;i++){
  generateOption(i);
}

function calcularDDP() {
  const dia = document.getElementById("dia").value;
  const mes = document.getElementById("mes").value;
  const ano = document.getElementById("ano").value;
  
  // Obter o número de dias a partir do mês selecionado
  const numeroDiasPorMes = {
    "1": 31,
    "2": 28,
    "3": 31,
    "4": 30,
    "5": 31,
    "6": 30,
    "7": 31,
    "8": 31,
    "9": 30,
    "10": 31,
    "11": 30,
    "12": 31
  };
  
  // Verificar se o ano é bissexto
  if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
    numeroDiasPorMes["2"] = 29;
  }
  
  // Verificar se a data selecionada é válida
  if (dia > numeroDiasPorMes[mes]) {
    alert("Data inválida! Por favor, selecione uma data válida.");
    return;
  }
  
  // Calcular a DPP
  const dataUltimaMenstruacao = new Date(ano, mes - 1, dia);
  const dpp = new Date(dataUltimaMenstruacao.getTime() + 280 * 24 * 60 * 60 * 1000);
  
  document.getElementById("ddp").textContent = dpp.toLocaleDateString();
}
