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
import { AdvancerCommonReferralStatus } from './advancer-common-referral-status';

/**
 * 
 * @export
 * @interface ReferralQueriesReferralList
 */
export interface ReferralQueriesReferralList {
    /**
     * 
     * @type {number}
     * @memberof ReferralQueriesReferralList
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof ReferralQueriesReferralList
     */
    'code'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReferralQueriesReferralList
     */
    'title'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReferralQueriesReferralList
     */
    'description'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReferralQueriesReferralList
     */
    'discount'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ReferralQueriesReferralList
     */
    'startDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReferralQueriesReferralList
     */
    'endDate'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReferralQueriesReferralList
     */
    'studentLimit'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ReferralQueriesReferralList
     */
    'availedLimit'?: number | null;
    /**
     * 
     * @type {AdvancerCommonReferralStatus}
     * @memberof ReferralQueriesReferralList
     */
    'status'?: AdvancerCommonReferralStatus;
}



