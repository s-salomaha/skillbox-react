describe('Add operator', () => {
  test('Should return 2 when add one and one', () => {
    expect(1 + 1).toBe(2);
  });

  describe('Add operator inner group', () => {
    test('Should return 3 when add one and two', () => {
      expect(1 + 2).toBe(3);
    });
  });
});
