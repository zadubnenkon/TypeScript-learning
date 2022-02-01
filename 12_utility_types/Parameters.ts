// Parameters<T>
declare function f1(arg: { a: number; b: string }): void;

type T0 = Parameters<() => string>;//           []
type T1 = Parameters<(s: string) => void>;//    [s: string]
type T2 = Parameters<<T>(arg: T) => T>;//       [arg: unknown]
type T3 = Parameters<typeof f1>;//              [arg: {a: number;b: string;}]
type T4 = Parameters<any>;//                    unknown[]
type T5 = Parameters<never>;//                  never
type T6 = Parameters<string>;//                 never
/*
  Error:
  Type 'string' does not satisfy the constraint '(...args: any) => any'.
*/
type T7 = Parameters<Function>;//               never
/*
  Error:
  Type 'Function' does not satisfy the constraint '(...args: any) => any'.
  Type 'Function' provides no match for the signature '(...args: any): any'.
*/