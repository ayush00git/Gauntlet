import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 pt-12 pb-6 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left - Logo & Mission */}
        <div>
          <h3 className="text-2xl font-bold text-white">🌿 HerbChain</h3>
          <p className="text-green-200 text-sm mt-3 leading-relaxed">
            Helping Ayurveda restore its dignity by ensuring transparency, 
            authenticity, and decentralization — from farm to pharma.
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#problems" className="hover:text-green-400 transition">
                Problems Solved
              </a>
            </li>
            <li>
              <a href="#panels" className="hover:text-green-400 transition">
                Panels
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Social / External Links */}
        <div className="flex flex-col md:items-end">
          <h4 className="text-lg font-semibold mb-3 text-white">Connect</h4>
          <div className="flex gap-4 items-center">
            {/* GitHub */}
            <a href="#" className="hover:text-green-400 transition">
              <Github className="w-6 h-6" />
            </a>
            {/* Ayush Ministry Logo */}
            <a href="#" className="hover:opacity-80 transition">
              <img
                src="https://www.ayush.gov.in/sites/default/files/inline-images/emblem.png"
                alt="Ayush Ministry"
                className="h-8"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 mt-10 pt-4 text-center text-sm text-green-300">
        © {new Date().getFullYear()} HerbChain. All rights reserved.
      </div>
    </footer>
  );
}
