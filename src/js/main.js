export default class ErrorRepository {
  constructor() {
    this.map = new Map([[1, 'Персонаж не отвечает'], [2, 'Неизвестная команда']]);
  }

  translate(code) {
    return this.map.get(code) || 'Unknown error';
  }
}
