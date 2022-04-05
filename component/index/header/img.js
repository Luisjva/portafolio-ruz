import { useEffect, useState } from "react";

export default function ImgHeader({ position, positionNow, picture }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    position === positionNow ? setVisible(true) : setVisible(false);
  }, [positionNow, position]);

  return (
    <div
      className={visible ? "img--visible" : "img"}
      style={{
        background: `linear-gradient(#0005, #0005), url("${picture.name}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      key={picture.name}
    >
      <style jsx>{`
        div {
          animation-timing-function: linear;
          height: 100%;
          position: absolute;
          transition: 0.6s;
          top: 0;
          width: 100%;
          z-index: -1;
        }

        .img {
          animation-timing-function: linear;
          left: ${position % 2 === 0 ? "-100%" : "100%"};
        }

        .img--visible {
          animation-timing-function: linear;
          left: 0;
        }
      `}</style>
    </div>
  );
}
