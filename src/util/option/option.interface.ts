export interface Option<T> {
  isSome(): boolean;
  isNone(): boolean;

  unwrap(): T;
  
  map<U>(fn: (inner: T) => U): Option<U>;
}
