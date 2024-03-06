const IMPORT_STATEMENT = "import { describe, expect, test } from 'vitest';";

export const createUnitTestCode = ({
  name,
  isNewCreate = false,
}: {
  name: string;
  isNewCreate?: boolean;
}) => {
  return `${isNewCreate ? `${IMPORT_STATEMENT}\n` : ""}
describe("${name}", () => {
  const testCase: Array<
    [
      args: Parameters<typeof ${name}>[number],
      expected: ReturnType<typeof ${name}>
    ]
  > = [];
  test.each(testCase)("%s", (args, expected) => {
    expect(${name}(args)).toBe(expected);
  });
});`;
};
