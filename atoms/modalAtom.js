import { atom } from 'recoil';

// set modal default state with recoil
export const modalState = atom({
    key: 'modalState',
    default: false,
});
