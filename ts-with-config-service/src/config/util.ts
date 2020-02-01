/**
 * Retrieves environment variable and throws if missing without default
 *
 * @param name name of environment variable
 * @param defaultVal
 */
export function parseEnv(name: string, defaultVal?: string): string {
  let env = process.env[name];
  if (env === undefined) {
    if (defaultVal !== undefined) {
      env = defaultVal;
    } else {
      throw new Error(`Missing environment variable for ${name}`);
    }
  }
  return env;
}

/**
 * Retrieves environment variable as a number and throws if missing without default
 *
 * @param name name of environment variable
 * @param defaultVal
 */
export function parseEnvNumber(name: string, defaultVal?: number): number {
  const number = parseInt(parseEnv(name, `${defaultVal}`));
  if (isNaN(number)) {
    throw new Error(`Bad environment variable for ${name}: Not a Number`);
  }
  return number;
}

/**
 * Retrieves environment variable as a boolean and throws if missing without default
 *
 * @param name name of environment variable
 * @param defaultVal
 */
export function parseEnvBoolean(name: string, defaultVal?: boolean): boolean {
  return parseEnv(name, `${defaultVal}`).toLowerCase() === "true";
}
