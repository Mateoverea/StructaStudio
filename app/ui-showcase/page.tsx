'use client';

import { useState } from "react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuGroup,
  } from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function UIShowcase() {
  const [openDialog, setOpenDialog] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <div className="min-h-screen p-10 bg-gray-100 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">UI Components Showcase</h1>
      
    

      {/* Button Component */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Button</h2>
        <Button onClick={() => setOpenDialog(true)}>Open Dialog</Button>
      </section>


      {/* Carousel Component */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Carousel</h2>
        <Carousel>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
          <CarouselItem>Slide 3</CarouselItem>
        </Carousel>
      </section>

      {/* Checkbox Component */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Checkbox</h2>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)}>Accept Terms</Checkbox>
      </section>


      {/* Dropdown Menu Component */}
      {/* Dropdown Menu Component */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Dropdown Menu</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      {/* Input and Label Components */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Input</h2>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </section>
    </div>
  );
}
