"use client";
import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CircleArrowLeft } from "lucide-react";
import { useState } from "react";

import Link from "next/link";

export default function Confirmation() {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const phone = "5517263132";

  const handleSubmit = (event) => {
    event.preventDefault();
    // Construye la URL con el valor de "name"
    const whatsappUrl = `https://wa.me/${phone}?&text=${encodeURIComponent(
      name
    )}`;
    // Redirige al usuario a la URL de WhatsApp
    window.location.href = whatsappUrl;
  };
  return (
    <div className="flex items-center justify-center h-screen bg-[#ad73a3]">
      <section className="container max-w-[600px] px-4 text-center">
        <div className="space-y-3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/" prefetch={false}>
              <CircleArrowLeft size={36} color="#ffdb44" strokeWidth={1.5} />
            </Link>
          </div>
          <h2 className="text-4xl font-bold tracking-tighter text-[#ffdb44]">
            Confirmación
          </h2>
          <p className="text-[#1b356e] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-bold">
            Escribe tú nombre o el de tu familia y dejanos saber si nos
            acompañarás!
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <br />
              <Input
                id="name"
                placeholder="Escribe tu nombre"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <Button
              type="submit"
              className="bg-[#1b356e] text-white hover:bg-[#1b356e]/90"
            >
              Mandar confirmación
            </Button>
          </form>
        </div>
      </section>
    </div>
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
      stroke="#d8ac42"
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
