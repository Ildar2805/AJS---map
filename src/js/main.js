export default class ErrorRepository {
  constructor() {
    this.map = new Map([[1, 'Персонаж не отвечает'], [2, 'Неизвестная команда']]);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
