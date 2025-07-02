
interface Game {
  id: number;
  title: string;
  rating: number;
  players: string;
  time: string;
  difficulty: string;
  image: string;
  description: string;
  category: string;
}

export const useGameFiltering = () => {
  const matchesPlayerCount = (game: Game, playerCount: string): boolean => {
    if (playerCount === '전체') return true;
    
    const playerNumbers = game.players.match(/\d+/g);
    if (!playerNumbers) return false;
    
    const minPlayers = parseInt(playerNumbers[0]);
    const maxPlayers = playerNumbers.length > 1 ? parseInt(playerNumbers[1]) : minPlayers;
    
    switch (playerCount) {
      case '2명':
        return minPlayers <= 2 && maxPlayers >= 2;
      case '3명':
        return minPlayers <= 3 && maxPlayers >= 3;
      case '4명':
        return minPlayers <= 4 && maxPlayers >= 4;
      case '5명':
        return minPlayers <= 5 && maxPlayers >= 5;
      case '6명+':
        return maxPlayers >= 6;
      default:
        return true;
    }
  };

  const filterGames = (
    games: Game[],
    searchTerm: string,
    selectedCategory: string,
    selectedDifficulty: string,
    selectedPlayerCount: string
  ): Game[] => {
    return games.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           game.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '전체' || game.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === '전체' || game.difficulty === selectedDifficulty;
      const matchesPlayers = matchesPlayerCount(game, selectedPlayerCount);
      
      return matchesSearch && matchesCategory && matchesDifficulty && matchesPlayers;
    });
  };

  return { filterGames };
};
