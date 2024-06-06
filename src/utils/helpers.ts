export const formatCurrency = (
  currency: { format: string; currency: string },
  amount: number
) => {
  return new Intl.NumberFormat(currency.format, {
    style: "currency",
    currency: currency.currency,
  }).format(amount);
};

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-US");
};

export const formatPercentage = (num: number) => {
  return new Intl.NumberFormat("default", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    notation: "compact",
  }).format(num / 100);
};
