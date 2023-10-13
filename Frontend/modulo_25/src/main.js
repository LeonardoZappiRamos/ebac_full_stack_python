class Aluno{
  construtor(nome, nota){
    this.nome = nome;
    this.nota = nota;
  }

  getNome(){
    return this.nome
  }

  setNome(nome){
    this.nome = nome;
  }

  getNota(){
    return this.nota
  }

  setNota(nota){
    this.nota = nota;
  }
}

const aluno1 = new Aluno();
aluno1.setNome('João');
aluno1.setNota(10);

const aluno2 = new Aluno();
aluno2.setNome('Maria');
aluno2.setNota(8);

const aluno3 = new Aluno();
aluno3.setNome('Carlos');
aluno3.setNota(2);

const aluno4 = new Aluno();
aluno4.setNome('Jorge');
aluno4.setNota(10);

const aluno5 = new Aluno();
aluno5.setNome('Sandra');
aluno5.setNota(6);

const arrayAluno = [aluno1, aluno2, aluno3, aluno4, aluno5];

const alunosFiltrados = arrayAluno.filter(function(i){
  return i.getNota() >= 6;
})

console.log(alunosFiltrados)