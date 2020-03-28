import axios from 'axios';


async function getListContactUser ( ) {
  axios.get('http://localhost:8080/contact/1',{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
        }
      }
    ).then(function (response) {
     console.log(response.data);
      return response ; 
    }.bind(this))
    .catch(function (error) {
      console.log(error);
      return error;
    })
   }

   export default getListContactUser