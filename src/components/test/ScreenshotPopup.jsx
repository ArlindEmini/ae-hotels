import React, { useState, useEffect } from "react";
import "./ScreenshotPopup.scss";
import Screenshot1 from "../../assets/screenshot1.png";
import Screenshot2 from "../../assets/OGBlogScreenshot.png";
import Screenshot3 from "../../assets/OGDocsScreenshot.png";
import Screenshot4 from "../../assets/OGShopScreenshot.png";

import { AiFillCloseCircle } from "react-icons/all";
import ModalImage from "react-modal-image";

import { useSelector, useDispatch } from "react-redux";

import {
  setItemId,
  setItemPic,
  setItemText,
} from "../../redux/actions/screenActions";

const screenshots = [
  {
    id: 1,
    screen: "OG Documentation",
    screenshot: Screenshot1,
  },
  {
    id: 2,
    screen: "OG Blog",
    screenshot: Screenshot2,
  },
  {
    id: 3,
    screen: "OG Shop",
    screenshot: Screenshot3,
  },
  {
    id: 4,
    screen: "OG Shop | Home",
    screenshot: Screenshot4,
  },
];

const ShopScreenShots = () => {
  const [hiddenPopup, setHiddenPopup] = useState(true);
  const showPopup = () => setHiddenPopup(!hiddenPopup);

  const dispatch = useDispatch();
  const idredux = useSelector((state) => state.screen.id);
  const textredux = useSelector((state) => state.screen.text);
  const picredux = useSelector((state) => state.screen.pic);

  console.log("idredux", idredux);
  console.log("rextredux", textredux);
  console.log("picredux", picredux);

  useEffect(() => {
    const closeMenusWithEsc = (e) => {
      if (e.keyCode === 27) {
        setHiddenPopup(true);
      }
    };
    window.addEventListener("keydown", closeMenusWithEsc);
    return () => window.removeEventListener("keydown", closeMenusWithEsc);
  });

  function ScreenshotPopup() {
    return (
      <div className="screenshot_popup">
        <div className="screenshot_popup_header">
          <h6>{textredux}</h6>
          <AiFillCloseCircle className="close_popup" onClick={showPopup} />
        </div>
        <ModalImage
          className="popup_img"
          small={picredux}
          large={picredux}
          alt=""
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    );
  }
  // useEffect(() => {

  // }, [screnid]);

  const myfunc = (i, s, sc) => {
    showPopup();
    dispatch(setItemId(i));
    dispatch(setItemText(s));
    dispatch(setItemPic(sc));
  };

  return (
    <div className="shop_screenshot">
      <div className="screenshot">
        {screenshots.map((s, i) => (
          <>
            <img
              id={s.id}
              src={s.screenshot}
              alt=""
              className="img"
              key={i}
              onClick={() => myfunc(s.id, s.screen, s.screenshot)}
            />
          </>
        ))}
        {hiddenPopup ? null : (
          <>
            <ScreenshotPopup />
            {/* <BackdropBlur /> */}
          </>
        )}
      </div>
    </div>
  );
};
export default ShopScreenShots;
