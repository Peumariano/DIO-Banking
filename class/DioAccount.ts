export default abstract class DioAccount {
    private readonly name:string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true
    
    constructor(name:string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name
    }

    deposit = (balance: number): void => {

        if (this.validateStatus() && balance <=0) {
            throw new Error("Impossivel depositar essa quantia.");
            
        }
       
        console.log(`Você depositou R$${balance += this.balance}`)
        
    }
    
    withdraw = (balance: number): void =>{

        if (this.validateStatus() && balance >=0) {
            console.log(`Você sacou R$${balance - this.balance}`)
        }

    }

    getLoan = (balance: number): void => {
        if (this.validateStatus() && balance >=0) {
            console.log(`Você solicitou um emprestimo de R$${balance += this.balance}`)
        }
    }

    getValue = (): void => {
        console.log(`R$${this.balance}`)
        
    }


    protected validateStatus = (): boolean => {
        if(this.status == true){
            return this.status
        }
        else{throw new Error('Conta inválida')}
    }

}