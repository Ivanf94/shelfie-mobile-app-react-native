import { Client, Account, Avatars, Databases } from "react-native-appwrite";

export const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("68c73613001ab12ab548")
  .setPlatform("dev.netninja.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
