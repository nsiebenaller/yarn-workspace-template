import fp from "fastify-plugin";
import { PrismaClient } from "@prisma/client";

export default fp(async (fastify) => {
  fastify.decorate("prisma", new PrismaClient());
});
