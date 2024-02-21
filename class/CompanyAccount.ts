import DioAccount from "./DioAccount";
import validateStatus from "./DioAccount"

export default class CompanyAccount extends DioAccount {
    
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }
    getLoan = (balance: number): void => {
        if (this.validateStatus() && balance >=0) {
            console.log(`Você solicitou um emprestimo de R$${balance}`)
            console.log(`Seu saldo com o emprestimo R$${this.balance += balance}`)
        }
    }

    deposit = (balance: number): void => {

        if (this.validateStatus() && balance <=0) {
            throw new Error("Impossivel depositar essa quantia.");
            
        }
       
        console.log(`Você depositou R$${this.balance += balance}`)
        
    }

    withdraw = (balance: number): void =>{

        if (balance > this.balance) {
            console.log('Saldo insuficiente')
        }
        else if (this.validateStatus() && balance >0) {
            console.log(`Você sacou R$${this.balance -= balance}`)
        }
        else{
            console.log('Valor inválido')
        }

    }

}