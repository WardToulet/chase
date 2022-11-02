import { option } from "./option.interface";

class _Some<T> implements option<T> {
  constructor(private value: T) {}

  isSome(): boolean {
    return true;
  }

  isNone(): boolean {
    return false;
  }

  unwrap(): T {
    return this.value;
  }

  map<U>(fn: (inner: T) => U): option<U> {
    return new _Some(fn(this.value));
  }
}

export function Some<T>(value: T) {
  return new _Some(value);
}
