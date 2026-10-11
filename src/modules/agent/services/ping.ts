import { InvokeAgentRuntimeCommand } from '@aws-sdk/client-bedrock-agentcore';
export function ping(id: string) {
  return new InvokeAgentRuntimeCommand({ agentRuntimeArn: 'literal-ping-arn', payload: id });
}
