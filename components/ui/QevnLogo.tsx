import Image from 'next/image'

interface QevnLogoProps {
  className?: string
  heightClass?: string
}

export default function QevnLogo({ className = '', heightClass = 'h-8 md:h-[38px]' }: QevnLogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo-web.png"
        alt="QEVN Logo"
        width={151}
        height={45}
        className={`${heightClass} w-auto object-contain transition-all duration-300 hover:opacity-90 hover:scale-[1.01] active:scale-[0.98]`}
        priority
      />
    </span>
  )
}
