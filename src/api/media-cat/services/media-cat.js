'use strict';

/**
 * media-cat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::media-cat.media-cat');
