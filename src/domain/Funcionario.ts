import type { Cargo } from "./Cargo.js";

export class Funcionario {
    readonly id: number;
    nome: string
    cargo: Cargo;
    readonly salario: number;
    dataAdmissao: Date;

    constructor(id: number, nome: string, cargo: Cargo, salario: number, dataAdmissao: Date) {
        this.id = id;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.dataAdmissao = dataAdmissao;
    }

}

