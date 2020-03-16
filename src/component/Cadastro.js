class Cadastro {

    constructor(data) {
       this.name = '';
        this.surname = '';
        this.email = '';
        this.password = '';
        if(data){
            this.email = data.email;
            this.password = data.password;
            this.name = data.name;
            this.surname = data.surname;
        }

    }

}
export default  Cadastro;