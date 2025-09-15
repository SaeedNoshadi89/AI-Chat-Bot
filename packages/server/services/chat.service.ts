import OpenAI from 'openai';
import { conversationRepository } from '../repositories/conversation.repository';

type ChatResponse = {
   id: string;
   message: string;
};
export const chatService = {
   async sendMessage(
      prompt: string,
      conversationId: string
   ): Promise<ChatResponse> {
      const client = new OpenAI({
         apiKey: process.env.OPENAI_API_KEY,
      });
      const response = await client.responses.create({
         model: 'gpt-4o-mini',
         input: prompt,
         temperature: 0.2,
         max_output_tokens: 100,
         previous_response_id:
            conversationRepository.getLastConversationId(conversationId),
      });

      conversationRepository.setLastConversationId(conversationId, response.id);
      return {
         id: response.id,
         message: response.output_text,
      };
   },
};
