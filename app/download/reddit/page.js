"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/mega")
    }, 5000); // Redirect after 5 seconds
  }, []);

  return <p>You are being redirected...</p>;
}
