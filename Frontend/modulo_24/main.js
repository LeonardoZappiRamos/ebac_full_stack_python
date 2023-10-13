function Animal(nome) {
  this.nome = nome;
}

function animalDomentico(nome, patas, peso){
  let _numeroDePatas = patas;
  let _peso = peso;

  Animal.call(this, nome);

  // Setter
  this.setPatas = function(valor){
    if(typeof valor == 'number'){
      _numeroDePatas = valor;
    }else {
      throw new Error('Invalid parameter of patas')
    }
  }

  this.setPeso = function(valor){
    if(typeof valor == 'number'){
      _peso = valor;
    }else {
      throw new Error('Invalid parameter of peso')
    }
  }
  // Getter
  this.getPatas = function(){
    console.log(`O ${this.nome} tem ${_numeroDePatas} patas`)
  }

  this.getPeso = function(){
    console.log(`O ${this.nome} tem ${_peso} Kg`)
  }

  // Outer Methods
  this.daAPata = function(){
    console.log(`O ${this.nome} fez o gesto de dar a pata !!`);
  }
}

function animalSelvagem(nome, patas, peso){
  let _numeroDePatas = patas;
  let _peso = peso;

  Animal.call(this, nome);

  // Setter
  this.setPatas = function(valor){
    if(typeof valor == 'number'){
      _numeroDePatas = valor;
    }else {
      throw new Error('Invalid parameter of patas')
    }
  }

  this.setPeso = function(valor){
    if(typeof valor == 'number'){
      _peso = valor;
    }else {
      throw new Error('Invalid parameter of peso')
    }
  }
  // Getter
  this.getPatas = function(){
    console.log(`O ${this.nome} tem ${_numeroDePatas} patas`)
  }

  this.getPeso = function(){
    console.log(`O ${this.nome} tem ${_peso} Kg`)
  }

  // Outer Methods
  this.irCacar = function(){
    console.log(`O ${this.nome} saiu para caçar !!`);
  }
}

const tigreSelvagem = new animalSelvagem('Tigre Selvagem');
const loboSelvagem = new animalSelvagem('Lobo Selvagem');
const cachorroDoJoao = new animalDomentico('Max');

tigreSelvagem.setPatas(4);
tigreSelvagem.setPeso(95);

loboSelvagem.setPatas(4);
loboSelvagem.setPeso(70);

cachorroDoJoao.setPatas(3);
cachorroDoJoao.setPeso(65);

cachorroDoJoao.getPatas();
cachorroDoJoao.getPeso();
cachorroDoJoao.daAPata();