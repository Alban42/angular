import { GetEmailPipe } from './get-user.pipe';

describe('GetEmailPipe', () => {
  it('create an instance', () => {
    const pipe = new GetEmailPipe();
    expect(pipe).toBeTruthy();
  });
});
