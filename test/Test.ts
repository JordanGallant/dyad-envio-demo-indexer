import assert from "assert";
import { 
  TestHelpers,
  Dyad_Approval
} from "generated";
const { MockDb, Dyad } = TestHelpers;

describe("Dyad contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Dyad contract Approval event
  const event = Dyad.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Dyad_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Dyad.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualDyadApproval = mockDbUpdated.entities.Dyad_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedDyadApproval: Dyad_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      amount: event.params.amount,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualDyadApproval, expectedDyadApproval, "Actual DyadApproval should be the same as the expectedDyadApproval");
  });
});
