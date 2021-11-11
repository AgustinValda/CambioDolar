//pesos, dolar,

function calculoCambio() {
  let pesos,
    Blue,
    oficial,
    bolsa,
    liqui,
    valorCompraBlue,
    valorCompraOf,
    valorCompraBolsa,
    valorCompraliqui;

  pesos = document.getElementById("dinero").value;
  valorCompraBlue = 205;
  valorCompraBolsa = 182.94;
  valorCompraliqui = 182.87;
  valorCompraOf = 106.47;
  Blue = (parseFloat(pesos) / parseFloat(valorCompraBlue)).toFixed(2);
  oficial = (parseFloat(pesos) / parseFloat(valorCompraOf)).toFixed(2);
  bolsa = (parseFloat(pesos) / parseFloat(valorCompraBolsa)).toFixed(2);
  liqui = (parseFloat(pesos) / parseFloat(valorCompraliqui)).toFixed(2);

  document.getElementById("compraBlue").innerHTML = "$" + pesos;
  document.getElementById("compraOficial").innerHTML = "$" + pesos;
  document.getElementById("compraBolsa").innerHTML = "$" + pesos;
  document.getElementById("compraLiqui").innerHTML = "$" + pesos;

  //-----------
  document.getElementById("recibeBlue").innerHTML = Blue;
  document.getElementById("recibeBolsa").innerHTML = bolsa;
  document.getElementById("recibeOficial").innerHTML = oficial;
  document.getElementById("recibeLiqui").innerHTML = liqui;
}

function calculoCambioDolar() {
  let dolar,
    Blue,
    oficial,
    bolsa,
    liqui,
    valorCompraBlue,
    valorCompraOf,
    valorCompraBolsa,
    valorCompraliqui;

  dolar = document.getElementById("dinero").value;
  valorCompraBlue = 202;
  valorCompraBolsa = 182.83;
  valorCompraliqui = 182.75;
  valorCompraOf = 99.74;
  Blue = parseFloat(dolar) * parseFloat(valorCompraBlue).toFixed(2);
  oficial = (parseFloat(dolar) * parseFloat(valorCompraOf)).toFixed(2);
  bolsa = (parseFloat(dolar) * parseFloat(valorCompraBolsa)).toFixed(2);
  liqui = (parseFloat(dolar) * parseFloat(valorCompraliqui)).toFixed(2);

  document.getElementById("compraBlue").innerHTML = "$" + dolar;
  document.getElementById("compraOficial").innerHTML = "$" + dolar;
  document.getElementById("compraBolsa").innerHTML = "$" + dolar;
  document.getElementById("compraLiqui").innerHTML = "$" + dolar;

  //-----------
  document.getElementById("recibeBlue").innerHTML = Blue;
  document.getElementById("recibeBolsa").innerHTML = bolsa;
  document.getElementById("recibeOficial").innerHTML = oficial;
  document.getElementById("recibeLiqui").innerHTML = liqui;
}
