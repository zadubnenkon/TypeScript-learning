// Readonly<T>
interface User {
    name: string;
}

const user: Readonly<User> = {
    name: 'Yauhen',
};

user.name = 'Max';      // Error: cannot reassign a readonly property
