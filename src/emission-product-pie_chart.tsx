import React from 'react'; 
  
import { ResponsivePie } from '@nivo/pie';
 
 
const EmissionProductPieChart: React.FunctionComponent<{}> = (props) => {
 
  
var emissionPieData =[
    {
      "id": "plastic",
      "label": "Plastic",
      "value": 185,
      "color": "#025639"
    },
    {
      "id": "paper",
      "label": "Paper", 
      "value": 521,
      "color": "#0c2e23"
    },
    {
      "id": "metal",
      "label": "Metal",
      "value": 136,
      "color": "#0c7652"
    },
    {
      "id": "food_waste",
      "label": "Food Waste",
      "value": 205,
      "color": "#460357"
    },
    {
      "id": "glass",
      "label": "Glass",
      "value": 400,
      "color": "#cdff95"
    }
  ]

const MyResponsivePie = ({  }) => (
    <ResponsivePie
        data={emissionPieData}
        margin={{ top: 10, right: 40, bottom: 20, left: 40 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={0}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#424242"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1
                ]
            ]
        }}
         
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 15,
                itemTextColor: '#424242',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#424242'
                        }
                    }
                ]
            }
        ]}
    />
)
 
 

    return (  <> 

                <div className="carbon_pie_chart" style={{ height: 300 }}> 
                    <MyResponsivePie />   
                </div> 
         
        </>
    )
};


export default EmissionProductPieChart;