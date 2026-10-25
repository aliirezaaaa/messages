import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findAll() {
    const contetns = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contetns);
    return messages;
  }

  async findOne(id: string) {
    const contetns = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contetns);
    return messages[id];
  }

  async create(contetn: string) {
    const contetns = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contetns);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, contetn };
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
