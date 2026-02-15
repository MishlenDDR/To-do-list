import { useEffect } from "react";
import './CustomCursor.css'

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const hoverElements = document.querySelectorAll(
      "cursor-hover, a, button, input, textarea",
    );

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursor.style.transform = `translate(-50%, -50%)`;
    });

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.width = "25px";
        cursor.style.height = "25px";
        cursor.style.backgroundColor = "#3700ff";
        cursor.style.mixBlendMode = "difference";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.width = "14px";
        cursor.style.height = "14px";
        cursor.style.backgroundColor = "#c3ff00";
        cursor.style.mixBlendMode = "difference";
        cursor.style.border = "none";
      });
    });
  }, []);

  return (
    <div
      id="cursor"
      className="w-6 h-6 bg-white rounded-full border-2 border-black hidden lg:block"
    ></div>
  );
};

export default CustomCursor;
