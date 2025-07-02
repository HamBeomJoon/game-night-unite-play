
export interface Game {
  id: number;
  title: string;
  rating: number;
  players: string;
  time: string;
  difficulty: string;
  image: string;
  description: string;
  category: string;
}

export const allGames: Game[] = [
  {
    id: 1,
    title: "스플렌더",
    rating: 4.8,
    players: "2-4명",
    time: "30분",
    difficulty: "보통",
    image: "/placeholder.svg",
    description: "보석 상인이 되어 부를 쌓아가는 전략 게임",
    category: "전략"
  },
  {
    id: 2,
    title: "티켓 투 라이드",
    rating: 4.6,
    players: "2-5명",
    time: "60분",
    difficulty: "쉬움",
    image: "/placeholder.svg",
    description: "기차 노선을 연결하는 재미있는 전략 게임",
    category: "전략"
  },
  {
    id: 3,
    title: "코드네임",
    rating: 4.9,
    players: "3-8명",
    time: "15분",
    difficulty: "쉬움",
    image: "/placeholder.svg",
    description: "단서로 소통하는 팀 협력 추리 게임",
    category: "추리"
  },
  {
    id: 4,
    title: "아줄",
    rating: 4.7,
    players: "2-4명",
    time: "45분",
    difficulty: "보통",
    image: "/placeholder.svg",
    description: "아름다운 타일로 궁전을 꾸미는 퍼즐 게임",
    category: "전략"
  },
  {
    id: 5,
    title: "윙스팬",
    rating: 4.8,
    players: "1-5명",
    time: "90분",
    difficulty: "보통",
    image: "/placeholder.svg",
    description: "새들의 서식지를 만드는 아름다운 엔진빌딩 게임",
    category: "전략"
  },
  {
    id: 6,
    title: "텔레스트레이션",
    rating: 4.5,
    players: "4-8명",
    time: "30분",
    difficulty: "쉬움",
    image: "/placeholder.svg",
    description: "그림과 추측이 만나는 재미있는 파티 게임",
    category: "파티"
  },
  {
    id: 7,
    title: "팬데믹",
    rating: 4.6,
    players: "2-4명",
    time: "45분",
    difficulty: "어려움",
    image: "/placeholder.svg",
    description: "전염병을 막아내는 협력 게임",
    category: "협력"
  },
  {
    id: 8,
    title: "도미니언",
    rating: 4.4,
    players: "2-4명",
    time: "30분",
    difficulty: "보통",
    image: "/placeholder.svg",
    description: "덱빌딩의 시초가 된 명작 게임",
    category: "덱빌딩"
  }
];

export const gameReviews: Record<string, number> = {
  '스플렌더': 12,
  '티켓 투 라이드': 8,
  '코드네임': 20,
  '아줄': 15,
  '윙스팬': 7,
  '텔레스트레이션': 18,
  '팬데믹': 10,
  '도미니언': 5,
};
