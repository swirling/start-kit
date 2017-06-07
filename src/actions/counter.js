import { createAction } from 'redux-actions';

export const addCount = createAction('ADD_COUNT');
export const loadCount = createAction('LOAD_COUNT', async () => {
  const rs = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(11111);
    }, 1100);
  });
  return rs;
});
