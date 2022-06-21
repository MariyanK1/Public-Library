import { MaleFemalePipe } from './maleFemale.pipe';

describe('MaleFemalePipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new MaleFemalePipe();

  it('transforms "male" to "M"', () => {
    expect(pipe.transform('male')).toBe('M');
  });

  it('transforms "female" to "F"', () => {
    expect(pipe.transform('female')).toBe('F');
  });

  it('transforms "x" to "Please add a valid sex!"', () => {
    expect(function () {
      pipe.transform('x');
    }).toThrow(new Error('Please add a valid sex!'));
  });
});
