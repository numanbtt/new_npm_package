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
 * @interface AppointmentAdministrationQueriesAppointmentsForPayResult
 */
export interface AppointmentAdministrationQueriesAppointmentsForPayResult {
    /**
     * 
     * @type {number}
     * @memberof AppointmentAdministrationQueriesAppointmentsForPayResult
     */
    'appointmentId'?: number;
    /**
     * 
     * @type {number}
     * @memberof AppointmentAdministrationQueriesAppointmentsForPayResult
     */
    'studentId'?: number;
    /**
     * 
     * @type {string}
     * @memberof AppointmentAdministrationQueriesAppointmentsForPayResult
     */
    'studentName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppointmentAdministrationQueriesAppointmentsForPayResult
     */
    'startDateTime'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppointmentAdministrationQueriesAppointmentsForPayResult
     */
    'endDateTime'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppointmentAdministrationQueriesAppointmentsForPayResult
     */
    'mints'?: number;
    /**
     * 
     * @type {string}
     * @memberof AppointmentAdministrationQueriesAppointmentsForPayResult
     */
    'appointmentType'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppointmentAdministrationQueriesAppointmentsForPayResult
     */
    'paid'?: boolean;
}

