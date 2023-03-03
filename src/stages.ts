import { initialStage } from './stages/state1';
import { storage } from "./storage";
export const stages = [
    {
        description: 'Welcome',
        stage: initialStage,
      },
];

export function getStage({ from }: { from: any }) {
  if (storage[from]) {
    return storage[from].stage;
  }
  storage[from] = {
    stage: 0,
    itens: [],
    address: "",
  };

  return storage[from].stage;
}
