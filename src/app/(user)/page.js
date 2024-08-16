import React from 'react'
import Banner from '@/components/banner'
import Category from '@/components/category'
import Collection from '@/components/collection'
import Fitness from '@/components/fitness'
import Hero from '@/components/hero'
import LatestDrop from '@/components/latest-drop'
import Trending from '@/components/trending'
import Explore from '@/components/explore'
import { createClient } from '@/utils/supabase/server'









export default async function Home() {
    const supabase = createClient()
    const { data : {
      user
    }, error } = await supabase.auth.getUser()
    console.log(user, error);

    const { data : userData, error : userError } = await supabase.from("users").select()
    console.log(userData, userError);

    return (
    <>
      <Hero user={user} userData={userData}/>
      <Category/>
      <Trending />
      <LatestDrop />
      <Fitness />
      <Banner />
      <Collection />
      <Explore />
    </>
  )
}
