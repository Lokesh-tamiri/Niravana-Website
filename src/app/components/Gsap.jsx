"use client";
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap, Power3 } from "gsap";

const GsapAnimation = ({
  children,
  animation = { opacity: 1, ease: Power3.easeInOut },
  as = "div",
  ...props
}) => {
  const gsap_el = useRef(null);
  const CustomTag = as;

  useEffect(() => {
    const initInterSectionObserver = (callback) => {
      let observer = new IntersectionObserver(callback, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      });

      return observer;
    };

    let observer = initInterSectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, animation);
        }
      });
    });

    observer.observe(gsap_el.current);
  }, [animation]);

  return (
    <>
      <CustomTag ref={gsap_el} {...props}>
        {children}
      </CustomTag>
    </>
  );
};

GsapAnimation.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  animation: PropTypes.object,
};

export default GsapAnimation;
