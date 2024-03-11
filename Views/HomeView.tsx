'use client';
import { Button } from '@/shared';
import React from 'react'

const HomeView = () => {
  return (
    <>
        <h1 className='p-4'>Hello Admin dashboard</h1>
        <Button className='ml-4 h-[3.5rem] px-[2.4rem] py-[1.6rem]' variant='destructive'>
            <h1 className=''>Click me</h1>
        </Button>
    </>
  )
}

export default HomeView