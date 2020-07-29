export const required = (value) => value ? undefined : 'Field is required';
export const maxLength = (maxLength) => (value) => value?.length > maxLength ? `Max length is ${maxLength}` : undefined;