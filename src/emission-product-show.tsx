import React, { useState } from 'react'; 
 
 
import EmissionProductBarChart from './emission-product-bar_chart'; 

import ProductTypeList from './product_type-list';
  

const EmissionProductShow: React.FunctionComponent<{}> = (props) => { 
  

function CheckboxList() { 
    
  
    const [checkedItems, setCheckedItems] = useState([]); 

    const [showCheckedItems, setShowCheckedItems] = useState(false);
 

    const handleToggleCheckedItems = () => {
        setShowCheckedItems(!showCheckedItems);
      };
  
    return (
    
        <>   

        <div className='check-list-item'> 
            <p>
            <input
              type="checkbox"
              checked={showCheckedItems}
              onChange={handleToggleCheckedItems}
            />
            Emission Composition: 
            <b> {checkedItems.join(', ')}</b></p>
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


 
 

    return (  <> 

            
                        <CheckboxList/>
              
        </>
    )
};


export default EmissionProductShow;