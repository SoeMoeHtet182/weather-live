'use client'

import { AnimatePresence } from "framer-motion";
import Intro from "./ui/intro/Intro";
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function Home() {
  const [ introShow, setIntroShow ] = useState(true);
  const { replace } = useRouter();

  useEffect(() => {
    const introTimeout = setTimeout(() => {
      setIntroShow(false);
    }, 2000);

    return () => {
      clearTimeout(introTimeout)
      replace('/src');
    };
  });

  return (
    <AnimatePresence>
      <Intro/>
    </AnimatePresence>
  );
}
