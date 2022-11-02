import { None, Option, Some } from '../option';
import { Result } from './result.interface';

class _Err<T, E> implements Result<T, E> {
  constructor(private error: E) {}

  isOk(): boolean {
    return false;
  }

  isErr(): boolean {
    return true;
  }

  unwrap(): T {
    throw new Error('unwrap on Err')
  }

  unwrapErr(): E {
    return this.error;
  }

  ok(): Option<T> {
    return None();
  }

  err(): Option<E> {
    return Some(this.error);
  }
}

export function Err<T, _E>(value: T) {
  return new _Err(value);
}
