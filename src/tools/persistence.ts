import { RootState } from "../redux/store";

export class StateLoader {
    key: string;
    constructor(key: string) {
        this.key = key;
    }
    loadState = (): RootState | undefined => {
        try {
          const serializedState = localStorage.getItem(this.key);
          if (serializedState === null) {
            return undefined;
          }
          return JSON.parse(serializedState);
        } catch (err) {
          return undefined;
        }
      };
      saveState = (state: RootState) => {
        try {
          const serializedState = JSON.stringify(state);
          localStorage.setItem(this.key, serializedState);
        } catch (err) {
          console.error(err);
        }
      };
}