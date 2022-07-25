import { downloadWithLink } from './';

describe('downloadWithLink', () => {
  it('t1', () => {
    const anchorMocked = { href: '', click: jest.fn() } as any;
    const createElementSpyOn = jest.spyOn(document, 'createElement').mockReturnValueOnce(anchorMocked);
    document.body.appendChild = jest.fn();
    document.body.removeChild = jest.fn();
    downloadWithLink('https://github.com/brucevilo1013', 'test name');
    expect(createElementSpyOn).toBeCalledWith('a');
    expect(document.body.appendChild).toBeCalledWith(anchorMocked);
    expect(anchorMocked.click).toBeCalledTimes(1);
    expect(document.body.removeChild).toBeCalledWith(anchorMocked);
  });
});
