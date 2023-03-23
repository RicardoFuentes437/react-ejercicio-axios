import React, { useState } from 'react';
import getRandomJoke from '../services/axiosService';
import Button from '@mui/material/Button';

import '../styles/style.css'

const JokeGenerator = () => {

    const [broma, setBroma] = useState(null);
    const [meGusta, setMeGusta] = useState(0);
    const [noMeGusta, setNoMeGusta] = useState(0);

    const hacerLlamada = () =>{
        getRandomJoke()
        .then((response) => {
            console.log(response);
            setBroma(response.data.value);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const likeButton = () =>{
        setMeGusta(meGusta + 1);
    }

    const dislikeButton = () =>{
        setNoMeGusta(noMeGusta + 1);
    }

    return (
        <div>
            <h2>El chiste:</h2>
            { broma === null ? 
                <h4>Genera una broma pulsando el botón</h4> :
                <div>
                    <div><h4>{broma}</h4></div>
                    <div>
                        <Button variant="outlined" onClick={likeButton}>Me Gusta</Button>  
                        <Button variant="outlined" onClick={dislikeButton}>No Me Gusta</Button>
                    </div>
                </div>
            }
            <button onClick={hacerLlamada}>Generar</button>
            <div className='resultados'>
                <div className='contador'>
                    <p>Chistes que te han gustado:</p>
                    <p>{meGusta}</p>
                </div>
                <div className='contador'>
                    <p>Chistes que no te han gustado:</p>
                    <p>{noMeGusta}</p>
                </div>
            </div>
            
        </div>
    );
}

export default JokeGenerator;
