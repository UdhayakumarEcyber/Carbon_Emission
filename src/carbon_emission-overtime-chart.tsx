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
const CarbonEmissionOverTimeChart: React.FunctionComponent<IWidgetProps> = (props) => {
    const [startDate, setStartDate] = React.useState<Date | null>(new Date());
    const [endDate, setEndDate] = React.useState<Date | null>(new Date());
    const [currentFilter, setCurrentFilter] = React.useState< string| null>( null);
    
    const options: Highcharts.Options = {
        title: {
            text: 'Carbon Emission Over Time'
        },

        xAxis: {
            categories: ['2019', '2020', '2021', '2022', '2023'] //  the categories for the x-axis
        },

        yAxis: {
            title: {
                text: 'Emission (kgCo2e)' //  name for the x-axis
            }
        },
        series: [{
            name: 'Transportation',
            color: 'red',
            type: 'area',
            data: [3, 4, 5, 6, 7]
        }, {
            name: 'Manufacturing',
            type: 'area',
            data: [4, 5, 6, 7, 8]
        }, {
            name: 'Extraction of Raw materials',
            type: 'area',
            data: [6, 7, 8, 9, 10]
        }],
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

            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                ref={chartComponentRef}
                {...props}
            />
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