
import React, { useState } from 'react';
import { Dice1, Search, Bell, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-orange-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Dice1 className="w-8 h-8 text-orange-500" />
            <span className="text-xl font-bold text-gray-800">보드와 함께</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="게임, 카페, 모임을 검색해보세요..." 
                className="pl-10 border-orange-200 focus:border-orange-400 focus:ring-orange-400"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/games" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">게임추천</Link>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">일행모집</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">카페찾기</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">중고거래</a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="w-4 h-4" />
            </Button>
            <Button size="sm" className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white">
              로그인
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-orange-100 py-4">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="검색..." 
                  className="pl-10 border-orange-200 focus:border-orange-400"
                />
              </div>
              <nav className="space-y-2">
                <Link to="/games" className="block py-2 text-gray-700 hover:text-orange-600 font-medium">게임추천</Link>
                <a href="#" className="block py-2 text-gray-700 hover:text-orange-600 font-medium">일행모집</a>
                <a href="#" className="block py-2 text-gray-700 hover:text-orange-600 font-medium">카페찾기</a>
                <a href="#" className="block py-2 text-gray-700 hover:text-orange-600 font-medium">중고거래</a>
              </nav>
              <div className="flex space-x-2 pt-2">
                <Button size="sm" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
                  로그인
                </Button>
                <Button variant="outline" size="sm" className="flex-1 border-orange-200">
                  회원가입
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
