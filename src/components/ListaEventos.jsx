import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ListaEventos() {
    const [eventos, setEventos] = useState([])

    const getEventos = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/events?ts=1&apikey=${import.meta.env.VITE_API_KEY}&hash=${import.meta.env.VITE_API_HASH}`).then((response) => {

            setEventos(response.data.data.results)
        }).catch((error) => {
            console.log(error);
        })
    }

    console.log(eventos);
    useEffect(() => {
        getEventos()
    }, [])

    return (
        <div>
            <h1>Lista de Eventos Marvel</h1>
            {
                eventos.map((item, indice) => {
                    return(
                        <div className='card' key={indice}>
                            <h2>{item.title}</h2>
                            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                        </div>
                    )
                })
            }
        </div>
    ) 
}
