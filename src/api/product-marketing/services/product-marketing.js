'use strict';

/**
 * product-marketing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-marketing.product-marketing');
