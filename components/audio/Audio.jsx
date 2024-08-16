"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [showPlayer, setShowPlayer] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const handleStart = () => {
    setShowPrompt(false);
    setShowPlayer(true);
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleSkip = () => {
    setShowPrompt(false);
  };

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/music.m4a" type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>

      {showPrompt && (
        <div style={styles.startPrompt}>
          <p style={styles.promptText}>Would you like to start the music?</p>
          <div style={styles.buttonGroup}>
            <button onClick={handleStart} style={styles.startButton}>
              🎵 Yes, Start
            </button>
            <button onClick={handleSkip} style={styles.skipButton}>
              ❌ No, Skip
            </button>
          </div>
        </div>
      )}

      {showPlayer && (
        <div style={styles.container}>
          <div style={styles.title}>
            🎵 Audio Player
          </div>
          <button onClick={togglePlay} style={styles.playButton}>
            {isPlaying ? "⏸ Pause" : "▶ Play"}
          </button>
          <div style={styles.volumeControlContainer}>
            <span style={styles.volumeIcon}>🔊</span>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              style={styles.volumeControl}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  startPrompt: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    zIndex: 1000,
  },
  promptText: {
    color: "#fff",
    fontSize: "18px",
    marginBottom: "10px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
  startButton: {
    backgroundColor: "#1DB954",
    border: "none",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s",
    marginRight: "10px",
  },
  skipButton: {
    backgroundColor: "#FF4757",
    border: "none",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s",
  },
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    zIndex: 1000,
    flexDirection: "column",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
    marginBottom: "5px",
  },
  playButton: {
    backgroundColor: "#00dcff",
    border: "none",
    color: "#000",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s",
  },
  volumeControlContainer: {
    display: "flex",
    alignItems: "center",
  },
  volumeIcon: {
    color: "#fff",
    marginRight: "8px",
  },
  volumeControl: {
    width: "100px",
    cursor: "pointer",
  },
};

export default AudioPlayer;
