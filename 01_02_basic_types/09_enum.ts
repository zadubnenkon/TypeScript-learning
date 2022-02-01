enum Directions {
    Up,
    Down,
    Left,
    Right
}

Directions.Up;      // 0
Directions.Down;    // 1
Directions.Left;    // 2
Directions.Right;   // 3

// Custom index for enum elements
enum Directions {
    Up = 2,
    Down = 4,
    Left = 6,
    Right
}

Directions.Up;      // 2
Directions.Down;    // 4
Directions.Left;    // 6
Directions.Right;   // 7