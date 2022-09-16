import React from 'react';
import './CourseDetails.css';

const CourseDetails = (props) => {
    const {name,more,price,blank,id,img}=props.CardDetail;
    return (
        <div className='Card-cons'>
            <div><img src={img} alt="" /></div>
            <div>
                <h6>Course Name : {name}</h6>
                <h6>Course Price: ${price}</h6>
                <h6>recent views {blank}</h6>

            </div>
            
        </div>
    );
};

export default CourseDetails;