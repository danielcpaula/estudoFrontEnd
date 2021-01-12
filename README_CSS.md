## REFERENCIAR UM CSS EXTERTO ##
<link href="<caminho>" rel="stylesheet">

## ID E CLASS ##
No css para identificar: 
ID = #<nome_do_id>
CLASS = .<nome_da_classe>

Para Identificar no HTML
ID = <<tag> id=<"nome_do_id">>
CLASS = <<tag> class=<"nome_da_class">>

## Variaveis no CSS ##
- Ex...
    :root {
        --color-green: greenç
    }
- Para chamar a variavel
    var(--color-green)


## Color ##
Nome da Cor
color: red

RGB -> RED - Green - Blue
color: rbg(0,0,0) => Valores vão de 0 - 255
color: rbga(0,0,0,0) = alpha(transparencia) valor vai de 0 - 1

HEXADECIMAL
color: #FFFFFF

## Background ##
Cor de fundo
background-color: <cor> 

Imgaem
background-image: <caminho_do_arquivo>

Propriedades
background-repeat: no-repeat -> não repete
backgound-size: cover -> pega o elmento todo
background-attachment: <tipo> -> fixed: fixa statico na pagina - scrool: roda junto com a pagina - local: roda junto com elemento
background-position: <posicao>

No mesmo elemento
backgound: <bg-color> <bg-image> <position/bg-size> <bg-repeat> <bg-origin> <bg-clip> <bg-attachment> <initial|inherit>

## Altura e Largura de elementos ##
width: <tamanho>
height: <tamanho>

## Unidades de Medida Fixas##
Tipos
cm -> centimetro 
mm -> milimetro
in -> polegada(1 polegada tem 2,54cm)
px -> pixel
pt -> ponto
pc -> picas(1 picas tem 12 pontos)

## Unidades de Medida Referencia##
Tipos 
em -> elemento referente ao elemento pai
rem -> elemento referente ao nosso elemento raiz <body>
vw -> view width - % da tela
vh -> view height - % da tela
vmin -> modifica do tamanho minimo
vmax -> modifica do maio tamanho
% -> Referente ao tamano pai

## MARGIN E PADDING ##
Margin - Distacia do elemento pra fora
margin-top: <tamanho>
margin-left: <tamanho>
margin-rigth: <tamanho>
margin-botton: <tamanho>
margin: <tamanho> -> Todos os elementos

Padding - Distancia do elemento para dentro
padding-left: <tamanho>
padding-rigth: <tamanho>
padding-botton: <tamanho>
padding: <tamanho> -> Todos os elementos

## Border ##
border-width: <tamanho>
border-style: <tipo_da_borda> -> estilo da borda ex. solid
border-color: <cor>
border-radius: <raio_da_borda> -> arrendodamento da borda

- Estilos de Border
dotted -> Pontilhado
dashed -> tracejado
solid -> continuo
none -> sem borda
hidden -> borda invisivél

Aplicar estilo apenas a uma parte da borda
border-top-color: <cor>

## BOX MODEL ##
Box model trata-se de como as 4 propriedades acima se relacionam para compor a dimensão do elemento.
1 - Conteudo
2 - padding
3 - Border
4 - margin

Exemplo
.classe {
    width: 50px;
    height: 50px;
    border: 1px solid gray;
    padding: 10px 20px;
}

box-sizing
box-sizinhg: border-box -> Serve para para o tamanho total respeitar o border

## Texto ##
Trabalhar o tamnho da fonte
- Cor
color: <cor> -> Cor do Texto

- Alinhamento
text-align: <alinhamento> -> escolher o alinhamento do Texto
text-align: justify -> Justifica o Texto
text-transform: <uppercase_lowcase_capitalize> -> texto maiusculo, minusculo ou primeira letra Maiuscula
text-ident: <tamanho_px> -> espaço para paragrafo

- Decoração
text-decoration: underline
text-decoration: overline
text-decoration: linetrue
text-decoration: none -> sem decoração no link
latter-sapcing: <tamanho_px> -> espaço entre as letras
line-height: <tamanho> -> espaçõ entre as linhas
word-spacing: <tamanho> -> espaço entre uma palavra e outra
text-shadow: <dislocamento_direita> <dislocamento_para_baixo> <cor_sombra>

## Fonte ##
- Familia generica de fonte
Com serifa
Sem serifa
Monoespace

- Tamanho da fonte
    px -> Tamanho fixo
    % -> tamanho relativo
    em -> tamamho tamanho relativo ao pai

