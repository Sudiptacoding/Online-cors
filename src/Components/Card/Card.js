import React from 'react';
import { useState } from 'react';
import FakeData from '../../Components/FakeData/FakeData.json';
import CorsDetail from '../CorsDetail/CorsDetail';
import TotalSelect from '../TotalSelect/TotalSelect';
import './Card.css'

const Card = () => {
    const [data , setData] = useState(FakeData);
    const [bdata ,setBdata]=useState([])
    const HendelButton = (props) =>{
        const total = [...bdata,props];
        setBdata(total);
    }
    return (
        <div className='Card-container'>
            <div className='card-cors'>
                {
                    data.map(data => <CorsDetail button={HendelButton} Data={data}></CorsDetail> )
                }
            </div>
            <div className='Cd-box'>
            <h2 className='Cd'>Total Selected Course : {bdata.length}</h2>
            <TotalSelect Return={bdata}></TotalSelect>
            </div>
            


        </div>
    );
};

export default Card;