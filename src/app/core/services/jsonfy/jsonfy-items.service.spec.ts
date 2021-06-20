import { TestBed } from '@angular/core/testing';

import { JsonfyItemsService } from './jsonfy-items.service';

describe('JsonfyItemsService', () => {
  let service: JsonfyItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonfyItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
