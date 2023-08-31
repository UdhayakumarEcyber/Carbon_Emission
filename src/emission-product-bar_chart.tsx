
import React, { useState } from 'react'; 
 
 
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
 

const EmissionProductBarChart: React.FunctionComponent<{}> = (props) => {  
 
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
let currentColor = 0;
function nextColor() {
    currentColor++;
    return COLORS[currentColor % COLORS.length];
}
 let ServiceCategories:any = {};
 function transformData(data:any) {
     let months:any = {};
     for(let row of data) {
         let month = row.monthname;
         if (!months[month]) {
             months[month] = {};
             
         }
         months[month][row.ServiceCategoryName] = row.CWOMCOUNT;
         if (!ServiceCategories[row.ServiceCategoryName]) {
             ServiceCategories[row.ServiceCategoryName] = {key:row.ServiceCategoryKey,color:nextColor()};
         }
     }
     let monthKeys = Object.keys(months);
     let x =  monthKeys.map(month => Object.assign({monthname:month},months[month]));
     console.log('TTT',x);
     return x;
 }



 function getBarChatData() {

  return [
    {
      name: 'Type 01',
      data: [4, 4, 2, 4, 4]
    },
    {
      name: 'Type 02',
      data: [10, 4, 3, 21, 3]
    },
    {
      name: 'Type 03',
      data: [12, 17, 15, 10, 20]
    },
    {
      name: 'Type 04',
      data: [11, 20, 12, 40, 18]
    },
    {
      name: 'Type 05',
      data: [1, 5, 20, 41, 24]
    }
  ];
}

 function MyHighchartsComponent() {


  const series = getBarChatData();
 

    const categories = series.map((item) => item.name);  

    const options = {
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
      xAxis: {
         categories: categories 
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Emission (kgCO2e)'
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
      },
      plotOptions: {
        column: {
          stacking: 'percent'
        }
      },
      series: series,
      credits: {
        enabled: false  
      }
    };
  
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  } 

    return ( <div className='emis_bar-chart'> 

                   <MyHighchartsComponent/>   
 
            </div>
    )
};



export default EmissionProductBarChart;