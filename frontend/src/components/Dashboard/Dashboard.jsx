import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
   const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Example: clear token or user session
    localStorage.removeItem("authToken");

    // Redirect to login page
    navigate("/login");
  };

  const tabs = [
    { id: "dashboard", label: "Overview", icon: "📊", path: "/dashboard" },
    { id: "trades", label: "Trades", icon: "💹", path: "/dashboard/trades" },
    { id: "referral", label: "Referrals", icon: "👥", path: "/dashboard/referral" },
    { id: "settings", label: "Settings", icon: "⚙️", path: "/dashboard/settings" }
  ];

  const stats = [
    { title: "Total Balance", value: "$12,450.00", change: "+12.5%", icon: "💰", color: "from-green-500 to-emerald-600" },
    { title: "Active Trades", value: "24", change: "+3", icon: "📈", color: "from-blue-500 to-cyan-600" },
    { title: "Referral Earnings", value: "$1,245.50", change: "+8.2%", icon: "🎯", color: "from-purple-500 to-violet-600" },
    { title: "Win Rate", value: "87.4%", change: "+2.1%", icon: "🏆", color: "from-orange-500 to-amber-600" }
  ];

  const recentTrades = [
    { symbol: "EUR/USD", amount: "$500", result: "Win", profit: "+$85", time: "2 min ago", status: "win" },
    { symbol: "GBP/JPY", amount: "$300", result: "Win", profit: "+$45", time: "5 min ago", status: "win" },
    { symbol: "USD/CAD", amount: "$200", result: "Loss", profit: "-$35", time: "8 min ago", status: "loss" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  TradeBot Dashboard
                </h1>
                <p className="text-sm text-gray-600">Welcome back, John!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-200">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
       <button
      onClick={handleLogout}
      className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
    >
      Logout
    </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
    <div className="flex space-x-2 mb-8 bg-white/60 backdrop-blur-sm p-2 rounded-2xl border border-white/20 shadow-lg w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => navigate(tab.path)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
            location.pathname === tab.path
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
              : "text-gray-600 hover:text-gray-900 hover:bg-white/60"
          }`}
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-xl shadow-lg`}>
                  {stat.icon}
                </div>
                <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trading Chart */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Portfolio Performance</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-lg">1D</button>
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">1W</button>
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">1M</button>
              </div>
            </div>
            {/* Chart Placeholder */}
            <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-2">📈</div>
                <p className="text-gray-600">Chart visualization would go here</p>
                <p className="text-sm text-gray-500 mt-1">Real-time trading data</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Trades</h2>
            <div className="space-y-4">
              {recentTrades.map((trade, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl hover:bg-gray-100/50 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      trade.status === 'win' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {trade.status === 'win' ? '📈' : '📉'}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{trade.symbol}</p>
                      <p className="text-sm text-gray-500">{trade.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{trade.amount}</p>
                    <p className={`text-sm font-medium ${
                      trade.status === 'win' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {trade.profit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              View All Trades
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="group p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">💵</div>
              <p className="font-semibold">New Trade</p>
            </button>
            <button className="group p-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">📊</div>
              <p className="font-semibold">Analytics</p>
            </button>
            <button className="group p-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">🎯</div>
              <p className="font-semibold">Referrals</p>
            </button>
            <button className="group p-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">⚙️</div>
              <p className="font-semibold">Settings</p>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
    </div>
  );
}