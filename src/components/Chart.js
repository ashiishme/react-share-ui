import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
    {
        name: 'Mutual Funds',
        value: 70,
        url: 'https://economictimes.indiatimes.com/mf/mf-news',
    },
    {
        name: 'ETFs',
        value: 30,
        url: 'https://www.marketwatch.com/investing/etf',
    },
];

//open Google Search
const openGS = (Data) => {
    var name = Data.value;
    var entry = data.find((elem) => elem.name === name);
    window.open(entry.url, '_blank');
};

const COLORS = ['#03A9F4', '#795548'];

const Chart = () => {
    return (
        <>
            <PieChart width={250} height={500}>
                <Pie
                    data={data}
                    cx={90}
                    cy={130}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell
                            data-name={entry}
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>

                <Legend
                    iconSize={10}
                    width={140}
                    onClick={openGS}
                    wrapperStyle={{
                        paddingLeft: '20px',
                    }}
                    height={10}
                    iconType="circle"
                    layout="horizontal"
                    verticalAlign="middle"
                    align="left"
                />
                <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />
            </PieChart>
        </>
    );
};

export default Chart;
