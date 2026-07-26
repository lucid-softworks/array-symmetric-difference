/** Returns unique values present in either input, but not both. */
export function symmetricDifference<TValue>(
  left: readonly TValue[],
  right: readonly TValue[],
): TValue[] {
  const leftSet = new Set(left);
  const rightSet = new Set(right);
  return [
    ...[...leftSet].filter((value) => !rightSet.has(value)),
    ...[...rightSet].filter((value) => !leftSet.has(value)),
  ];
}
