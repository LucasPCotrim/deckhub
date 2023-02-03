import api from './api';

export async function getDecks(token: string) {
  return api.get('/decks/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

const deckApi = { getDecks };

export { deckApi };
