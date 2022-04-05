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

  useEffect(() => {
    setWidth(innerWidth);
    setHeight(innerHeight);
    setPosition(modalImgDates.position);

    window.addEventListener("resize", () => {
      setWidth(innerWidth);
      setHeight(innerHeight);
    });
  }, [modalImgDates]);

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
        {modalImgDates.img.description && (
          <div className="modal-img__content__description">
            <h3>{modalImgDates.img.description}</h3>
          </div>
        )}
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
          background: #fff2;
          height: 100%;
          width: 100%;
          cursor: pointer;
        }

        .modal-img__content {
          background: linear-gradient(#000, #000);
          height: ${modalImgDates.img.height > modalImgDates.img.width &&
          height / width < modalImgDates.img.height / modalImgDates.img.width
            ? height * 0.8
            : (modalImgDates.img.height * (width * 0.8)) /
              modalImgDates.img.width}px;
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: ${modalImgDates.img.width > modalImgDates.img.height ||
          height / width > modalImgDates.img.height / modalImgDates.img.width
            ? width * 0.8
            : (modalImgDates.img.width * (height * 0.8)) /
              modalImgDates.img.height}px;
          max-height: 85vh;
        }

        .modal-img__content__description {
          background: ${colors.primary};
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          padding: 0 1rem;
        }

        .modal-img__content__img {
          background: url("${modalImgDates.img.name}");
          background-size: cover;
          background-position: center;
          height: ${modalImgDates.img.height > modalImgDates.img.width &&
          height / width < modalImgDates.img.height / modalImgDates.img.width
            ? height * 0.8
            : (modalImgDates.img.height * (width * 0.8)) /
              modalImgDates.img.width}px;
          width: ${modalImgDates.img.width > modalImgDates.img.height ||
          height / width > modalImgDates.img.height / modalImgDates.img.width
            ? width * 0.8
            : (modalImgDates.img.width * (height * 0.8)) /
              modalImgDates.img.height}px;
        }
      `}</style>
    </div>
  );
}
