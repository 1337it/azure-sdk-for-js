/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Operation to delete a lab resource.
 *
 * @summary Operation to delete a lab resource.
 * x-ms-original-file: specification/labservices/resource-manager/Microsoft.LabServices/preview/2021-11-15-preview/examples/Labs/deleteLab.json
 */
const { LabServicesClient } = require("@azure/arm-labservices");
const { DefaultAzureCredential } = require("@azure/identity");

async function deleteLab() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testrg123";
  const labName = "testlab";
  const credential = new DefaultAzureCredential();
  const client = new LabServicesClient(credential, subscriptionId);
  const result = await client.labs.beginDeleteAndWait(resourceGroupName, labName);
  console.log(result);
}

deleteLab().catch(console.error);
