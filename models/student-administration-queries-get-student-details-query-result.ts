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



/**
 * 
 * @export
 * @interface StudentAdministrationQueriesGetStudentDetailsQueryResult
 */
export interface StudentAdministrationQueriesGetStudentDetailsQueryResult {
    /**
     * 
     * @type {number}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'metadataId': number;
    /**
     * 
     * @type {number}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'studentId': number;
    /**
     * 
     * @type {string}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'studentGuid': string;
    /**
     * 
     * @type {string}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'phoneNumber': string;
    /**
     * 
     * @type {string}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'email': string;
    /**
     * 
     * @type {boolean}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'isAvatarApproved': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'isBanned': boolean;
    /**
     * 
     * @type {string}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'banReason'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'bannedAt'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'banHeldReason'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'banHeldAt'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'isPremium': boolean;
    /**
     * 
     * @type {string}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'avatar1X': string;
    /**
     * 
     * @type {string}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'avatar2X': string;
    /**
     * 
     * @type {string}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'avatar3X': string;
    /**
     * 
     * @type {string}
     * @memberof StudentAdministrationQueriesGetStudentDetailsQueryResult
     */
    'avatar4X': string;
}

