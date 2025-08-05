import { BsCheck, BsCheckAll } from "react-icons/bs";

interface BubbleProps {
  message: string;
  isOwn: boolean;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
}

const MessageBubble: React.FC<BubbleProps> = ({ message, isOwn, timestamp, status }) => {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[75%] ${isOwn ? 'order-2' : 'order-1'}`}>
        <div
          className={`px-4 py-3 rounded-2xl ${
            isOwn
              ? 'bg-gradient-to-r bg-gray-700'
              : 'bg-gray text-white'
          } ${isOwn ? 'rounded-br-md' : 'rounded-bl-md'}`}
        >
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
        <div className={`flex items-center gap-1 mt-1 ${isOwn ? 'justify-end' : 'justify-start'}`}>
          <span className="text-xs text-gray-400">{timestamp}</span>
          {isOwn && (
            <span className="text-xs text-gray-400">
              {status === 'sent' ? <BsCheck /> : status === 'delivered' ? <BsCheckAll /> : <BsCheckAll className="text-blue-400" />}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble