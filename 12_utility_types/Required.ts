// Required<T>
interface Props {
    a?: number;
    b?: string;
};

const obj: Props = { a: 5 };              // OK

const obj2: Required<Props> = { a: 5 };   // Error: property 'b' missing