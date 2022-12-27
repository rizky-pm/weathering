import moment from 'moment/moment';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  LabelList,
  YAxis,
} from 'recharts';

import ChartWrapper from './TemperatureChart.styled';

const TemperatureChart = ({ data }) => {
  const chartData = data?.hour
    .filter((_, index) => index % 3 === 0)
    .map((item) => ({
      hour: moment(item.time).format('H:mm'),
      temp_c: item.temp_c,
    }));

  return (
    <ChartWrapper>
      {chartData && (
        <>
          <span>Temperature Forecast</span>
          <ResponsiveContainer width={'100%'} height={200}>
            <AreaChart
              compact
              data={chartData}
              margin={{
                top: 20,
                right: 20,
                left: 20,
                bottom: 20,
              }}
            >
              <XAxis
                dataKey='hour'
                tick={{ fill: '#caccce', fontSize: 12 }}
                tickLine={{ stroke: 'transparent' }}
              />
              <YAxis
                // type='number'
                tick={false}
                hide
                domain={[data?.day.mintemp_c - 3, data?.day.maxtemp_c + 3]}
              />
              <Area
                dataKey='temp_c'
                stroke='#f9c255'
                strokeWidth={3}
                fill='#4d91ff'
                fillOpacity={0.2}
                type='linear'
              >
                <LabelList
                  dataKey='temp_c'
                  position='top'
                  fill='#ebf5ee'
                  fontSize={12}
                  offset={15}
                />
              </Area>
            </AreaChart>
          </ResponsiveContainer>
        </>
      )}
    </ChartWrapper>
  );
};

export default TemperatureChart;
