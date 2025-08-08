import { useState } from "react";

export default function Trades() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const trades = [
    { id: 1, symbol: "EUR/USD", amount: "$500.00", result: "Win", profit: "+$85.50", date: "2025-07-27", time: "14:32", status: "win", type: "buy" },
    { id: 2, symbol: "GBP/JPY", amount: "$750.00", result: "Win", profit: "+$125.25", date: "2025-07-27", time: "13:45", status: "win", type: "sell" },
    { id: 3, symbol: "USD/CAD", amount: "$300.00", result: "Loss", profit: "-$45.00", date: "2025-07-27", time: "12:18", status: "loss", type: "buy" },
    { id: 4, symbol: "AUD/USD", amount: "$400.00", result: "Win", profit: "+$68.40", date: "2025-07-26", time: "16:22", status: "win", type: "sell" },
    { id: 5, symbol: "USD/JPY", amount: "$600.00", result: "Loss", profit: "-$78.50", date: "2025-07-26", time: "15:10", status: "loss", type: "buy" },
    { id: 6, symbol: "EUR/GBP", amount: "$350.00", result: "Win", profit: "+$42.75", date: "2025-07-26", time: "14:05", status: "win", type: "buy" },
  ];

  const filteredTrades = trades.filter(trade => {
    const matchesFilter = activeFilter === 'all' || trade.status === activeFilter;
    const matchesSearch = trade.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalProfit = trades.reduce((sum, trade) => {
    return sum + parseFloat(trade.profit.replace(/[+$-]/g, '')) * (trade.status === 'win' ? 1 : -1);
  }, 0);

  const winRate = ((trades.filter(t => t.status === 'win').length / trades.length) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-2">
            Your Trades
          </h1>
          <p className="text-gray-600">Track and analyze your trading performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">💰</span>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Total Profit</h3>
            <p className={`text-2xl font-bold ${totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {totalProfit >= 0 ? '+' : ''}${totalProfit.toFixed(2)}
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Total Trades</h3>
            <p className="text-2xl font-bold text-gray-900">{trades.length}</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Win Rate</h3>
            <p className="text-2xl font-bold text-gray-900">{winRate}%</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">📈</span>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Winning Trades</h3>
            <p className="text-2xl font-bold text-gray-900">{trades.filter(t => t.status === 'win').length}</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search trades..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 backdrop-blur-sm"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex space-x-2">
              {[
                { id: 'all', label: 'All Trades', color: 'bg-gray-100 text-gray-700' },
                { id: 'win', label: 'Wins', color: 'bg-green-100 text-green-700' },
                { id: 'loss', label: 'Losses', color: 'bg-red-100 text-red-700' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : filter.color + ' hover:shadow-md'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Trades Table */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Currency Pair</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Result</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Profit/Loss</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date & Time</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredTrades.map((trade) => (
                  <tr key={trade.id} className="hover:bg-gray-50/50 transition-colors duration-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {trade.symbol.split('/')[0]}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{trade.symbol}</p>
                          <p className="text-sm text-gray-500">Currency Pair</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        trade.type === 'buy' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {trade.type === 'buy' ? '📈' : '📉'} {trade.type.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900">{trade.amount}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        trade.status === 'win' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {trade.status === 'win' ? '✅' : '❌'} {trade.result}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className={`font-bold ${
                        trade.status === 'win' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {trade.profit}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{trade.date}</p>
                        <p className="text-sm text-gray-500">{trade.time}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredTrades.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No trades found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters or search terms</p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing {filteredTrades.length} of {trades.length} trades
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              Previous
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl">
              1
            </button>
            <button className="px-4 py-2 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-bounce delay-2000"></div>
    </div>
  );
}