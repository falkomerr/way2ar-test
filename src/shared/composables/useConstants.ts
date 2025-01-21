export const useConstants = () => {
  const DEPARTMENTS_RADIO_LIST = [
    { id: 1, label: 'Кардиология', value: 'Кардиология' },
    { id: 2, label: 'Хирургия', value: 'Хирургия' },
  ]

  return {
    DEPARTMENTS_RADIO_LIST,
  }
}
