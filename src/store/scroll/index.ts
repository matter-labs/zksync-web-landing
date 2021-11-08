import { GetterTree, MutationTree } from "vuex/types";
import { RootState } from "@/store";

export const state = () => {
  return {
    lastScroll: false as false | number,
    lastPath: "" as string
  };
};

export type ScrollModuleState = ReturnType<typeof state>;

export const mutations: MutationTree<ScrollModuleState> = {
  setLastScroll(state: { lastScroll: boolean | number }, lastScroll: number) {
    if (!lastScroll) {
      state.lastScroll = false;
    } else {
      state.lastScroll = lastScroll;
    }
  },
  setLastPath(state: { lastPath: string }, lastPath: string) {
    state.lastPath = lastPath;
  }
};

export const getters: GetterTree<ScrollModuleState, RootState> = {
  getLastScroll(state: { lastScroll: boolean | number }): boolean | number {
    return state.lastScroll;
  },
  getLastPath(state: { lastPath: string }): string {
    return state.lastPath;
  }
};
