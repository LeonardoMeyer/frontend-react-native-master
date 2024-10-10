import { create } from "zustand"

export const useAccountStore = create((set) => ({
  accounts: [],

  addAccount: (newAccount) => set((state) => ({ accounts: [...state.accounts, newAccount] })),
  setAccounts: (newAccounts) => set({ accounts: newAccounts }),
}))
