"use client";

import React from "react";
import { Accordion, AccordionItem, CardBody } from "@nextui-org/react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function MainHome() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequent.";

  return (
    <>
      <div className="flex flex-col w-full items-center mt-4 mb-4 pt-2 pb-2">
        <div className="flex flex-col justify-center rounded-md w-4/5 pt-4 pb-4">
          <div className="flex flex-col justify-center items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <Card isFooterBlurred className="border-none w-[200px]" radius="lg">
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="https://nextui.org/images/hero-card.jpeg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              className="border-none w-[200px]"
              radius="lg"
            >
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="https://nextui.org/images/hero-card.jpeg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              className="border-none w-[200px]"
              radius="lg"
            >
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="https://nextui.org/images/hero-card.jpeg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="flex rounded-md w-4/5">
          <Accordion selectionMode="multiple">
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
