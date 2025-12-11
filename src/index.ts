import { Funcionario } from "./domain/Funcionario.js";
import { SistemaGestao } from "./services/SistemaGestao.js";

const sistemaGestao = new SistemaGestao();
const funcionario1 = new Funcionario(1, "João", "desenvolvedor", 5000, new Date("2022-01-15"));
const funcionario2 = new Funcionario(2, "Maria", "analista", 4500, new Date("2021-03-22"));
const funcionario3 = new Funcionario(3, "Carlos", "gerente", 6000, new Date("2020-07-10"));
const funcionario4 = new Funcionario(4, "Elisangela", "contador", 3500, new Date("2025-01-10"));

sistemaGestao.adicionarFuncionario(funcionario1);
sistemaGestao.adicionarFuncionario(funcionario2);
sistemaGestao.adicionarFuncionario(funcionario3);
sistemaGestao.adicionarFuncionario(funcionario4);

console.log('=================================')

console.log('Buscando funcionários:', sistemaGestao.listarFuncionarios());

console.log('=================================')

console.log("Buscando funcionário com ID 2:", sistemaGestao.buscarFuncionario(2));

console.log('=================================')

const funcionarioRemovido = sistemaGestao.removerFuncionario(2);
console.log('funcionário removido.', funcionarioRemovido);

console.log('=================================')

console.log('Funcionários após remoção:', sistemaGestao.listarFuncionarios());