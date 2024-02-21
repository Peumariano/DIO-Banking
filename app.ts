import CompanyAccount from "./class/CompanyAccount";
import MyAccount from "./class/MyAccount";

const companyAccount: CompanyAccount = new CompanyAccount('Dio', 11)

companyAccount.deposit(100)
companyAccount.getValue()

companyAccount.withdraw(50)
companyAccount.getValue()

companyAccount.getLoan(2000)
companyAccount.getValue()


const myAccount: MyAccount = new MyAccount('Pedro', 10)

myAccount.deposit(1000)
myAccount.getValue()

myAccount.withdraw(500)
myAccount.getValue()

myAccount.getLoan(200)
myAccount.getValue()