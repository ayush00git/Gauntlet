import { useState } from "react";
import {
  QrCode,
  CheckCircle,
  FlaskConical,
  Factory,
  Building2,
  Users,
} from "lucide-react";

export default function HerbJourney() {
  const [stage, setStage] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Farmer & Wild Collector",
      description:
        "Farmers and wild collectors gather herbs and take a live photo using the farmer panel. GPS location and timestamp are automatically captured and linked to a QR code.",
      icon: <Users className="w-10 h-10 text-green-600" />,
    },
    {
      id: 2,
      title: "Middleman (Verified by Ayush Ministry)",
      description:
        "The herbs are packaged and handed over to a verified middleman authorized by the Ayush Ministry to ensure supply chain legitimacy.",
      icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
    },
    {
      id: 3,
      title: "Ayush Ministry",
      description:
        "The middleman forwards the herb unit to the Ayush Ministry for official logging and validation, maintaining transparency.",
      icon: <Building2 className="w-10 h-10 text-indigo-600" />,
    },
    {
      id: 4,
      title: "Laboratory Testing",
      description:
        "The herb batch undergoes authenticity and purity testing. Reports are uploaded directly to the system and linked to the QR code.",
      icon: <FlaskConical className="w-10 h-10 text-purple-600" />,
    },
    {
      id: 5,
      title: "Manufacturer",
      description:
        "After successful verification, the herbs are delivered to manufacturers. The QR code shows the entire transparent journey from farm to pharma.",
      icon: <Factory className="w-10 h-10 text-orange-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center py-12 px-6">
      <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">
        🌿 Transparent Ayurveda Supply Chain
      </h1>

      {/* QR Code Display */}
      <div className="flex flex-col items-center mb-6">
        <QrCode className="w-20 h-20 text-gray-700" />
        <p className="text-sm text-gray-600 mt-2">
          {stage === 0
            ? "QR not yet updated"
            : `Stage ${stage}: ${steps[stage - 1].title}`}
        </p>
        <button
          onClick={() => setStage(Math.min(stage + 1, steps.length))}
          className="mt-4 px-6 py-2 bg-green-600 rounded-lg text-white hover:bg-green-700"
        >
          Next
        </button>
      </div>

      {/* Vertical Steps */}
      <div className="w-full max-w-3xl space-y-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-start gap-4 p-6 rounded-2xl shadow-md border-l-4 transition 
              ${
                stage >= step.id
                  ? "bg-green-100 border-green-500"
                  : "bg-white border-gray-200"
              }`}
          >
            <div className="flex-shrink-0">{step.icon}</div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h2>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
