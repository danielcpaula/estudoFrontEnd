## Jeitos de executar no HTML ##
- Interno
  <script></script>
- Externo
  <script src="script.js"></script>
- Testar
  alert("texto")

  ## Console ##
  - Serve para enviar a saida para o console
  - Ex...
    console.log("Hello World")

## Variaveis ##
- Serve para colocar um valor dentro
- Ex...
  var <nome>

- Atribuir um valor a variavel
- Ex
  var a = <valor>
  ou
  var a;
  a = <valor>

## Tipos de dados ##
- Boolean
 - Ex ...
    var a = true
- Null
- Undefined
- Number
  - Ex...
      var a = 1
- String
  - Ex...
      var a = "Isso é uma string"

## Operadores aritméticos ##
- + adição
  - Ex...
    a + b
- - Subtração
  - Ex...
    a - b
- * multiplicação
  - Ex...
    a * b
- / divisão
  - Ex...
    a / b
- % modulo
  - Ex...
    a % b
- ++ incremento
  - Ex...
    a ++
- -- Decremento
  - Ex...
    a --

## Operadores de comparação ##
- == igual a
- === valor igual e igual 
- != não é igual 
- !== não igual ou não igual
- > maior que
- < Menor que
- >= maior que ou igual a
- <= menor ou igual

## Operadores Lógicos ##
- && e
- ||ou
- Negativo

## String ##
- Atribuição
  - Ex... 
    var str = "Um valor qualquer"

- Imprimir um String
  - Ex ... 
  console.log("Isso é uma string" + str)

## Estruturas Condicionais ##
- Checa uma condição para uma tomada de decisão no código
  - Ou ela é verdadeira ou falsa
- Condicão IF
  if(<Condição>) {

  }
- Condição IF ELSE
  if(<Condição>) {

  } else {

  }
- Condição IF ELSE if
  if(<Condição>) {

  } else {
    if{

    }
  }
- Condição IF com 2 verificações
  if(<Condição1 \\ condição2>) {

  } else {

  }

- Operador Ternário
  - Verifição em apenas uma linha
  - Ex...
    idade >= 18 ? console.log("Pode") : console.log("Não Pode")
    var pode = idade >= 18 ? true : false

- Condicional Switch
  switch(<condicao>) {
    case <valor> :
      <ação>
      break;
    case <valor> :
      <ação>
      break;
    case <valor> :
      <ação>
      break;
    case <valor> :
      <ação>
      break;
    default:
      <Nenhuma das opções acima>
  }







