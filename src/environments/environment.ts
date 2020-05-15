// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseUrl: 'https://localhost:44335/api',
  appInsights: {
    instrumentationKey: '08eec091-3c9e-40df-9d0d-ea620a306b7b'
  },
  adalConfig: {
    tenant: 'c3e32f53-cb7f-4809-968d-1cc4ccc785fe',
    clientId: '6cfa100f-2672-4d75-ba56-bca4f852a0e7'
  }
};
