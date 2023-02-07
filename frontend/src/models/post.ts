export interface Post {
  id: number;
  author: {
    id: number; // Id del User que postea
    username: string; // username del User que postea
  };
  message: string;
  image: string | null; // Array de imágenes?
  publishDate: string; // Fecha de publicación. Si no se indica, fecha actual por defecto
  kudos: Array<number>; // Array de UserIds
}
