import { option } from './option.interface';

class _None<T> implements option<T> {
  isSome(): boolean {
    return false;
  }

  isNone(): boolean {
    return true;
  }

  unwrap(): T {
    throw new Error('Unwrapped None');
  }

  map<U>(_fn: (inner: T) => U): option<U> {
    return this as any as option<U>;
  }
} 

export function None<T>() {
  return new _None<T>();
}
