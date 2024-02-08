import { create } from 'zustand';
import { User } from '../types';

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  updateUser: (
    id: number,
    updates: Partial<Pick<User, 'userName' | 'userEmail'>>,
  ) => void;
  removeUser: (id: number) => void;
}

export const useStore = create<UserState>(set => ({
  user: null,
  setUser: (user: User | null) => set(() => ({ user })),
  updateUser: (id, updates) =>
    set(state => {
      if (state.user?.id === id) {
        return { ...state, user: { ...state.user, ...updates } };
      }
      return state;
    }),
  removeUser: () => set(() => ({ user: null })),
}));

export default useStore;
