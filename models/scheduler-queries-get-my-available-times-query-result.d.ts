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
import { SchedulerQueriesAvailableDate } from './scheduler-queries-available-date';
/**
 *
 * @export
 * @interface SchedulerQueriesGetMyAvailableTimesQueryResult
 */
export interface SchedulerQueriesGetMyAvailableTimesQueryResult {
    /**
     * Öğretmenin önceden işaretlemiş olduğu uygun gün ve saatlerini barındırır.
     * @type {Array<SchedulerQueriesAvailableDate>}
     * @memberof SchedulerQueriesGetMyAvailableTimesQueryResult
     */
    'availableDates': Array<SchedulerQueriesAvailableDate>;
}
