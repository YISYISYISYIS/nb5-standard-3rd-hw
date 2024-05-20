// TODO: StudentList 컴포넌트를 작성하세요. props로 학생 목록을 받아와서 표시해야 합니다.
function StudentList({ filteredStudents }) {
  return (
    <ul>
      {filteredStudents.map((student, index) => (
        <li key={index}>
          이름 : {student.name} <br />
          나이 : {student.age} <br />
          점수 : {student.grade}
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
