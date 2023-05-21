import Image from 'next/image'

import { getUser } from '@/lib/auth'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />
      {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <User className="h-5 w-5 text-gray-500" />
      </div> */}
      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a href="" className="block text-red-400 hover:text-red-300">
          Quero sair
        </a>
      </p>
    </div>
  )
}
