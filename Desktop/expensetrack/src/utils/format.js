import { format, parseISO } from 'date-fns';

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XAF',
  }).format(amount);
};

export const formatDate = (dateString) => {
  if (!dateString) return '';
  return format(parseISO(dateString), 'MMM d, yyyy');
};
