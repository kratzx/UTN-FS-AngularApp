import { TestBed } from '@angular/core/testing';

import { FirebaseItemsService } from './firebase-items.service';

describe('FirebaseItemsService', () => {
  let service: FirebaseItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
