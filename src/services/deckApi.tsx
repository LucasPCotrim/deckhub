import api from './api';

type filterParamsType = {
  name?: string;
};
export async function getDecks(token: string, filterParams?: filterParamsType) {
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

const deckApi = { getDecks, getDeckInfo };

export { deckApi };
