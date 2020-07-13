// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// SERVER_URL: "https://movilrepuestosproduccion.appspot.com", - PRODUCCCION
// SERVER_URL: "https://movilrepuestos-199902.appspot.com", -  DESARROLLO
export const environment = {
	production: false,
	SERVER_URL: "https://movilrepuestos-199902.appspot.com",
	API_KEY: "PQMGj3giNnq4jy9DT5p593uNolu5dW9",
	RECAPTCHA_SITE_KEY: "6Lciuq0UAAAAACA6mxOQ8uagLYve_41i3Lxhbryc",
	firebase: {
		apiKey: "AIzaSyCIyp86imCiW3DnBZnZse0pLuuVTC6geIA",
		authDomain: "notificationesmovilrepuestos.firebaseapp.com",
		databaseURL: "https://notificationesmovilrepuestos.firebaseio.com",
		projectId: "notificationesmovilrepuestos",
		storageBucket: "",
		messagingSenderId: "350383060102"
	}
};