import Image from "next/image";
import { useEffect, useState } from "react";

import { colors, contact, galery } from "../../../utils";
import ImgHeader from "./img";

export default function Header() {
  const [galeryHeader, setGaleryHeader] = useState([]);
  const [imgNow, setImgNow] = useState(undefined);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let result = [];
    galery.map((picture, index) => {
      picture.visible = false;
      if (index < 10) {
        result.push(picture);
      }
    });

    if (result) {
      result[0].visible = true;
    }

    setImgNow(0);

    setGaleryHeader(result);
    setWidth(innerWidth);
    window.addEventListener("resize", () => {
      setWidth(innerWidth);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      let numNow = imgNow;

      if (numNow + 1 === galeryHeader.length) {
        numNow = 0;
      } else {
        numNow += 1;
      }

      setImgNow(numNow);
    }, 10000);
  }, [imgNow]);

  return (
    <header>
      {galeryHeader.map((picture, index) => {
        return (
          <ImgHeader
            key={picture.name}
            position={index}
            positionNow={imgNow}
            picture={picture}
          />
        );
      })}
      <div>
        <Image
          src="/firma - Logo.png"
          alt="Logo de Joras"
          priority={true}
          width={width < 500 ? width * 0.8 : width * 0.5}
          height={
            width < 500
              ? (557 * (width * 0.8)) / 2000
              : (557 * (width * 0.5)) / 2000
          }
        />
      </div>
      <span>
        {contact.map((cont, index) => {
          return (
            <a key={index} href={cont.link}>
              <Image
                src={cont.img}
                alt={cont.name}
                width="20"
                height="20"
                priority
              />
            </a>
          );
        })}
      </span>
      <style jsx>{`
        header {
          align-items: center;
          display: flex;
          flex-direction: column;
          height: 12rem;
          justify-content: center;
          position: relative;
          z-index: 25;
          overflow: hidden;
        }

        header > div {
          position: relative;
          max-width: 750px;
          z-index: 25;
        }

        header > span {
          display: flex;
          gap: 1rem;
          position: relative;
          z-index: 25;
        }

        a {
          align-items: center;
          background-color: ${colors.yellow};
          border-radius: 100px;
          display: flex;
          height: 35px;
          justify-content: center;
          transition: 0.3s;
          width: 35px;
        }

        a:hover {
          transform: scale(1.1);
        }

        @media screen and (min-width: 500px) {
          header {
            height: 15rem;
          }
        }

        @media screen and (min-width: 800px) {
          header {
            height: 23rem;
          }
        }
      `}</style>
    </header>
  );
}
