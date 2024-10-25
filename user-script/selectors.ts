const main = ".UI > div";
const panel = `${main} > div`;

const selectors = {
  main,
  panel,
  mailItem: `${panel} tbody tr`,
  ad: ".ast",
} as const;

export default selectors;
