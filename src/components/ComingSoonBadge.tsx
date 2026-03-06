export default function ComingSoonBadge() {
  return (
    <span className="relative group/badge inline-flex items-center cursor-default shrink-0">
      <span className="w-[15px] h-[15px] rounded-full bg-btx-600/80 border border-btx-500/50 flex items-center justify-center">
        <span className="text-[8px] font-bold text-btx-400 leading-none select-none">!</span>
      </span>
      <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded text-[10px] font-medium text-btx-100 bg-btx-800 border border-btx-500/50 whitespace-nowrap shadow-xl opacity-0 group-hover/badge:opacity-100 transition-opacity duration-150 z-[300]">
        Coming soon
      </span>
    </span>
  )
}
