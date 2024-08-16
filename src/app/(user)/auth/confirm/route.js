import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type')
  const next = searchParams.get('next') ?? '/'

  if (token_hash && type) {
    const supabase = createClient()

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      // redirect user to specified redirect URL or root of app
      // console.log(error.message, error.code, error.name)
      redirect(next)
    }
  }
  
  // redirect the user to an error page with some instructions
  redirect('/error')
}

// http://localhost:3000/auth/confirm?token_hash=pkce_f52186f9fe969c3d022f87d1ca1145d51fcb3fd82b1c4cfbefff37ae&type=signup
// http://localhost:3000/auth/confirm?token_hash=pkce_fc85d4c369f3187b1325f165edf7af6a015ffd048d665f10f3c089ee&type=signup