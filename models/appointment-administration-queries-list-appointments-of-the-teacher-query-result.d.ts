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
import { AppointmentAdministrationQueriesAppointmentListItem } from './appointment-administration-queries-appointment-list-item';
import { AppointmentAdministrationQueriesListAppointmentsOfTheTeacherPagination } from './appointment-administration-queries-list-appointments-of-the-teacher-pagination';
/**
 *
 * @export
 * @interface AppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResult
 */
export interface AppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResult {
    /**
     *
     * @type {AppointmentAdministrationQueriesListAppointmentsOfTheTeacherPagination}
     * @memberof AppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResult
     */
    'pagination': AppointmentAdministrationQueriesListAppointmentsOfTheTeacherPagination;
    /**
     *
     * @type {Array<AppointmentAdministrationQueriesAppointmentListItem>}
     * @memberof AppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResult
     */
    'appointments': Array<AppointmentAdministrationQueriesAppointmentListItem>;
}