
interface StudentCardProps {
  name: string
  age: number
  course: string
  grade: string
  initials: string
}

const StudentCard = ({ name, age, course, grade, initials }: StudentCardProps) => {
  return (
    <div className="w-64 bg-[#111111] border border-[#1f1f1f] rounded-2xl p-5 flex flex-col gap-4 hover:border-[#333333] hover:shadow-[0_0_30px_rgba(255,255,255,0.04)] transition-all duration-300 cursor-default">

      {/* Top row: avatar + grade badge */}
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
          <span className="text-xs font-bold text-[#888888] tracking-wide">{initials}</span>
        </div>
        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#888888] tracking-wide">
          Grade {grade}
        </span>
      </div>

      {/* Name & age */}
      <div>
        <h2 className="text-sm font-semibold text-white tracking-tight leading-tight">{name}</h2>
        <p className="text-[11px] text-[#555555] mt-0.5">Age {age}</p>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#1f1f1f]" />

      {/* Course */}
      <div className="flex flex-col gap-0.5">
        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#404040]">Enrolled Course</span>
        <p className="text-xs font-medium text-[#888888] leading-snug">{course}</p>
      </div>
    </div>
  )
}

export default StudentCard