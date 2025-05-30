import { format } from 'date-fns';

export function formatDate(date: any): String {
  if (date) {
    try {
      return format(new Date(date), 'dd/MM/yyyy HH:mm');
    } catch (e) {
      console.warn((e as any)?.message);
    }
  }
  return '';
}
