
export interface Party {
  id: number;
  title: string;
  description: string;
  gameType: string;
  location: string;
  date: string;
  time: string;
  currentParticipants: number;
  maxParticipants: number;
  isRuleMasterIncluded: boolean;
  organizer: {
    id: string;
    username: string;
    rating: number;
    totalReviews: number;
  };
  tags: string[];
  status?: 'upcoming' | 'ongoing' | 'completed';
}

export interface ChatMessage {
  id: string;
  userId: string;
  username: string;
  message: string;
  timestamp: string;
}

export interface PartyChat {
  partyId: number;
  messages: ChatMessage[];
}
