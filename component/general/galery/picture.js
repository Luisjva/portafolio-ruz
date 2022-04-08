import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ModalImgContext } from "../../../pages/_app";

export default function Pictures({ listImg, number }) {
  const [pictureWidth, setPictureWidth] = useState(200);
  const { modalImgOpen, setModalImgOpen, modalImgDates, setModalImgDates } =
    useContext(ModalImgContext);

  useEffect(() => {
    const pictures = document.querySelector(`.pictures-${number}`);

    setPictureWidth(pictures.clientWidth);
  }, [listImg]);

  const openModal = (e, img) => {
    setModalImgOpen(true);
    setModalImgDates({
      img,
      position: { width: e.clientX, height: e.clientY },
    });
  };
  return (
    <div className={`pictures-${number}`}>
      {listImg.map((img, index) => {
        return (
          <div
            onClick={(e) => openModal(e, img)}
            className="picture"
            key={img.name}
          >
            <Image
              src={img.name}
              alt="img chida"
              width={pictureWidth}
              priority={index < 3 ? true : false}
              height={(img.height * pictureWidth) / img.width}
            />
          </div>
        );
      })}

      <style jsx>{`
        .picture {
          background: linear-gradient(#222, #000);
          cursor: pointer;
          overflow: hidden;
          margin: 0.3rem;
          transition: 0.3s;
          padding: 0;
        }

        .picture:hover {
          transform: scale(1.025);
        }
      `}</style>
    </div>
  );
}
