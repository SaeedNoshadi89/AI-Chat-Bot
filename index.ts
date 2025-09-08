import concurrently, { Command } from 'concurrently';

concurrently([
   {
      name: 'client',
      cwd: 'packages/client',
      command: 'bun run dev',
      prefixColor: 'green',
   },
   {
      name: 'server',
      cwd: 'packages/server',
      command: 'bun run dev',
      prefixColor: 'red',
   },
]);
