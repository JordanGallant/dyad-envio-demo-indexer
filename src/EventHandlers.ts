/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Dyad,
  Dyad_Approval,
  Dyad_Transfer,
} from "generated";

Dyad.Approval.handler(async ({ event, context }) => {
  const entity: Dyad_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    amount: event.params.amount,
  };

  context.Dyad_Approval.set(entity);
});

Dyad.Transfer.handler(async ({ event, context }) => {
  const entity: Dyad_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    amount: event.params.amount,
  };

  context.Dyad_Transfer.set(entity);
});
