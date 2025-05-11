'use client'

import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/client'
import { useRouter } from 'next/navigation'

export function LogoutButton() {
  const router = useRouter()

  const logout = async () => {
    await supabase.auth.signOut()
    router.push('/summaryAI')
  }

  return <Button onClick={logout}>Logout</Button>
}
