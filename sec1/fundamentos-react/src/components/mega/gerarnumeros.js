

function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
}

console.log(gerarNumeroNaoContido(1, 5, [2, 3]))

function gerarNumeros(qtde) {
    const numeros = Array(qtde)
    .fill(0)
    .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(,1 60, nums)
        return[...nums, novoNumero]
    }, [])
    
    return numeros
}