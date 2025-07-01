import React from "react";
import Header from "@/components/Header";

const mySales = [
  { id: 1, name: "스플렌더", status: "판매중", price: 35000 },
  { id: 2, name: "아줄", status: "거래완료", price: 28000 },
];
const myFavorites = [
  { id: 3, name: "윙스팬", price: 55000 },
];

const statusColor = (status: string) =>
  status === "판매중"
    ? "bg-green-100 text-green-700 border-green-300"
    : "bg-gray-200 text-gray-500 border-gray-300";

const MyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">마이페이지</h1>
        {/* 프로필 */}
        <div className="bg-white/90 rounded-xl shadow p-6 mb-8 flex items-center gap-4 hover:shadow-lg transition-all">
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-2xl font-bold text-orange-500">김</div>
          <div>
            <div className="font-semibold text-lg text-gray-800">김지훈</div>
            <div className="text-gray-500 text-sm">서울 강남구</div>
          </div>
        </div>
        {/* 내 판매글 */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2 text-orange-600">내 판매글</h2>
          <div className="space-y-3">
            {mySales.length === 0 ? (
              <div className="text-gray-400">등록된 판매글이 없습니다.</div>
            ) : (
              mySales.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white border border-orange-100 rounded-lg px-4 py-3 shadow-sm gap-3"
                >
                  <span className="flex-1 font-medium text-gray-800">{item.name}</span>
                  <span className="font-bold text-orange-600 mr-2">{item.price.toLocaleString()}원</span>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full border ${statusColor(
                      item.status
                    )} text-center min-w-[64px]`}
                  >
                    {item.status}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
        {/* 관심목록 */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2 text-orange-600">관심목록</h2>
          <div className="space-y-3">
            {myFavorites.length === 0 ? (
              <div className="text-gray-400">관심 상품이 없습니다.</div>
            ) : (
              myFavorites.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white border border-orange-100 rounded-lg px-4 py-3 shadow-sm gap-3"
                >
                  <span className="flex-1 font-medium text-gray-800">{item.name}</span>
                  <span className="font-bold text-orange-600">{item.price.toLocaleString()}원</span>
                </div>
              ))
            )}
          </div>
        </div>
        {/* 최근 활동 */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-orange-600">최근 활동</h2>
          <div className="bg-white/90 rounded-xl shadow p-6 text-gray-400 text-center">최근 활동 내역이 없습니다.</div>
        </div>
      </div>
    </div>
  );
};

export default MyPage; 