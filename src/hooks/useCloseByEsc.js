import {  useEffect, useCallback } from "react";  

 // При нажатии на клавишу ESС модалка закрывается 
export const useCloseByEsc = (callbback, isActive) => {
  const closeAllByEsc = useCallback(
    (e) => {
      if (e.code === "Escape") {
        callbback()
      }
    },
    [callbback]
  );
  useEffect(() => {
    if (isActive) {
      window.addEventListener("keydown", closeAllByEsc);
      return () => {
        window.removeEventListener("keydown", closeAllByEsc);
      };
    };
  }, [closeAllByEsc, isActive]);
}
  
  
