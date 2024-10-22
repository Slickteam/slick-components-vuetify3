import { format } from 'date-fns';

export function formatDate(date) {
  if (date) {
    try {
      return format(new Date(date), 'dd/MM/yyyy HH:mm');
    } catch (e) {
      console.warn(e?.message);
    }
  }
  return '';
}
