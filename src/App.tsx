import StudentCard from './Components/StudentCard'

const data = [
  {
    id: '1',
    name: 'John Doe',
    age: 21,
    course: 'Computer Science',
    grade: 'A+',
    initials: 'JD',
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: 20,
    course: 'Mathematics',
    grade: 'A',
    initials: 'JS',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    age: 22,
    course: 'Theoretical Physics',
    grade: 'B+',
    initials: 'BJ',
  },
]

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col justify-center items-center py-16 px-6">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#525252] mb-2">React Assignment 2</p>
        <h1 className="text-3xl font-bold text-white tracking-tight">Student Directory</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {data.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            age={student.age}
            course={student.course}
            grade={student.grade}
            initials={student.initials}
          />
        ))}
      </div>
    </div>
  )
}

export default App