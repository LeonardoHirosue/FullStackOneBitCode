import React, { Fragment, useState, useEffect } from 'react';
import Planet from './planet';
import Form from "./form";

/*O "Fragment" é utilizado para agrupar o nó no lugar da "div",
evitando a duplicação da "div" no DOM.
O component deve ser agrupado apenas em um único nó, no caso o Fragment,
caso contrário será identificado erro na compilação*/

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json');
    let data = await response.json();
    return data;
} 

const Planets = () => {
    const[planets, setPlanets] = useState([]);
    
    useEffect(() =>{
        getPlanets().then(data => {
            setPlanets(data['planets']);
        })
    }, []/* passar o parâmetro vazio quando desejar que o useEffect seja iniciado apenas uma vez,
    passar o nome do parametro quando desejar que o useEffect seja iniciado após sua alteração ou
    não passar o [] quando desejar que o useEffect seja sempre inicializado*/)

    const addPlanet = (new_planet) => {
        setPlanets([...planets, new_planet]);
    }

    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr/>
            <Form addPlanet = {addPlanet}/>
            <hr/>
            {
                planets.map((planet, index) => 
                    <Planet 
                        id = {planet.id}
                        name = {planet.name}
                        description = {planet.description}
                        link = {planet.link}
                        img_url = {planet.img_url}
                        key = {index}
                    />
                )

            }
        </Fragment>
    )
}

export default Planets;