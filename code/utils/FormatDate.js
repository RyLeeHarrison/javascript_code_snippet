class FormatDate extends Date {
  constructor(dateStr) {
    super(dateStr);
  }

  getFormattedDate() {
    const days = [
      'Mon', 'Tu', 'Wed', 'Th', 'Fri',
      'Sat', 'Sun'];

    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May',
      'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
      'Nov', 'Dec'];

    return `${days[this.getDay()]}, ${months[this.getMonth()]} ${this.getDate()} ${this.getFullYear()}`;
  }
}

console.log( // => Sunday, Aug 11 2018
    new FormatDate(new Date()).getFormattedDate()
);