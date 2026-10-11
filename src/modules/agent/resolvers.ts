import { chat } from './services/chat';
import { ping } from './services/ping';
const resolvers = {
  Mutation: {
    chat: async (_: unknown, { id }: { id: string }) => chat(id),
    ping: async (_: unknown, { id }: { id: string }) => ping(id),
  },
};
export default resolvers;
