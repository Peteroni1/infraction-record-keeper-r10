
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Inspection } from '@/types';

interface InspectionStatusChartProps {
  inspections: Inspection[];
}

const InspectionStatusChart: React.FC<InspectionStatusChartProps> = ({ inspections }) => {
  const statusCounts = {
    Scheduled: 0,
    'In Progress': 0,
    Completed: 0,
    Cancelled: 0,
  };

  inspections.forEach((inspection) => {
    statusCounts[inspection.status]++;
  });

  const data = [
    { name: 'Scheduled', value: statusCounts.Scheduled, color: '#4299E1' },
    { name: 'In Progress', value: statusCounts['In Progress'], color: '#ECC94B' },
    { name: 'Completed', value: statusCounts.Completed, color: '#48BB78' },
    { name: 'Cancelled', value: statusCounts.Cancelled, color: '#F56565' },
  ].filter(item => item.value > 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inspection Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default InspectionStatusChart;
