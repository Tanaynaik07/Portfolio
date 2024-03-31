import React, { useEffect, useRef } from "react";
import "../components/canva.css";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const shapes = ["circle", "rectangle", "triangle"];
    const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

    const drawRandomShape = () => {
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];

      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 50 + 20; // Random size between 20 and 70

      ctx.beginPath();
      ctx.fillStyle = color;

      if (shape === "circle") {
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      } else if (shape === "rectangle") {
        ctx.fillRect(x, y, size, size);
      } else if (shape === "triangle") {
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size / 2, y + size);
        ctx.closePath();
        ctx.fill();
      }
    };

    const intervalId = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawRandomShape();
    }, 3000); // Draw a new shape every 3 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  return <canvas ref={canvasRef} width={100} height={600} />;
};

export default Canvas;
