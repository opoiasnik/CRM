import React from 'react';

interface BarChartProps {
    data: { name: string; value1: number; value2: number }[];
    title: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, title }) => {
    const maxValue = Math.max(...data.flatMap(d => [d.value1, d.value2]));
    const scale = 100 / maxValue;

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold text-dark-blue mb-4 text-center">{title}</h3>
            <div className="flex justify-around items-end h-40 border-b border-gray-300 pt-4">
                {data.map((entry, index) => (
                    <div key={index} className="flex flex-col items-center mx-2 h-full justify-end">
                        <div className="flex items-end h-full">
                            <div
                                className="w-6 bg-light-blue mx-0.5"
                                style={{ height: `${entry.value1 * scale}px` }}
                            ></div>
                            <div
                                className="w-6 bg-medium-blue mx-0.5"
                                style={{ height: `${entry.value2 * scale}px` }}
                            ></div>
                        </div>
                        <span className="text-xs text-gray-600 mt-2">{entry.name}</span>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <div className="flex items-center mx-2">
                    <span className="w-3 h-3 bg-light-blue rounded-full mr-2"></span>
                    <span className="text-sm text-gray-700">Series 1</span>
                </div>
                <div className="flex items-center mx-2">
                    <span className="w-3 h-3 bg-medium-blue rounded-full mr-2"></span>
                    <span className="text-sm text-gray-700">Series 2</span>
                </div>
            </div>
        </div>
    );
};

export default BarChart; 