/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SharedPrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SearchManagementClient } from "../searchManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  SharedPrivateLinkResource,
  SharedPrivateLinkResourcesListByServiceNextOptionalParams,
  SharedPrivateLinkResourcesListByServiceOptionalParams,
  SharedPrivateLinkResourcesCreateOrUpdateOptionalParams,
  SharedPrivateLinkResourcesCreateOrUpdateResponse,
  SharedPrivateLinkResourcesGetOptionalParams,
  SharedPrivateLinkResourcesGetResponse,
  SharedPrivateLinkResourcesDeleteOptionalParams,
  SharedPrivateLinkResourcesListByServiceResponse,
  SharedPrivateLinkResourcesListByServiceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SharedPrivateLinkResources operations. */
export class SharedPrivateLinkResourcesImpl
  implements SharedPrivateLinkResources {
  private readonly client: SearchManagementClient;

  /**
   * Initialize a new instance of the class SharedPrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: SearchManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of all shared private link resources managed by the given service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    searchServiceName: string,
    options?: SharedPrivateLinkResourcesListByServiceOptionalParams
  ): PagedAsyncIterableIterator<SharedPrivateLinkResource> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      searchServiceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByServicePagingPage(
          resourceGroupName,
          searchServiceName,
          options
        );
      }
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    searchServiceName: string,
    options?: SharedPrivateLinkResourcesListByServiceOptionalParams
  ): AsyncIterableIterator<SharedPrivateLinkResource[]> {
    let result = await this._listByService(
      resourceGroupName,
      searchServiceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByServiceNext(
        resourceGroupName,
        searchServiceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByServicePagingAll(
    resourceGroupName: string,
    searchServiceName: string,
    options?: SharedPrivateLinkResourcesListByServiceOptionalParams
  ): AsyncIterableIterator<SharedPrivateLinkResource> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      searchServiceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Initiates the creation or update of a shared private link resource managed by the search service in
   * the given resource group.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   *                                      Azure Cognitive Search service within the specified resource group.
   * @param sharedPrivateLinkResource The definition of the shared private link resource to create or
   *                                  update.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    searchServiceName: string,
    sharedPrivateLinkResourceName: string,
    sharedPrivateLinkResource: SharedPrivateLinkResource,
    options?: SharedPrivateLinkResourcesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SharedPrivateLinkResourcesCreateOrUpdateResponse>,
      SharedPrivateLinkResourcesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SharedPrivateLinkResourcesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        searchServiceName,
        sharedPrivateLinkResourceName,
        sharedPrivateLinkResource,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Initiates the creation or update of a shared private link resource managed by the search service in
   * the given resource group.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   *                                      Azure Cognitive Search service within the specified resource group.
   * @param sharedPrivateLinkResource The definition of the shared private link resource to create or
   *                                  update.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    searchServiceName: string,
    sharedPrivateLinkResourceName: string,
    sharedPrivateLinkResource: SharedPrivateLinkResource,
    options?: SharedPrivateLinkResourcesCreateOrUpdateOptionalParams
  ): Promise<SharedPrivateLinkResourcesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      searchServiceName,
      sharedPrivateLinkResourceName,
      sharedPrivateLinkResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the details of the shared private link resource managed by the search service in the given
   * resource group.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   *                                      Azure Cognitive Search service within the specified resource group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    searchServiceName: string,
    sharedPrivateLinkResourceName: string,
    options?: SharedPrivateLinkResourcesGetOptionalParams
  ): Promise<SharedPrivateLinkResourcesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        searchServiceName,
        sharedPrivateLinkResourceName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Initiates the deletion of the shared private link resource from the search service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   *                                      Azure Cognitive Search service within the specified resource group.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    searchServiceName: string,
    sharedPrivateLinkResourceName: string,
    options?: SharedPrivateLinkResourcesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        searchServiceName,
        sharedPrivateLinkResourceName,
        options
      },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Initiates the deletion of the shared private link resource from the search service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   *                                      Azure Cognitive Search service within the specified resource group.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    searchServiceName: string,
    sharedPrivateLinkResourceName: string,
    options?: SharedPrivateLinkResourcesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      searchServiceName,
      sharedPrivateLinkResourceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a list of all shared private link resources managed by the given service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    searchServiceName: string,
    options?: SharedPrivateLinkResourcesListByServiceOptionalParams
  ): Promise<SharedPrivateLinkResourcesListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, searchServiceName, options },
      listByServiceOperationSpec
    );
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    searchServiceName: string,
    nextLink: string,
    options?: SharedPrivateLinkResourcesListByServiceNextOptionalParams
  ): Promise<SharedPrivateLinkResourcesListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, searchServiceName, nextLink, options },
      listByServiceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SharedPrivateLinkResource
    },
    201: {
      bodyMapper: Mappers.SharedPrivateLinkResource
    },
    202: {
      bodyMapper: Mappers.SharedPrivateLinkResource
    },
    204: {
      bodyMapper: Mappers.SharedPrivateLinkResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.sharedPrivateLinkResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId,
    Parameters.sharedPrivateLinkResourceName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedPrivateLinkResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId,
    Parameters.sharedPrivateLinkResourceName
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId,
    Parameters.sharedPrivateLinkResourceName
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
const listByServiceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/sharedPrivateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedPrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedPrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
