import { TestBed } from '@angular/core/testing';

import { UserStory10Interceptor } from './user-story10.interceptor';

describe('UserStory10Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UserStory10Interceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UserStory10Interceptor = TestBed.inject(UserStory10Interceptor);
    expect(interceptor).toBeTruthy();
  });
});
