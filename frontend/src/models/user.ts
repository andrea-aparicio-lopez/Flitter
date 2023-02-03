export interface User {
    id:         number,
    username:   string,
    email:      string,
    password:   string,
    // Followers y followed son arrays de UserIds
    followers:  Array<number>,
    followed:   Array<number>
}