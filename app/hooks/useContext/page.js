"use client";
import SubLayout from "@/app/components/sub-layout";
import { useState } from "react";

// Ejemplos de anidación
import Anidado1Context from "@/app/components/anidados_context/Anidado1Context";
import Anidado1 from "@/app/components/anidados/Anidado1";
// Revisar: Carpeta context -> MyContext.jsx
import { MyContext } from "@/app/context/MyContext";

// Utilizar useContext
export default function useContextT() {
  const [color, setColor] = useState("red");

  // Pueden navegar entre componentes con CTRL + Click
  return (
    <SubLayout pageId="hooks">
      {/* Aplicando context: Se crea una especie de envoltorio, en el cual pueden haber muchas capas y
      solo solicito los datos en la última parte, o la que estime conveniente.

      En Next.js puede ser útil para pasar variables entre páginas.
      Otro ejemplo sería Chakra UI, que usa context para pasar los estilos a los componentes (en _app.jsx) envuelve la aplicación
      Para que podamos usar los componentes de Chakra UI sin necesidad de importarlos en cada página.

      Desventaja: Puede resultar confuso de implementar y puede realizar más renderizaciones de las necesarias.
      */}
      <MyContext>
        <Anidado1Context />
      </MyContext>

      {/*
        Aplicando anidación normal (pasando los props {color, setColor})
        -> Pasa por Anidados1 -> Anidado2 -> Anidado3
        Aunque no se utiliza en "Anidados1" se tiene que ir pasando como en "cascada"
      */}
      <Anidado1 color={color} setColor={setColor} />
    </SubLayout>
  );
}

export const useMyContext = () => {
  return useContext(MyContext);
};
