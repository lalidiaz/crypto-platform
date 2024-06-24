import DOMPurify from "dompurify";

export const formatCurrency = (
  currency: { label?: string; format: string; currency: string },
  amount: number
) => {
  return new Intl.NumberFormat(currency.format, {
    style: "currency",
    currency: currency.currency,
    notation: "compact",
  }).format(amount);
};

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-us", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const formatPercentage = (num: number) => {
  return new Intl.NumberFormat("default", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    notation: "compact",
  }).format(num / 100);
};

export const formatCompactNumber = (number: number) => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(number);
};
// get milliseconds for dates to create url to get historical data from coin
export const getMillisecondsForDates = () => {
  // get today's date
  const today = new Date();

  // get yesterday's date
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // get the date 30 days ago
  const date30DaysAgo = new Date(today);
  date30DaysAgo.setDate(today.getDate() - 30);

  // convert dates to timestamps in milliseconds
  const yesterdayMilliseconds = yesterday.getTime();
  const date30DaysAgoMilliseconds = date30DaysAgo.getTime();

  return {
    yesterday: yesterdayMilliseconds,
    date30DaysAgo: date30DaysAgoMilliseconds,
  };
};

export const createMarkup = (dirty: string) => {
  return { __html: DOMPurify.sanitize(dirty) };
};
