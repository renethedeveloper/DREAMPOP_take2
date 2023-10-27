import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [productsArray, setProductsArray] = useState([]);
  const [selectedImage1, setSelectedImage1] = useState();
  



  useEffect(() => {

    const fetchData = async () => {
      
        
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setProductsArray(response.data.products);
        localStorage.setItem("products",JSON.stringify(response.data.products))

      } catch (error) {
        console.error(error);
      }
    };

    let productsData = localStorage.getItem("products")
    productsData = JSON.parse(productsData)
    if(productsData){
      setProductsArray([...productsData]) 
    } else {
      fetchData();
    }

    

    
  }, []); 
 
  

  return (
    <MyContext.Provider
      value={{
        selectedImage,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
