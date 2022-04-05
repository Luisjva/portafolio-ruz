import { useState, useEffect } from "react";

import { colors, galery } from "../../../utils";
import Pictures from "./picture";

export default function Galery() {
  const filters = ["Todo", "Ilustraciones", "Diseños"];
  const [listNow, setListNow] = useState([
    { height: 0, listImg: [] },
    { height: 0, listImg: [] },
    { height: 0, listImg: [] },
    { height: 0, listImg: [] },
    { height: 0, listImg: [] },
  ]);
  const [galeryNow, setGaleryNow] = useState(galery);

  useEffect(() => {
    window.addEventListener("resize", () => {
      arrive(galeryNow);
    });
  }, []);

  useEffect(() => {
    arrive(galeryNow);
  }, [galeryNow]);

  const arrive = (galery) => {
    let newListNow = [
      { height: 0, listImg: [] },
      { height: 0, listImg: [] },
      { height: 0, listImg: [] },
      { height: 0, listImg: [] },
      { height: 0, listImg: [] },
    ];
    if (innerWidth < 450) {
      galery.map((picture) => {
        if (newListNow[0].height <= newListNow[1].height) {
          newListNow[0].listImg.push(picture);
          newListNow[0].height += picture.height / picture.width;
        } else {
          newListNow[1].listImg.push(picture);
          newListNow[1].height += picture.height / picture.width;
        }
      });
    } else if (innerWidth > 450 && innerWidth < 600) {
      galery.map((picture) => {
        if (
          newListNow[0].height <= newListNow[1].height &&
          newListNow[0].height <= newListNow[2].height
        ) {
          newListNow[0].listImg.push(picture);
          newListNow[0].height += picture.height / picture.width;
        } else if (newListNow[1].height <= newListNow[2].height) {
          newListNow[1].listImg.push(picture);
          newListNow[1].height += picture.height / picture.width;
        } else {
          newListNow[2].listImg.push(picture);
          newListNow[2].height += picture.height / picture.width;
        }
      });
    } else if (innerWidth > 600 && innerWidth < 900) {
      galery.map((picture) => {
        if (
          newListNow[0].height <= newListNow[1].height &&
          newListNow[0].height <= newListNow[2].height &&
          newListNow[0].height <= newListNow[3].height
        ) {
          newListNow[0].listImg.push(picture);
          newListNow[0].height += picture.height / picture.width;
        } else if (
          newListNow[1].height <= newListNow[2].height &&
          newListNow[1].height <= newListNow[3].height
        ) {
          newListNow[1].listImg.push(picture);
          newListNow[1].height += picture.height / picture.width;
        } else if (newListNow[2].height <= newListNow[3].height) {
          newListNow[2].listImg.push(picture);
          newListNow[2].height += picture.height / picture.width;
        } else {
          newListNow[3].listImg.push(picture);
          newListNow[3].height += picture.height / picture.width;
        }
      });
    } else {
      galery.map((picture) => {
        if (
          newListNow[0].height <= newListNow[1].height &&
          newListNow[0].height <= newListNow[2].height &&
          newListNow[0].height <= newListNow[3].height &&
          newListNow[0].height <= newListNow[4].height
        ) {
          newListNow[0].listImg.push(picture);
          newListNow[0].height += picture.height / picture.width;
        } else if (
          newListNow[1].height <= newListNow[2].height &&
          newListNow[1].height <= newListNow[3].height &&
          newListNow[1].height <= newListNow[4].height
        ) {
          newListNow[1].listImg.push(picture);
          newListNow[1].height += picture.height / picture.width;
        } else if (
          newListNow[2].height <= newListNow[3].height &&
          newListNow[2].height <= newListNow[4].height
        ) {
          newListNow[2].listImg.push(picture);
          newListNow[2].height += picture.height / picture.width;
        } else if (newListNow[3].height <= newListNow[4].height) {
          newListNow[3].listImg.push(picture);
          newListNow[3].height += picture.height / picture.width;
        } else {
          newListNow[4].listImg.push(picture);
          newListNow[4].height += picture.height / picture.width;
        }
      });
    }
    setListNow(newListNow);
  };

  const filtering = (filter) => {
    let newGalery = [];
    if (filter === "Todo") {
      newGalery = galery;
    } else {
      let serch = "";
      filter === "Ilustraciones" ? (serch = "- I") : (serch = "- D");
      galery.map((picture) => {
        picture.name.includes(serch) && newGalery.push(picture);
      });
    }
    setGaleryNow(newGalery);
  };

  return (
    <>
      <div className="contenedor">
        {filters.map((filter) => {
          return (
            <button onClick={() => filtering(filter)} key={filter}>
              {filter}
            </button>
          );
        })}
      </div>
      <div className="picture__contenedor">
        <Pictures listImg={listNow[0].listImg} number={0} />
        <Pictures listImg={listNow[1].listImg} number={1} />
        <Pictures listImg={listNow[2].listImg} number={2} />
        <Pictures listImg={listNow[3].listImg} number={3} />
        <Pictures listImg={listNow[4].listImg} number={4} />
      </div>
      <style jsx>{`
        .contenedor {
          align-items: center;
          display: flex;
          justify-content: center;
          margin: 1.5rem 1rem;
          gap: 1rem;
        }

        button {
          background: ${colors.yellow};
          border: none;
          border-radius: 5px;
          cursor: pointer;
          padding: 0.5rem;
          transition: 0.3s;
        }

        button:hover {
          transform: scale(1.1);
        }
        .picture__contenedor {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 0 0 0;
          height: 10rem;
          padding: 0 5%;
          max-width: 1250px;
          margin: auto;
        }

        @media screen and (min-width: 450px) {
          .picture__contenedor {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto 0 0;
          }
        }

        @media screen and (min-width: 600px) {
          .picture__contenedor {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: auto 0 0;
          }
        }

        @media screen and (min-width: 900px) {
          .picture__contenedor {
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: auto 0 0;
          }
        }
      `}</style>
    </>
  );
}
