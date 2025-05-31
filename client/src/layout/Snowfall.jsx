function Snowfall() {
  const snowflakeCount = 50; // more flakes for better effect
  const snowflakes = Array.from({ length: snowflakeCount });

  return (
    <div className="snowfall-container pointer-events-none fixed inset-0 z-50">
      {snowflakes.map((_, i) => {
        // Random values for position, size, duration, delay
        const left = Math.random() * 100; // vw
        const size = 4 + Math.random() * 6; // px
        const duration = 7 + Math.random() * 10; // seconds
        const delay = Math.random() * 10; // seconds
        const opacity = 0.3 + Math.random() * 0.7;

        return (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${left}vw`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
}
export default Snowfall;