import React, { useState } from 'react'; 
 
import { DataList, WidgetWrapper, DataTable, MapComponent, Modal, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";

 

import EmissionProductBarChart from './emission-product-bar_chart';

 import EmissionProductShow from './emission-product-show';

 import CarbonEmissionOverTimeChart from './carbon_emission-overtime-chart';


const EmissionProductList: React.FunctionComponent<{}> = (props) => { 
  

  let [showModal, setShowModal] = React.useState(false);  
  let[modelData, setmodelData] = React.useState<any>(null); 

  let [inputValue, setInputValue] = React.useState<string | null>("CAPITALLAND");
  let [selected, setSelected] = React.useState<string | null>("op-1");


function CheckboxList() { 

  
  const [selectAll, setSelectAll] = useState(false);
  
  const [showCheckedItems, setShowCheckedItems] = useState(false);  
  
  

    const itemTypeList = [
      { id: 1, label: 'Type 1', value: '358', color : '#66bff1' },
      { id: 2, label: 'Type 2', value: '267', color : '#1a7f55'  },
      { id: 3, label: 'Type 3', value: '354', color : '#692a72'  }, 
      { id: 4, label: 'Type 4', value: '268', color : '#7a331b'  },
      { id: 5, label: 'Type 5', value: '315', color : '#eb98ac'  },
      { id: 6, label: 'Type 6', value: '105', color : '#638aad'  }, 
      { id: 7, label: 'Type 7', value: '187', color : '#43b290'  },
      { id: 8, label: 'Type 8', value: '305', color : '#676419' },
      { id: 9, label: 'Type 9',  value: '264', color : '#48aa9e' }, 
      { id: 10, label: 'Type 10', value: '085', color : '#ba6ff1' },
      { id: 11, label: 'Type 11', value: '295', color : '#8f802b' },
      { id: 12, label: 'Type 12', value: '261', color : '#e78974'  }, 
    ];

     
  

  const handleSelectAll = () => {
    if (selectAll) {
      setCheckedItems([]);
    } else {
      setCheckedItems(itemTypeList.map((item) => item.label));
    }
    setSelectAll(!selectAll);
  };

  const handleToggleCheckedItems = () => {
      setShowCheckedItems(!showCheckedItems);
    };

 
    // const [selectAll, setSelectAll] = useState(false);

    // const handleSelectAll = () => {
    //   if (selectAll) {
    //     setCheckedItems([]);
    //   } else {
    //     setCheckedItems(itemTypeList.map((item) => item.label));
    //   }
    //   setSelectAll(!selectAll);
    // };

    const [searchTypeQuery, setsearchTypeQuery] = useState("");

    function setTypeListShowModal(arg0: boolean): void {
      throw new Error('Function not implemented.');
    }
  
    const [checkedItems, setCheckedItems] = useState([]); 

    // const [showCheckedItems, setShowCheckedItems] = useState(false); 
    
    const handleCheckboxChange = (itemId:any) => {
      if (checkedItems.includes(itemId)) {
        setCheckedItems(checkedItems.filter((item) => item !== itemId));
      } else {
        setCheckedItems([...checkedItems, itemId]);
      }
    };
  
  

    // const handleToggleCheckedItems = () => {
    //     setShowCheckedItems(!showCheckedItems);
    //   };


 


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

 
      
      const [selectAll1, setSelectAll1] = useState(false);
  
      const [showCheckedItems1, setShowCheckedItems1] = useState(false);  
      
    
      const handleSelectAll1 = () => {
        if (selectAll1) {
          setCheckedItems1([]);
        } else {
          setCheckedItems1(productList.map((item) => item.label));
        }
        setSelectAll1(!selectAll1);
      };
  
      const handleToggleCheckedItems1 = () => {
          setShowCheckedItems1(!showCheckedItems1);
        };

  
      const productList = [
          { id: 1, label: 'Product 1', value: '358', color : '#66bff1' },
          { id: 2, label: 'Product 2', value: '267', color : '#1a7f55'  },
          { id: 3, label: 'Product 3', value: '354', color : '#692a72'  }, 
          { id: 4, label: 'Product 4', value: '268', color : '#7a331b'  },
          { id: 5, label: 'Product 5', value: '315', color : '#eb98ac'  },
          { id: 6, label: 'Product 6', value: '105', color : '#638aad'  }, 
          { id: 7, label: 'Product 7', value: '187', color : '#43b290'  },
          { id: 8, label: 'Product 8', value: '305', color : '#676419' },
          { id: 9, label: 'Product 9',  value: '264', color : '#48aa9e' }, 
          { id: 10, label: 'Product 10', value: '085', color : '#ba6ff1' },
          { id: 11, label: 'Product 11', value: '295', color : '#8f802b' },
          { id: 12, label: 'Product 12', value: '261', color : '#e78974'  }, 
        ];


          const [searchProductQuery, setsearchProductQuery] = useState("");
          const [checkedItems1, setCheckedItems1] = useState([]); 

          const handleCheckboxChange1 = (itemId: string) => {
            if (checkedItems1.includes(itemId)) {
              setCheckedItems1(checkedItems1.filter((item) => item !== itemId));
            } else {
              setCheckedItems1([...checkedItems1, itemId]);
            }
          };  

          function setProductListShowModal(arg0: boolean): void {
            throw new Error('Function not implemented.');
          } 



  
    return (
      <>
      <div className='overall_product-type'> 


          <div className="search-box">
                <input
                  type="text"
                  placeholder="Search Types..."
                  value={searchTypeQuery}
                  onChange={(e) => setsearchTypeQuery(e.target.value)}
                />
              </div>


          <div className='product-type-top'>

              <div className='product_type-box'>  
                  <div className='emis-list-box'> </div> 
                  <div className='emis-list-txt' style={{background: "none"}}>(kgCO2e) </div>  
              </div>

              <div className='product-check'>  
                  <label className='sel_all'>   
                      <em>All</em>

                      <input
                          type="checkbox"
                          checked={selectAll}
                          onChange={handleSelectAll}
                      />
                  </label>  
              </div> 

          </div> 
 


                  <ul>
                          {itemTypeList
                            .filter((type) =>
                            type.label.toLowerCase().includes(searchTypeQuery.toLowerCase())
                            )
                            .map((type) => (
                              <li key={type.id}>
                                <div className="product_type-box">
                                  <div
                                    className="emis-list-box"
                                    onClick={() => setShowModal(true)}
                                    style={{ backgroundColor: type.color }}
                                  >
                                    {type.label}
                                  </div>
                                  <div className="emis-list-txt">{type.value}</div>
                                </div>
                                <div className="product-check">
                                  <input
                                    type="checkbox"
                                    checked={checkedItems.includes(type.label)}
                                    onChange={() => handleCheckboxChange(type.label)}
                                  />
                                </div>
                              </li>
                            ))}
                        </ul> 

            </div>  

          <Modal title='PRODUCT WISE CARBON EMISSION'
              show={showModal}
              onOpen={() => { }}
              onClose={() => setShowModal(false)}  
          >

            <div className='carbon_product_type-popup-top'>

                <div className='carbon_product_type-popup-top-list'>  

                    <FormField className="no-padding mb-only">
                              <Label>Customer</Label>
                              <Input
                                  type="text"
                                  value={inputValue}
                                  onChange={(value) => { setInputValue(value) }}
                                  isValid={inputValue ? inputValue.trim().length > 0 : null} 
                                  placeholder="CAPITALLAND"
                              />
                     </FormField>

                </div>

                <div className='carbon_product_type-popup-top-list'> 
                     
                    <FormField className="no-padding mb-only">
                                    <Label>Product Type</Label>
                                    <Select
                                        selected={selected}
                                        options={[
                                            { label: "TYPE 01", value: "op-1" },
                                            { label: "TYPE 02", value: "op-2" },
                                            { label: "TYPE 03", value: "op-2" },
                                        ]}
                                        onChange={(value) => { setSelected(value) }}
                                        placeholder=" -- select --"
                                        isValid={selected ? selected?.length > 0 : null}
                                    />
                     </FormField>
                </div>

            </div>
              
            <div className='carbon_product_type carbon_product_type-popup'>
 
                <div className='product_type-list'>

                      <div className='overall_product-type'>  
                          
                          <div className="search-box">
                            <input
                              type="text"
                              placeholder="Search products..."
                              value={searchProductQuery}
                              onChange={(e) => setsearchProductQuery(e.target.value)}
                            />
                          </div>


                          <div className='product-type-top'>

                              <div className='product_type-box'>  
                                  <div className='emis-list-box'> </div> 
                                  <div className='emis-list-txt' style={{background: "none"}}>(kgCO2e) </div>  
                              </div>

                              <div className='product-check'>  
                                  <label className='sel_all'>   
                                      <em>All</em>

                                      <input
                                          type="checkbox"
                                          checked={selectAll1}
                                          onChange={handleSelectAll1}
                                      />
                                  </label>  

                              </div> 

                          </div> 


                            <ul>
                                {productList
                                  .filter((product) =>
                                    product.label.toLowerCase().includes(searchProductQuery.toLowerCase())
                                  )
                                  .map((product) => (
                                    <li key={product.id}>
                                      <div className="product_type-box">
                                        <div
                                          className="emis-list-box"
                                          onClick={() => setProductListShowModal(true)}
                                          style={{ backgroundColor: product.color }}
                                        >
                                          {product.label}
                                        </div>
                                        <div className="emis-list-txt">{product.value}</div>
                                      </div>
                                      <div className="product-check">
                                        <input
                                          type="checkbox"
                                          checked={checkedItems1.includes(product.label)}
                                          onChange={() => handleCheckboxChange1(product.label)}
                                        />
                                      </div>
                                    </li>
                                  ))}
                              </ul>  

                      </div> 

                  </div>
          </div>


                <div className='product-emission'>

                        <div className='check-list-item'> 
                            <p>
                            <input
                              type="checkbox"
                              checked={showCheckedItems1}
                              onChange={handleToggleCheckedItems1}
                            />
                            Emission Composition: 
                            <b> {checkedItems1.join(', ')}</b></p>
                        </div>

                        {showCheckedItems1 && (
                          
                          <div className='emission-check-list'> 
                          
                              <div className='carbon_widget'>

                                  <div className='emission-check-list'>
                                      <ProductType />

                                  
                                  </div>

                              </div>
  
                          </div>
  
                        )}   


          </div>

          <div className='emission-overtime-chart'>       
                <CarbonEmissionOverTimeChart/>
          </div>

          </Modal>

      </> 

    );
  }
 
 

    return (  <> 

            <div className="carbon_product_type"> 

                <div className="product_type-list">
                        <CheckboxList/>
                </div>

            </div>
         
        </>
    )
};


export default EmissionProductList;