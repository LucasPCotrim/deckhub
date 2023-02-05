import api from './api';

export async function getCards(token: string) {
  return api.get('/cards/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getCardInfo(token: string, cardId: number) {
  return api.get(`/cards/${cardId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

const cardApi = { getCards, getCardInfo };

export { cardApi };
