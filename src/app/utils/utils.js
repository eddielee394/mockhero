import DateFnsAdapter from "@date-io/date-fns";
import { isToday } from "date-fns";

/**
 * generates the star rating label
 * @param starRating {number}
 * @returns {string}
 */
export function generateStarRatingLabel(starRating) {
  let text = "";

  switch (true) {
    case starRating < 2:
      text = "Not Recommended";
      break;
    case starRating >= 2 && starRating <= 3:
      text = "Ok";
      break;
    case starRating > 3 && starRating < 4:
      text = "Great";
      break;
    case starRating > 4:
      text = "Excellent";
      break;
  }

  return text;
}

/**
 * calculates the display rate
 * @private
 * @param rate {number}
 * @returns {number}
 */
function calculateDisplayRate(rate) {
  return rate / 100;
}

/**
 * generates a display value for the spot rate
 * @param rate {number}
 * @returns {string|number}
 */
export function generateSpotDisplayRate(rate) {
  const total = calculateDisplayRate(rate);

  if (total === 0 || isNaN(total)) {
    return "N/A";
  }

  return total;
}

/**
 * formats the date using the date-fns library
 * @param dateTime {string}
 * @param formatter {string}
 * @param today {boolean}
 * @returns {string}
 */
export function formatDate(dateTime, formatter, today = false) {
  const dateFns = new DateFnsAdapter();
  const parsedDate = new Date(dateTime);

  if (today && isToday(parsedDate)) {
    return "Today";
  }

  return dateFns.format(parsedDate, formatter);
}

/**
 *
 * @param url {string}
 * @param width {number|string}
 * @param height {number|string}
 * @param quality {number|string}
 * @returns {string}
 */
export function parseImageUrlTemplate(
  url,
  width = 400,
  height = 200,
  quality = 50
) {
  let parsedUrl = url.replace("{{WIDTH}}", width);
  parsedUrl = parsedUrl.replace("{{HEIGHT}}", height);
  parsedUrl = parsedUrl.replace("{{QUALITY}}", quality);

  return parsedUrl;
}

/**
 * Sets the configured routes
 * @private
 * @param config {Object}
 * @returns {*[]}
 */
function setRoutes(config) {
  let routes = [...config.routes];

  if (config.settings || config.auth) {
    routes = routes.map((route) => {
      return {
        ...route,
        settings: { ...config.settings, ...route.settings },
      };
    });
  }

  return [...routes];
}

/**
 * Maps over the configured routes
 * @param configs {array}
 * @returns {[]}
 */
export function generateRoutesFromConfigs(configs) {
  let allRoutes = [];
  configs.forEach((config) => {
    allRoutes = [...allRoutes, ...setRoutes(config)];
  });

  return allRoutes;
}
