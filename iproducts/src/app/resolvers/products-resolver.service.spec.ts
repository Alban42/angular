import { TestBed } from '@angular/core/testing';

import { ProductResolver } from './products-resolver.service';

describe('ProductsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductResolver = TestBed.get(ProductResolver);
    expect(service).toBeTruthy();
  });
});
