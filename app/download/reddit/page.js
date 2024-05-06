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
      window.location.href = "https://employee-x.en.uptodown.com/windows";
    }, 5000)
  }, []);

  return <JosefinMedium size={20}>⌛ You are being redirected to the store ⌛</JosefinMedium>;
}
