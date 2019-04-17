import { TestBed } from '@angular/core/testing';

import { NextagramService } from './nextagram.service';

describe('NextagramService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NextagramService = TestBed.get(NextagramService);
    expect(service).toBeTruthy();
  });
});
