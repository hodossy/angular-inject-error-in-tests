import { TestBed } from '@angular/core/testing';

import {
  LogService,
  LOG_CONFIG,
  MemoryLogService,
} from './log.service';

describe('LogService', () => {
  let service: LogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: LOG_CONFIG, useValue: { archiveSize: 1 } },
        { provide: LogService, useClass: MemoryLogService },
      ],
    });
    service = TestBed.inject<LogService>(LogService);
  });

  it('should be configurable', () => {
    expect(service.config.archiveSize).toEqual(1);
  });
});
