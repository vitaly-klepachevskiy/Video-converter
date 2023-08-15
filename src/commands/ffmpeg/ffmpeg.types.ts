import { ICommandExecuter } from '../../core/executor/command.types';

export interface IFfmpegInput {
  width: number;
  height: number;
  path: string;
  name: string;
}

export interface ICommandExecuterFfmpeg extends ICommandExecuter {
  output: string;
}
