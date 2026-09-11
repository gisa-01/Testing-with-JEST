const student = {
  name: "Gisa",
  course: "Computer Science",
  skills: ["React", "TypeScript", "Jest"],
};

test('student object', () => {
  expect(student).toHaveProperty('course', 'Computer Science');
});

test('student object', () => {
  expect(student.skills).toContain('TypeScript');
});

test('student object', () => {
  expect(student.skills).not.toContain('Pyhton');
});