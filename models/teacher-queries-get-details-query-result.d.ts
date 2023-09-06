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
import { TeacherQueriesFreeAppointmentRange } from './teacher-queries-free-appointment-range';
import { TeacherQueriesSpecalities } from './teacher-queries-specalities';
import { TeacherQueriesTrailerVideo } from './teacher-queries-trailer-video';
/**
 *
 * @export
 * @interface TeacherQueriesGetDetailsQueryResult
 */
export interface TeacherQueriesGetDetailsQueryResult {
    /**
     *
     * @type {number}
     * @memberof TeacherQueriesGetDetailsQueryResult
     */
    'teacherId': number;
    /**
     *
     * @type {string}
     * @memberof TeacherQueriesGetDetailsQueryResult
     */
    'teacherGuid'?: string;
    /**
     *
     * @type {string}
     * @memberof TeacherQueriesGetDetailsQueryResult
     */
    'avatar1X': string;
    /**
     *
     * @type {string}
     * @memberof TeacherQueriesGetDetailsQueryResult
     */
    'avatar2X': string;
    /**
     *
     * @type {string}
     * @memberof TeacherQueriesGetDetailsQueryResult
     */
    'avatar3X': string;
    /**
     *
     * @type {string}
     * @memberof TeacherQueriesGetDetailsQueryResult
     */
    'avatar4X': string;
    /**
     * Girilebilecek değerler:  NATIVE_US,  NATIVE_BRITISH,  TURKISH,  OTHER
     * @type {string}
     * @memberof TeacherQueriesGetDetailsQueryResult
     */
    'accentType': string;
    /**
     *
     * @type {string}
     * @memberof TeacherQueriesGetDetailsQueryResult
     */
    'name': string;
    /**
     *
     * @type {boolean}
     * @memberof TeacherQueriesGetDetailsQueryResult
     */
    'isOnline': boolean;
    /**
     *
     * @type {number}
     * @memberof TeacherQueriesGetDetailsQueryResult
     */
    'rate': number;
    /**
     *
     * @type {string}
     * @memberof TeacherQueriesGetDetailsQueryResult
     */
    'description': string;
    /**
     *
     * @type {boolean}
     * @memberof TeacherQueriesGetDetailsQueryResult
     */
    'availableForFreeCall': boolean;
    /**
     *
     * @type {boolean}
     * @memberof TeacherQueriesGetDetailsQueryResult
     */
    'hasFreeAppointmentRanges': boolean;
    /**
     *
     * @type {Array<TeacherQueriesFreeAppointmentRange>}
     * @memberof TeacherQueriesGetDetailsQueryResult
     */
    'freeAppointmentRanges': Array<TeacherQueriesFreeAppointmentRange>;
    /**
     *
     * @type {TeacherQueriesTrailerVideo}
     * @memberof TeacherQueriesGetDetailsQueryResult
     */
    'trailerVideo': TeacherQueriesTrailerVideo;
    /**
     *
     * @type {TeacherQueriesSpecalities}
     * @memberof TeacherQueriesGetDetailsQueryResult
     */
    'specalities': TeacherQueriesSpecalities;
}