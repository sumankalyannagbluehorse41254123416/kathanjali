import CategoryPills from '@/components/fillter'
import PostCard from '@/components/post'
import Header from '@/components/header'
import React from 'react'
import './globals.css';
import Urmila from '@/components/urmila';
import Diwali from '@/components/diwali';
import Durga from '@/components/durga';
import India from '@/components/india';
import Theman from '@/components/theman';
import Khudiram from '@/components/khudiram';
import Laxmibai from '@/components/Laxmibai';
import Barbarik from '@/components/barbarik';
import Mahabharata from '@/components/mahabharat';
import Alexander from '@/components/alexender';
import Theworld from '@/components/theworld';
import Thebench from '@/components/thebench';
import Thebenchpost from '@/components/thebenchpost';




export default function homPage() {
  return (
    <>
      <Header />
      <CategoryPills />
      <PostCard />
      <Urmila />
      <Diwali />
      <Durga />
      <India />
      <Theman />
      <Khudiram />
      <Laxmibai />
      <Barbarik />
      <Mahabharata />
      <Alexander />
      <Theworld />
      <Thebench />
      <Thebenchpost />
      
    </>
  )
}
