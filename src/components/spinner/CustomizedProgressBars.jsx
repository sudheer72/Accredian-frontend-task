import React from "react";

const GradientCircularProgress = ({ percentage }) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      {/* Background Circle */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        strokeWidth={strokeWidth}
        fill="none"
        stroke="#e0e0e0"
      />
      {/* Progress Circle */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        strokeWidth={strokeWidth}
        fill="none"
        stroke="url(#gradient)"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
      />
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#2196F3" />
        </linearGradient>
      </defs>
      {/* Percentage Text */}
      <text
        x="60"
        y="65"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="#333"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default GradientCircularProgress;
