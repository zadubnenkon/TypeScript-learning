// ThisType<T, K>
type ObjectDescriptor<T, K> = {
    data?: T;
    methods?: K & ThisType<T & K>; // Type of 'this' in methods is T & K
};

function makeObject<T, K>(desc: ObjectDescriptor<T, K>): T & K {
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};
    return { ...data, ...methods } as T & K;
}

let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx; // Strongly typed this
            this.y += dy; // Strongly typed this
        },
    },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);