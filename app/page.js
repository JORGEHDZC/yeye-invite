"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";

export default function Component() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#ad73a3] text-[#333] font-['Pacifico', 'cursive']">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Image
            src="/icon.png"
            width={50}
            height={50}
            alt="flower"
            className="mx-auto overflow-hidden object-cover object-center"
          />
          <span className="sr-only">Girl Party Invite</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="lg:hidden"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <ToggleIcon className="h-6 w-6 text-[#ffdb44]" />
                <span className="sr-only">Toggle navigation</span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-[#703582] p-4 rounded-lg shadow-lg transition-all duration-300 w-[300px] max-w-[90vw]"
            >
              <nav className="flex flex-col gap-4 sm:gap-6">
                <Link
                  href="/"
                  className="text-xl font-medium hover:underline underline-offset-4 text-[#ffdb44]"
                  prefetch={false}
                >
                  Inicio
                </Link>
                <Link
                  href="/confirmation"
                  className="text-xl font-medium hover:underline underline-offset-4 text-[#ffdb44]"
                >
                  Confirmar
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-[#ffdb44]">
                  ¡Mis 5 años!
                  <br /> Yeyé
                </h1>

                <p className="mx-auto max-w-[700px] text-[#1b356e] md:text-xl font-bold">
                  ¡Estás invitado a la fiesta de Yeyé: Una niña encantadora!{" "}
                  <br /> Te esperamos para celebrar su cumpleaños y pasar una
                  tarde maravillosa junto con ella.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/confirmation"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#1b356e] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#1b356e]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1b356e] disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Confirmar
                </Link>
              </div>
            </div>
            <Image
              src="/inicio.jfif"
              width={1200}
              height={300}
              alt="Tangled"
              className="mx-auto overflow-hidden rounded-t-xl object-cover object-center"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#ad73a3]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#1b356e] px-3 py-1 text-sm text-[#ffffff]">
                  Detalles
                </div>
                <h2 className="lg:leading-tighter text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-[4.5rem] 2xl:text-[5rem] text-[#ffdb44]">
                  Dónde y Cúando?
                </h2>
                <div className="grid gap-4 text-[#1b356e]">
                  <div className="flex items-center gap-4">
                    <CalendarIcon className="w-6 h-6 text-[#1b356e]" />
                    <div>
                      <p className="font-bold">Sábado, 15 de Junio</p>
                      <p>3:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <LocateIcon className="w-6 h-6 text-[#1b356e]" />
                    <div>
                      <p className="font-bold">Ubicación</p>
                      <p>
                        C. San Juan 26, Villa Xochitenco, 56334 Chimalhuacán,
                        Méx.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Image
          src="/lanterns.png"
          width={1000}
          height={100}
          alt="Tangled"
          className="mx-auto overflow-hidden rounded-t-xl object-cover object-center"
        />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#ad73a3]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#1b356e] px-3 py-1 text-sm text-[#ffffff]">
                  #yeye5años
                </div>
                <h2 className="lg:leading-tighter text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-[4.5rem] 2xl:text-[5rem] text-[#ffdb44]">
                  Comparte tus fotos
                </h2>

                <div className="prose text-[#1b356e]">
                  <p className="font-bold">
                    Etiqueta tus fotos con el hashtag "#yeye5años" y subelas a
                    tus redes sociales
                  </p>
                </div>
                <div class="grid gap-4 text-[#1b356e] justify-center items-center">
                  <div class="flex gap-4">
                    <InstagramIcon class="w-6 h-6 text-[#1b356e]" />
                    <FacebookIcon class="w-6 h-6 text-[#1b356e]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CakeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <path d="M2 21h20" />
      <path d="M7 8v3" />
      <path d="M12 8v3" />
      <path d="M17 8v3" />
      <path d="M7 4h0.01" />
      <path d="M12 4h0.01" />
      <path d="M17 4h0.01" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function Music2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
    </svg>
  );
}

function NavigationIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}

function SnowflakeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="m20 16-4-4 4-4" />
      <path d="m4 8 4 4-4 4" />
      <path d="m16 4-4 4-4-4" />
      <path d="m8 20 4-4 4 4" />
    </svg>
  );
}

function SparkleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function ToggleIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffdb44"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}
