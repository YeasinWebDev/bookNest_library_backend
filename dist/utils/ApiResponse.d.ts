declare class ApiResponse<T = any> {
    success: boolean;
    message: string;
    data: T | null;
    statusCode: number;
    constructor(statusCode: number, message: string, data?: T | null);
}
export default ApiResponse;
