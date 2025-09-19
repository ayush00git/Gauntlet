import { useNavigate } from "react-router-dom";

export default function FarmerFlowPage() {
  
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center px-6 py-12">
      {/* Top Button */}
      <button className="mb-10 px-6 py-3 bg-green-600 text-white text-lg cursor-pointer font-semibold rounded-xl shadow-md hover:bg-green-700 transition"
      onClick={() => navigate('/farmerPanel/login')}>
        Continue as a Farmer
      </button>

      {/* Steps Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
          Steps you need to follow
        </h2>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 text-xl flex items-center justify-center rounded-full text-black font-bold">
              1.
            </div>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Continue as a Farmer</span> and
              fill in the necessary details like your name, Aadhaar, phone
              number, land details, and herbs experience.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 text-xl flex items-center justify-center rounded-full text-black font-bold">
              2.
            </div>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">At the harvest time</span>, upload
              a live photo of your farm. The photo will automatically capture
              time and GPS location for transparency.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 text-xl flex items-center justify-center rounded-full text-black font-bold">
              3.
            </div>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Select from a list of middleman</span> verified
              by the Ayush Ministry, or find one by searching, to sell your
              herbs safely and securely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
