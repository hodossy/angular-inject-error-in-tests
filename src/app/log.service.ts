import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

export interface LogConfig {
  archiveSize: number;
}
export const LOG_CONFIG = new InjectionToken<Partial<LogConfig>>('Log configuration');

const DEFAULT_LOG_CONFIG: LogConfig = {
  archiveSize: 100,
};

@Injectable()
export abstract class LogService {
  public config: LogConfig;

  constructor(@Optional() @Inject(LOG_CONFIG) config: Partial<LogConfig>) {
    this.config = { ...DEFAULT_LOG_CONFIG, ...config };
  }
}

@Injectable()
export class MemoryLogService extends LogService {
  protected _autoFlush = true; // comment this to make the test work

  // or uncomment cosntructor to make the test work
  // constructor(@Optional() @Inject(LOG_CONFIG) config: Partial<LogConfig>) {
  //   super(config);
  // }
}
