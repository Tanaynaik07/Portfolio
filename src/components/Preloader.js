import React, { useEffect, useState } from 'react';
import './Preloader.css'; // Ensure you have the updated CSS here

const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the preloader (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed (3 seconds)

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader">
          <div className="center-line"></div>
        </div>
      ) : (
        <div className="main-content reveal">{children}</div>
      )}
    </>
  );
};

export default Preloader;
