## Estrutura Básica ##
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>

## Titulo e Paragrafos ##
- Para criar titulos usamos a tag <h<numero>>
- Vai de H1 até H5
- H1 serve para o titulo
- H2 subtitulo
Ex...
<h1>Meu titulo</h1>

## Tags de Formatação ##
<p></p> -> Paragrafos
<b></b> -> Negrito
<strong></strong> -> negrito mais semantico(padrão mais usado)
<i></i> -> Italico
<em></em> -> Italico Mais semantico(padrão mais usado)
<mark></mark> -> Marcar um texto
<small></small> -> Deixa o texto um pouco menor
<del></del> -> - Riscar um texto(removido) Mais semantico(padrão mais usado)
<s></s> -> Riscar um texto(removido)
<ins></ins> ->  - Mostrar que o texto foi inserido Mais semantico(padrão mais usado)
<u></u> -> Mostrar que o texto foi inserido
<sub> </sub> -> texto subscript
<sup></sup> -> texto superscript

## Links ##
- Para criar um link para outra pagina usamos a tag <a>
Ex...
<a href="<pagina>">Texto que vai usar no link</a>

## Imagens ##
- Para trabalhar com imagens usamos a tag <img> e usar a tag <alt> para colocar o nome da imagem
<img src="<Link>" alt="<nome da imagem"> -> com link externo
<img src="pasta/nomedoarquivo" alt="nomedeimagem"> -> arquivo no computador

## Quebra de Linha ##
- Para quebrar a linha usamos o <br>

## Listas ##
- Existe dois tipos de Lista as ordenadas ea não ordenada
- Lista não ordenada
Ex...
<ul>
  <li></li>
</ul>

- Lista ordenadas
Ex...
<ol>
  <li></li>
</ol>

## Tabela ##
Ex...
<Table> -> Indica que começou a tabela
  <tr> -> Linha da Tabela
    <th></th> -> Cabeçalho da Tabela
  </tr>
  <tr>
    <td></td> -> informações da tabela   
  </tr>
</Table>

## Comentario ##
Ex...
<!--Aqui coloca o comentario -->

## DIV ##
Juntar varios elementos em unico elemento
ex:
<div> 
  ................. 
</div>

## Formularios ##
- Serve para criar interação com usuário, como por exemplo contato, uma pesquisa em banco de dados
- 2 metodos de envio GET e POST
  - GET Aparece na requisição da pagina
  - POST esconde da requisição
- colocar uma action que é um endpoint 
  - Mesmo dominio - "/<caminho>"
  - Dominio diferente - "https://<caminho>"
- Ex...
  <form method="GET" action="/cadastro">

  </form>

- Input
  - Usuario inserir o texto
  - tipo <submit> para botão
  - EX tipos de input...
    <input type="text" name="email"> -> campo para texto
    <input type="text" name="nome">
    <input type="password" name="senha"> -> Campo fica como senha -> não usar com method GET
    <input type="checkbox" name="curso" value="op1"> -> Campo de Checkbox, value para mais de uma opção
    <input type="radio" name="gender" value="M" checked> -> Botão radio para unica escolha - checked já vem marcado
    
    <input type="reset" value="Limpar"> -> Botão para limpar o formulario - value nome na tela
    <input type="submit" value="Enviar"> -> botão para enviar formulário - value nome na tela

  - Selected
    - Serve para uma leção de dados em um unico campo
    - Ex...
      <select name="estado" >
        <option value="RJ"> Rio de Janeiro</option>
        <option value="SP" selected> São Paulo </option> vem selecionado na lista
      </select>
    - Outros parametros do selected
      - Size tamanho do selected
      - multiple: permitem multipla escolha
  
  - TextArea
    - Serve para colocar uma grande menssagem
    - Ex...
      <textarea></textarea>

  - HTML 5
    - Verificar a disponibilidade nos navegadores https://caniuse.com/
    - Ex...
      <input type="color" name="cor"> -> input para cor
      <input type="date" name="data"> -> input para data, Parametro max""
      <input type="datetime-local" name="data"> -> input para data, Parametro max""
      <input type="file" name="arquivo"> -> upload de arquivo
      <input type="number" name="numero"> -> só aceita numeros, pode usar parametros min e max
      <input type="range" name="intervalo" min="5" max="10"> -> range de um numero por uma barra
      <input type="tel" name="telefone"> -> no celular aparece o tecla de numero
      <input type="email" name="email"> -> Verifica se o campo é um email valido


## Tags Semanticas ##
- Serve para ranquear melhor o site no google (SEO)
- Tags
  <header></header> -> cabeçalho
  <nav></nav> -> Navegação
  <footer></footer> -> rodapé da pagina
  <main></main> ->Principal conteudo da sua pagina, deve aparecer apenas uma vez por pagina
  <section></section> -> seção do site
  <article></article> -> artigo do site

##  ##