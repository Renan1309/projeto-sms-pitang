class Contact {

    constructor(data) {
        this.name = '';
        
        if(data){
            this.email = data.email;
            this.password = data.password;
            this.name = data.name;
            this.surname = data.surname;
            
        }

    }

}
export default  Cadastro;