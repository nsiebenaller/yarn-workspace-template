# yarn-workspace-template

yarn 2 workspaces monorepo template with Fastify, Prisma, Postgresql in Docker

## Commands

Install dependencies

```
yarn
```

Run dev locally (requires postgres running)

```
yarn dev
```

Run in docker

```
yarn docker:start
```

Stop in docker

```
yarn docker:stop
```

Prisma commands

```
yarn workspace api prisma generate
yarn workspace api prisma db pull
yarn workspace api prisma migrate dev
```
