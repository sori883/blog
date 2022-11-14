import { format } from 'date-fns';

const parseValue = (value: number): string => {
  return format(new Date(value), 'yyyy/MM/dd');
};

export default parseValue;