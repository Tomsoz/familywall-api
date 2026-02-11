import { config } from "dotenv";
import fs from "fs";
import Client from "./client.js";

config();

const { email, password } = process.env;

const run = async (): Promise<void> => {
  if (!email || !password) {
    throw new Error(
      "Missing required environment variables: email and password"
    );
  }

  const client = new Client();
  await client.login(email, password);
  const family = await client.getFamily();
  const events = await family.getCalendarEvents();
};

run();
