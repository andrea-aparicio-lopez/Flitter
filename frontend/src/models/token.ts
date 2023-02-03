// Token de recuperación de contraseña

export interface Token {
    id:         number,     // token
    userId:     number,
    expiryDate: string,
}