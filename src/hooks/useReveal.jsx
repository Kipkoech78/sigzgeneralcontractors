import { useEffect, useRef, useState } from "react";

/**
 * Reveal animation using Intersection Observer
 */
export function useReveal(options = {}) {
  const {
    threshold = 0.15,
    root = null,
    rootMargin = "0px",
    once = true,
  } = options;

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin, once]);

  return [ref, visible];
}

/**
 * Animated count-up hook
 */
export function useCountUp(end, start = false, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    let startTime = null;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * end);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }

    requestAnimationFrame(animate);
  }, [end, start, duration]);

  return count;
}