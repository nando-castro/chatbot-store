import { storage } from "../storage";

export const initialStage = {
  exec({ from }: { from: any }) {
    storage[from].stage = 1;

    return "👋 Olá, como vai? \n\nEu sou Tester, o *assistente virtual* da Store T. \n*Posso te ajudar?* 🙋‍♂️ \n-----------------------------------\n1️⃣ - ```FAZER PEDIDO``` \n2️⃣ - ```FALAR COM ATENDENTE```";
  },
};
