import api from './api';

type filterParamsType = {
  name?: string;
};
export async function getCards(token: string, filterParams?: filterParamsType) {
  let url = '/cards/';
  if (filterParams?.name) {
    url = url.concat(`?name=${filterParams.name}`);
  }
  return api.get(url, {
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
