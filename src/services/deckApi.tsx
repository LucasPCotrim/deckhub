import api from './api';

export async function getDecks(token: string) {
  return api.get('/decks/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getDeckInfo(token: string, deckId: number) {
  return api.get(`/decks/${deckId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

const deckApi = { getDecks, getDeckInfo };

export { deckApi };
