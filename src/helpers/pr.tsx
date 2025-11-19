export function pr<T>(
  v: T,
  arg: { title?: string; error?: boolean } = { title: "", error: false }
): T {
  const logger = arg.error ? console.error : console.log;
  logger(` ----------------------${arg.title}---------------------- `);
  logger(v);
  return v;
}
