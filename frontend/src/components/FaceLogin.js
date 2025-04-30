import React, { useRef, useState } from "react";

const FaceLogin = () => {
  const videoRef = useRef(null);
  const [message, setMessage] = useState("Click to Start Camera");

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        setMessage("Camera is ON. Click to capture.");
      })
      .catch(() => setMessage("Camera permission denied"));
  };

  const capture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 640;
    canvas.height = 480;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    const base64 = canvas.toDataURL("image/jpeg");
    const name = localStorage.getItem("currentStudent");
    localStorage.setItem(`photo_${name}`, base64);
    setMessage("Photo saved successfully ✅");
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">👤 Face Login</h1>
      <video ref={videoRef} autoPlay className="rounded shadow-lg border-4 border-blue-500 max-w-md"></video>
      <div className="mt-4 flex gap-4">
        <button onClick={startCamera} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800">
          Start Camera
        </button>
        <button onClick={capture} className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700">
          Capture
        </button>
      </div>
      <p className="mt-4 text-blue-600 font-semibold">{message}</p>
    </div>
  );
};

export default FaceLogin;