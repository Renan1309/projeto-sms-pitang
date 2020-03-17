class Cadastro {

    constructor(data) {
       this.name = '';
        this.surname = '';
        this.email = '';
        this.password = '';
        this.foneId = '8888888';
        this.status = 'true';
        if(data){
            this.email = data.email;
            this.password = data.password;
            this.name = data.name;
            this.surname = data.surname;
            
        }

    }

}
export default  Cadastro;