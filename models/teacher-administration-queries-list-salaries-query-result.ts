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
import { TeacherAdministrationQueriesTeacherSalariesListItem } from './teacher-administration-queries-teacher-salaries-list-item';
// May contain unused imports in some cases
// @ts-ignore
import { TeacherAdministrationQueriesTeachersSalariesPagination } from './teacher-administration-queries-teachers-salaries-pagination';

/**
 * 
 * @export
 * @interface TeacherAdministrationQueriesListSalariesQueryResult
 */
export interface TeacherAdministrationQueriesListSalariesQueryResult {
    /**
     * 
     * @type {TeacherAdministrationQueriesTeachersSalariesPagination}
     * @memberof TeacherAdministrationQueriesListSalariesQueryResult
     */
    'pagination': TeacherAdministrationQueriesTeachersSalariesPagination;
    /**
     * 
     * @type {Array<TeacherAdministrationQueriesTeacherSalariesListItem>}
     * @memberof TeacherAdministrationQueriesListSalariesQueryResult
     */
    'teachers': Array<TeacherAdministrationQueriesTeacherSalariesListItem>;
}

