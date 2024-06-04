import { useEffect, useState } from "react";

type ScrollEventHandler = () => void;

interface UseScrollOptions {
  offset?: number;
  debounceDelay?: number;
}

/**
 * infinte scroll module
 * @param handler Scroll Event
 * @param options.offset view 하단으로부터 scroll event를 작동할 거리 (기본 0px)
 * @param options.debounceDelay Scroll Event가 작동한 후 반복작동을 방지하여 event정지 time (기본 2초)
 */
const useScroll = (
  handler: ScrollEventHandler,
  options?: UseScrollOptions
): void => {
  const { offset = 0, debounceDelay = 2000 } = options ?? {};
  const [runningScrollAction, setRunningScrollAction] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - offset &&
        runningScrollAction === false
      ) {
        if (!timer) {
          handler();
          timer = setTimeout(() => {
            timer = null;
          }, debounceDelay);
        }

        setRunningScrollAction(true);

        setTimeout(() => {
          setRunningScrollAction(false);
        }, debounceDelay);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [handler, offset, debounceDelay]);
};

export default useScroll;
