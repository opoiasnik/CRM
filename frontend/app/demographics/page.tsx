import Card from "../../components/Card";
import PieChart from "../../components/PieChart";
import BarChart from "../../components/BarChart";

export default function DemographicsPage() {
    const pieChartData = [
        { name: "Series 1", value: 30, color: "#A8DADC" },
        { name: "Series 2", value: 70, color: "#45B8AC" },
    ];

    const barChartData = [
        { name: "Group", value1: 40, value2: 20 },
        { name: "Group", value1: 60, value2: 30 },
        { name: "Group", value1: 30, value2: 50 },
        { name: "Group", value1: 70, value2: 40 },
        { name: "Group", value1: 50, value2: 25 },
        { name: "Group", value1: 45, value2: 60 },
        { name: "Group", value1: 55, value2: 35 },
        { name: "Group", value1: 65, value2: 45 },
    ];

    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-dark-blue">אוכלוסייה</h1>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="חיפוש..."
                        className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                <Card title='סה"ל תושבים' value={1500} icon={<span>👤</span>} />
                <Card title="ילדים 0-18" value={400} />
                <Card title="חברים" value={126} />
                <Card title="גברים" value={300} />
                <Card title="נשים" value={250} />
                <Card title="סטודנטים" value={12} />
                <Card title="בנים" value={12} />
                <Card title="תאריך" value={350} />
                <Card title="לידה" value={100} />
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <BarChart title="התפלגות גילאים" data={barChartData} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <PieChart title="התפלגות תושבים" data={pieChartData} />
                <PieChart title="התפלגות תושבים" data={pieChartData} />
                <PieChart title="התפלגות תושבים" data={pieChartData} />
                <PieChart title="התפלגות תושבים" data={pieChartData} />
            </div>
        </div>
    );
} 