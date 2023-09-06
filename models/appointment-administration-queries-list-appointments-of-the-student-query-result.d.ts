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
import { AppointmentAdministrationQueriesListAppointmentsOfTheStudentPagination } from './appointment-administration-queries-list-appointments-of-the-student-pagination';
/**
 *
 * @export
 * @interface AppointmentAdministrationQueriesListAppointmentsOfTheStudentQueryResult
 */
export interface AppointmentAdministrationQueriesListAppointmentsOfTheStudentQueryResult {
    /**
     *
     * @type {AppointmentAdministrationQueriesListAppointmentsOfTheStudentPagination}
     * @memberof AppointmentAdministrationQueriesListAppointmentsOfTheStudentQueryResult
     */
    'pagination': AppointmentAdministrationQueriesListAppointmentsOfTheStudentPagination;
    /**
     *
     * @type {Array<AppointmentAdministrationQueriesAppointmentListItem>}
     * @memberof AppointmentAdministrationQueriesListAppointmentsOfTheStudentQueryResult
     */
    'appointments': Array<AppointmentAdministrationQueriesAppointmentListItem>;
}
