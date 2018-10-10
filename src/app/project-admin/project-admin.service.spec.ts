import { TestBed } from '@angular/core/testing';

import { ProjectAdminService } from './project-admin.service';

describe('ProjectAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectAdminService = TestBed.get(ProjectAdminService);
    expect(service).toBeTruthy();
  });
});
