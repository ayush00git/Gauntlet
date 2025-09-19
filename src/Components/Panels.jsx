import { Users, ShieldCheck, Factory, Building2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function PanelSection() {
  const navigate = useNavigate();
  const panels = [
    {
      id: 1,
      title: "Farmers",
      description:
        "Farmers and wild collectors can upload herb details, photos, and locations to ensure authenticity at the source.",
      icon: <Users className="w-12 h-12 text-green-600" />,
      path: "/farmerPanel"
    },
    {
      id: 2,
      title: "Middleman",
      description:
        "Verified middlemen bridge the supply chain, handling herbs securely under Ayush Ministry guidelines.",
      icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
      path: "/middlemanPanel"
    },
    {
      id: 3,
      title: "Ayush Ministry",
      description:
        "The ministry validates, monitors, and ensures lab tests are linked to the QR for transparency.",
      icon: <Building2 className="w-12 h-12 text-indigo-600" />,
      path: "/ayushPanel"
    },
    {
      id: 4,
      title: "Manufacturers",
      description:
        "Manufacturers receive authenticated herbs with verified QR codes for trusted Ayurveda products.",
      icon: <Factory className="w-12 h-12 text-orange-600" />,
      path: "/manufacturerPanel"
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-16 px-6 flex flex-col items-center">
      {/* Sticky Back Button */}
      <div className="sticky top-0 left-0 w-full z-20 flex justify-start bg-transparent pt-2 pb-4">
        <button
          onClick={() => navigate('/')}
          className="ml-2 px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-lg font-semibold shadow transition-colors"
        >
          ← Back
        </button>
      </div>
      <h2 className="text-5xl font-bold text-gray-800 mb-12 text-center">
        Choose Your <span className="text-green-700">Panel</span>
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl w-full">
        {panels.map((panel) => (
          <div
            key={panel.id}
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            {panel.icon}
            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              {panel.title}
            </h3>
            <p className="text-gray-600 text-sm text-center mt-2 flex-1">
              {panel.description}
            </p>
            <button
              onClick={() => navigate(panel.path)}
              className="mt-4 inline-block px-4 py-2 bg-green-600 cursor-pointer text-white rounded-lg hover:bg-green-700 transition"
            >
              Go to Panel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}