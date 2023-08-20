import * as signalR from "@microsoft/signalr";
import { useEffect } from "react";

export default function Home() {
  const init = async () => {
    const apiBaseUrl = "http://localhost:7071";

    const connection = new signalR.HubConnectionBuilder()
      .withUrl(apiBaseUrl + "/api")
      .configureLogging(signalR.LogLevel.Information)
      .build();
      
    await connection.start();
    connection.on("newMessage", (message) => {
      console.log(`newMessage: ${message}`);
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <h1>Hello Realtime Update</h1>
    </>
  );
}
