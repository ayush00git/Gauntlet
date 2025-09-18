import { Globe, UserCheck, FlaskConical } from "lucide-react";

export default function ProblemsSolved() {
  const problems = [
    {
      id: 1,
      title: "Ayurveda’s Global Reputation",
      problem:
        "Ayurveda is a $15B industry in India, but fake herb mixing and toxic metals have damaged its credibility. Exports often get rejected, hurting India’s status as a global Ayurveda hub.",
      solution:
        "We ensure transparency with a live QR-based traceability system. Every step from farm to pharma is logged, so consumers and regulators can instantly verify authenticity.",
      icon: <Globe className="w-10 h-10 text-red-600" />,
    },
    {
      id: 2,
      title: "Farmers Losing Profits & Recognition",
      problem:
        "Farmers sell to middlemen who take away maximum profits, leaving farmers underpaid and unrecognized for their contributions.",
      solution:
        "We introduce a verified middleman system authorized by the Ayush Ministry. Middlemen earn a salary, not farmer profits. Farmers upload directly to the QR, gaining fair value and recognition.",
      icon: <UserCheck className="w-10 h-10 text-red-600" />,
    },
    {
      id: 3,
      title: "Detecting Adulteration & Accountability",
      problem:
        "If 1 out of 100 herb units is adulterated, mixed batches make it impossible to identify the culprit, leading to unfair blame and unsafe supply chains.",
      solution:
        "Middlemen store small samples from each farmer with unique batch IDs. If lab results fail, the culprit farmer is traceable. After 3 warnings, the farmer is declared unverified — ensuring accountability.",
      icon: <FlaskConical className="w-10 h-10 text-red-600" />,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-green-50 py-16 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">
        🌿 The Problems We Solved
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {problems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition"
          >
            {/* Problem Block */}
            <div className="bg-red-50 p-6 flex flex-col items-start gap-4">
              {item.icon}
              <h3 className="text-lg font-semibold text-red-700">
                {item.title}
              </h3>
              <p className="text-sm text-red-600">{item.problem}</p>
            </div>

            {/* Solution Block */}
            <div className="bg-green-50 p-6 flex flex-col gap-2 flex-1">
              <h4 className="text-base font-semibold text-green-700">
                ✅ Our Solution
              </h4>
              <p className="text-sm text-green-600">{item.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
