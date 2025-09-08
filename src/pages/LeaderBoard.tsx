import React, { useState, useEffect } from 'react';
import {
  Trophy, Medal, Award, Target, Zap, Crown, TrendingUp, Filter, X, Home
} from 'lucide-react';

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('level');
  const [timeFrame, setTimeFrame] = useState('all');
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Simulate loading and set empty data to match screenshot
    const timer = setTimeout(() => {
      setLoading(false);
      setLeaderboardData([]); // Empty data to show "0 points" state
    }, 1000);

    return () => clearTimeout(timer);
  }, [activeTab, timeFrame]);

  const handleBackToHome = () => {
    console.log('Navigate to home');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleExploreGames = () => {
    console.log('Navigate to games');
  };

  return (
    <div className="min-h-screen pt-20 px-6 py-12 text-white bg-gradient-to-br from-black via-gray-900 to-red-900 relative">
      {/* Backdrop Overlay */}
      {showPopup && (
        <div className="absolute inset-0 backdrop-blur-sm z-10"></div>
      )}

      <div className="max-w-6xl mx-auto relative z-0">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
              <Trophy className="text-white" size={28} />
            </div>
            <h1 className="text-4xl font-bold text-red-400">Elite Rankings</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Filter className="text-red-400" size={20} />
            <select
              value={timeFrame}
              onChange={(e) => setTimeFrame(e.target.value)}
              className="bg-gray-800 border border-red-500/20 rounded-lg px-4 py-2 text-white focus:border-red-400 focus:outline-none"
            >
              <option value="all">All Time</option>
              <option value="monthly">This Month</option>
              <option value="weekly">This Week</option>
            </select>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-gray-800/50 rounded-lg p-1">
          {[
            { id: 'level', label: 'Level Rankings', icon: Zap },
            { id: 'missions', label: 'Mission Rankings', icon: Target },
            { id: 'weekly', label: 'Weekly Leaders', icon: TrendingUp }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                activeTab === id
                  ? 'bg-red-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <Icon className="mr-2" size={18} />
              {label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-red-500 border-t-transparent mb-4"></div>
            <p className="text-center text-red-400 text-lg">Loading leaderboard...</p>
          </div>
        ) : (
          <>
            {/* Podium Section - Empty State */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {/* 2nd Place - Empty */}
              <div className="bg-gray-800/30 border border-gray-600/50 rounded-lg p-6 text-center transform translate-y-4">
                <div className="flex justify-center mb-4">
                  <Medal className="text-gray-500" size={40} />
                </div>
                <div className="text-gray-500 text-sm">0 points</div>
              </div>

              {/* 1st Place - Empty */}
              <div className="bg-gradient-to-b from-yellow-600/10 to-gray-800/30 border border-yellow-500/20 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Crown className="text-yellow-600/50" size={48} />
                </div>
                <div className="text-yellow-600 font-bold text-lg">0 points</div>
              </div>

              {/* 3rd Place - Empty */}
              <div className="bg-gray-800/30 border border-gray-600/50 rounded-lg p-6 text-center transform translate-y-8">
                <div className="flex justify-center mb-4">
                  <Award className="text-gray-500" size={36} />
                </div>
                <div className="text-gray-500 text-sm">0 points</div>
              </div>
            </div>

            {/* Complete Rankings Table */}
            <div className="bg-gray-900/50 border border-red-500/20 rounded-lg overflow-hidden">
              <div className="bg-red-600/20 p-4 border-b border-red-500/20">
                <h2 className="text-xl font-bold text-red-400">Complete Rankings</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left p-4 text-red-400 font-semibold">Rank</th>
                      <th className="text-left p-4 text-red-400 font-semibold">Agent</th>
                      <th className="text-left p-4 text-red-400 font-semibold">
                        {activeTab === 'level' && 'Points'}
                        {activeTab === 'missions' && 'Missions'}
                        {activeTab === 'weekly' && 'Weekly XP'}
                      </th>
                      <th className="text-left p-4 text-red-400 font-semibold">
                        {activeTab === 'level' && 'Level'}
                        {activeTab === 'missions' && 'Success Rate'}
                        {activeTab === 'weekly' && 'This Week'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Empty state - no data rows */}
                    <tr>
                      <td colSpan="4" className="p-12 text-center">
                        <Trophy className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-400 mb-2">No Rankings Available</h3>
                        <p className="text-gray-500">
                          Leaderboard data will appear here once players start completing missions.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-red-500/30 rounded-2xl p-8 max-w-md w-full text-white shadow-2xl shadow-red-500/20 transform transition-all duration-300 scale-100">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={handleClosePopup}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Trophy Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg">
                <Trophy className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-400 mb-4">
                Leaderboard Access
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The leaderboard will be fully functional once login and signup systems are implemented. Track your progress, compete with other hackers, and climb the ranks!
              </p>
              <p className="text-sm text-gray-400 mb-8">
                For now, you can explore the interface and see how rankings will work.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleBackToHome}
                  className="flex-1 group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Back to Home
                </button>
                <button
                  onClick={handleExploreGames}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Explore Games
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;