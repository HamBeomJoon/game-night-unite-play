import React from "react";
import Header from "@/components/Header";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="bg-white/90 rounded-xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">로그인</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-orange-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="이메일을 입력하세요"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-orange-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition-all"
            >
              로그인
            </button>
          </form>
          <div className="text-center mt-4">
            <a href="#" className="text-orange-600 hover:underline text-sm">회원가입</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 