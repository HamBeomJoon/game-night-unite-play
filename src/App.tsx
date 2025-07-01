import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GameRecommendation from "./pages/GameRecommendation";
import PartyRecruitment from "./pages/PartyRecruitment";
import CafeFinder from "./pages/CafeFinder";
import NotFound from "./pages/NotFound";
import SecondHandMarket from "./pages/SecondHandMarket";
import Alarm from "./pages/Alarm";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/games" element={<GameRecommendation />} />
            <Route path="/party" element={<PartyRecruitment />} />
            <Route path="/cafes" element={<CafeFinder />} />
            <Route path="/trade" element={<SecondHandMarket />} />
            <Route path="/alarm" element={<Alarm />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/login" element={<Login />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
