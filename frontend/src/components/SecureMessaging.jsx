import React, { useState } from 'react';

const SecureMessaging = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Support', text: 'Hello! How can we help you today?' },
    { id: 2, sender: 'You', text: 'I have a question about my recent order.' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'You', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl bg-gradient-to-br from-background-light to-background-dark rounded-xl shadow-lg border border-accent-dark/20 text-text-primary">
      <h2 className="text-3xl font-bold text-center mb-6 text-text-heading">Secure Messaging</h2>

      <div className="flex flex-col h-96 bg-background-light/70 rounded-lg p-4 mb-4 shadow-inner overflow-y-auto border border-border-light">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex mb-3 ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-3 rounded-lg max-w-[70%] text-sm ${
                msg.sender === 'You'
                  ? 'bg-primary-accent text-white rounded-br-none'
                  : 'bg-gradient-to-r from-neutral-200 to-neutral-100 text-text-secondary rounded-bl-none'
              }`}
            >
              <strong className="block text-xs mb-1 opacity-80">
                {msg.sender === 'You' ? 'You' : msg.sender}
              </strong>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          className="flex-grow p-3 rounded-lg bg-background-light border border-border-light focus:ring-2 focus:ring-primary-accent focus:outline-none text-text-primary placeholder-text-secondary"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="px-6 py-3 bg-primary-accent text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SecureMessaging;