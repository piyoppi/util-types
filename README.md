# @piyoppi/util-types

Utility types of TypeScript.

## Example

### NumberRange type

```typescript
import { NumberRange } from '@piyoppi/util-types'

type Month = NumberRange<1, 12>  // == 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
```

### ArrayFixedLength type

```typescript
import { ArrayFixedLength } from '@piyoppi/util-types'

type Matrix4 = ArrayFixedLength<number, 16>  // == [
                                             //   number, number, number, number, 
                                             //   number, number, number, number, 
                                             //   number, number, number, number, 
                                             //   number, number, number, number 
                                             // ]
```

## Author

@piyoppi

## License

MIT
