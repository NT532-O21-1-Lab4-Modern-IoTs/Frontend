import React, { useEffect } from "react";
import { useState } from "react";
export default function Control() {
  const handleClick = (x) => {
    fetch(`http://localhost:8000/control/${x}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("time refresh")
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const styles = {
    container: {
      textAlign: 'center',
      padding: '20px'
    },
    header: {
      marginBottom: '20px'
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px'
    },
    ledControl: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px'
    },
    button: {
      padding: '10px 20px',
      margin: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s'
    },
    buttonHover: {
      backgroundColor: '#0056b3'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Điều khiển đèn led</h1>
      </div>
      <div style={styles.buttonGroup}>
        <div style={styles.ledControl}>
          <h2>LED 1</h2>
          <button
            style={styles.button}
            onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
            onClick={() => handleClick('on1')}
          >
            Bật LED 1
          </button>
          <button
            style={styles.button}
            onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
            onClick={() => handleClick('off1')}
          >
            Tắt LED 1
          </button>
        </div>
        <div style={styles.ledControl}>
          <h2>LED 2</h2>
          <button
            style={styles.button}
            onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
            onClick={() => handleClick('on2')}
          >
            Bật LED 2
          </button>
          <button
            style={styles.button}
            onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
            onClick={() => handleClick('off2')}
          >
            Tắt LED 2
          </button>
        </div>
      </div>
    </div>
  );
}
