"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "../components/Logo";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useWindowScroll from "@react-hook/window-scroll";

const Header = () => {
  const headerNav = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  const scrollY = useWindowScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionPage, setTransitionPage] = useState(null);
  const animationDuration = 600; // Animation duration in ms

  // Close dropdown on route change
  useEffect(() => {
    setWorkDropdownOpen(false);
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (scrollY > 150) {
      headerNav.current?.classList.add(
        "bg-[#020206]",
        "py-[15px]",
        "px-[25px]",
        "rounded-[25px]",
        "shadow-lg"
      );
    } else {
      headerNav.current?.classList.remove(
        "bg-[#020206]",
        "py-[15px]",
        "px-[25px]",
        "rounded-[25px]",
        "shadow-lg"
      );
    }
  }, [scrollY]);

  // Prefetch all main routes
  useEffect(() => {
    // Prefetch main routes to reduce initial loading time
    const prefetchRoutes = [
      "/",
      "/about",
      "/contact",
      "/web-innovations",
      "/ai-innovations",
      "/mobile-innovations",
      "/branding-innovations",
    ];

    prefetchRoutes.forEach((route) => {
      if (route !== pathname) {
        // This triggers Next.js to prefetch the page
        router.prefetch(route);
      }
    });
  }, [pathname, router]);

  // Handle navigation with animation
  const handleNavigation = (e, href, label) => {
    e.preventDefault();
    setWorkDropdownOpen(false);

    if (pathname === href) return;

    // Start the transition animation
    setIsAnimating(true);
    setTransitionPage(label);

    // Immediately push to the new route
    router.push(href);

    // Ensure animation stays visible long enough
    setTimeout(() => {
      setIsAnimating(false);
      setTransitionPage(null);
    }, animationDuration);
  };

  return (
    <>
      {/* Page Flip Animation Layer */}
      {isAnimating && (
        <div className="fixed inset-0 z-[99] pointer-events-none overflow-hidden perspective-1000">
          {/* Main page container */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              perspective: "1000px",
            }}
          >
            {/* Current Page (flipping away) */}
            <div
              className="absolute inset-0 origin-left bg-gradient-to-br from-slate-900 to-gray-800"
              style={{
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
                animation: `pageFlipOut ${animationDuration}ms ease-in-out forwards`,
                boxShadow: "0 0 20px rgba(0,0,0,0.3)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Page content */}
                <div
                  className="text-white text-4xl font-bold"
                  style={{
                    opacity: 1,
                    animation: `contentFadeOut ${
                      animationDuration * 0.5
                    }ms ease-in forwards`,
                  }}
                >
                  {pathname.substring(1) || "Home"}
                </div>

                {/* Page edge shadow */}
                <div
                  className="absolute right-0 top-0 h-full w-[20px]"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.3))",
                    opacity: 0.7,
                  }}
                />

                {/* Page corner fold */}
                <div
                  className="absolute bottom-0 right-0 w-[100px] h-[100px]"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.1) 50%)",
                    borderRadius: "0 0 0 20px",
                  }}
                />

                {/* Page texture overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E\")",
                    opacity: 0.5,
                  }}
                />
              </div>
            </div>

            {/* Next Page (flipping in) */}
            <div
              className="absolute inset-0 origin-left bg-gradient-to-br from-slate-900 to-gray-800"
              style={{
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
                transform: "rotateY(-180deg)",
                animation: `pageFlipIn ${animationDuration}ms ease-in-out forwards`,
                boxShadow: "0 0 20px rgba(0,0,0,0.3)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Page content */}
                <div
                  className="text-white text-4xl md:text-5xl font-bold"
                  style={{
                    opacity: 0,
                    animation: `contentFadeIn ${
                      animationDuration * 0.5
                    }ms ease-out ${animationDuration * 0.5}ms forwards`,
                  }}
                >
                  {transitionPage || ""}
                </div>

                {/* Page edge shadow */}
                <div
                  className="absolute left-0 top-0 h-full w-[20px]"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.3))",
                    opacity: 0.7,
                  }}
                />

                {/* Page corner fold */}
                <div
                  className="absolute top-0 left-0 w-[100px] h-[100px]"
                  style={{
                    background:
                      "linear-gradient(315deg, transparent 50%, rgba(255,255,255,0.1) 50%)",
                    borderRadius: "0 0 20px 0",
                  }}
                />

                {/* Page texture overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E\")",
                    opacity: 0.5,
                  }}
                />
              </div>
            </div>

            {/* Flipping page */}
            <div
              className="absolute inset-0 origin-left bg-gradient-to-br from-gray-800 to-slate-900"
              style={{
                transformStyle: "preserve-3d",
                animation: `pageFlip ${animationDuration}ms ease-in-out forwards`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
              }}
            >
              {/* Front of flipping page */}
              <div
                className="absolute inset-0 backface-hidden"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Page fold effect - front */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0,0,0,0.1), rgba(255,255,255,0.1) 15%, rgba(255,255,255,0.15) 35%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.15) 85%, rgba(0,0,0,0.4) 100%)",
                  }}
                />

                {/* Page texture */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E\")",
                    opacity: 0.5,
                  }}
                />

                {/* Edge shadow */}
                <div className="absolute right-0 top-0 h-full w-[1px] bg-black opacity-40" />
              </div>

              {/* Back of flipping page */}
              <div
                className="absolute inset-0 backface-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                {/* Page fold effect - back */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(0,0,0,0.1), rgba(255,255,255,0.1) 15%, rgba(255,255,255,0.15) 35%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.15) 85%, rgba(0,0,0,0.4) 100%)",
                  }}
                />

                {/* Page texture */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E\")",
                    opacity: 0.5,
                  }}
                />

                {/* Edge shadow */}
                <div className="absolute left-0 top-0 h-full w-[1px] bg-black opacity-40" />
              </div>
            </div>
          </div>

          {/* Animation keyframes */}
          <style jsx>{`
            @keyframes pageFlip {
              0% {
                transform: rotateY(0);
                z-index: 10;
              }
              100% {
                transform: rotateY(-180deg);
                z-index: 10;
              }
            }

            @keyframes pageFlipOut {
              0% {
                transform: rotateY(0);
                z-index: 5;
                opacity: 1;
              }
              100% {
                transform: rotateY(0);
                z-index: 5;
                opacity: 0;
              }
            }

            @keyframes pageFlipIn {
              0% {
                transform: rotateY(-180deg);
                z-index: 5;
                opacity: 0;
              }
              100% {
                transform: rotateY(-180deg);
                z-index: 5;
                opacity: 1;
              }
            }

            @keyframes contentFadeIn {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes contentFadeOut {
              0% {
                opacity: 1;
                transform: translateY(0);
              }
              100% {
                opacity: 0;
                transform: translateY(-20px);
              }
            }
          `}</style>
        </div>
      )}

      <header className="py-[15px] fixed top-0 z-50 w-full">
        <div className="container relative">
          <nav
            ref={headerNav}
            className="flex justify-between items-center transition-all ease-in-out duration-[500ms]"
          >
            <Logo width={50} height={50} />
            
            {/* Hamburger Menu Button */}
            <button 
              className="hidden sm:flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            <ul
              className={`flex gap-x-6 sm:absolute sm:top-[115%] sm:left-[15px] sm:bg-darkgray sm:p-[25px] sm:w-[calc(100%-30px)] sm:rounded-[15px] sm:flex-col sm:gap-y-4 transition-all duration-500 ${
                isMenuOpen
                  ? "sm:opacity-100 sm:visible sm:translate-y-0"
                  : "sm:opacity-0 sm:invisible sm:-translate-y-4"
              }`}
            >
              <li>
                <Link
                  href="/"
                  onClick={(e) => handleNavigation(e, "/", "Home")}
                  className={`font-medium ${
                    pathname === "/" ? "text-white" : ""
                  } relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-300`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={(e) => handleNavigation(e, "/about", "About")}
                  className={`font-medium ${
                    pathname === "/about" ? "text-white" : ""
                  } relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-300`}
                >
                  About
                </Link>
              </li>
              <li className="relative z-50">
                <button
                  onClick={() => setWorkDropdownOpen((prev) => !prev)}
                  className={`font-medium flex items-center gap-1 ${
                    pathname.startsWith("/work") ? "text-white" : ""
                  } relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-300`}
                >
                  Solutions{" "}
                  <span
                    className={`ml-1 transition-transform duration-300 ${
                      workDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {/* Animated dropdown */}
                <div className="absolute left-0 top-full mt-2 w-56 z-50">
                  <ul
                    className={`bg-[#1a1a1a] text-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
                      workDropdownOpen
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <li>
                      <Link
                        href="/web-innovations"
                        className="block px-4 py-2 hover:bg-gray-700 hover:pl-6 transition-all duration-300"
                        onClick={(e) =>
                          handleNavigation(e, "/web-innovations", "Web")
                        }
                      >
                        Web
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ai-innovations"
                        className="block px-4 py-2 hover:bg-gray-700 hover:pl-6 transition-all duration-300"
                        onClick={(e) =>
                          handleNavigation(e, "/ai-innovations", "AI")
                        }
                      >
                        AI
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/mobile-innovations"
                        className="block px-4 py-2 hover:bg-gray-700 hover:pl-6 transition-all duration-300"
                        onClick={(e) =>
                          handleNavigation(e, "/mobile-innovations", "Mobile")
                        }
                      >
                        Mobile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/branding-innovations"
                        className="block px-4 py-2 hover:bg-gray-700 hover:pl-6 transition-all duration-300"
                        onClick={(e) =>
                          handleNavigation(
                            e,
                            "/branding-innovations",
                            "Branding"
                          )
                        }
                      >
                        Branding
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={(e) => handleNavigation(e, "/contact", "Contact")}
                  className={`font-medium ${
                    pathname === "/contact" ? "text-white" : ""
                  } relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-300`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
