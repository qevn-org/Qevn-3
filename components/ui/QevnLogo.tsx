import Image from 'next/image'

export default function QevnLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/qevn-logo.png"
        alt="QEVN"
        width={132}
        height={36}
        className="h-8 w-auto md:h-9"
        priority
      />
    </span>
  )
}
