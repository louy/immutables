export function set<T, K extends keyof T>(object: T, key: K, value: T[K]): T;
export function set<T, K extends string, V>(object: T, key: K, value: V): T & { [key in K]: V};
export function set(object, key, value) {
  return Object.freeze(
    object[key] === value
    ? object
    : Object.assign({},object,{[key]:value})
  )
}
