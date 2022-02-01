// ThisParameterType<T>
function toHex(this: Number) {
    return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {//n: Number
    return toHex.apply(n);
}