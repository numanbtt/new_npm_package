/* tslint:disable */
/* eslint-disable */
/**
 * Advancer
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.104
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { PromotionAdministrationQueriesDiscountsListItem } from './promotion-administration-queries-discounts-list-item';
// May contain unused imports in some cases
// @ts-ignore
import { PromotionAdministrationQueriesListDiscountsPagination } from './promotion-administration-queries-list-discounts-pagination';

/**
 * 
 * @export
 * @interface PromotionAdministrationQueriesListDiscountsQueryResult
 */
export interface PromotionAdministrationQueriesListDiscountsQueryResult {
    /**
     * 
     * @type {PromotionAdministrationQueriesListDiscountsPagination}
     * @memberof PromotionAdministrationQueriesListDiscountsQueryResult
     */
    'pagination': PromotionAdministrationQueriesListDiscountsPagination;
    /**
     * 
     * @type {Array<PromotionAdministrationQueriesDiscountsListItem>}
     * @memberof PromotionAdministrationQueriesListDiscountsQueryResult
     */
    'discountsList': Array<PromotionAdministrationQueriesDiscountsListItem>;
}
