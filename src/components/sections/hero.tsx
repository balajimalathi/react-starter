
import { Button, } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { createRef, forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import { getDistance, lerp } from "@/lib/utils";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function Hero() {

  // Mock data for cities
  const popularCities = [
    { name: "Mumbai", count: 250 },
    { name: "Delhi", count: 220 },
    { name: "Bangalore", count: 180 },
    { name: "Hyderabad", count: 150 },
    { name: "Chennai", count: 130 },
    { name: "Kolkata", count: 120 },
    { name: "Pune", count: 100 },
    { name: "Jaipur", count: 80 },
  ]


  interface AnimatedImageRef {
    show: ({
      x,
      y,
      newX,
      newY,
      zIndex,
    }: {
      x: number;
      y: number;
      zIndex: number;
      newX: number;
      newY: number;
    }) => void;
    isActive: () => boolean;
  }

  const AnimatedImage = forwardRef<AnimatedImageRef, { src: string }>(({ src }, ref) => {
    const controls = useAnimation();
    const isRunning = useRef(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useImperativeHandle(ref, () => ({
      isActive: () => isRunning.current,
      show: async ({
        x,
        y,
        newX,
        newY,
        zIndex,
      }: {
        x: number;
        y: number;
        zIndex: number;
        newX: number;
        newY: number;
      }) => {
        const rect = imgRef.current?.getBoundingClientRect();
        if (!rect) {
          return;
        }

        const center = (posX: number, posY: number) => {
          const coords = {
            x: posX - rect.width / 2,
            y: posY - rect.height / 2,
          };
          return `translate(${coords.x}px, ${coords.y}px)`;
        };

        controls.stop();

        controls.set({
          opacity: isRunning.current ? 1 : 0.75,
          zIndex,
          transform: `${center(x, y)} scale(1)`,
          transition: { ease: "circOut" },
        });

        isRunning.current = true;

        await controls.start({
          opacity: 1,
          transform: `${center(newX, newY)} scale(1)`,
          transition: { duration: 0.9, ease: "circOut" },
        });

        await Promise.all([
          controls.start({
            transition: { duration: 1, ease: "easeInOut" },
            transform: `${center(newX, newY)} scale(0.1)`,
          }),
          controls.start({
            opacity: 0,
            transition: { duration: 1.1, ease: "easeOut" },
          }),
        ]);

        isRunning.current = false;
      },
    }));

    return (
      <motion.img
        ref={imgRef}
        initial={{ opacity: 0, scale: 1 }}
        animate={controls}
        src={src}
        alt="trail element"
        className="absolute h-56 w-44 object-cover"
      />
    );
  });

  AnimatedImage.displayName = "AnimatedImage";

  const images = [
    "https://assets.lummi.ai/assets/Qma1aBRXFsApFohRJrpJczE5QXGY6HhHKz24ybuw1khbou?auto=format&w=500",
    "https://assets.lummi.ai/assets/QmZBpAeh18DHxVNEEcJErt1UXGjZYCedSidJ6cybrDZdeS?auto=format&w=500",
    "https://assets.lummi.ai/assets/QmbMZFEfk2qwQkkmXYncpvHapkNQF5HuTrcascJC7edpfW?auto=format&w=500",
    "https://assets.lummi.ai/assets/QmXm6HVi3wwGy3jaCmECfoL8AULPerjQQh6abKTVhFMewK?auto=format&w=500",
    "https://assets.lummi.ai/assets/QmRy3tpFDCbgA3CQgRpySTGN6tNdomQE96rMpV31HeBUUd?auto=format&w=500",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  // Create a maximum of 20 trails for a smoother experience
  const trailsRef = useRef(
    Array.from({ length: Math.max(20, images.length) }, createRef<AnimatedImageRef>),
  );

  const lastPosition = useRef({ x: 0, y: 0 });
  const cachedPosition = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);
  const zIndex = useRef(1);

  const update = useCallback((cursor: { x: number; y: number }) => {
    const activeRefCount = trailsRef.current.filter((ref) => ref.current?.isActive()).length;
    if (activeRefCount === 0) {
      // Reset zIndex since there are no active references
      // This prevents zIndex from incrementing indefinitely
      zIndex.current = 1;
    }

    const distance = getDistance(
      cursor.x,
      cursor.y,
      lastPosition.current.x,
      lastPosition.current.y,
    );
    const threshold = 50;

    const newCachePosition = {
      x: lerp(cachedPosition.current.x || cursor.x, cursor.x, 0.1),
      y: lerp(cachedPosition.current.y || cursor.y, cursor.y, 0.1),
    };
    cachedPosition.current = newCachePosition;

    if (distance > threshold) {
      imageIndex.current = (imageIndex.current + 1) % trailsRef.current.length;
      zIndex.current = zIndex.current + 1;
      lastPosition.current = cursor;
      trailsRef.current[imageIndex.current].current?.show?.({
        x: newCachePosition.x,
        y: newCachePosition.y,
        zIndex: zIndex.current,
        newX: cursor.x,
        newY: cursor.y,
      });
    }
  }, []);

  useMousePosition(containerRef as React.RefObject<HTMLElement>, update);

  return (
    <div ref={containerRef} className="storybook-fix relative flex min-h-96 w-full">
      {trailsRef.current.map((ref, index) => (
        <AnimatedImage key={index} ref={ref} src={images[index % images.length]} />
      ))}
      <section className="relative mx-auto flex flex-col items-center justify-center py-14">
        <div className="relative z-20 container max-w-6xl px-4 md:px-0">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-center text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-start">
                Find the Perfect Makeup Artist in Your City
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Connect with talented makeup artists across India for weddings, parties, photoshoots, and special
                occasions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Enter your city" className="pl-9" />
                </div>
                <Button>Find Artists</Button>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-sm font-medium">Popular cities:</span>
                {popularCities.slice(0, 4).map((city) => (
                  <Badge key={city.name} variant="secondary" className="cursor-pointer">
                    {city.name}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="h-[300px] lg:h-[400px] overflow-hidden">
              <img
                src="/artist.jpg"
                alt="Makeup artist working"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* <img
        src="/group.jpg"
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover z-0"
      /> */}

        {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-white to-indigo-100 z-0" /> */}

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10" /> */}

      </section>
    </div>
  );
}