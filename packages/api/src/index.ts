import fastify from "fastify";
import autoLoad from "fastify-autoload";
import { join } from "path";
import { config } from "dotenv";
import { green } from "chalk";

config();

const PORT = process.env.PORT || "1234";
const HOST = "0.0.0.0";

export async function startServer() {
  const server = fastify();

  server.register(autoLoad, { dir: join(__dirname, "routes") });
  server.register(autoLoad, { dir: join(__dirname, "services") });
  server.register(import("fastify-sensible"));

  await server.ready();

  console.log(`Server listening on... ${green(`${HOST}:${PORT}`)} 🚀`);

  try {
    await server.listen(PORT, HOST);
  } catch (err) {
    cleanup(err);
  }

  process.on("unhandledRejection", cleanup);

  function cleanup(err: unknown) {
    server.log.error(err);
    server.prisma.$disconnect();
    process.exit(1);
  }
}

startServer();
