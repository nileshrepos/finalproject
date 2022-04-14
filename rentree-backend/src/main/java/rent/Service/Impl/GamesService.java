package rent.Service.Impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rent.Service.GamesInterface;
import rent.dao.GamesDao;
import rent.model.Games;

@Service
public class GamesService implements GamesInterface{
	
	@Autowired
	GamesDao gamesdao;
	
	public Games addGame(Games g) {
		// Adding Game received via body
		System.out.println("in service");
		Games savedGame=gamesdao.save(g);
		if(savedGame != null)
			return savedGame;
		else
		return null;
	}

	
	public Games updateGame(Games g) {
		// To update existing game
		
		Games updated=null;
		Games finalGame=null;
		try {
		Optional<Games> foundData=gamesdao.findById(g.getGid());
		if(foundData != null) {
			updated=foundData.get();
			updated.setName(g.getName());
			updated.setPrice(g.getPrice());
			finalGame=gamesdao.save(g);
			
		}}catch(Exception e) {
			e.printStackTrace();
		}
		return finalGame;
	}

	
	public boolean deleteGame(int gid) {
		boolean flag=false;
		try {
			gamesdao.deleteById(gid);
			flag=true;
		}catch(Exception e) {e.printStackTrace();}
	
		return flag;
	}

	
	public Games findById(int gameId) {
		Games foundGame;
		Optional<Games> searchedGame= gamesdao.findById(gameId);
		if(searchedGame.isPresent()) {
			foundGame=searchedGame.get();
			return foundGame;
		}
		return null;
	}

}
