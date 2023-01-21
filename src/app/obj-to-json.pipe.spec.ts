import { ObjToJsonPipe } from './obj-to-json.pipe';

describe('ObjToJsonPipe', () => {
  it('create an instance', () => {
    const pipe = new ObjToJsonPipe();
    expect(pipe).toBeTruthy();
  });
});
