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
import { AdministratorAdministrationQueriesAdministratorList } from './administrator-administration-queries-administrator-list';
// May contain unused imports in some cases
// @ts-ignore
import { AdministratorAdministrationQueriesListAdministratorsPagination } from './administrator-administration-queries-list-administrators-pagination';

/**
 * 
 * @export
 * @interface AdministratorAdministrationQueriesListQueryResult
 */
export interface AdministratorAdministrationQueriesListQueryResult {
    /**
     * 
     * @type {AdministratorAdministrationQueriesListAdministratorsPagination}
     * @memberof AdministratorAdministrationQueriesListQueryResult
     */
    'pagination': AdministratorAdministrationQueriesListAdministratorsPagination;
    /**
     * Sistem yöneticilerinin listesini barındırır
     * @type {Array<AdministratorAdministrationQueriesAdministratorList>}
     * @memberof AdministratorAdministrationQueriesListQueryResult
     */
    'administratorList': Array<AdministratorAdministrationQueriesAdministratorList>;
}

