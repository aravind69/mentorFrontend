import { TestBed } from '@angular/core/testing';

import { SearchMentorService } from './search-mentor.service';

describe('SearchMentorService', () => {
  let service: SearchMentorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchMentorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
