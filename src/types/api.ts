export interface ResponseApiDing {
    error: boolean;
    code: number;
    message: string;
    data?: object | string;
}

export interface Access {
    accessToken: string;
    refreshToken: string;
    conn: string;
}
