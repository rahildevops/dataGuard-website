import { useState, useEffect, useRef } from 'react';

export const useAutoScroll = (items, interval = 20000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    startAutoScroll(); // Restart the timer
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    startAutoScroll(); // Restart the timer
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
    startAutoScroll(); // Restart the timer
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [items.length, interval]);

  return {
    currentIndex,
    goToNext,
    goToPrevious,
    goToIndex,
    startAutoScroll,
    stopAutoScroll
  };
};