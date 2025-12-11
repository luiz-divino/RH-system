import type { Cargo } from "../domain/Cargo.js";
import { Funcionario } from "../domain/Funcionario.js";

export class SistemaGestao {
    private funcionarios: Funcionario[] = [];

    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }
    buscarFuncionario(id: number): Funcionario | undefined {
        return this.funcionarios.find(funcionario => funcionario.id === id);
    }
    listarFuncionarios(): Funcionario[] {
        return this.funcionarios;
    }
    removerFuncionario(id: number): any {
        const indice = this.funcionarios.findIndex(funcionario => funcionario.id === id);
        if (indice !== -1) {
            console.log("Removendo funcionário:", this.funcionarios[indice]);
            this.funcionarios.splice(indice, 1);
        }
        else {
            console.log("Funcionário não encontrado.");
        }

    }

}

