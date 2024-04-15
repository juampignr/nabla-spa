"use client"

import { useEffect } from 'react';
import { Text, styled } from '@nextui-org/react'

export default function RedirectPage() {

  const JosefinMedium = styled(Text, {
    fontFamily: "Josefin Sans, sans-serif",
                fontWeight: 500,
  })

  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://mega.nz/folder/ka52DbCY#N_bd9peiLSH4BjSMpvMugQ';
    }, 5000); // Redirect after 5 seconds
  }, []);

  return <JosefinMedium>You are being redirected...</JosefinMedium>;
}
