import { useEffect, useState } from "react";

const useResizeVh = () => {
  const [vh, setVh] = useState<number>(window.innerHeight * 0.01);
  useEffect(() => {
    setVh(window.innerHeight * 0.01);
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    const resizeVh = () => {
      setVh(window.innerHeight * 0.01);
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", resizeVh);
    return () => window.removeEventListener("resize", resizeVh);
  }, [vh]);
};

export default useResizeVh;
