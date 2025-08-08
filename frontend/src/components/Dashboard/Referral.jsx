import { useState } from "react";

export default function Referral() {
  const [referralLink] = useState("https://tradebot.com/register?ref=TB123456");
  const [copied, setCopied] = useState(false);

  const referralData = {
    totalEarnings: 1245.50,
    totalReferrals: 12,
    activeReferrals: 8,
    pendingCommission: 156.75
  };

  const referrals = [
    { id: 1, email: "john@example.com", earnings: "$125.50", trades: 45, joinDate: "2025-07-15", status: "active" },
    { id: 2, email: "mary@example.com", earnings: "$98.25", trades: 32, joinDate: "2025-07-12", status: "active" },
    { id: 3, email: "alex@example.com", earnings: "$205.75", trades: 67, joinDate: "2025-07-08", status: "active" },
    { id: 4, email: "sarah@example.com", earnings: "$156.00", trades: 51, joinDate: "2025-07-05", status: "active" },
    { id: 5, email: "mike@example.com", earnings: "$87.50", trades: 28, joinDate: "2025-06-28", status: "inactive" },
    { id: 6, email: "lisa@example.com", earnings: "$312.25", trades: 89, joinDate: "2025-06-20", status: "active" }
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent mb-2">
            Referral Program
          </h1>
          <p className="text-gray-600">Invite friends and earn commission on their trades</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">💰</span>
              </div>
              <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full">
                +12.5%
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Total Earnings</h3>
            <p className="text-2xl font-bold text-gray-900">${referralData.totalEarnings.toFixed(2)}</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">👥</span>
              </div>
              <span className="text-blue-600 text-sm font-medium bg-blue-50 px-2 py-1 rounded-full">
                +3
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Total Referrals</h3>
            <p className="text-2xl font-bold text-gray-900">{referralData.totalReferrals}</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <span className="text-purple-600 text-sm font-medium bg-purple-50 px-2 py-1 rounded-full">
                Active
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Active Referrals</h3>
            <p className="text-2xl font-bold text-gray-900">{referralData.activeReferrals}</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">⏳</span>
              </div>
              <span className="text-orange-600 text-sm font-medium bg-orange-50 px-2 py-1 rounded-full">
                Pending
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Pending Commission</h3>
            <p className="text-2xl font-bold text-gray-900">${referralData.pendingCommission.toFixed(2)}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Referral Link Section */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">🔗</span>
                Your Referral Link
              </h2>
              <p className="text-gray-600 mb-4">Share this link with friends to start earning commissions</p>
              
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 block mb-2">Referral URL</label>
                <div className="flex">
                  <input
                    value={referralLink}
                    readOnly
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-l-xl bg-gray-50 text-gray-700 text-sm"
                  />
                  <button
                    onClick={handleCopyLink}
                    className={`px-6 py-3 rounded-r-xl font-semibold transition-all duration-200 ${
                      copied 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg'
                    }`}
                  >
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  Twitter
                </button>
                <button className="flex items-center justify-center px-4 py-3 bg-blue-800 text-white rounded-xl hover:bg-blue-900 transition-colors duration-200">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
              </div>
            </div>

            {/* Commission Structure */}
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">📊</span>
                Commission Structure
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-green-800">Level 1</p>
                    <p className="text-sm text-green-600">Direct referrals</p>
                  </div>
                  <span className="text-xl font-bold text-green-700">5%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-blue-800">Level 2</p>
                    <p className="text-sm text-blue-600">Tier 2 referrals</p>
                  </div>
                  <span className="text-xl font-bold text-blue-700">3%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-purple-800">Level 3</p>
                    <p className="text-sm text-purple-600">Tier 3 referrals</p>
                  </div>
                  <span className="text-xl font-bold text-purple-700">2%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Referrals Table */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <span className="text-2xl mr-2">👥</span>
                  Your Referrals
                </h2>
                <p className="text-gray-600 mt-1">Track your referral performance</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-50 to-purple-50 border-b border-gray-200/50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">User</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Earnings</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Trades</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Join Date</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {referrals.map((referral) => (
                      <tr key={referral.id} className="hover:bg-gray-50/50 transition-colors duration-200">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {referral.email.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">{referral.email}</p>
                              <p className="text-sm text-gray-500">Referral #{referral.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-bold text-green-600">{referral.earnings}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-gray-900">{referral.trades}</span>
                            <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                style={{ width: `${Math.min((referral.trades / 100) * 100, 100)}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-gray-900">{referral.joinDate}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            referral.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            <span className={`w-2 h-2 rounded-full mr-2 ${
                              referral.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                            }`}></span>
                            {referral.status.charAt(0).toUpperCase() + referral.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer */}
              <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    Showing {referrals.length} referrals
                  </p>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                    Export Data
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Invites</h3>
            <p className="text-gray-600 mb-4">Send personalized invitations to your contacts</p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Send Invites
            </button>
          </div>

          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20 text-center">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Withdraw Earnings</h3>
            <p className="text-gray-600 mb-4">Transfer your commissions to your wallet</p>
            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Withdraw
            </button>
          </div>

          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">View Analytics</h3>
            <p className="text-gray-600 mb-4">Detailed insights into your referral performance</p>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              View Analytics
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce delay-2000"></div>
    </div>
  );
}