# JSNativo-Masks

Abaixo eu trago alguns códigos de masks que podem te ajudar bastante.

## Mask para Dinheiro (Reais R$) mascaraDinheiro()
<details>
  <summary>Ver código</summary>
  
```
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

```
</details>
