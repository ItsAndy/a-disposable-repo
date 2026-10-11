import { InvokeAgentRuntimeCommand } from '@aws-sdk/client-bedrock-agentcore';
export function chat(id: string) {
  return new InvokeAgentRuntimeCommand({ agentRuntimeArn: id, payload: id });
}
