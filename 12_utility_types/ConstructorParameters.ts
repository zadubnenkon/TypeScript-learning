// ConstructorParameters<T>
type T0 = ConstructorParameters<ErrorConstructor>;//    [message?: string]
type T1 = ConstructorParameters<FunctionConstructor>;// string[]
type T2 = ConstructorParameters<RegExpConstructor>;//   [pattern: string | RegExp, flags?: string]
type T3 = ConstructorParameters<any>;//                 unknown[]
type T4 = ConstructorParameters<Function>;//            never
/*
  Error:
  Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
  Type 'Function' provides no match for the signature 'new (...args: any): any'.
*/