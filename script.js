const imagemVisualizacao = document.getElementById('imagem-visualizacao')
let tituloProduto = document.getElementById('titulo-produto')
let nomeCorSelecionada = document.getElementById('nome-cor-selecionada')
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura')
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura')
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura')

const verdeCipreste = {
    nome: 'verde-cipreste',
    pasta: 'imagens-verde-cipreste'
}

const azulInverno = {
    nome: 'azul-inverno',
    pasta : 'imagens-azul-inverno'
}

const meiaNoite = {
    nome: 'meia-noite',
    pasta: 'imagens-meia-noite'
}

const estelar = {
    nome: 'estelar',
    pasta: 'imagens-estelar'
}

const rosaClaro = {
    nome: 'rosa-claro',
    pasta: 'imagens-rosa-claro'
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const opcoesTamanho = ['41 mm', '45 mm']

let imagemSelecionada = 1
let tamanhoSelecionado = 1
let corSelecionada = 1

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id
    imagemSelecionada = idOpcaoSelecionada.charAt(0)
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'
}

function trocarTamanho(){
    // Atualizar variavel de controle do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0)
    // Mudar o titulo do produto
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado]
    // Mudar o tamanho da imagem de acordo com a opção
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena')
    }else{
        imagemVisualizacao.classList.remove('caixa-pequena')
    }
}

function trocarCor() {
    // Atualizar cor selecionada
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id
    corSelecionada = idOpcaoSelecionada.charAt(0)

    // Trocar titulo da pagina
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado]

    // Trocar nome da cor
    nomeCorSelecionada.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome

    // Trocar miniaturas exibidas
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg'
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg'
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg'

    // Trocar vizualização exibida
    imagemVisualizacao.src = './imagens/opcoes-cores/'+ opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg'
}