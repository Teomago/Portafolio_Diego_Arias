"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function ProduccionMusical() {
  return (
    <>
      <div className="flex bg-ofken_10 my-8 py-2 space-y-4 items-center flex-col">
        <p className="flex justify-center bg-ofken_6 py-8 w-4/5">
          Produccion Musical
        </p>
        <div className="flex flex-col justify-center bg-ofken_5 py-2 w-4/5">
          <p className="flex justify-center mx-1 mb-2 py-8 items-center bg-ofken_2">Contenedor 1</p>
          <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2 mx-1 justify-center">
            <div className="flex justify-center bg-ofken_2">
              <p className="m-[10px]">
                Columna 1:Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed eu magna risus. Morbi tristique, lacus non fermentum
                venenatis, massa quam imperdiet diam, sit amet suscipit lacus
                quam egestas libero. Curabitur vitae sagittis tellus, sed
                rhoncus turpis. Aliquam tincidunt mauris ligula, sed consectetur
                dolor pharetra a. Ut eu mattis felis, id lacinia diam. Maecenas
                fermentum sit amet metus sed ullamcorper. Praesent vulputate
                tristique ligula id hendrerit.
              </p>
            </div>
            <div className="flex justify-center bg-ofken_7">
              <p className="m-[10px]">
                Columna 2: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed eu magna risus. Morbi tristique, lacus non fermentum
                venenatis, massa quam imperdiet diam, sit amet suscipit lacus
                quam egestas libero. Curabitur vitae sagittis tellus, sed
                rhoncus turpis. Aliquam tincidunt mauris ligula, sed consectetur
                dolor pharetra a. Ut eu mattis felis, id lacinia diam. Maecenas
                fermentum sit amet metus sed ullamcorper. Praesent vulputate
                tristique ligula id hendrerit.
              </p>
            </div>
            <div className="flex justify-center bg-ofken_1">
              <p className="m-[10px]">
                Columna 3: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed eu magna risus. Morbi tristique, lacus non fermentum
                venenatis, massa quam imperdiet diam, sit amet suscipit lacus
                quam egestas libero. Curabitur vitae sagittis tellus, sed
                rhoncus turpis. Aliquam tincidunt mauris ligula, sed consectetur
                dolor pharetra a. Ut eu mattis felis, id lacinia diam. Maecenas
                fermentum sit amet metus sed ullamcorper. Praesent vulputate
                tristique ligula id hendrerit.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-ofken_5 py-8 w-4/5">
          <p className="flex justify-center items-center">Contenedor 2</p>
          <div className="flex flex-row mx-1 justify-center space-x-1">
            <div className="flex justify-center bg-ofken_2 w-2/4">
              <p className="m-[10px]">
                Suspendisse et tortor sapien. Sed sollicitudin nisl at pulvinar
                maximus. Fusce a placerat felis. Nulla ultrices vel mauris eu
                semper. Nulla ut augue ultrices, vulputate turpis eu, laoreet
                mauris. Ut et quam in lorem pharetra tempus. Aliquam interdum
                ornare augue in facilisis. Quisque ac facilisis diam, ut
                consectetur leo. Mauris aliquam ornare scelerisque. Sed molestie
                tincidunt velit, pretium tempus lorem fermentum vel. Curabitur
                fringilla congue arcu. Nam mollis augue ac fermentum imperdiet.
                Suspendisse auctor nulla ut rhoncus sollicitudin. Nullam vel
                felis pulvinar, rutrum ex non, finibus lorem. Donec sit amet
                ullamcorper dui, ut suscipit massa. Quisque rutrum maximus
                egestas. Nam vel velit neque. In nec interdum ex. Etiam
                ullamcorper tempus mi sit amet feugiat. Donec ultrices lorem vel
                mattis sagittis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aenean ac fringilla enim. Nunc odio tortor,
                porta eget hendrerit semper, euismod eget risus. Nunc maximus
                sem nisl, ac tincidunt quam sodales vel. Aenean et sem vel magna
                vehicula ullamcorper a sed neque. Proin et ligula eget nunc
                lobortis volutpat nec a elit. Donec a leo commodo, feugiat risus
                ac, cursus libero. Maecenas lectus nibh, lacinia eget luctus id,
                rhoncus eu purus. Etiam semper varius ex a lobortis. Sed varius
                ipsum elit, id vehicula odio vestibulum eu. Nulla ac velit non
                orci pellentesque pulvinar. In rhoncus tincidunt aliquet. Mauris
                congue nisi libero, vel porta enim ultrices sit amet. In et
                commodo sapien, eu efficitur risus.
              </p>
            </div>
            <div className="flex justify-center bg-ofken_7 w-2/4">
              <p className="m-[10px]">
                Columna 2: Suspendisse et tortor sapien. Sed sollicitudin nisl
                at pulvinar maximus. Fusce a placerat felis. Nulla ultrices vel
                mauris eu semper. Nulla ut augue ultrices, vulputate turpis eu,
                laoreet mauris. Ut et quam in lorem pharetra tempus. Aliquam
                interdum ornare augue in facilisis. Quisque ac facilisis diam,
                ut consectetur leo. Mauris aliquam ornare scelerisque. Sed
                molestie tincidunt velit, pretium tempus lorem fermentum vel.
                Curabitur fringilla congue arcu. Nam mollis augue ac fermentum
                imperdiet. Suspendisse auctor nulla ut rhoncus sollicitudin.
                Nullam vel felis pulvinar, rutrum ex non, finibus lorem. Donec
                sit amet ullamcorper dui, ut suscipit massa. Quisque rutrum
                maximus egestas. Nam vel velit neque. In nec interdum ex. Etiam
                ullamcorper tempus mi sit amet feugiat. Donec ultrices lorem vel
                mattis sagittis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aenean ac fringilla enim. Nunc odio tortor,
                porta eget hendrerit semper, euismod eget risus. Nunc maximus
                sem nisl, ac tincidunt quam sodales vel. Aenean et sem vel magna
                vehicula ullamcorper a sed neque. Proin et ligula eget nunc
                lobortis volutpat nec a elit. Donec a leo commodo, feugiat risus
                ac, cursus libero. Maecenas lectus nibh, lacinia eget luctus id,
                rhoncus eu purus. Etiam semper varius ex a lobortis. Sed varius
                ipsum elit, id vehicula odio vestibulum eu. Nulla ac velit non
                orci pellentesque pulvinar. In rhoncus tincidunt aliquet. Mauris
                congue nisi libero, vel porta enim ultrices sit amet. In et
                commodo sapien, eu efficitur risus.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-ofken_3 py-8 w-4/5">
          <p>Contenedor 3</p>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
