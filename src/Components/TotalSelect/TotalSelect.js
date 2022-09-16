import React from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';
import './TotalSelect.css'

const TotalSelect = (props) => {
    
const Sela = props.Return;
const totalSelss = Sela.reduce((sdata , ssdata) => sdata+ssdata.price , 0)
    return (
        <div>
            {
                Sela.map(detail => <CourseDetails CardDetail={detail} ></CourseDetails> )
            }
            <h1 className='Total-cors-pr'>Total Course Price: $ {totalSelss}</h1>
  

        </div>
    );
};

export default TotalSelect;