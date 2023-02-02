import { create } from "venom-bot";

create({
  session: "store",
  multidevice: true,
  headless: false,
})
  .then((client) => start(client))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

function start(client: any) {
  client.onMessage((message: any) => {
    if (!message.isGroupMsg) {

        client.sendText(message.from, 'Bem vindo ao atendimento de Teste').then((result: any) => {
            console.log(result)
        }).catch((err: any) => {
            console.log(err)
        });
    }
  });
}
