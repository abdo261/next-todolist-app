import { ValidationError } from 'joi';

 export const formattedError = (error: ValidationError): Record<string, string[]> => {
  return error.details.reduce((acc, detail) => {
    const field = detail.path[0] as string;
    if (!acc[field]) {
      acc[field] = [];
    }
    acc[field].push(detail.message);
    return acc;
  }, {} as Record<string, string[]>);
};
