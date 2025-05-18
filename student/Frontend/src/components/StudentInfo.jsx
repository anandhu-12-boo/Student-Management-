import React from 'react';

// Sample data for 50 students
const students = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', grade: 'A' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', grade: 'B' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', grade: 'A' },
  { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', grade: 'C' },
  { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com', grade: 'B' },
  { id: 6, name: 'Diana Evans', email: 'diana.evans@example.com', grade: 'A' },
  { id: 7, name: 'Ethan Foster', email: 'ethan.foster@example.com', grade: 'B' },
  { id: 8, name: 'Fiona Green', email: 'fiona.green@example.com', grade: 'C' },
  { id: 9, name: 'George Harris', email: 'george.harris@example.com', grade: 'A' },
  { id: 10, name: 'Hannah Irving', email: 'hannah.irving@example.com', grade: 'B' },
  { id: 11, name: 'Ian Jackson', email: 'ian.jackson@example.com', grade: 'A' },
  { id: 12, name: 'Julia King', email: 'julia.king@example.com', grade: 'C' },
  { id: 13, name: 'Kevin Lewis', email: 'kevin.lewis@example.com', grade: 'B' },
  { id: 14, name: 'Laura Miller', email: 'laura.miller@example.com', grade: 'A' },
  { id: 15, name: 'Michael Nelson', email: 'michael.nelson@example.com', grade: 'B' },
  { id: 16, name: 'Nina Owens', email: 'nina.owens@example.com', grade: 'C' },
  { id: 17, name: 'Oscar Patel', email: 'oscar.patel@example.com', grade: 'A' },
  { id: 18, name: 'Paula Quinn', email: 'paula.quinn@example.com', grade: 'B' },
  { id: 19, name: 'Quincy Roberts', email: 'quincy.roberts@example.com', grade: 'A' },
  { id: 20, name: 'Rachel Scott', email: 'rachel.scott@example.com', grade: 'B' },
  { id: 21, name: 'Samuel Taylor', email: 'samuel.taylor@example.com', grade: 'C' },
  { id: 22, name: 'Tina Underwood', email: 'tina.underwood@example.com', grade: 'A' },
  { id: 23, name: 'Ulysses Vaughn', email: 'ulysses.vaughn@example.com', grade: 'B' },
  { id: 24, name: 'Victoria White', email: 'victoria.white@example.com', grade: 'A' },
  { id: 25, name: 'Walter Xavier', email: 'walter.xavier@example.com', grade: 'C' },
  { id: 26, name: 'Xena Young', email: 'xena.young@example.com', grade: 'B' },
  { id: 27, name: 'Yvonne Zhang', email: 'yvonne.zhang@example.com', grade: 'A' },
  { id: 28, name: 'Zachary Adams', email: 'zachary.adams@example.com', grade: 'B' },
  { id: 29, name: 'Amber Baker', email: 'amber.baker@example.com', grade: 'C' },
  { id: 30, name: 'Benjamin Clark', email: 'benjamin.clark@example.com', grade: 'A' },
  { id: 31, name: 'Catherine Dixon', email: 'catherine.dixon@example.com', grade: 'B' },
  { id: 32, name: 'David Evans', email: 'david.evans@example.com', grade: 'A' },
  { id: 33, name: 'Eleanor Foster', email: 'eleanor.foster@example.com', grade: 'C' },
  { id: 34, name: 'Frank Green', email: 'frank.green@example.com', grade: 'B' },
  { id: 35, name: 'Grace Harris', email: 'grace.harris@example.com', grade: 'A' },
  { id: 36, name: 'Henry Irving', email: 'henry.irving@example.com', grade: 'B' },
  { id: 37, name: 'Ivy Jackson', email: 'ivy.jackson@example.com', grade: 'C' },
  { id: 38, name: 'Jack King', email: 'jack.king@example.com', grade: 'A' },
  { id: 39, name: 'Karen Lewis', email: 'karen.lewis@example.com', grade: 'B' },
  { id: 40, name: 'Liam Miller', email: 'liam.miller@example.com', grade: 'A' },
  { id: 41, name: 'Mia Nelson', email: 'mia.nelson@example.com', grade: 'C' },
  { id: 42, name: 'Noah Owens', email: 'noah.owens@example.com', grade: 'B' },
  { id: 43, name: 'Olivia Patel', email: 'olivia.patel@example.com', grade: 'A' },
  { id: 44, name: 'Patrick Quinn', email: 'patrick.quinn@example.com', grade: 'B' },
  { id: 45, name: 'Quinn Roberts', email: 'quinn.roberts@example.com', grade: 'C' },
  { id: 46, name: 'Rose Scott', email: 'rose.scott@example.com', grade: 'A' },
  { id: 47, name: 'Samuel Taylor', email: 'samuel.taylor@example.com', grade: 'B' },
  { id: 48, name: 'Tina Underwood', email: 'tina.underwood@example.com', grade: 'A' },
  { id: 49, name: 'Ulysses Vaughn', email: 'ulysses.vaughn@example.com', grade: 'B' },
  { id: 50, name: 'Victoria White', email: 'victoria.white@example.com', grade: 'C' },
];

const StudentInfo = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Student Information</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td className="py-2 px-4 border-b">{student.id}</td>
                <td className="py-2 px-4 border-b">{student.name}</td>
                <td className="py-2 px-4 border-b">{student.email}</td>
                <td className="py-2 px-4 border-b">{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentInfo;
