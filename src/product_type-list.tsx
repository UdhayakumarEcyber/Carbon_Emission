import React, { useState } from 'react'; 
 
 
import EmissionProductBarChart from './emission-product-bar_chart';

interface ProductTypeListProps {
  checkedItems: string[];
  setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>;
}


const ProductTypeList: React.FunctionComponent<{}> = (props) => {  
  const list = [
    {
      id: 'a',
      list_lable: 'Origin',
      list_lable_color: '#0088FE',
      list_value : 50.25,
      list_type : 'kgCO2e'
    },
    {
      id: 'b',
      list_lable: 'Transport Site to Site',
      list_lable_color: '#00C49F',
      list_value : 50.25,
      list_type : 'kgCO2e'
    },
    {
      id: 'c',
      list_lable: 'Manufacturing process',
      list_lable_color: '#FFBB28',
      list_value : 50.25,
      list_type : 'kgCO2e'
    },
    {
      id: 'd',
      list_lable: 'Transport Site to port',
      list_lable_color: '#FF8042',
      list_value : 50.25,
      list_type : 'kgCO2e'
    },
    {
      id: 'e',
      list_lable: 'Transport port to port',
      list_lable_color: '#AFB928',
      list_value : 50.25,
      list_type : 'kgCO2e'
    },
    {
      id: 'f',
      list_lable: 'Transport port to client',
      list_lable_color: '#FF8042',
      list_value : 50.25,
      list_type : 'kgCO2e'
    } 
  ];
  
  const ProductType = () => {
    return (
      <div className='product-type-list'>
        {list.map((item) => ( 

          <div className='product-type' key={item.id}>

              <label style={{backgroundColor : (item.list_lable_color)}}> {item.list_lable}</label> 
              <h3> {item.list_value} </h3> 
              <span> {item.list_type} </span>  
            
          </div>


        ))}
      </div>
    );
  };
 

    return (  <> 

            <ProductType />
            {/* <EmissionProductBarChart/> */}
        </>
    )
};


export default ProductTypeList;