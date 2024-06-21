import { useRegisterSW } from 'virtual:pwa-register/react'

function PWABadge() {
  useRegisterSW({})

  return null;
}

export default PWABadge
