export interface User {
    _id:         number,
    username:   string,
    email:      string,
    password:   string,
    avatar:     string,
    // Followers y followed son arrays de UserIds
    followers:  Array<number>,
    following:   Array<number>
}