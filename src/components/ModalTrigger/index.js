'use client'

import * as React from 'react'
import Modal from '@/components/Modal';

export default function ModalTrigger({ children }) {
  function showModal() {
    document.getElementById('modal').style.display = 'block';
  }

  return (
    <span onClick={showModal}>
      {children}
    </span>
  )

}