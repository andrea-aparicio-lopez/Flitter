export interface Post {
  _id: number;
  author: {
    _id: number; // Id del User que postea
    username: string; // username del User que postea
  };
  message: string | null;
  image: string | null; // Array de imágenes?
  publishedDate: string; // Fecha de publicación. Si no se indica, fecha actual por defecto
  kudos: Array<number>; // Array de UserIds
}
