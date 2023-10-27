import React, { useState, useEffect } from 'react'
import Carousel from '../../context/API3';
import { useContext } from 'react'
import "./index.css"
import { MyContext } from '../../context/carouselContext/APIContext';


const Gallery = () => {
  
  
  const {defaultImage, selectedImage,setSelectedImage, productsArray} = useContext(MyContext);

  

useEffect(()=>{
  if(selectedImage===undefined){
  setSelectedImage(defaultImage);
  }
},[])


  const selectedProduct = productsArray.find((product)=>product.imageUrl===selectedImage)
 

  return (
   
    <div>
    <div className='mainProductDiv'>
      
    <div className='Title'>Kitchen</div>
        
      <div className='mainPic'>
      <img className='image' src={selectedImage} alt="mainImage" />
      </div>

      <div className='specs'>
      <h4 className='productTitle'> {selectedProduct? selectedProduct.productTitle: ""}</h4>
        <h3 className='productDescription'>{selectedProduct ? selectedProduct.productDescription : ''}</h3><br /><br /><br /><br /> <p className='price'>Price:{selectedProduct ? selectedProduct.productRegularPrice : ''} </p>   </div>
       

      <div className='paymentOptions'>Payments options</div>
      
  
    </div >
    <div className='carousel'>
      {/* < Carousel/> */} 
      {/* Need one carousel/dynamic */}
      </div>
    </div>
    
  )
}

export default Gallery;
