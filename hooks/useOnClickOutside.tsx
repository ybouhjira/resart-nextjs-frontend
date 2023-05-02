import { useEffect, useRef, useState } from "react";

export const useOnClickOutside = () => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLElement>();
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return [ref, open, setOpen];
};