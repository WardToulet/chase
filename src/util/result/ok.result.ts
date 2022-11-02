import { None, Option, Some } from '../option';
import { Result } from './result.interface';

class _Ok<T, E> implements Result<T, E> {
  constructor(private value: T) {}

  isOk(): boolean {
    return true;
  }

  isErr(): boolean {
    return false;
  }

  unwrap(): T {
    return this.value;
  }

  unwrapErr(): E {
    throw new Error('unwrapErr on Ok')
  }

  ok(): Option<T> {
    return Some(this.value);
  }

  err(): Option<E> {
    return None();
  }
}

export function Ok<T, _E>(value: T) {
  return new _Ok(value);
}
