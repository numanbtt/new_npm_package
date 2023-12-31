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
 * @interface TeacherAdministrationQueriesTeacherListItem
 */
export interface TeacherAdministrationQueriesTeacherListItem {
    /**
     * 
     * @type {number}
     * @memberof TeacherAdministrationQueriesTeacherListItem
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesTeacherListItem
     */
    'registeredAt': string;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesTeacherListItem
     */
    'avatar1X': string;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesTeacherListItem
     */
    'avatar2X': string;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesTeacherListItem
     */
    'avatar3X': string;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesTeacherListItem
     */
    'avatar4X': string;
    /**
     * Girilebilecek değerler:  NATIVE_US,  NATIVE_BRITISH,  TURKISH,  OTHER
     * @type {string}
     * @memberof TeacherAdministrationQueriesTeacherListItem
     */
    'accentType': string;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesTeacherListItem
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesTeacherListItem
     */
    'eMail': string;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherAdministrationQueriesTeacherListItem
     */
    'isOnline': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherAdministrationQueriesTeacherListItem
     */
    'isAccountApproved': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherAdministrationQueriesTeacherListItem
     */
    'isProfilePictureApproved': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherAdministrationQueriesTeacherListItem
     */
    'isBanned': boolean;
    /**
     * 
     * @type {number}
     * @memberof TeacherAdministrationQueriesTeacherListItem
     */
    'rate': number;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesTeacherListItem
     */
    'description': string;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherAdministrationQueriesTeacherListItem
     */
    'isZoomCreated'?: boolean | null;
}

