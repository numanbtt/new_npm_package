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
import { ReferralQueriesListReferralPagination } from './referral-queries-list-referral-pagination';
import { ReferralQueriesReferralList } from './referral-queries-referral-list';
/**
 *
 * @export
 * @interface ReferralQueriesListQueryResult
 */
export interface ReferralQueriesListQueryResult {
    /**
     *
     * @type {ReferralQueriesListReferralPagination}
     * @memberof ReferralQueriesListQueryResult
     */
    'pagination': ReferralQueriesListReferralPagination;
    /**
     * Kelime eğitimlerinin listesini barındırır
     * @type {Array<ReferralQueriesReferralList>}
     * @memberof ReferralQueriesListQueryResult
     */
    'referralList': Array<ReferralQueriesReferralList>;
}
