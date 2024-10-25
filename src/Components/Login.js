import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const images = [
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out');

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeClass('fade-in');
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const styles = {
    slideshowContainer: {
      flex: 1,
      overflow: 'hidden',
      position: 'relative',
      height: '100vh'
    },
    slideshowImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'opacity 1s ease-in-out'
    },
    fadeIn: {
      opacity: 1
    },
    fadeOut: {
      opacity: 0
    }
  };

  return (
    <div style={styles.slideshowContainer}>
      <img 
        src={images[currentImageIndex]} 
        alt={`Slide ${currentImageIndex + 1}`} 
        style={{
          ...styles.slideshowImage,
          ...(fadeClass === 'fade-in' ? styles.fadeIn : styles.fadeOut)
        }}
      />
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    },
    loginBox: {
      flex: '0 1 500px',
      padding: '40px',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: '#333'
    },
    subtitle: {
      color: '#1a1125',
      marginBottom: '24px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#333'
    },
    input: {
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
      marginTop: '4px'
    },
    button: {
      padding: '12px',
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '16px'
    },
    error: {
      color: 'red',
      fontSize: '14px'
    },
    options: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '16px'
    },
    link: {
      color: '#2563eb',
      textDecoration: 'none'
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try
    {
      console.log('Login attempt with:', { email, password });
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h1 style={styles.title}>Welcome back</h1>
        <p style={styles.subtitle}>Please enter your details</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <div style={styles.options}>
            <a href="#" style={styles.link}>Forgot password?</a>
          </div>

          <button type="submit" style={styles.button}>
            Sign In
          </button>

          <p style={{ textAlign: 'center', marginTop: '16px' }}>
            Don't have an account?{' '}
            <a href="/signup" style={styles.link}>Sign Up</a>
          </p>
        </form>
      </div>
      <Slideshow />
    </div>
  );
};

export default Login;