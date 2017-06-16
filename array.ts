export function push<T>(array: ArrayLike<T>, item: T): ReadonlyArray<T> {
  const sliced: T[] = Array.prototype.slice.call(array);
  sliced.push(item);
  return Object.freeze(sliced);
}
export function pop<T>(array: ArrayLike<T>): ReadonlyArray<T> {
  const sliced: T[] = Array.prototype.slice.call(array);
  sliced.pop();
  return Object.freeze(sliced);
}

export function shift<T>(array: ArrayLike<T>): ReadonlyArray<T> {
  const sliced: T[] = Array.prototype.slice.call(array);
  sliced.shift();
  return Object.freeze(sliced);
}
export function unshift<T>(array: ArrayLike<T>, item: T): ReadonlyArray<T> {
  const sliced: T[] = Array.prototype.slice.call(array);
  sliced.unshift(item);
  return Object.freeze(sliced);
}
