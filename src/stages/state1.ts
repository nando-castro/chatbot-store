import { storage } from "../storage";

export const initialStage = {
  exec({ from }: { from: any }) {
    storage[from].stage = 1;

    return "ð OlÃ¡, como vai? \n\nEu sou Tester, o *assistente virtual* da Store T. \n*Posso te ajudar?* ðââï¸ \n-----------------------------------\n1ï¸â£ - ```FAZER PEDIDO``` \n2ï¸â£ - ```FALAR COM ATENDENTE```";
  },
};
