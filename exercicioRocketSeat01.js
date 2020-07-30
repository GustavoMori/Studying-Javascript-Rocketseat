//Ex1
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
    };
function ex1(obj){
    return `O usuário mora em ${obj.cidade} / ${obj.uf}, no bairro ${obj.bairro}, na rua ${obj.rua} com nº ${obj.numero}.`
}
console.log(ex1(endereco));

//Ex2
// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {
    var vetor = []
    while (x < y){
        x++;
        if((x % 2) === 0){
            vetor.push(x)
    }}
    return console.log(vetor)
};
pares(32, 321);

//Ex3
function temHabilidade(skills) {
    var elemento = "Javascript"
    if (skills.indexOf(elemento) != -1){
        return true
    } else {
        return false
    }
};
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));

//Ex4
function experiencia(anos) {
    switch (anos){
        case 0:
            console.log("Iniciante")
            break;
        case 1:
        case 2:
        case 3:
            console.log("Intermediári")
            break;
        case 4:
        case 5:
        case 6:
            console.log("Avançado")
            break;
        case 7:
            console.log("Jedi Master")
            break;
        //default:
            //console.log("Valor indefinido.")
    }};
var anosEstudo = 7;
experiencia(anosEstudo);

//Ex5
var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];
function ex5 (array) {
    for (let value of array){
        console.log(`O ${value.nome} possui habilidades: ${value.habilidades}`)
    }
};
ex5(usuarios)










