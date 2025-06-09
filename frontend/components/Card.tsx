import React from 'react';

interface CardProps {
    title?: string;
    value: string | number;
    icon?: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, value, icon, className }) => {
    return (
        <div className={`bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center text-center ${className}`}>
            {icon && <div className="mb-2 text-dark-blue">{icon}</div>}
            {title && <h3 className="text-sm text-gray-500 mb-1">{title}</h3>}
            <p className="text-2xl font-bold text-dark-blue">{value}</p>
        </div>
    );
};

export default Card; 