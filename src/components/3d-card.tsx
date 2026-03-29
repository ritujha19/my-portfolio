import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import { cn } from "../lib/utils";

type MouseContextType =
  | [boolean, Dispatch<SetStateAction<boolean>>]
  | undefined;

const MouseEnterContext = createContext<MouseContextType>(undefined);

interface CardContainerProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: CardContainerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    const x = (e.clientX - left - width / 2) / 60;
    const y = (e.clientY - top - height / 2) / 60;

    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;

    setIsMouseEntered(false);

    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "py-20 flex items-center justify-center",
          containerClassName,
        )}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-transform duration-500 ease-out",
            className,
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export const CardBody = ({ children, className }: CardBodyProps) => {
  return (
    <div className={cn("h-96 w-96 transform-3d *:transform-3d", className)}>
      {children}
    </div>
  );
};

interface CardItemProps {
  as?: React.ElementType;
  children: ReactNode;
  className?: string;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  [key: string]: any;
}

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: CardItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const context = useMouseEnter();

  const isMouseEntered = context[0];

  useEffect(() => {
    if (!ref.current) return;

    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px)
translateY(${translateY}px)
translateZ(${translateZ}px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px)
translateY(0px)
translateZ(0px)
rotateX(0deg)
rotateY(0deg)
rotateZ(0deg)`;
    }
  }, [
    isMouseEntered,
    translateX,
    translateY,
    translateZ,
    rotateX,
    rotateY,
    rotateZ,
  ]);

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error("useMouseEnter must be inside CardContainer");
  }
  return context;
};
