import { PromptService } from './core/prompt/prompt.service';

class App {
  async run() {
    const test = new PromptService();
    const res = await test.input<number>('Число', 'number');
    console.log(res);
  }
}

const app = new App();
app.run();
