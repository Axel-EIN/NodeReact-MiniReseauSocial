import { useState, useEffect } from 'react';
import { getAllMessages } from '../../api/api-client';

const Message = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getAllMessages();
        setMessages(data);
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <header>
        <h1>Messages</h1>
      </header>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Message;
