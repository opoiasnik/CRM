import Card from "../../components/Card";
import BarChart from "../../components/BarChart";

export default function PublicServicePage() {
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
                <h1 className="text-3xl font-bold text-dark-blue">ערבות הדדית</h1>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card title="גיל" value="62+" />
                <Card title="גברים" value="67+" />
                <Card title="גרעין אבטחה" value="350" />
                <Card title="מספר פועלים" value="לא" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card title="דרור" value="כן" />
                <Card title="מלאים" value="כן" />
                <Card title="ביטוח" value="בסיסי" />
                <Card title="תושבים" value="4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <BarChart title="גרף 1" data={barChartData} />
                <BarChart title="גרף 2" data={barChartData} />
                <BarChart title="גרף 3" data={barChartData} />
            </div>
        </div>
    );
} 