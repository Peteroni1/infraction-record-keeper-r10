
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Infraction } from '@/types';

interface InfractionSeverityChartProps {
  infractions: Infraction[];
}

const InfractionSeverityChart: React.FC<InfractionSeverityChartProps> = ({ infractions }) => {
  const counts = {
    Minor: 0,
    Moderate: 0,
    Major: 0,
    Critical: 0,
  };

  infractions.forEach(infraction => {
    counts[infraction.severity]++;
  });

  const data = [
    { name: 'Minor', value: counts.Minor, color: '#4299E1' },
    { name: 'Moderate', value: counts.Moderate, color: '#ECC94B' },
    { name: 'Major', value: counts.Major, color: '#ED8936' },
    { name: 'Critical', value: counts.Critical, color: '#F56565' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Infraction Severity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" name="Count" fill="#4299E1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfractionSeverityChart;
