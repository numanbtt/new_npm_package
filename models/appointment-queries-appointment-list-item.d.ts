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
import { AppointmentQueriesStudentInAppointment } from './appointment-queries-student-in-appointment';
import { AppointmentQueriesTeacherInAppointment } from './appointment-queries-teacher-in-appointment';
/**
 *
 * @export
 * @interface AppointmentQueriesAppointmentListItem
 */
export interface AppointmentQueriesAppointmentListItem {
    /**
     *
     * @type {number}
     * @memberof AppointmentQueriesAppointmentListItem
     */
    'appointmentId': number;
    /**
     *
     * @type {string}
     * @memberof AppointmentQueriesAppointmentListItem
     */
    'startDateTime': string;
    /**
     *
     * @type {string}
     * @memberof AppointmentQueriesAppointmentListItem
     */
    'endDateTime': string;
    /**
     *
     * @type {boolean}
     * @memberof AppointmentQueriesAppointmentListItem
     */
    'isFreeCall': boolean;
    /**
     *
     * @type {boolean}
     * @memberof AppointmentQueriesAppointmentListItem
     */
    'isVideoCallRoomOpened': boolean;
    /**
     *
     * @type {boolean}
     * @memberof AppointmentQueriesAppointmentListItem
     */
    'isRatingCompleted': boolean;
    /**
     * Kullanıcının bu randevunun vaktini değiştirme hakkı var ise true döner.
     * @type {boolean}
     * @memberof AppointmentQueriesAppointmentListItem
     */
    'isAppointmentDateTimeChangeable': boolean;
    /**
     *
     * @type {AppointmentQueriesTeacherInAppointment}
     * @memberof AppointmentQueriesAppointmentListItem
     */
    'teacher': AppointmentQueriesTeacherInAppointment;
    /**
     *
     * @type {AppointmentQueriesStudentInAppointment}
     * @memberof AppointmentQueriesAppointmentListItem
     */
    'student': AppointmentQueriesStudentInAppointment;
}
