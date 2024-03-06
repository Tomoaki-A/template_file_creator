const args = process.argv.slice(2);

const type = args[0];
const name = args[1];
const path = args[2];

export const commandArgs = {
  type,
  name,
  path,
};
