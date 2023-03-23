import axios from 'axios';

const llamada = () =>{

    axios({
        method: 'get',
        url: 'https://api.chucknorris.io/jokes/random'
    })
    .then(function (response) {
        console.log(response);
        return response.data.value;
    })
    .catch(function(error){
        console.log(error);
    });
} 

export default llamada;