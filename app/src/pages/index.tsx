import * as signalR from "@microsoft/signalr";
import { useEffect } from "react";

const init = async () => {
  // const apiBaseUrl = "https://krathu-game-api.azurewebsites.net";
  const apiBaseUrl = "http://localhost:7071";

  const connection = new signalR.HubConnectionBuilder()
    .withUrl(apiBaseUrl + "/api")
    .configureLogging(signalR.LogLevel.Information)
    .build();

    try {
      await connection.start();
    } catch (err) {
      console.log( err);
    }
    
  connection.on("newMessage", (message) => {
    console.log(`newMessage: ${message}`);
  });
};

init();

export default function Home() {
 
  // useEffect(() => {

  // }, []);

  return (
    <>
      <h1>Hello Realtime Update</h1>
    </>
  );
}
