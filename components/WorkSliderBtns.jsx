"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi"
import { Button } from "./ui/button";

const WorkSliderBtns = (containderStyles,btnStyles, iconStyles) => {
  const swiper = useSwiper();
  return (
    <div className={containderStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles}/>
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold className={iconStyles} onClick={() => swiper.slideNext()}/>
      </button>
    </div>
  )
}

export default WorkSliderBtns