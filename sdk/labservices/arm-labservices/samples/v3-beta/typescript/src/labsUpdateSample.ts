/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { LabUpdate, LabServicesClient } from "@azure/arm-labservices";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Operation to update a lab resource.
 *
 * @summary Operation to update a lab resource.
 * x-ms-original-file: specification/labservices/resource-manager/Microsoft.LabServices/preview/2021-11-15-preview/examples/Labs/patchLab.json
 */
async function patchLab() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testrg123";
  const labName = "testlab";
  const body: LabUpdate = { securityProfile: { openAccess: "Enabled" } };
  const credential = new DefaultAzureCredential();
  const client = new LabServicesClient(credential, subscriptionId);
  const result = await client.labs.beginUpdateAndWait(
    resourceGroupName,
    labName,
    body
  );
  console.log(result);
}

patchLab().catch(console.error);
