export function textSlicer(txt: string, max: number = 40) {
  txt = txt.length >= max ? `${txt.slice(0, max)}...` : txt;
  return txt;
}
