function clone<T>(array: ArrayLike<T>): Array<T> {
  return Array.prototype.slice.call(array);
}

export function push<T>(array: ArrayLike<T>, item: T): ReadonlyArray<T> {
  const sliced: T[] = clone(array);
  sliced.push(item);
  return Object.freeze(sliced);
}
export function pop<T>(array: ArrayLike<T>): ReadonlyArray<T> {
  const sliced: T[] = clone(array);
  sliced.pop();
  return Object.freeze(sliced);
}

export function shift<T>(array: ArrayLike<T>): ReadonlyArray<T> {
  const sliced: T[] = clone(array);
  sliced.shift();
  return Object.freeze(sliced);
}
export function unshift<T>(array: ArrayLike<T>, item: T): ReadonlyArray<T> {
  const sliced: T[] = clone(array);
  sliced.unshift(item);
  return Object.freeze(sliced);
}

export function fill<T>(
  array: ArrayLike<any>,
  item: T
): ReadonlyArray<T>;

export function fill<T1, T2>(
  array: ArrayLike<T1>,
  item: T2,
  start: number,
  end?: number
): ReadonlyArray<T1 | T2>;

export function fill(
  array: ArrayLike<any>,
  item: any,
  start?: number,
  end?: number,
): ReadonlyArray<any> {
  return Object.freeze(clone(array).fill(item, start, end));
}
