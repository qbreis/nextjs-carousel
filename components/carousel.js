import Glide from "@glidejs/glide";
import { useImperativeHandle, useEffect, useRef, forwardRef } from "react";

import "@glidejs/glide/dist/css/glide.core.css";

export const Carousel = forwardRef(({ options, children }, ref) => {
  const sliderRef = useRef();

  useImperativeHandle(ref, () => sliderRef.current);

  useEffect(() => {
    const slider = new Glide(sliderRef.current, options);

    slider.mount();

    return () => slider.destroy();
  }, [options]);

  return (
    <div className="glide" ref={sliderRef}>
        <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">{children}</ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--prev" data-glide-dir="<">prev</button>
            <button className="glide__arrow glide__arrow--next" data-glide-dir=">">next</button> 
        </div>
    </div>

  );
});

export const Slide = forwardRef(({ children }, ref) => {
  return (
    <li className="glide__slide" ref={ref}>
      {children}
    </li>
  );
});
