import React from 'react'
import UseFetch from './UseFetch';
import './FetchData.css'

const FetchYogaData = () => {
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);

    return (
        <>
            <ul className='list_data_main'>
                <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
                {data && data.map((e) => (
                    <>
                        <li className='list_data'>
                            <h3><strong>Nombre: </strong>{e.name}</h3>
                            <p><strong>Beneficios: </strong>{e.benefits}</p>
                            <p><strong>Tiempo de duracion: </strong>{e.time_duration}</p>
                            {/* <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p> */}
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}

export default FetchYogaData