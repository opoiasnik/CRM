import Card from "../../components/Card";
import PieChart from "../../components/PieChart";

export default function EducationPage() {
    const pieChartData = [
        { name: "Series 1", value: 30, color: "#A8DADC" },
        { name: "Series 2", value: 70, color: "#45B8AC" },
    ];

    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-dark-blue">חינוך</h1>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Managers section */}
                <div className="bg-white shadow-md rounded-lg p-6 md:col-span-3">
                    <h2 className="text-xl font-semibold text-dark-blue mb-4">מנהלים</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center p-4 border rounded-md">
                            <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                            <div>
                                <p className="font-semibold">מנהלת בית ספר</p>
                                <p className="text-sm text-gray-600">הדס נירנברג</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 border rounded-md">
                            <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                            <div>
                                <p className="font-semibold">מנהלת גני ילדים</p>
                                <p className="text-sm text-gray-600">מירב בר-אור</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 border rounded-md">
                            <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                            <div>
                                <p className="font-semibold">מנהל חוגים</p>
                                <p className="text-sm text-gray-600">יניב אוזברגר</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Card title="מספר מורים" value={12} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                <Card title="מספר מורים" value={15} />
                <Card title="מספר כיתות" value={13} />
                <Card title="מספר ילדים" value={126} />
                <Card title="מספר חוגים" value={1500} />
                <Card title="מספר פעילויות" value={400} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PieChart title="מנהלי הפקדים" data={pieChartData} />
                <PieChart title="מנהלי הפקדים" data={pieChartData} />
            </div>
        </div>
    );
} 