import { useLayoutEffect, useState } from "react";

// Hack column of Antd List for responsive :>

export const useDynamicColumn = () => {
  const [column, setColumn] = useState(10);

  const handleResize = () => {
    const { innerWidth } = window;
    if (innerWidth < 1850 && innerWidth >= 1550) {
      setColumn(8);
    } else if (innerWidth < 1550 && innerWidth >= 1350) {
      setColumn(6);
    } else if (innerWidth < 1350 && innerWidth >= 750) {
      setColumn(4);
    } else if (innerWidth < 750 && innerWidth >= 500) {
      setColumn(2);
    } else if (innerWidth < 500) {
      setColumn(1);
    } else {
      setColumn(10);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { column };
};
