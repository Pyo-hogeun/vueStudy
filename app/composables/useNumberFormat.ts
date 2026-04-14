export const useNumberFormat = () => {
  const numberFormatter = new Intl.NumberFormat('ko-KR');

  const formatPrice = (value: number | string | null | undefined) => {
    const parsedValue =
      typeof value === 'number'
        ? value
        : Number(String(value ?? '').replaceAll(',', ''));

    if (Number.isNaN(parsedValue)) {
      return '-';
    }

    return numberFormatter.format(parsedValue);
  };

  return {
    formatPrice,
  };
};
