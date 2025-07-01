import React from "react";
import Header from "@/components/Header";

const notifications = [
  {
    id: 1,
    type: "거래 문의",
    message: "[윙스팬] 상품에 새 문의가 도착했습니다.",
    time: "2분 전",
  },
  {
    id: 2,
    type: "시스템",
    message: "판매글이 성공적으로 등록되었습니다.",
    time: "1시간 전",
  },
];

const Alarm: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />
      <div className="max-w-xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">알림</h1>
        <div className="space-y-4">
          {notifications.length === 0 ? (
            <div className="text-gray-400 text-center py-16">알림이 없습니다.</div>
          ) : (
            notifications.map((n) => (
              <div key={n.id} className="bg-white/90 rounded-xl shadow flex items-center gap-4 border-l-4 border-orange-400 p-5 hover:shadow-lg transition-all">
                <div className="font-semibold text-orange-500 w-20 text-center">{n.type}</div>
                <div className="flex-1">
                  <div className="text-gray-800 font-medium">{n.message}</div>
                  <div className="text-xs text-gray-400 mt-1">{n.time}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Alarm; 