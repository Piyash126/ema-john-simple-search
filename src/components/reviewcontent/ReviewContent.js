import React from 'react';
import './ReviewContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewContent = ({product,handleRemoveItem}) => {
    const{id,name,price,quantity,img,shipping}=product;
    return (
        <div className='review-item'>
            <div className=''>
                <img src={img} alt=""/>
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <button className='btn-delete'>
                        <FontAwesomeIcon icon={faTrashAlt} className='delete-icon' onClick={()=>handleRemoveItem(id)}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewContent;