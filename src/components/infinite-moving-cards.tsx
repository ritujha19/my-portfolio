"use client";
import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";
import * as Icons from "@tabler/icons-react";

interface CardItem {
  title: string;
  iconName?: string;
}

const iconMap: { [key: string]: React.ComponentType<{ size?: number }> } = {
  IconHtml5: Icons.IconBrandHtml5,
  IconCss3: Icons.IconBrandCss3,
  IconJavascript: Icons.IconBrandJavascript,
  IconReact: Icons.IconBrandReact,
  IconTailwind: Icons.IconBrandTailwind,
  IconBootstrap: Icons.IconBrandBootstrap,
  IconDesktop: Icons.IconDeviceDesktop,
  IconGit: Icons.IconBrandGit,
  IconGithub: Icons.IconBrandGithub,
  IconNodejs: Icons.IconBrandNodejs,
  IconServer: Icons.IconServer,
  IconCode: Icons.IconCode,
  IconMongodb: Icons.IconBrandMongodb,
  IconLock: Icons.IconLock,
  IconSession: Icons.IconSection,
};

interface InfiniteMovingCardsProps {
  items: CardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}: InfiniteMovingCardsProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children) as Element[];

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as Element;
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item: CardItem, idx: number) => {
          const IconComponent = item.iconName ? iconMap[item.iconName] : null;
          return (
            <li
              className="relative max-w-full shrink-0 rounded-lg border border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-5 py-2 dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
              key={idx}>
              <div className="flex items-center justify-center gap-2">
                {IconComponent && (
                  <div className="text-neutral-600 dark:text-gray-300">
                    <IconComponent size={20} />
                  </div>
                )}
                <span className="text-md font-medium text-center text-neutral-600 dark:text-gray-200">
                  {item.title}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
