"use client";

import { IconMail, IconBrandLinkedin, IconBrandGithub} from "@tabler/icons-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-black-900 text-white px-4 py-20 flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contacto</h2>

      <p className="text-neutral-400 mb-10 max-w-xl text-center">
        Si estás interesado en conocer más sobre mi perfil profesional, estaré encantado de platicar.
        Puedes contactarme a través de cualquiera de los siguientes medios:
      </p>

      <div className="flex flex-col items-center gap-6 text-sm md:text-base">
        <div className="flex items-center gap-3">
          <IconMail size={24} />
          <span>mayelomonti1@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <IconBrandGithub size={24} />
          <a
            href="https://github.com/Monti710"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition underline"
          >
            https://github.com/Monti710
          </a>
        </div>
        <div className="flex items-center gap-3">
          <IconBrandLinkedin size={24} />
          <a
            href="https://linkedin.com/in/monti710/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition underline"
          >
            linkedin.com/in/monti710/
          </a>
        </div>
      </div>

      <p className="text-neutral-500 text-xs mt-12">
        © {new Date().getFullYear()} Ismael Montiel Dev. Todos los derechos reservados.
      </p>
    </section>
  );
}
