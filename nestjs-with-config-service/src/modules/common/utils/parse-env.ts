function isNullOrUndefined(value: any): value is null | undefined {
  return value === undefined || value === null;
}

/**
 * Retrieves environment variable and throws if missing without default
 *
 * @param name name of environment variable
 * @param defaultVal
 */
export function parseEnv(name: string, defaultVal?: string): string {
  let env = process.env[name];
  if (!env) {
    if (isNullOrUndefined(defaultVal)) {
      throw new Error(`Missing environment variable for ${name}`);
    }
    env = defaultVal;
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
  return parseInt(parseEnv(name, `${defaultVal}`));
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

/**
 * Retrieves environment variable, parses it into JSON, and throws if missing.
 *
 * @param name
 * @param defaultJsonString
 */
export function parseEnvJSON<T>(name: string, defaultJsonString?: string): T {
  return JSON.parse(parseEnv(name, defaultJsonString));
}
