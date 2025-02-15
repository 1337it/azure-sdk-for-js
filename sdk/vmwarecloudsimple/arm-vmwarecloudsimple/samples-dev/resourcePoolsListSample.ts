/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { VMwareCloudSimple } from "@azure/arm-vmwarecloudsimple";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Returns list of resource pools in region for private cloud
 *
 * @summary Returns list of resource pools in region for private cloud
 * x-ms-original-file: specification/vmwarecloudsimple/resource-manager/Microsoft.VMwareCloudSimple/stable/2019-04-01/examples/ListResourcePools.json
 */
async function listResourcePools() {
  const subscriptionId = "{subscription-id}";
  const regionId = "westus2";
  const pcName = "myPrivateCloud";
  const credential = new DefaultAzureCredential();
  const client = new VMwareCloudSimple(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.resourcePools.list(regionId, pcName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listResourcePools().catch(console.error);
