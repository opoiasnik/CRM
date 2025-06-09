import Card from "../components/Card";

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl  text-dark-blue">נתוני כללים</h1>
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
        <Card title='סה"ל תקציב' value={99} icon={<span>💰</span>} />
        <Card title="תאריך" value={350} icon={<span>📅</span>} />
        <Card title="שם" value="יר קצרה" icon={<span>👤</span>} />
        <Card title="שם" value="יוני" icon={<span>👤</span>} />
        <Card title="שם" value="מנהל משק" icon={<span>👤</span>} />
      </div>

      {/* Placeholder for additional sections like managers and statistics */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-dark-blue mb-4">מנהלי הפקדים</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Example Manager Card */}
          <div className="flex items-center p-4 border rounded-md">
            <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
            <div>
              <p className="font-semibold">מנהל קרן</p>
              <p className="text-sm text-gray-600">יואל לוי</p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-md">
            <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
            <div>
              <p className="font-semibold">מנהל קהילה</p>
              <p className="text-sm text-gray-600">משה כהן</p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-md">
            <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
            <div>
              <p className="font-semibold">מנהל כלכלה</p>
              <p className="text-sm text-gray-600">דוד לוי</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card title="מספר תושבים" value={15} />
        <Card title="מספר משפחות" value={13} />
        <Card title="מספר ילדים" value={126} />
        <Card title="ממוצע גיל" value={1500} />
        <Card title="אחוז נשים" value={400} />
      </div>
    </div>
  );
}
