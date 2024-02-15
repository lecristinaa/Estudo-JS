let alunos = [{
        nome: "Isabelle",
        idade: 17,
        ra: "245879",
        cursando: true,
        materiasCursadas: [
            {
                nome: "TIA",
                professor: "Jorge"
            },
            {
                nome: "ES",
                professor: "Guilherme"
            },
        ]
    },
    {
        nome: "Graziella",
        idade: 16,
        ra: "264878",
        cursando: true,
        materiasCursadas: [
            {
                nome: "Farmacologia",
                professor: "Odair"
            },
            {
                nome: "Regras Farmacêuticas",
                professor: "Rita"
            },
        ]
    },
    {
        nome: "Juliana",
        idade: 18,
        ra: "254789",
        cursando: true,
        materiasCursadas: [
            {
                nome: "Farmacologia",
                professor: "Odair"
            },
            {
                nome: "Regras Farmacêuticas",
                professor: "Rita"
            },
        ]
    },
    {
        nome: "Sarah",
        idade: 16,
        ra: "274563",
        cursando: true,
        materiasCursadas: [
            {
                nome: "Primeiros Socorros",
                professor: "Angela"
            },
            {
                nome: "Tecido",
                professor: "Dayane"
            },
        ]
    }
]
    

alunos.sort(function(a, b) {
    if(a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
})

alunos.map(alunos => { 
    console.log(alunos.nome)
})

console.log('----------------')



for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome + " : " + alunos[i].idade) 
}







/* const alunos = [
    {
        nome: "Isabelle",
        idade: 16,
        ra: "225064"
    },

    {
        nome: "Marcia",
        idade: 25,
        ra: "226471"
    },

    {
        nome: "Tais",
        idade: 18,
        ra: "235478"
    },

    {
        nome: "Paula",
        idade: 17,
        ra: "234875"
    },

    {
        nome: "Alessandra",
        idade: 17,
        ra:"224587"
    },

    {
        nome: "Gabriela",
        idade: 28,
        ra:"254789"
    }
]

console.log(alunos)
*/


/* let person = {
        nome: "Matheus",
        idade: 17,
        ra: "22222",
        materiasCursadas: ["TIA", "DPM"]
    }
    
    console.log(person.idade)
    
    person.idade = 18
    console.log(person.idade)
    
    console.log(person.materiasCursadas[1])
*/
