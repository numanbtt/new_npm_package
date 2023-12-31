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
import { TeacherQueriesTrailerVideo } from './teacher-queries-trailer-video';

/**
 * 
 * @export
 * @interface TeacherQueriesTeacherListItem
 */
export interface TeacherQueriesTeacherListItem {
    /**
     * 
     * @type {number}
     * @memberof TeacherQueriesTeacherListItem
     */
    'teacherId': number;
    /**
     * 
     * @type {string}
     * @memberof TeacherQueriesTeacherListItem
     */
    'teacherGuid'?: string;
    /**
     * 
     * @type {string}
     * @memberof TeacherQueriesTeacherListItem
     */
    'avatar1X': string;
    /**
     * 
     * @type {string}
     * @memberof TeacherQueriesTeacherListItem
     */
    'avatar2X': string;
    /**
     * 
     * @type {string}
     * @memberof TeacherQueriesTeacherListItem
     */
    'avatar3X': string;
    /**
     * 
     * @type {string}
     * @memberof TeacherQueriesTeacherListItem
     */
    'avatar4X': string;
    /**
     * Girilebilecek değerler:  NATIVE_US,  NATIVE_BRITISH,  TURKISH,  OTHER
     * @type {string}
     * @memberof TeacherQueriesTeacherListItem
     */
    'accentType': string;
    /**
     * 
     * @type {string}
     * @memberof TeacherQueriesTeacherListItem
     */
    'name': string;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherQueriesTeacherListItem
     */
    'isOnline': boolean;
    /**
     * 
     * @type {number}
     * @memberof TeacherQueriesTeacherListItem
     */
    'rate': number;
    /**
     * 
     * @type {string}
     * @memberof TeacherQueriesTeacherListItem
     */
    'description': string;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherQueriesTeacherListItem
     */
    'availableForFreeCall': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherQueriesTeacherListItem
     */
    'hasFreeAppointmentRanges': boolean;
    /**
     * 
     * @type {TeacherQueriesTrailerVideo}
     * @memberof TeacherQueriesTeacherListItem
     */
    'trailerVideo': TeacherQueriesTrailerVideo;
    /**
     * 
     * @type {number}
     * @memberof TeacherQueriesTeacherListItem
     */
    'totalLessonCount'?: number | null;
}

