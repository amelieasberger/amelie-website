import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function PieSkillChart({ data }: { data: Array<{ name: string, value: number }>}): React.JSX.Element {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
            <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
            />
                <Legend wrapperStyle={{ bottom: '25%' }} />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}
