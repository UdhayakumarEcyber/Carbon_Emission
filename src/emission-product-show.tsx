import React, { useState } from 'react';  
import EmissionProductBarChart from './emission-product-bar_chart';  
import ProductTypeList from './product_type-list'; 


interface EmissionProductShowProps {
  checkedItems: string[];
  setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>;
} 

function EmissionProductShow({ checkedItems, setCheckedItems }: EmissionProductShowProps) {
  const [showCheckedItems, setShowCheckedItems] = useState(false);

  const handleToggleCheckedItems = () => {
    setShowCheckedItems(!showCheckedItems);
  }; 


    return (
      <>
        <div className="check-list-item">
          <p>
            <input
              type="checkbox"
              checked={showCheckedItems}
              onChange={handleToggleCheckedItems}
            />
            Emission Composition :
            <b> {checkedItems.join(', ')}</b>
          </p>
        </div> 

{showCheckedItems && (
          
              <div className='emission-check-list' > 
                    <ProductTypeList/>  
  
                    <EmissionProductBarChart/>   
  
              </div>
        )}  

      </>
    );
  }
   

export default EmissionProductShow;