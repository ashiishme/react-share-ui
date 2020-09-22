import React from "react";
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
    { name: 'Mutual Funds', value: 70 },
    { name: 'ETFs', value: 30 }
];
  
const COLORS = ['#03A9F4', '#795548'];

const Chart = () => {
    return (
        <>
        <PieChart width={350} height={300}>
            <Pie
            data={data}
            cx={100}
            cy={150}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            >
            {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
            </Pie>
            <Legend iconSize={10} width={140} height={40} layout='vertical' verticalAlign='middle' align="right" />
        </PieChart>
        </>
    );
}

export default Chart;