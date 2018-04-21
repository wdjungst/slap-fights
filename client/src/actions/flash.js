export const SET_FLASH = 'SET_FLASH';
export const CLEAR_FLASH = 'CLEAR_FLASH';

export const setFlash = (message, color) => {
  return { type: SET_FLASH, message, color };
};

export const clearFlash = () => {
  return { type: CLEAR_FLASH };
};
