class ApiResponse<T = any> {
  public success: boolean;
  public message: string;
  public data: T | null;
  public statusCode: number;

  constructor(statusCode: number, message: string, data: T | null = null) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }
}

export default ApiResponse;