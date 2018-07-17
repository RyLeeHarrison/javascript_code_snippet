export default class Messages {
  constructor() {
    this.messages = [];
  }

  addMessage(user, title, body) {
    this.messages.push({
      user: user,
      title: title,
      body: body
    });
  }

  getMessages() {
    return this.messages;
  }
}
