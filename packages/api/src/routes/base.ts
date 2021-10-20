import { FastifyPluginAsync, FastifyRequest } from "fastify";
import { add } from "common";

const baseRoutes: FastifyPluginAsync = async (
  fastify,
  _opts
): Promise<void> => {
  fastify.get(
    "/",
    async (
      request: FastifyRequest<{ Querystring: { name: string } }>,
      reply
    ) => {
      const { name = "Stranger!" } = request.query;
      const num = add(1, 2);
      reply.send(`Hello ${name} 👋 I can access the common package '${num}'`);
    }
  );
  fastify.get("/accounts", async (request, reply) => {
    try {
      const count = await fastify.prisma.accounts.count();
      reply.send({ number_of_accounts: count || 0 });
    } catch (err) {
      console.log(err);
      reply.send(err);
    }
  });
};

export default baseRoutes;
