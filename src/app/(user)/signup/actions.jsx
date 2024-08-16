"use server"
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


export async function signup(formData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
    firstName : formData.get('firstName'),
    lastName : formData.get('lastName'),
  }

  const { data: signupData, error } = await supabase.auth.signUp(
    {
      email : data.email,
      password : data.password,
      options : {
        data: {
          first_name: data.firstName,
          last_name : data.lastName
        }
      }
    },
  )
  console.log(signupData, "SIGNUPDATA")

  if (error) {
    console.log(error.message, error.code, error.name)
    redirect('/error')
  }

  revalidatePath('/', "layout")
  // window.location.href("/")
  redirect('/signup/confirm')
}