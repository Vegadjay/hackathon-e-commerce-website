"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";

interface Data {
    imageId: number;
    title: string;
    discription: string;
}

export function HeroScrollDemo({ imageId, title, discription }: Data): JSX.Element {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            {title} <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                {discription}
                            </span>
                        </h1>
                    </>
                }
            >
                <Link href={`product/${imageId}`}>
                    <Image
                        src={`/detailphotos/${imageId}.1.jpg`}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    /></Link>
            </ContainerScroll>
        </div>
    );
}
