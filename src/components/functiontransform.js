export const transformlanguege = (srt, tipo, isBool) => {
  if (srt === undefined) return;
  const nameEn = srt.map((e) => e[1]).find((r) => r?.toLowerCase() === tipo);
  const namesEsEn = srt
    .find((e) => e.includes(nameEn))
    ?.find((n) => (isBool === false ? n.includes(nameEn) : Object.keys(n)[0]));
  return namesEsEn;
};
export const transformAbilities = (srt, tipo, isBool) => {
  if (srt === undefined) return;

  const nameEn = srt
    .map((e) => e[1])
    .find((r) => r?.toLowerCase() === tipo.replace("-", " ").toLowerCase());

  const namesEsEn = srt
    .find((e) => e.includes(nameEn))
    ?.find((n) => (isBool === false ? n.includes(nameEn) : Object.keys(n)[0]));
  return namesEsEn;
};
