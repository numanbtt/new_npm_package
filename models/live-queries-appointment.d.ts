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
import { AdvancerModelsAppointmentAppointmentType } from './advancer-models-appointment-appointment-type';
import { LiveQueriesStudentDetailsForCall } from './live-queries-student-details-for-call';
import { LiveQueriesTeacherDetailsForCall } from './live-queries-teacher-details-for-call';
/**
 *
 * @export
 * @interface LiveQueriesAppointment
 */
export interface LiveQueriesAppointment {
    /**
     *
     * @type {number}
     * @memberof LiveQueriesAppointment
     */
    'id'?: number;
    /**
     *
     * @type {AdvancerModelsAppointmentAppointmentType}
     * @memberof LiveQueriesAppointment
     */
    'appointmentType'?: AdvancerModelsAppointmentAppointmentType;
    /**
     *
     * @type {number}
     * @memberof LiveQueriesAppointment
     */
    'studentId'?: number;
    /**
     *
     * @type {number}
     * @memberof LiveQueriesAppointment
     */
    'teacherId'?: number;
    /**
     *
     * @type {LiveQueriesTeacherDetailsForCall}
     * @memberof LiveQueriesAppointment
     */
    'teacher'?: LiveQueriesTeacherDetailsForCall;
    /**
     *
     * @type {LiveQueriesStudentDetailsForCall}
     * @memberof LiveQueriesAppointment
     */
    'student'?: LiveQueriesStudentDetailsForCall;
    /**
     *
     * @type {string}
     * @memberof LiveQueriesAppointment
     */
    'startDate'?: string;
    /**
     *
     * @type {string}
     * @memberof LiveQueriesAppointment
     */
    'endDate'?: string;
}