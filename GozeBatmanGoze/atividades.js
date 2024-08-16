let seupai = [1, 2, 3, 4, 5]
let mult = seupai.map(x => x * 3)
let tostring = seupai.map(x => x.toString())
let aoquadrado = seupai.map(x => x**2)

let frutas =  ["maçã", "banana", "laranja"]
let maiuscula = frutas.map(x => x.toUpperCase())

let nomes = [
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 30 }, 
    { nome: "Charlie", idade: 35 }
]

let meuArray = [1, 2, 3]
meuArray = [4, 4, 4]
let minhaString = ["Olá"]
minhaString = ["o"]

let sla = "Olá"
let referencia = [{
    saudação: "Olá"
    }
]

let arraySimples = [1,2,3]
let arrayMulti = [[1, 2], [3, 4]]

console.log(mult)
console.log(tostring)
console.log(maiuscula)
console.log(nomes.map(x => x.nome))
console.log(aoquadrado)
console.log(minhaString)
console.log(meuArray)
console.log(sla)
console.log(referencia.map(x => x.saudação))
console.log(arraySimples)
console.log(arrayMulti[0])
console.log(arrayMulti[1])