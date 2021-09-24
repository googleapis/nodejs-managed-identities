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
  // [START managedidentities_v1beta1_generated_ManagedIdentitiesService_CreateMicrosoftAdDomain_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The resource project name and location using the form:
   *  `projects/{project_id}/locations/global`
   */
  // const parent = 'abc123'
  /**
   *  A domain name, e.g. mydomain.myorg.com, with the following restrictions:
   *   * Must contain only lowercase letters, numbers, periods and hyphens.
   *   * Must start with a letter.
   *   * Must contain between 2-64 characters.
   *   * Must end with a number or a letter.
   *   * Must not start with period.
   *   * First segement length (mydomain form example above) shouldn't exceed
   *     15 chars.
   *   * The last segment cannot be fully numeric.
   *   * Must be unique within the customer project.
   */
  // const domainName = 'abc123'
  /**
   *  A Managed Identity domain resource.
   */
  // const domain = ''

  // Imports the Managedidentities library
  const {ManagedIdentitiesServiceClient} = require('@google-cloud/managed-identities').v1beta1;

  // Instantiates a client
  const managedidentitiesClient = new ManagedIdentitiesServiceClient();

  async function createMicrosoftAdDomain() {
    // Construct request
    const request = {
    };

    // Run request
    const [operation] = await managedidentitiesClient.createMicrosoftAdDomain(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  createMicrosoftAdDomain();
  // [END managedidentities_v1beta1_generated_ManagedIdentitiesService_CreateMicrosoftAdDomain_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
