import api from './api';

type FilterParamsType = {
  name?: string;
};
export async function getDecks(token: string, filterParams?: FilterParamsType) {
  let url = '/decks/';
  if (filterParams?.name) {
    url = url.concat(`?name=${filterParams.name}`);
  }
  return api.get(url, {
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

type CreateDeckBodyParams = {
  name: string;
  image: string;
  format: string;
  cards: { id: number; name: string; amount: number }[];
};
export async function createDeck(token: string, body: CreateDeckBodyParams) {
  return api.post('/decks', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

const deckApi = { getDecks, getDeckInfo, createDeck };

export { deckApi };
