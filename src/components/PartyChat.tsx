
import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChatMessage } from '@/types/party';

interface PartyChatProps {
  partyId: number;
  partyTitle: string;
  messages: ChatMessage[];
  onSendMessage: (partyId: number, message: string) => void;
}

const PartyChat: React.FC<PartyChatProps> = ({ partyId, partyTitle, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(partyId, newMessage.trim());
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="h-96 flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <MessageCircle className="w-5 h-5" />
          {partyTitle} 채팅방
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4 pt-0">
        <div className="flex-1 overflow-y-auto mb-4 space-y-3 bg-gray-50 p-3 rounded-lg">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              아직 메시지가 없습니다. 첫 메시지를 보내보세요!
            </div>
          ) : (
            messages.map((message) => (
              <div key={message.id} className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm text-gray-700">{message.username}</span>
                  <span className="text-xs text-gray-500">
                    {new Date(message.timestamp).toLocaleTimeString('ko-KR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm border">
                  {message.message}
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="메시지를 입력하세요..."
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="sm">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PartyChat;
