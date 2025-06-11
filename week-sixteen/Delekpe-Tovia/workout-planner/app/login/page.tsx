'use server'
export default function LoginPage() {
  return (
    <form className="space-y-4">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />

      <div className="flex gap-4">
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </div>
    </form>
  )
}
'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'

export async function login(formData: FormData) {
  const supabase = createServerActionClient({ cookies })

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    console.error('Login error:', error.message)
    return
  }

  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = createServerActionClient({ cookies })

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signUp({ email, password })

  if (error) {
    console.error('Signup error:', error.message)
    return
  }

  redirect('/dashboard')
}