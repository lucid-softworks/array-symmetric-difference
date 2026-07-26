import { describe, expect, it } from "vitest";

import { symmetricDifference } from "../src/index.js";

describe("symmetricDifference", () => {
  it("returns unique values present on only one side", () => {
    expect(symmetricDifference([1, 2, 2, 3], [2, 3, 4, 4])).toEqual([1, 4]);
  });

  it("preserves left order followed by right order", () => {
    expect(symmetricDifference(["b", "a"], ["d", "c"])).toEqual([
      "b",
      "a",
      "d",
      "c",
    ]);
  });

  it("handles empty and equal sets", () => {
    expect(symmetricDifference([], [1, 1])).toEqual([1]);
    expect(symmetricDifference([1], [1])).toEqual([]);
  });
});
