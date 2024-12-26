import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('/api/hello')  // This will be proxied to the backend.
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Error fetching data'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{message}</h1>
    </div>
  );
}

export default App;

