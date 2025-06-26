export class ErrorResponseDto {
  statusCode: number;
  message: string;

  constructor(statusCode?: number, message?: string) {
    this.statusCode = statusCode || 500;
    this.message = message || 'Ha ocurrido un error al realizar la operacion';
  }
}
