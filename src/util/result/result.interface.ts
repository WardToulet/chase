import { Option } from '../option';

export interface Result<T, E> {
  isOk(): boolean;
  isErr(): boolean;

  unwrap(): T;
  unwrapErr(): E;

  ok(): Option<T>;
  err(): Option<E>;
}
