// Marca Bono Planet: hoja estilizada dentro de círculo orgánico.
export default function Logo({ className = "size-7", variant = "default" }) {
  const bg =
    variant === "onGreen"
      ? "bg-[#FFD238] text-[#2F5F3B]"
      : variant === "light"
        ? "bg-white text-[#2F5F3B]"
        : "bg-[#2F5F3B] text-white"

  return (
    <span
      className={`inline-flex items-center justify-center rounded-2xl ${bg} ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" fill="none" className="size-[62%]">
        <path
          d="M12 3C8 7 6 11 7 15C8 18 10 20 12 21C14 20 16 18 17 15C18 11 16 7 12 3Z"
          fill="currentColor"
          opacity="0.9"
        />
        <path
          d="M12 6V19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </span>
  )
}
