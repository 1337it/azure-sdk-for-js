/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get recoverable sql pools for workspace managed sql server.
 *
 * @summary Get recoverable sql pools for workspace managed sql server.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/GetWorkspaceManagedSqlServerRecoverableSqlPool.json
 */
async function getRecoverableSqlPoolsForTheServer() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "wsg-7398";
  const workspaceName = "testWorkspace";
  const sqlPoolName = "recoverableSqlpools-1235";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.workspaceManagedSqlServerRecoverableSqlPools.get(
    resourceGroupName,
    workspaceName,
    sqlPoolName
  );
  console.log(result);
}

getRecoverableSqlPoolsForTheServer().catch(console.error);
