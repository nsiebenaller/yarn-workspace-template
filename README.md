# workspaces-demo-2

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
