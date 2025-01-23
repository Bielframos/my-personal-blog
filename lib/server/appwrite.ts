import { Client, Databases, Storage } from "node-appwrite"

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT as string)
    .setKey(process.env.NEXT_APPWRITE_KEY as string)

  return {
    get databases() {
      return new Databases(client)
    },
    get storage() {
      return new Storage(client)
    },
  }
}
