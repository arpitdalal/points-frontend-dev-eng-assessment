interface Array<T> {
  filter(predicate: BooleanConstructor, thisArg?: any): TSReset.NonFalsy<T>[];
}

interface ReadonlyArray<T> {
  filter(predicate: BooleanConstructor, thisArg?: any): TSReset.NonFalsy<T>[];
}
