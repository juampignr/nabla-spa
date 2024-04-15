"use client"

import { useEffect } from 'react';
import { Text, styled } from '@nextui-org/react'

export default function redirectPage() {

  const JosefinMedium = styled(Text, {
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: 500,
    marginLeft:"1rem"
  })

  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://mega.nz/folder/ka52DbCY#N_bd9peiLSH4BjSMpvMugQ';
    }, 5000)
  }, []);

  return <JosefinMedium size={20}>⌛ You are being redirected to your download ⌛</JosefinMedium>;
}
