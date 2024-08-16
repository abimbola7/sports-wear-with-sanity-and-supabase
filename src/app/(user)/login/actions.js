"use server"
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function login(formData) {
  const supabase = createClient()
  console.log(supabase, "SUPABASEE")

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  
  const { error, data : supaData } = await supabase.auth.signInWithPassword(data)
  
  console.log(supaData, "DATAAA")
  
  if (error) {
    console.log(error)
    redirect('/error')
  }

  revalidatePath('/', "layout")
  redirect('/')
}