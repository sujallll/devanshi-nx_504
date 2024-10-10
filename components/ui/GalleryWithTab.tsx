"use client";

import React from "react";
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

export function GalleryWithTab() {
  const data = [
    {
      label: "Weddings",
      value: "weddings",
      images: [
        { imageLink: "/images/weddings.jpg" },
        { imageLink: "/images/weddings2.jpg" },
        { imageLink: "/images/weddings3.jpg" },
        { imageLink: "/images/weddings4.jpg" },
        { imageLink: "/images/weddings5.jpg" },
        { imageLink: "/images/weddings6.jpg" },
      ],
    },
    {
      label: "Birthdays",
      value: "birthdays",
      images: [
        { imageLink: "/images/birthdays.png" },
        { imageLink: "/images/birthdays2.png" },
        { imageLink: "/images/birthdays3.png" },
        { imageLink: "/images/birthdays4.png" },
        { imageLink: "/images/birthdays5.png" },
        { imageLink: "/images/birthdays6.png" },
      ],
    },
    {
      label: "Collaborations",
      value: "collaborations",
      images: [
        { imageLink: "/images/collab.png" },
        { imageLink: "/images/collab2.png" },
        { imageLink: "/images/collab3.png" },
        { imageLink: "/images/collab4.png" },
        { imageLink: "/images/collab5.png" },
        { imageLink: "/images/collab6.png" },
      ],
    },
  ];

  return (
    <Tabs defaultValue="weddings" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        {data.map(({ label, value }) => (
          <TabsTrigger key={value} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {data.map(({ value, images }) => (
        <TabsContent key={value} value={value} className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images?.map(({ imageLink }, index) => (
              <div key={index}>
                <Image
                  className="h-60 w-full max-w-full rounded-lg object-cover object-center"
                  src={imageLink}
                  alt={`${value}-image-${index}`}
                  width={500}
                  height={260}
                />
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}