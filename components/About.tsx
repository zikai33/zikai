import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
    return (
    <motion.div 
        initial={{ opacity:0,}}
        whileInView={{ opacity:1 }}
        transition={{ duration:1.5 }}
    className="h-screen flex flex-col relative text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

        <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}
        whileInView={{
            x:0,
            opacity:1.2,
        }}
        transition={{
            duration:1.2,
        }}
        viewport={{
            once:true,
        }}
        src="/zikai.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h95 xl:w-[500px] xl:h-[600px]"
        />
        <div className="space-y-10 px-0 md:px-10 ">
            <h4 className="text-4xl font-semibold">
                Here is a litte background
            </h4>
            <p className="text-sm">
            Hello Everyone, my name is Zikai Zhang, born in China. I'm 23 years old and I'm a graduate student at Boston University. I like small animals very much, although I do not have a pet now, but I will keep a cat in the future. I like guns very much, but unfortunately China has very strict gun control. I'm going to share a video of me shooting a gun next.

My favorite game is called Clash of clans.Clash of Clans is a 2012 free-to-play mobile strategy video game developed and published by Finnish game developer Supercell.
The goal of the game is to grab and collect gold and elixir, using these resources to upgrade their own towns. We will have a lot of buildings with different levels to upgrade, and they will require different resources. I want to make a website can be very easy to query these resources.
            </p>
        </div>
    </motion.div>);
}
