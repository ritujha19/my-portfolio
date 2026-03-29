import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: Array<{ title: string; description: string; link: string }>;
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row lg:flex-row py-10 gap-10 px-25",
        className,
      )}
    >
      {items.map((item: any, idx: number) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-fit"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/80 block  rounded-3xl"
                style={{
                  boxShadow:
                    "0 0 0 1px #475569, 0 0 20px 4px rgba(71, 85, 105, 0.6)",
                }}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.25 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.25, delay: 0.05 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div>
              {item.content ? (
                <>{item.content}</>
              ) : (
                <>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </>
              )}
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-white dark:bg-black border border-gray-200 dark:border-white/20 relative z-20",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className,
      )}
    >
      {children}
    </p>
  );
};
