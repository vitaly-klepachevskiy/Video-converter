import { IStreamLogger } from '../../core/handlers/stream-logger.interface';

class ConsoleLogger implements IStreamLogger {
  private static logger: ConsoleLogger;

  public static getInstance() {
    if (!ConsoleLogger.logger) {
      ConsoleLogger.logger = new ConsoleLogger();
    }
    return ConsoleLogger.logger;
  }

  //   constructor() {
  //     ConsoleLogger .logger = this;
  //   }

  log(...args: any): void {
    console.log(args);
  }
  error(...args: any): void {
    console.log(args);
  }
  end(): void {
    console.log('Готово');
  }
}
