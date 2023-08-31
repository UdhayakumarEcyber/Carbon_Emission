import * as React from "react";
import {
    registerWidget,
    registerLink,
    registerUI,
    IContextProvider,
} from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper, Modal } from "uxp/components";
import { Select } from 'uxp/components';
import { Input } from 'uxp/components';
import { Button } from 'uxp/components';
import { TrendChartComponent } from 'uxp/components';
import './styles.scss';
import { ToggleFilter } from 'uxp/components';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { DateRangePicker } from 'uxp/components';



interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}


function getOvertimeData() {

    return [
        {
            year: '2019', 
            data: [3, 4, 5, 6, 7]
        }, 
        {
            year: '2020', 
            data: [4, 5, 6, 7, 8]
        },
        {
            year: '2021', 
            data: [6, 7, 8, 9, 10]
        },
        {
            year: '2022', 
            data: [0, 0, 0, 0, 0]
        },
        {
            year: '2023', 
            data: [0, 0, 0, 0, 0]
        }
    ];
  }


const CarbonEmissionOverTimeChart: React.FunctionComponent<IWidgetProps> = (props) => {
 
  const series = getOvertimeData();

  const categories = series.map((item) => item.year);  

    const [startDate, setStartDate] = React.useState<Date | null>(new Date());
    const [endDate, setEndDate] = React.useState<Date | null>(new Date());
    const [currentFilter, setCurrentFilter] = React.useState< string| null>( null);
     

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

    const chartComponentRef = React.useRef<HighchartsReact.RefObject>(null);


    return (
        <WidgetWrapper>
            <TitleBar title='Carbon Emission Over Time'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
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

            {/* <HighchartsReact
                highcharts={Highcharts}
                options={options}
                ref={chartComponentRef}
                {...props}
            /> */}


                <HighchartsReact highcharts={Highcharts} options={options} />


        </WidgetWrapper>
    );
}

// registerWidget({
//     id: "carbonEmission",
//     widget: CarbonEmission,
//     configs: {
//         layout: {}
//     }
// });


export default CarbonEmissionOverTimeChart;