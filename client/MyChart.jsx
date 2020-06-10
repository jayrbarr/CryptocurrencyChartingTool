import React from 'react';
import { Line } from 'react-chartjs-2';

const MyChart = ({ data }) => (
    <>
        <Line
          data={data}
          options={{
            title:{
              display:true,
              text:'Bitcoin Price',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            scales:{
                xAxes: [{
                    type: 'time',
                    time: {
                        unit: 'day'
                    }
                }]
            }
          }}
        />
    </>
)

export default MyChart;
