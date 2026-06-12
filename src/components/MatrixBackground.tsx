import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const chars = "01アイウエオカキクケコデータサイエンス人工知能MLAINLP10∑∂∫≈∞βαλ".split("");
    const fontSize = 13;
    let cols = Math.floor(window.innerWidth / fontSize);
    let drops = Array(cols).fill(1);

    const colors = ["#FF9500", "#00F5D4", "#FFB347", "#7FFFD4"];

    const draw = () => {
      ctx.fillStyle = "rgba(6, 8, 17, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.font = `${fontSize}px monospace`;
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillText(char, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 55);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      id="matrix-canvas"
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 opacity-5 pointer-events-none"
    />
  );
}
