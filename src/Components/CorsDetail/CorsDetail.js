import React from 'react';
import './CorsDetail.css'

const CorsDetail = (props) => {
    const {name,more,price,blank,id,img} = props.Data;
    return (
        <div className='Cdetail-container'>
            <div><img src={img} alt="" /></div>

            <div className='User-detail'>
                <h2>Course Name : {name}</h2>
                <p>{more}</p>
                <h4>Course Price: ${price}</h4>
                <h6>recent views  <i class="fa-solid fa-eye"></i><i class="fa-solid fa-eye"></i>  {blank}</h6>
                <button onClick={()=> props.button(props.Data)} className='btn btn-primary btn-lg butn'><i class="fa-solid fa-forward"></i> Inrole Now <i class="fa-solid fa-backward"></i></button>


            </div>

       </div>
    );
};

export default CorsDetail;