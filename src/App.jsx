export default function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];
  const filteredStudents = students.filter((student) => student.age > 17);
  const btnClick = (student) => {
    return alert(`학생의 나이는 ${student.age}이고 점수는 ${student.grade}`);
  };

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {filteredStudents.map((student) => (
          <li>
            <button onClick={() => btnClick(student)}>{student.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
