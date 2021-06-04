## Introdução ##
- JavaScript
  - Alteração do site ou aplicativo, conforme a interação do usuário
  - Roda também no computador (Back-end)

- O que podemos fazer?
  - Podemos criar aplicações web, mobile(React Native), desktop (Electron)
  - Empresas que usam
    - Facebook(Instagram, Whatsapp)
    - Google (Youtube, Gmail, Drive)
    - Uber
    - Netflix
    - TikTok
    - ...
  - 99,99% dos sites na web usam JavaScript
  - Linguagem obrigatória para quem programa o Front-end web

- Evolução
  - A comunidade cresce cada vez mais ea linguagem está sempre evoluindo

## Primeiros Passo ##
- Sintaxe
  - Toda linguagem tem
  - Uma boa comunicação necessita de uma boa sintaxe
  - 82% dos erros para iniciantes programação

- Maneiras de executar o JavaScript
  - Navegador do google Chrome
  - https://codepen.io/
  - Usar o Visual Studio Code
    - Usando a tag <script>
    - Obrir no navegador

- Comentarios
  - // --> comentario em linha
  - /* */ --> comentário de bloco
  
## Tipos de dados ##
- Introdução
  - Gramática
    - Elementos de linguagem e suas combinações
    - A arte de falar e escrever corretamente
  - Vocabulário
    - Conjunto de termos e expressões
    - Agupamento de palavras
  - Precisamos saber como escrever
  - precisamos saber os significados
  - Precisamos continuar aprendendo, para crescer nosso vocabulário

- String
  - Cadeia de caracteres
    - "" --> aspas duplas
    - '' --> aspas simples
    - ´´ --> template literals ou template string

- Number
  - Numeros
    - 33 --> inteiro
    - 12.5 --> reais
    - NaN --> not a number
    - Infinity --> infinito

- Boolean
  - Somente 2 valores 
    - True --> Verdadeiro
    - False --> falso

- Undefined vs null
  - Undefined --> Indefinido
  - Null
    - Nulo
    - objeto que não possui nada dentro
    - Diferente de indefinido

- Object
  - Ojeto
  - Propriedades / Atributos
  - Funcionalidades / Métodos
  - Ex...
    - { propriedade: valor}

- Array(Vetores)
  - Uma lista
  - Argumento de dado
  - Ex...
    - ["Mayk", 36]

- Conclusão
  - Tipos de dados
    - Conforme o ECMAScript standard temos 9 tipos de dados
  
  - Data Types
    - Primitivo / Primitive value
    - Structural
    - Structural Primitive
  
  - Primitivos
    - String
    - Number
    - Boolean
    - Undefined
    - Symbol
    - BigInt
  
  - Estruturais
    - Object
      - Array
      - Map
      - Set
      - Date
      * ...
    - Function
  
  - Primitivo Estrutural / Structural Root Primitiva
    - Null

    
## Variáveis ##
- Conhecendo as variáveis
  - Nomes simbólicos para receber algum valor
  - Atalhos de código
  - Identificadores
  - 3 palavra reservadas para criar uma variável
    - var
    - let
    - const
  
- Tipos dinâmicos
  - O JS é uma linguagem fracamente tipada e dinâmica
  - Variáveis não precisam ter um tipo previamente definido
  - Podemos mudar o conteúdo da variável

- Scope e var, let Const
  - Scope
    - Escopo determina a visibilidade de alguma variável no JS
  - Var
    - Permite leitura de diferentes scopos
  - Let e Const
    - Permite leitura da variável apenas dentro do escopo que ela se encontra

- Nomeando variáveis
  - Js é case-sensitive
  - JS aceita a cadeia de caracteres Unicode
  - Posso:
    - Iniciar com esses caracteres especiais: $
    - Iniciar com letras
    - colocar acentos
    - Letras maísculas e minúsculas fazem diferença
  - Não posso
    - Iniciar com números
    - Colocar espaçõs vazios
  - Ideal
    - Criar nomes que fazem sentido
    - Que explique o que a variável é ou faz
    - camelCase
    - snake_case
    - Escrever em inglês


## Praticando e Avançado ##
- Declaration assingnment var
  - Ex...
    - var name --> Declara
    - name = "mike" --> atribui
    - console.log(typeof name) --> verifica o nome

- Agrupando declarações
  - Ex...
    - let age, isHuman --> Declaração de variável agrupada
    - age = 18
    - isHuman = true
    - console.log(name, age, isHuman)

-Concatenando e interpolando variáveis
  - Ex...
    console.log('O ' + ' tem ' + age + ' anos.')
  - Ex...
    - Interpolando valores com template literals or template strings
      - console.log(`O ${name} tem ${age} anos.`)

- Objects
  - Ex...
    - const person = { 
      name: 'John',
      age: 30,
      weight: 88.6,
      isAdmin: true
    }
    - console.log(person) --> imprime o objeto
    -console.log(person.age) --> imprime um atributo do objeto

- Arrays
  - Ex...
    - const animals = [
      'Lion',
      'Monkey',
      'Cat'
    ]
    - console.log(animals[0]) --> Para imprimir a posição do array


## Funções ##
- Functions
  - Agrupar código
  - Ajuda e explicar melhor o código
  - Ajuda a repetir código
  - Ex de criação da função
    - function nomeDaFuncao() {

    }
  -Ex para executar/chamar a função
    - nomeDaFuncao()

- Argumentos e Parâmetros
  - function expression/function anonymous
    - Ex...
      const sum = function(){

      }
      sum()
  
  - Parametros da função (parameters)
    - Ex...
      const sum = function(number1, number21){
        console.log(number1 + number2)
      }
      sum(2,3) --> arguments - argumentos

- Retornando valores dentro da função
  - Ex...
      const sum = function(number1, number21){
        let total = (number1 + number2)
        return total
      }
      sum(2,3) --> arguments - argumentos
      console.log(sum(number1, number2))
  
- Function scope  
  Ex...
    let subject = 'create video'
    function createThink(subject){
      subject = 'study'
      return subject
    }
    console.log(createThink(subject))
    console.log(subject)

- Function Hoisting
  - Ex...
    saymyname()

    function sayMyName() {
      console.log('mayk')
    }

- Arrow function
  - Ex...
    const sayMyName = (name) => {
      console.log(name)
    }
    sayMyName('name')

- Callback function
  - Função que passa outra função
  - Ex...
    function sayMyName(name) {
      console.log(name)
    }
    sayMyName(
      () => {
        console.log('Estou em uma callback')
      }
    )

- Funções construtoras
  - Expressão new
  - Criar um novo objeto
  - this keyword
  - Ex...
    function Person() {
      this.name = name
    }

    const mayk = new Person("Mayk")
    const mayk = new Person("Joao")
    console.log(mayk)
    console.log(joao)

## Manipulando dados ##
- Prototype
  - prototype-based language
  - prototype chain
  - __proto__
  - Ex...
    23.0.__proto__
    "daniel".__proto__

- Type conversion coersion
  - Type conversion (typecasting) vs Type coersion
  - Alteração de um tipo de dado para outro tipo
  - Ex...
    console.log('9' + 5) --> Resultado 95
    console.log(Number('9') + 5) --> Resultado 14

- Strings em números
  - Manipulando Strings e Números
  - Transformar String em Número e Número em String
  - Ex...
    let string = '123'
    console.log(Number(string))
    let number = 321
    console.log(String(number))




## Expressões e Operadores ##

## Condicionais e controle de fluxo ##
