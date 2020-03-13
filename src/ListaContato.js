import React , { Component } from 'react';

class ListaContato extends Component{

    state = {


    };


render(){

    fetch('http://localhost:8080/mensagens/user/2/contact/1/status/true')
       .then(res => res.json())
       .then(console.log)


    return(
        <>
        <h1>Component ListaContato</h1>
        <div className="App">
          <h1>Hello Word SMS</h1>
        </div>
        </>
    );

}

}
export default ListaContato;
