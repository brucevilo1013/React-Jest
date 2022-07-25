import { createLink, document, Link } from './';

describe('createLink', () => {
  it('t1', () => {
    const url = 'https://github.com/brucevilo1013';
    jest.spyOn(document, 'createElement').mockReturnValueOnce(new Link('mock link'));
    const link = createLink(url);
    expect(link).toBeInstanceOf(Link);
    expect(link.href).toBe(url);
  });
});
