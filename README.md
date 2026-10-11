# a-disposable-repo

A throwaway fixture for Dodona's dev environment. Argus indexes it to prove
builds, `as_of <repo>@<sha>` and flow behaviour hashes end to end. It holds two
GraphQL mutations (`chat`, `ping`) whose services call Bedrock AgentCore, which
Argus roots as two flows. Nothing here runs. Safe to delete when the demo is done.

Used for the T9 done-when on 2026-10-11: a push should trigger one coalesced argus.build.
