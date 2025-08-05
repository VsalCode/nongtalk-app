import React, { useState } from 'react';
import { IoMdSend, IoMdMore, IoMdArrowBack } from "react-icons/io";
import InputText from "../components/ui/InputText"
import MessageBubble from "../components/common/MessageBubble"
import { Link } from 'react-router';

interface Message {
  id: number;
  text: string;
  isOwn: boolean;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
}

const MessagePage: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey! How are you doing today?",
      isOwn: false,
      timestamp: "10:30",
      status: "read"
    },
    {
      id: 2,
      text: "I'm doing great! Just finished working on a new project. How about you?",
      isOwn: true,
      timestamp: "10:32",
      status: "read"
    },
    {
      id: 3,
      text: "That sounds awesome! I'd love to hear more about it. What kind of project is it?",
      isOwn: false,
      timestamp: "10:33",
      status: "read"
    },
    {
      id: 4,
      text: "It's a messaging app with a really cool UI. I'm pretty excited about how it's turning out!",
      isOwn: true,
      timestamp: "10:35",
      status: "delivered"
    },
    {
      id: 5,
      text: "Nice! Can't wait to see it 🚀",
      isOwn: false,
      timestamp: "10:36",
      status: "read"
    }
  ]);

  const handleSendMessage = (): void => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        isOwn: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: "sent"
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <main
      className='flex items-center justify-center max-h-[100svh] w-full'
      style={{
        background: "radial-gradient(circle, rgba(88,76,214,1) 0%, rgba(20,20,20,1) 50%)",
      }}
    >
      <section className='text-white bg-black w-full max-w-md flex flex-col items-center relative min-h-[100svh] max-h-[100svh] rounded-lg my-4'>
        <div className="bg-secondary flex items-center gap-4 justify-between px-4 py-5 shadow-lg w-full">
          <div className="flex items-center gap-3">
            <Link to="/friends" className="text-white hover:bg-white/10 p-2 rounded-full transition-colors">
              <IoMdArrowBack className="text-xl" />
            </Link>
            <div
              className="flex items-center justify-center w-10 h-10 text-white rounded-full text-sm font-bold shadow-md"
              style={{ backgroundColor: "#004030" }}
            >
              AD
            </div>
            <div>
              <h1 className="font-semibold font-poppins">Username</h1>
              <p className="text-xs ">Online</p>
            </div>
          </div>
          <button className="text-white hover:bg-white/10 p-2 rounded-full transition-colors">
            <IoMdMore className="text-xl" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="space-y-2">
            {messages.map((msg) => (
              <MessageBubble
                key={msg.id}
                message={msg.text}
                isOwn={msg.isOwn}
                timestamp={msg.timestamp}
                status={msg.status}
              />
            ))}
          </div>
        </div>

        <div className=" w-full p-4 bg-gray-900 border-t border-gray-700">
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <InputText
                id="chat"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <button 
              onClick={handleSendMessage}
              className="p-4 cursor-pointer bg-primary rounded-xl"
            >
              <IoMdSend className="text-xl text-white" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MessagePage;