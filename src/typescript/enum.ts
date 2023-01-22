export enum DATA_LOCATION {
	EXTERNAL = 'EXTERNAL',
	INTERNAL = 'INTERNAL',
	DYNAMIC = 'DYNAMIC',
}

export enum HTTP_STATUS {
	OK = 200,
	CREATED = 201,
	NO_CONTENT = 204,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	INTERNAL_SERVER_ERROR = 500,
}

export enum STUDENT_STATUS {
	ACCEPTED = 1,
	PENDING = 2,
	DECLINED = 0,
}