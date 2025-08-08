import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo/Icon */}
        <div className="mb-8 relative">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <span className="text-3xl">🚀</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
          TradeBot Platform
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
          Automate signals, manage trades, and earn via referrals
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm text-gray-500">
          <span className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Real-time Trading
          </span>
          <span className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            AI Signals
          </span>
          <span className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            Referral Rewards
          </span>
        </div>

        {/* Action buttons */}
     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button
        onClick={() => navigate("/login")}
        className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative flex items-center">
          Login
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </button>

      <button
        onClick={() => navigate("/register")}
        className="group relative px-8 py-4 bg-white text-gray-800 font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative flex items-center">
          Get Started
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </span>
      </button>
    </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 mb-4">Trusted by traders worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">10K+</div>
            <div className="text-gray-300">•</div>
            <div className="text-2xl font-bold text-gray-400">$2M+</div>
            <div className="text-gray-300">•</div>
            <div className="text-2xl font-bold text-gray-400">24/7</div>
          </div>
          <div className="flex justify-center items-center space-x-8 text-xs text-gray-400 mt-2">
            <span>Active Users</span>
            <span></span>
            <span>Volume Traded</span>
            <span></span>
            <span>Support</span>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
    </div>
  );
}
