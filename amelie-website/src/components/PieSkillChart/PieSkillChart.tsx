import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip, Cell } from 'recharts';

export default function PieSkillChart({ data }: { data: Array<{ name: string, value: number }>}): React.JSX.Element {
    const COLORS = ['#e8a7ff', '#e394ff', '#da7ffc', '#b55cd5', '#913eaf', '#6f2689', '#4e1462', '#2e083c', '#100116'];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                >
                    {data.map((entry, index) => (
                        <Cell key={`${entry.name}-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}
