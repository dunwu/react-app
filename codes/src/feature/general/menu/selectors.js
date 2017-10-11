import { createSelector } from 'reselect';

export const menuSelector = state => state.menu;

export const listSelector = createSelector(menuSelector, menu => (menu.list));

