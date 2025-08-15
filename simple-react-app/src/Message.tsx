import React, { useState } from 'react';

const Message: React.FC = () => {
  const [text, setText] = useState('Hello, World!');
  return (
    <div>
      <p data-testid="message">{text}</p>
      <button onClick={() => setText('Button Clicked!')}>Click Me</button>
    </div>
  );
};

export default Message;
