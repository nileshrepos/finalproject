package rent.Service;

import rent.model.Games;

public interface GamesInterface {
	public Games addGame(Games g);
	public Games updateGame(Games g);
	public boolean deleteGame(int gid);
	Games findById(int gameId);
}
