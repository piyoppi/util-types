/**
 * A fixed-length array type consisting of any type.
 *
 * @example ArrayFixedLength<number, 5> is [number, number, number, number, number]
 */
type ArrayFixedLength<T extends number, U, V extends Array<U> = [], W extends Array<true> = [true]> = 
  W[T] extends true ? V : ArrayFixedLength<T, U, [...V, U], [...W, true]> 

/**
 * Union type indicating a range of integer values.
 *
 * @example NumberRange<2, 5> is 2 | 3 | 4 | 5
 */
type NumberRange<
  T extends number,
  U extends number,
  Y extends unknown[] = [...ArrayFixedLength<U, true>, true],
  Z extends true[] = ArrayFixedLength<T, true>,
  W = T
> = Z['length'] extends Y['length'] ? W : NumberRange<T, U, Y, [...Z, true], W | Z['length']>
