export const APP_CONFIG = {
  appName: process.env.REACT_APP_NAME || "MockHero",
  appUrl: process.env.REACT_APP_BASE_URL || process.env.PUBLIC_URL,
  apiBaseUrl: process.env.REACT_APP_API_URL || "/api",
  apiAdapter: process.env.REACT_APP_API_ADAPTER || "mock-adapter",
  googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || ""
};
