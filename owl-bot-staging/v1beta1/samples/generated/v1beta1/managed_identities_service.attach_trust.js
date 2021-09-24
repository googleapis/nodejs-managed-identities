// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main() {
  // [START managedidentities_v1beta1_generated_ManagedIdentitiesService_AttachTrust_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The resource domain name, project name and location using the form:
   *  `projects/{project_id}/locations/global/domains/{domain_name}`
   */
  // const name = 'abc123'
  /**
   *  The domain trust resource.
   */
  // const trust = ''

  // Imports the Managedidentities library
  const {ManagedIdentitiesServiceClient} = require('@google-cloud/managed-identities').v1beta1;

  // Instantiates a client
  const managedidentitiesClient = new ManagedIdentitiesServiceClient();

  async function attachTrust() {
    // Construct request
    const request = {
    };

    // Run request
    const [operation] = await managedidentitiesClient.attachTrust(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  attachTrust();
  // [END managedidentities_v1beta1_generated_ManagedIdentitiesService_AttachTrust_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
