import React, { useState } from 'react';
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
 
import { DataList, WidgetWrapper,Button, DataTable, MapComponent, TitleBar, Modal, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 
import './styles.scss';  

import { ResponsiveContainer, PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ComposedChart, } from 'recharts';
import { render } from "react-dom"; 
 
import EmissionTypeOverall from './emission-type-overall'


interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
} 

const Carbon_EmisisonWidget: React.FunctionComponent<IWidgetProps> = (props) => { 
    
let [inputValue, setInputValue] = React.useState<string | null>("Search");
let [selected, setSelected] = React.useState<string | null>("op-1"); 
let [startDate, setStartDate] = React.useState<string | Date>(new Date());
let [endDate, setEndDate] = React.useState<string | Date>(new Date());
const [currentFilter, setCurrentFilter] = React.useState< string| null>( null);
  
let [date, setDate] = React.useState<Date>(new Date())  

let [showModal, setShowModal] = React.useState(false);
let [selectedOption, setSelectedOption] = React.useState<string>(null)
let [selectedProduct, setSelectedProduct] = React.useState<string>(null)
let [description, setDescription] = React.useState<string>("")
let clientid = [
    { label: "CapitalLand", value: "ID1" },
    { label: "India", value: "IN" },
    { label: "United State", value: "US" },
]

let products = [
    { label: "Product1", value: "P1" },
    { label: "Product2", value: "P2" },
    { label: "Product3", value: "P3" },
]


const handleModalClose = () => {
    setShowModal(false);
};

const handleSubmit = () => {
    // Handle form submission logic here
};
 

    return (  <>

    <div className='emission-request-sec'> 
            <span className='emission-calc-icon'  onClick={() => setShowModal(true)}></span>
    </div>
        
        <WidgetWrapper className="carbon_widget">
           
            

            <TitleBar title='Emission By Product Type'>
                <div style={{ display: 'flex', alignItems: 'end' }}>
                <ToggleFilter
                        value={currentFilter}
                        onChange={(newValue: string) => {
                            setCurrentFilter(newValue);
                        }}
                        options={[
                            { label: "This Month", value: "month" },
                            { label: "This Year", value: "year" }
                        ]}
                        
                    /> 
                    <DateRangePicker
                        title=""
                        startDate={startDate}
                        endDate={endDate}
                        closeOnSelect
                        onChange={(newStart, newEnd) => {
                            setStartDate(newStart);
                            setEndDate(newEnd);
                        }}
                    />
                   
                </div>
            </TitleBar>
 

                    
            <div className="body">


                  <EmissionTypeOverall/>  

               {/* <EmissionProductList/> 

               <EmissionProductPieChart/> 

               <EmissionProductShow/>  */}
               

            </div>  

        </WidgetWrapper>

            <Modal className='emission-calculator'
                    title="New Emission Calculate Request"
                    show={showModal}
                    onOpen={() => { }}
                    onClose={handleModalClose}
                >
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>

                            <div>
                                <label htmlFor="field2">Client ID:</label>
                                <Select
                                    options={clientid}
                                    selected={selectedOption}
                                    onChange={(newValue, option) => {
                                        setSelectedOption(newValue)
                                    }}
                                />
                                <label htmlFor="field2">Products:</label>
                                <Select
                                    options={products}
                                    selected={selectedProduct}
                                    onChange={(newValue, option) => {
                                        setSelectedProduct(newValue)
                                    }}
                                />
                               
                            </div>
                            <label>File Upload:</label>
                            <div className="drag-and-dropcontainer">

                                <input type="file" id="fileUpload" name="fileUpload" />
                            </div>

                            <label>Description:</label>
                            <Input className="description-container"
                                type="text"
                                value={description}
                                onChange={(val: string) => { setDescription(val) }}
                            />
                            <Button
                                title="Submit"
                                onClick={() => { alert("Clicked") }}
                                className="submit-btn"
                            />
                        </form>
                    </div>
                </Modal>

        </>
    )
};


 


/**
 * Register as a Widget
 */
registerWidget({
    id: "carbon_Emisison",
    widget: Carbon_EmisisonWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

 

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "Carbon_Emisison",
    label: "Carbon_Emisison",
    // click: () => alert("Hello"),
    component: Carbon_EmisisonWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"Carbon_Emisison",
    component: Carbon_EmisisonWidget
});
*/