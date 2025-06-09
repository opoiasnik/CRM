import Card from "../../components/Card";
import PieChart from "../../components/PieChart";

export default function HousingPage() {
    const pieChartData = [
        { name: "Series 1", value: 30, color: "#A8DADC" },
        { name: "Series 2", value: 70, color: "#45B8AC" },
    ];

    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-dark-blue">שיכון</h1>
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
                <Card title="בתי אב" value={330} />
                <Card title="בוגרים" value={400} />
                <Card title='תב"א בהגשה' value="כן" />
                <Card title="תאריך" value="2024-07-20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card title="יחידות קטנות" value={56} />
                <Card title='תב"א בהקמה' value="כן" />
                <Card title="שיוך דירות" value="לא" />
                <Card title="מספר דירות" value="לפי אזור" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Card title="תחזוקה קהילתית" value="לא" />
                <Card title="חתימת שיוך" value="??" />
                <Card title="מועד פינוי" value="Jun 05" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PieChart title="מנהלי הפקדים" data={pieChartData} />
                <PieChart title="מנהלי הפקדים" data={pieChartData} />
            </div>
        </div>
    );
} 