'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScaledPreview({
  children,
  designWidth = 880,
  designHeight = 520,
  centered = false,
}) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const available = el.clientWidth;
      setScale(available >= designWidth ? 1 : available / designWidth);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [designWidth]);

  const scaledHeight = designHeight * scale;

  if (centered) {
    return (
      <div
        ref={containerRef}
        className="w-full flex items-center justify-center"
        style={{ minHeight: scaledHeight }}
      >
        <div
          style={{
            width: designWidth,
            height: designHeight,
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full overflow-hidden" style={{ height: scaledHeight }}>
      <div
        style={{
          width: designWidth,
          height: designHeight,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  );
}
