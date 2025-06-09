import React from 'react';

interface PieChartProps {
    data: { name: string; value: number; color: string }[];
    title: string;
}

const PieChart: React.FC<PieChartProps> = ({ data, title }) => {
    const total = data.reduce((sum, entry) => sum + entry.value, 0);

    let startAngle = 0;

    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-dark-blue mb-4">{title}</h3>
            <svg width="150" height="150" viewBox="0 0 200 200">
                {data.map((entry, index) => {
                    const angle = (entry.value / total) * 360;
                    const largeArcFlag = angle > 180 ? 1 : 0;

                    const startX = 100 + 100 * Math.cos((Math.PI * startAngle) / 180);
                    const startY = 100 + 100 * Math.sin((Math.PI * startAngle) / 180);
                    startAngle += angle;
                    const endX = 100 + 100 * Math.cos((Math.PI * startAngle) / 180);
                    const endY = 100 + 100 * Math.sin((Math.PI * startAngle) / 180);

                    const d = [
                        `M 100 100`,
                        `L ${startX} ${startY}`,
                        `A 100 100 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                        `Z`,
                    ].join(" ");

                    return <path key={index} d={d} fill={entry.color} />;
                })}
            </svg>
            <div className="flex flex-wrap justify-center mt-4">
                {data.map((entry, index) => (
                    <div key={index} className="flex items-center mx-2 my-1">
                        <span
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: entry.color }}
                        ></span>
                        <span className="text-sm text-gray-700">{entry.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieChart; 