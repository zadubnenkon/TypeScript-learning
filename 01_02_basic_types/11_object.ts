const create = (o: object | null): void => { };

create(1);      // Argument of type '1' is not assignable to parameter of type 'object | null'
create('42');   // Argument of type '"42"' is not assignable to parameter of type 'object | null'
create({ obj: 1 });