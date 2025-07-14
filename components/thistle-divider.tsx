export function ThistleDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center py-8 ${className}`} role="separator" aria-label="Section divider">
      <svg
        width="48"
        height="48"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-secondary opacity-20"
        aria-hidden="true"
      >
        <path d="M30 5C30 5 25 10 25 15C25 20 30 25 30 25C30 25 35 20 35 15C35 10 30 5 30 5Z" fill="currentColor" />
        <path d="M30 25C30 25 20 20 15 20C10 20 5 25 5 30C5 35 10 40 15 40C20 40 30 35 30 35" fill="currentColor" />
        <path d="M30 25C30 25 40 20 45 20C50 20 55 25 55 30C55 35 50 40 45 40C40 40 30 35 30 35" fill="currentColor" />
        <path d="M30 35C30 35 25 40 25 45C25 50 30 55 30 55C30 55 35 50 35 45C35 40 30 35 30 35Z" fill="currentColor" />
        <circle cx="30" cy="30" r="5" fill="currentColor" />
      </svg>
    </div>
  )
}
