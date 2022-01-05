// Endpoints: output json format

// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  create: 'https://us-central1-easyflyer-d958b.cloudfunctions.net/app/api/create',
  readId: 'https://us-central1-easyflyer-d958b.cloudfunctions.net/app/api/read/',
  readAll: 'https://us-central1-easyflyer-d958b.cloudfunctions.net/app/api/read',
  update: 'https://us-central1-easyflyer-d958b.cloudfunctions.net/app/api/update/',
  delete: 'https://us-central1-easyflyer-d958b.cloudfunctions.net/app/api/delete/'
};
