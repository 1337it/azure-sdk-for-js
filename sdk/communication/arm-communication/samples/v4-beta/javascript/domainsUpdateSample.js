/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CommunicationServiceManagementClient } = require("@azure/arm-communication");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Operation to update an existing Domains resource.
 *
 * @summary Operation to update an existing Domains resource.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2021-10-01-preview/examples/domains/update.json
 */
async function updateDomainsResource() {
  const subscriptionId = "12345";
  const resourceGroupName = "MyResourceGroup";
  const emailServiceName = "MyEmailServiceResource";
  const domainName = "mydomain.com";
  const parameters = {
    userEngagementTracking: "Enabled",
    validSenderUsernames: { info: "MyDomain Info", alerts: "MyDomain Alerts" },
  };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(credential, subscriptionId);
  const result = await client.domains.beginUpdateAndWait(
    resourceGroupName,
    emailServiceName,
    domainName,
    parameters
  );
  console.log(result);
}

updateDomainsResource().catch(console.error);
