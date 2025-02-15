/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityInsights } from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets an incident comment.
 *
 * @summary Gets an incident comment.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-01-01-preview/examples/incidents/comments/GetIncidentCommentById.json
 */
async function getAnIncidentComment() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const incidentId = "73e01a99-5cd7-4139-a149-9f2736ff2ab5";
  const incidentCommentId = "4bb36b7b-26ff-4d1c-9cbe-0d8ab3da0014";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.incidentComments.get(
    resourceGroupName,
    workspaceName,
    incidentId,
    incidentCommentId
  );
  console.log(result);
}

getAnIncidentComment().catch(console.error);
