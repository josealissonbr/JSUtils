function mascaraCPFCNPJ(valor) {
  valor = valor.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  if (valor.length <= 11) { // Se o valor tiver até 11 caracteres, trata-se de um CPF
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  } else { // Senão, trata-se de um CNPJ
    valor = valor.replace(/^(\d{2})(\d)/, '$1.$2');
    valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    valor = valor.replace(/\.(\d{3})(\d)/, '.$1/$2');
    valor = valor.replace(/(\d{4})(\d)/, '$1-$2');
  }
  return valor;
}

function number_format(numero, decimais, separadorDecimal, separadorMilhar) {
    var n = numero,
        c = isNaN(decimais = Math.abs(decimais)) ? 2 : decimais,
        d = separadorDecimal == undefined ? "," : separadorDecimal,
        t = separadorMilhar == undefined ? "." : separadorMilhar,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

function mascaraDinheiro(valor) {
    valor = valor.replace(/\D/g, ""); // Remove tudo o que não é dígito
    valor = valor.replace(/^0+/, ""); // Remove os zeros à esquerda
    valor = valor.padStart(3, "0"); // Adiciona zeros à esquerda, se necessário
    valor = valor.replace(/(\d{2})$/, ",$1"); // Adiciona vírgula para os centavos
    valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."); // Adiciona ponto para os milhares
    valor = valor.replace(/\.(\d{2})$/, ",$1"); // Corrige a vírgula dos centavos quando o usuário digita um ponto

    // Adiciona zero na unidade se o valor tiver somente os centavos
    if (/^[1-9]$/.test(valor)) {
      valor = "0,0" + valor;
    } else if (/^\d{1,2}$/.test(valor)) {
      valor = "0," + valor.padStart(2, "0");
    }

    return valor;
  }
