import { create } from "venom-bot";
import { getStage, stages } from "./stages";

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
      const currentStage = getStage({ from: message.from });

      const messageResponse = stages[currentStage].stage.exec({
        from: message.from,
      });

      if (messageResponse) {
        client
          .sendText(message.from, messageResponse)
          .then((result: any) => {
            console.log(message.body)
          })
          .catch((err: any) => {
            console.log(err);
          });
      }
    }
  });
}
