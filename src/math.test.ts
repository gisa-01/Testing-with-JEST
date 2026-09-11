describe('String functions', () => {
  test('contain', () => {
    expect('Typescript is powerful',).toContain('Typescript');
  });
  test('length', () => {
    expect('jest').toHaveLength(4);
  });
  test('array contains', () => {
    expect(["React", "Next.js", "React Native"]).toContain('React Native');
  });
});