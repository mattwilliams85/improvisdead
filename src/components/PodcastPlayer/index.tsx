'use client'

import { useEffect, useState, useRef } from 'react';
import fetchFeed from '@/lib/rss';
import styles from './styles.module.css';
let animationController;

export default function PodcastPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const source = useRef<MediaElementAudioSourceNode | null>(null);
  const analyzer = useRef<AnalyserNode | null>(null);
  let animationController: number;

  const visualizeData = () => {
    animationController = window.requestAnimationFrame(visualizeData);
    if (audioRef.current?.paused) {
      return cancelAnimationFrame(animationController);
    }
    const songData = new Uint8Array(80);
    analyzer.current?.getByteFrequencyData(songData);
    const bar_width = 4;
    let start = 0;
    const gap = 4;
    const cornerRadius = 2;
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx && canvasRef.current) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      for (let i = 4; i < songData.length; i++) {
        const barHeight = -songData[i] / 5;
        start = i * (bar_width + gap);

        // Draw the main part of the bar
        ctx.fillRect(start, canvasRef.current.height, bar_width, barHeight + cornerRadius);

        // Draw the rounded top
        ctx.beginPath();
        ctx.moveTo(start, canvasRef.current.height + barHeight + cornerRadius);
        ctx.arcTo(start, canvasRef.current.height + barHeight, start + cornerRadius, canvasRef.current.height + barHeight, cornerRadius);
        ctx.arcTo(start + bar_width, canvasRef.current.height + barHeight, start + bar_width, canvasRef.current.height + barHeight + cornerRadius, cornerRadius);
        ctx.lineTo(start + bar_width, canvasRef.current.height + barHeight + cornerRadius);
        ctx.fillStyle = '#ddd6c9';
        ctx.fill();
      }
    }
  }

  const handleAudioPlay = () => {
    const audioContext = new AudioContext();
    if (!source.current) {
      console.log(audioContext)
      source.current = audioContext.createMediaElementSource(audioRef.current);
      analyzer.current = audioContext.createAnalyser();
      source.current.connect(analyzer.current);
      analyzer.current.connect(audioContext.destination);
    }
    visualizeData();
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      if (audio) {
        const progress = (audio.currentTime / audio.duration) * 100;
        setProgress(progress);
        setCurrentTime(audio.currentTime);
      }
    };

    if (audio) {
      audio.addEventListener('timeupdate', updateProgress);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const progressBar = progressBarRef.current;
    if (audio && progressBar) {
      const clickPosition = (e.pageX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
      audio.currentTime = clickPosition * audio.duration;
    }
  };

  return (
    <div className={styles.playerWrap}>
      <div id="podcastPlayer" className={styles.player}>
        <div className={styles.front}>
          <div>Improv Is Dead</div>
          <div className={styles.title}>SEASON 4 TRAILER</div>
          <audio ref={audioRef} src={'files/trailer.mp3'} onPlay={handleAudioPlay}>
            Your browser does not support the audio element.
          </audio>
          <div className={styles.controlsWrap}>
            <button id="playPauseBtn" onClick={togglePlayPause} className={styles.playButton}>
              {isPlaying ? <div className={styles.pauseIcon} /> : <div className={styles.playIcon} />}
            </button>
            <div className={styles.barWrap}>
              <div id="progressBar" className={styles.bar} ref={progressBarRef} onClick={handleProgressBarClick}>
                <div id="progress" style={{ width: `${progress}%` }} className={styles.inner}></div>
              </div>
              <div className={styles.time}>{formatTime(currentTime)}</div>
            </div>
          </div>
        </div>
        <canvas className={styles.visualizer} ref={canvasRef} width={415} height={200} />
      </div>
      <div className={styles.stub}>
        <div className={styles.admitOne}>
          <div className={styles.inner}>ADMIT ONE</div>
        </div>
      </div>
    </div>
  );
}
