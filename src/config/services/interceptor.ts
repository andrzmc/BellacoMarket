export const API_RESPONSE_ERROR_MESSAGE_CONFIG: Record<number, string> = {
  400: 'Invalid request. Please check the information provided.',
  401: 'Session expired or unauthorized. Please sign in again.',
  403: 'Access denied. You do not have permission to view this resource.',
  404: 'The requested resource was not found. Please try again later.',
  408: 'Request timeout. The server took too long to respond.',
  409: 'Resource conflict detected. Please refresh and try again.',
  422: 'Unable to process the request due to invalid data.',
  429: 'Too many requests. Please wait a moment and try again.',
  500: 'Internal server error. Please try again later.',
  502: 'Bad gateway. The server received an invalid response.',
  503: 'Service temporarily unavailable. Please try again later.',
  504: 'Gateway timeout. The server took too long to respond.',
};
