import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import { ModalImgContext } from "../../pages/_app";
import { colors } from "../../utils";

export default function ModalImg() {
  const { modalImgOpen, setModalImgOpen, modalImgDates } =
    useContext(ModalImgContext);
  const [position, setPosition] = useState({ width: 0, height: 0 });
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [widthImg, setWidthImg] = useState(0);
  const [heightImg, setHeightImg] = useState(0);

  useEffect(() => {
    setWidth(innerWidth);
    setHeight(innerHeight);
    setPosition(modalImgDates.position);

    window.addEventListener("resize", () => {
      setWidth(innerWidth);
      setHeight(innerHeight);
    });
  }, [modalImgDates]);

  useEffect(() => {
    if (width > height) {
      setWidthImg(
        (modalImgDates.img.width * (height * 0.8)) / modalImgDates.img.height
      );

      setHeightImg(height * 0.8);
    } else {
      setWidthImg(
        modalImgDates.img.height > modalImgDates.img.width
          ? (modalImgDates.img.width * (height * 0.8)) /
              modalImgDates.img.height
          : width * 0.8
      );

      setHeightImg(
        modalImgDates.img.height > modalImgDates.img.width
          ? height * 0.8
          : (modalImgDates.img.height * (width * 0.8)) / modalImgDates.img.width
      );
    }
  }, [width, height, modalImgDates]);

  return (
    <div
      className={
        modalImgOpen
          ? "modal-img__container modal-img__container--open"
          : "modal-img__container"
      }
    >
      <div
        className="modal-img__background"
        onClick={() => setModalImgOpen(false)}
      ></div>
      <div className="modal-img__content" onClick={(e) => e.preventDefault}>
        <div className="modal-img__content__img"></div>
        <div
          onClick={() => setModalImgOpen(false)}
          className="modal-img__content__description"
        >
          {modalImgDates.img.description && (
            <h3>{modalImgDates.img.description}</h3>
          )}
          <p>Para cerrar la imagen, presione aquí</p>
        </div>
      </div>
      <style jsx>{`
        .modal-img__container {
          align-items: center;
          display: flex;
          height: 0;
          justify-content: center;
          left: ${position.width}px;
          overflow: hidden;
          position: fixed;
          transition: 0.3s;
          top: ${position.height}px;
          width: 0;
          z-index: 150;
        }

        .modal-img__container--open {
          height: 100vh;
          left: 0;
          top: 0;
          width: 100%;
        }

        .modal-img__background {
          background: #0007;
          height: 100%;
          width: 100%;
          cursor: pointer;
        }

        .modal-img__content {
          background: linear-gradient(#000, #000);
          height: ${heightImg}px;
          left: 50%;
          position: absolute;
          top: 43%;
          transform: translate(-50%, -50%);
          width: ${widthImg}px;
          max-height: 85vh;
        }

        .modal-img__content__description {
          background: ${colors.primary};
          cursor: pointer;
          position: absolute;
          top: 100%;
          left: 0;
          padding: 1rem;
          transition: 0.3s;
          width: 100%;
        }

        .modal-img__content__description > h3 {
          margin-block-start: 0;
          margin-block-end: 0.2rem;
          text-align: center;
        }

        .modal-img__content__description > p {
          animation-duration: 3s;
          animation-iteration-count: infinite;
          animation-name: visible;
          font-size: 0.7rem;
          margin-block-start: 0;
          margin-block-end: 0;
          text-align: center;
        }

        @keyframes visible {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }

        .modal-img__content__img {
          background: url("${modalImgDates.img.name}");
          background-size: cover;
          background-position: center;
          height: ${heightImg}px;
          width: ${widthImg}px;
        }

        @media screen and (min-width: 500px) {
          .modal-img__content {
            left: 43%;
            top: 50%;
          }

          .modal-img__content__description {
            position: absolute;
            top: 50%;
            left: 100%;
            transform: translateX(-50%) translateY(-50%) rotate(-90deg)
              translateY(50%);
            width: ${heightImg}px;
          }
        }
      `}</style>
    </div>
  );
}
