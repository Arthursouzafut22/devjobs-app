import { useEffect, useState } from "react";

export const UseMedia = (media: string) => {
  const [match] = useState(media);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mathDay = () => {
      const { matches } = matchMedia(match);
      setMobile(matches);
    };
    window.addEventListener("resize", mathDay);
    mathDay();

    return () => window.removeEventListener("resize", mathDay);
  }, [match]);

  return {
    mobile,
  };
};
