// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START managedidentities_v1beta1_generated_ManagedIdentitiesService_ListDomains_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the domain location using the form:
   *  `projects/{project_id}/locations/global`
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of items to return.
   *  If not specified, a default value of 1000 will be used.
   *  Regardless of the page_size value, the response may include a partial list.
   *  Callers should rely on a response's
   *  next_page_token google.cloud.managedidentities.v1beta1.ListDomainsResponse.next_page_token 
   *  to determine if there are additional results to list.
   */
  // const pageSize = 1234
  /**
   *  The `next_page_token` value returned from a previous ListDomainsRequest
   *  request, if any.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. A filter specifying constraints of a list operation.
   *  For example, `Domain.fqdn="mydomain.myorginization"`.
   */
  // const filter = 'abc123'
  /**
   *  Optional. Specifies the ordering of results. See
   *  Sorting
   *  order (https://cloud.google.com/apis/design/design_patterns#sorting_order)
   *  for more information.
   */
  // const orderBy = 'abc123'

  // Imports the Managedidentities library
  const {ManagedIdentitiesServiceClient} = require('@google-cloud/managed-identities').v1beta1;

  // Instantiates a client
  const managedidentitiesClient = new ManagedIdentitiesServiceClient();

  async function callListDomains() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await managedidentitiesClient.listDomainsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListDomains();
  // [END managedidentities_v1beta1_generated_ManagedIdentitiesService_ListDomains_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
