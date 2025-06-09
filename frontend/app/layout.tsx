import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Libi Kibbutzi Dashboard",
  description: "Dashboard for Libi Kibbutzi project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <div className="flex h-screen bg-light-gray">
          {/* Sidebar will go here */}
          <aside className="w-64 bg-white shadow-md p-4 flex flex-col items-center border-r border-gray-200">
            {/* Logo and App Name */}
            <div className="flex items-center mb-8">
              {/* Placeholder for Logo */}
              <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center text-white text-lg font-bold">
                ל
              </div>
              <div className="mr-2 text-dark-blue font-semibold text-xl">
                הלב הקיבוצי
              </div>
            </div>

            {/* Navigation (Placeholder) */}
            <nav className="w-full">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <span className="mr-3">🏠</span> נתוני כללים
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <span className="mr-3">👥</span> אוכלוסייה
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <span className="mr-3">🏠</span> שיכון
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <span className="mr-3">🚜</span> משק
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <span className="mr-3">📚</span> חינוך
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <span className="mr-3">🤝</span> ערבות הדדית
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <span className="mr-3">📊</span> כלכלה
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main content area */}
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
