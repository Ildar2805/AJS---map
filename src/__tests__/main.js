import ErrorRepository from '../js/main';

test('проверка получения текста ошибки по коду', () => {
  const repository = new ErrorRepository();
  const result = repository.translate(1);
  const expected = 'Персонаж не отвечает';
  expect(result).toBe(expected);
});

test('проверка возврата "Unknown error", в случае отсутствия кода', () => {
  const repository = new ErrorRepository();
  const result = repository.translate(3);
  const expected = 'Unknown error';
  expect(result).toBe(expected);
});
