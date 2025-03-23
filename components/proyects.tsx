"use client";
import { Carousel } from "@/components/ui/carousel";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Monkey Guard",
      button: "Video Game",
      src: "/monkey.jpeg",
      description: "Monkey Guard es un videojuego 2D de plataformas en el que controlas a un mono que protege el planeta tierra",
      github: "https://github.com/Monti710/MonkeyGuard",
      technologies: ["Python", "Pygame"],
    },
    {
      title: "SctockMaster",
      button: "Stock of the products",
      src: "/stockmaster.png",
      description: "Aplicación web para gestión de inventario y control de stock de productos en tiempo real.",
      github: "https://github.com/Monti710/StockMaster",
      technologies: ["Django", "Ajax", "JavaScript", "Css"],
    },
    {
      title: "Cultur Edge",
      button: "Blog Web",
      src: "/culturedge.png",
      description: "Blog de contenido cultural donde los usuarios pueden leer y publicar artículos relacionados con los objetivos de la OBS",
      github: "https://github.com/Monti710/Culturedge",
      technologies: ["Php", "Assas", "Javascript", "Css", "Ajax"],
    },
    {
      title: "Car Hive",
      button: "Store Car",
      src: "/carhive.jpg",
      description: "Aplicación para que los usuarios compradores y/o vendedores de autos puedan comunicarse.",
      github: "https://github.com/Gavalencia12/Mobile_Application",
      technologies: ["Kotlin", "Firebase", "Android Studio", "Xml"],
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
