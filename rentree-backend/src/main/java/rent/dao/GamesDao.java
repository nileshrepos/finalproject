package rent.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import rent.model.Games;

@Repository
public interface GamesDao extends JpaRepository<Games, Integer> {

}
