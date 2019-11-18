package com.meghantojhipster.demo1.repository;

import com.meghantojhipster.demo1.domain.Authority;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends MongoRepository<Authority, String> {
}
