import React from 'react'; 
  
import { ResponsivePie } from '@nivo/pie';



function getPieChatData() {

    return [
        { id: 'Type 1', label: 'Type 1', value: '358', color : '#66bff1' },
        { id: 'Type 2', label: 'Type 2', value: '267', color : '#1a7f55'  },
        { id: 'Type 3', label: 'Type 3', value: '354', color : '#692a72'  }, 
        { id: 'Type 4', label: 'Type 4', value: '268', color : '#7a331b'  },
        { id: 'Type 5', label: 'Type 5', value: '315', color : '#eb98ac'  },
        { id: 'Type 6', label: 'Type 6', value: '105', color : '#638aad'  }, 
        { id: 'Type 7', label: 'Type 7', value: '187', color : '#43b290'  },
        { id: 'Type 8', label: 'Type 8', value: '305', color : '#676419' },
        { id: 'Type 9', label: 'Type 9',  value: '264', color : '#48aa9e' }, 
        { id: 'Type 10', label: 'Type 10', value: '085', color : '#ba6ff1' },
        { id: 'Type 11', label: 'Type 11', value: '295', color : '#8f802b' },
        { id: 'Type 12', label: 'Type 12', value: '261', color : '#e78974'  } 
    ];
  }

 
 
const EmissionProductPieChart: React.FunctionComponent<{}> = (props) => {
 
  
// var emissionPieData =[
//     {
//       "id": "plastic",
//       "label": "Plastic",
//       "value": 185,
//       "color": "#025639"
//     },
//     {
//       "id": "paper",
//       "label": "Paper", 
//       "value": 521,
//       "color": "#0c2e23"
//     },
//     {
//       "id": "metal",
//       "label": "Metal",
//       "value": 136,
//       "color": "#0c7652"
//     },
//     {
//       "id": "food_waste",
//       "label": "Food Waste",
//       "value": 205,
//       "color": "#460357"
//     },
//     {
//       "id": "glass",
//       "label": "Glass",
//       "value": 400,
//       "color": "#cdff95"
//     }
//   ]



// var emissionPieData =[ 

// { id: 'Type 1', label: 'Type 1', value: '358', color : '#66bff1' },
// { id: 'Type 2', label: 'Type 2', value: '267', color : '#1a7f55'  },
// { id: 'Type 3', label: 'Type 3', value: '354', color : '#692a72'  }, 
// { id: 'Type 4', label: 'Type 4', value: '268', color : '#7a331b'  },
// { id: 'Type 5', label: 'Type 5', value: '315', color : '#eb98ac'  },
// { id: 'Type 6', label: 'Type 6', value: '105', color : '#638aad'  }, 
// { id: 'Type 7', label: 'Type 7', value: '187', color : '#43b290'  },
// { id: 'Type 8', label: 'Type 8', value: '305', color : '#676419' },
// { id: 'Type 9', label: 'Type 9',  value: '264', color : '#48aa9e' }, 
// { id: 'Type 10', label: 'Type 10', value: '085', color : '#ba6ff1' },
// { id: 'Type 11', label: 'Type 11', value: '295', color : '#8f802b' },
// { id: 'Type 12', label: 'Type 12', value: '261', color : '#e78974'  } 

// ]

const series = getPieChatData();


const MyResponsivePie = ({  }) => (
    <ResponsivePie
        data={series}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
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

                <div className="carbon_pie_chart" style={{ height: 400 }}> 
                    <MyResponsivePie />   
                </div> 
         
        </>
    )
};


export default EmissionProductPieChart;