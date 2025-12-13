// frontend/components/GoogleLoginButton.tsx
'use client'

import { authClient } from '@/lib/auth'

export function GoogleLoginButton() {
  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: 'google',
      // 用相对路径，Better Auth 会用当前页面的 Origin 拼成完整 URL
      callbackURL: 'http://localhost:3001',
      // 可选：
      // errorCallbackURL: '/login?error=google',
      // newUserCallbackURL: '/onboarding',
    })
  }

  return (
    <button onClick={handleGoogleLogin}>
      使用 Google 登录
    </button>
  )
}
