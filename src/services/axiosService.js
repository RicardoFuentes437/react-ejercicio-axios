import APIRequest from '../utils/config/axios.config';

export default function getRandomJoke(){
    return APIRequest.get('/', {
        validateStatus: function(status){
            return status < 500;
        }
    });
}