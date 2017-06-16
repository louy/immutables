export function get<
  T,
  K extends keyof T
>(object: T, key: K): T[K] {
  return object[key];
}

export function set<
  T,
  K extends keyof T
>(object: T, key: K, value: T[K]): T;
export function set<
  T,
  K extends string,
  V
>(
  object: T,
  key: K,
  value: V
): T & { [key in K]: V };
export function set(
  object: any,
  key: string,
  value: any
) {
  return Object.freeze(
    object[key] === value
      ? object
      : Object.assign({}, object, {
          [key]: value,
        })
  );
}

export function getIn<
  T,
  K1 extends keyof T
>(object: T, keys: [K1]): T[K1];
export function getIn<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1]
>(object: T, keys: [K1, K2]): T[K1][K2];
export function getIn<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2]
>(
  object: T,
  keys: [K1, K2, K3]
): T[K1][K2][K3];
export function getIn<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3]
>(
  object: T,
  keys: [K1, K2, K3, K4]
): T[K1][K2][K3][K4];
export function getIn(
  object: any,
  keys: string[]
): any;
export function getIn(
  object: any,
  keys: string[]
): any {
  return keys.reduce(
    (object, key) =>
      object && get(object, key),
    object
  );
}

export function setIn(
  object: any = {},
  keys: string[],
  value: any
): any {
  if (keys.length === 1)
    return set(object, keys[0], value);

  return set(
    object,
    keys[0],
    setIn(
      get(object, keys[0]),
      keys.slice(1),
      value
    )
  );
}
