import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Terminal, Brain, Key, Keyboard, Shield, Globe, ArrowRight,
  FileSearch, Cpu, Search, Wrench, Puzzle, Binary, FileText, Baby,
  Users, Star, RefreshCw, Clock, Award, Gamepad2
} from 'lucide-react';

import { CipherGame } from '../games/CipherGame';
import { MemoryGame } from '../games/MemoryGame';

export function QuickGame() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const navigate = useNavigate();

  const games = [
    {
      id: 'crypto',
      title: 'Cryptography',
      description: 'Break ciphers and decode encrypted messages',
      icon: Key,
      component: CipherGame,
      color: 'purple',
      difficulty: 'Expert',
      players: '2.3K+',
      time: '10 mins'
    },
    {
      id: 'memory',
      title: 'Cyber Memory',
      description: 'Match security tools and concepts',
      icon: Brain,
      component: MemoryGame,
      color: 'blue',
      difficulty: 'Easy',
      players: '4.2K+',
      time: '5 mins'
    },
    {
      id: 'more-games',
      title: 'More Games',
      description: 'Additional cybersecurity challenges and training modules',
      icon: Gamepad2,
      component: null,
      color: 'gray',
      difficulty: 'Variable',
      players: 'New',
      time: 'Soon',
      comingSoon: true
    }
  ];

  const GameComponent = selectedGame
    ? games.find(g => g.id === selectedGame)?.component
    : null;

  const handleKidsGamesClick = () => {
    navigate('/kidsgames');
  };

  const handleGameClick = (gameId: string) => {
    const game = games.find(g => g.id === gameId);
    if (game?.comingSoon) {
      return; // Do nothing for coming soon games
    }
    setSelectedGame(gameId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 py-12 pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-red-600 to-white">
            Hacker Training Games
          </h1>
          <p className="text-gray-400">Challenge yourself with our comprehensive cybersecurity challenges</p>
        </div>

        {!selectedGame ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <div
                key={game.id}
                className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  game.comingSoon ? 'cursor-default opacity-80' : 'cursor-pointer'
                } border border-white/20 hover:border-white/40 overflow-hidden`}
                onClick={() => handleGameClick(game.id)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Coming Soon Badge */}
                {game.comingSoon && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg z-10">
                    <Star className="w-3 h-3" />
                    Coming Soon
                  </div>
                )}

                {/* Certification Badge */}
                {game.certifications && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Award className="w-3 h-3" />
                    {game.certifications}
                  </div>
                )}

                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                  game.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                  game.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-600' :
                  game.color === 'yellow' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                  game.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                  game.color === 'pink' ? 'bg-gradient-to-br from-pink-400 to-pink-600' :
                  game.color === 'gray' ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                  'bg-gradient-to-br from-cyan-400 to-cyan-600'
                }`} />

                <div className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                  game.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  game.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                  game.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                  game.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                  game.color === 'pink' ? 'bg-gradient-to-r from-pink-500 to-pink-600' :
                  game.color === 'gray' ? 'bg-gradient-to-r from-gray-500 to-gray-600' :
                  'bg-gradient-to-r from-cyan-500 to-cyan-600'
                }`}>
                  <game.icon className="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-white text-center mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                  {game.title}
                </h3>

                <p className="text-white/70 text-center mb-4 leading-relaxed">
                  {game.description}
                </p>

                <div className="flex justify-between items-center text-white/70 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{game.time}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    game.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                    game.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    game.difficulty === 'Hard' ? 'bg-orange-500/20 text-orange-400' :
                    game.difficulty === 'Expert' ? 'bg-red-500/20 text-red-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {game.difficulty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedGame(null)}
              className="mb-8 text-red-500 hover:text-red-400 flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Choose Another Challenge
            </button>
            {GameComponent && <GameComponent />}
          </div>
        )}
      </div>
    </div>
  );
}