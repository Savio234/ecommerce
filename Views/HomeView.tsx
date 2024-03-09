'use client';
import { Button } from '@/shared';
import React from 'react'

const HomeView = () => {
  return (
    <div>
        <h1 className='p-4'>Hello Admin dashboard</h1>
        <Button size='default' variant='destructive'>
            Click me
        </Button>
    </div>
  )
}

export default HomeView