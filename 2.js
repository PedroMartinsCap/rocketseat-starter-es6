const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

/* 
2.1 Utilizando o map
Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
2.2 Utilizando o filter
Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
2.3 Utilizando o find
Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
2.4 Unindo operações
Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:
 */

//2.1 MAP
const idade = usuarios.map(function(index){
    return index.idade
})

//2.2 FILTER
const userSelected = usuarios.filter(function(item){
  return item.idade > 18 && item.empresa == 'Rocketseat'
})

//2.3 FIND
const workplace = usuarios.find(function(item){
  return item.empresa == 'Google'
}) 

//2.4
const userSelectedByAge = usuarios
  .map(user => ({ ...user, idade: user.idade * 2 }))
  .filter(user => user.idade <= 50)

console.log(userSelectedByAge)
