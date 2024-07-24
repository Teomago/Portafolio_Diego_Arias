"use client";

import Link from "next/link";

export const NavBar = () => {
  return (
    <>
      <div className="flex justify-evenly py-4">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/produccion-de-audio">Producción de Audio</Link>
        </div>
        <div>
          <Link href="/produccion-musical">Pagina Producción Musical</Link>
        </div>
        <div>
          <Link href="/otros">Página de Otras Habilidades</Link>
        </div>
        <div>
          <Link href="/contactame">Contactame</Link>
        </div>
      </div>
    </>
  );
};