- Propriedades
font-family: <fonte>, <outras_fontes_caso_não_exista> -> ex. sans-serfi, arial, "time new Roman"
font-style: <stilo_da_fonte> -> ex. italic
font-size: <valor> -> altera o tamanho da fonte, que por padrão é de 16px
font-weight: <stilo_da_fonte_ou_valor> -> ex. bold ou usar valores de 100 em 100 ex. 700
font-variant: <small-caps> -> faz com que todas as letras fiquem maiusculas e o Titulo fique na mesma proporção

- Personalizar fonte
Google fonts -> https://fonts.google.com/

- Fonte de outro sites
Exemplo
@fonte-face {
    font-family: <minha-fonte>
    src: url(<caminho_da_fonte>)
}

## Links ##
text-decoration: none
cursor: crosshair -> muda o tipo do cursor 
background: <cor> -> cor de fundo
padding: <tamanho>
border-radius: <tamanho>

- Exemplo para mudar de cor depois de apertado!
.links:visited {
    color: <cor>
}

- Exemplo para mudar de cor com o mouse em cima do link
.link:hover{
    background: <cor>
}

 - Exemplo para mudar de cor o item ativado
 .link:active {
     backgound: <cor>
     color: <cor>
 } 


 ## Listas ##
list-style-type: none -> Deixa sem a marcação na lateral ou colocar outra posição
list-style-image: url(<caminho>) -> colocar uma imagem na lista
list-style-position: inside -> coloca a imagem junto com o elemento

- Colocar borda na Listas
border: <tamanho> <tipo(solid)>

- Pode colocar cor na tabela com background-color

## Display ##
- Tipos de Display
    - Display: none
    - Display: block 
        -> Ocupa a linha toda
        -> Podemos usar altura e largura
        -> Não usar display block junto com paragrafo
    - Display: inline
        -> Não podemos trabalhar altura e largura
    - Display: inline-block
        -> Permite que eu altere a largura e altura

## Overflow ##
- Quando o conteudo ultrapassa o tamanho do componente
- Propriedades
overflow: visible -> mostra o conteudo completo
overflow: hidden -> esconde o conteudo que passou do componente
overflow: scroll -> cria um scroll no componente
overflow: auto -> cria um scroll somente a onde precisa
overflow-<y_ou_x> -> cria um scroll apenas a onde você deseja
Ex...
    overflow: auto

## Alinhamento horizontal ##
- Para a Div
margin: auto -> mantem o elemento centralizado
margin-left: auto -> mantem o elemento para esquerda

- Para Imgaem
    -> mudar para display:block
    -> caso precise que o display da imagem seja inline-block colocar dentro de uma div
        -> usar text-align:center

## Position ##
- Posição relativa
    - Posições
        -> Rigth
        -> Top
        -> Left
        -> Bottom
    Trabalhado a margem 
    Ex...
        position: relative;
        left: 20px

- Posição Static
    - Não altera a posição
    - Ex...
        position: static

- Posição fixed
    - Se adapita de acordo com a janela
    - Ex...
        position: fixed
        rigth: 20px
        botom: 20px

- Posição absolute
    - Parecido com o display static, mas pode receber parametros como top, botton
    - Ex...
        position: absolute

- Posição sticky
    - Fica preso na tela
    - Ex...
        position: sticky

## Float ##
- Opção para que o documento flutue na pagina    
- Ex...
    img {
        float: left
        float: rigth
    }   

## Alinhamento Vertical ##
 - Utilizar posição relativamen
 - Utilizar float
 - Utilizar transform
    - Ex...
        transform : translate(-50%, -50%)
- Pode ser usado com padding

## Viewport ##
- Serve para o site responsivo
- Precisamos usar a Tag meta
    - Ex...
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

## Media Queries ##
- Serve para adaptar o layout para diversos dispositivos de acordo com sua resolução
- Ex...
    @media screen and (max-width: 400px){}
- Tudo que tiver dentro do Screen vai ter prioridade se a resolução for conforme indicado
- Caso não tenha dentro do media vai obedecer o que tiver fora

## CSS Grid ##
- Alterar o posicionamento do elemento entre os eixos X e Y
- Ex...
    display: grid;
    grid-tamplate-columns: 1fr 1fr; -> Criando 2 colunas
- GAP
    - Espaço entre os elementos do grid
    - Ex ...
        gap: 20px

## Dicas CSS ##
- Zerar magin, botton, border
    *{
        margin: 0;
        border: 0;
        padding: 0;
    }

## box-sizing ##
- Para respeitar o limete do elemento
- Ex...
    - box-sizing: border-box;












