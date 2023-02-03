export interface Post {
    id:             number,
    userId:         number,      // Id del User que postea
    message:        string,
    image:          string,     // Array de imágenes?
    publishDate:    string,     // Fecha de publicación. Si no se indica, fecha actual por defecto
    kudos:          Array<number>    // Array de UserIds
}