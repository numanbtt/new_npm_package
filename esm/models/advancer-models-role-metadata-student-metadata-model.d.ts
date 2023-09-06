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
import { AdvancerModelsAuthenticationAppUserModel } from './advancer-models-authentication-app-user-model';
import { AdvancerModelsJoinTableStudentMetadataLanguageLevelModel } from './advancer-models-join-table-student-metadata-language-level-model';
import { AdvancerModelsSpecialityAccentTypeModel } from './advancer-models-speciality-accent-type-model';
import { AdvancerModelsSubscriptionUserSubscriptionModel } from './advancer-models-subscription-user-subscription-model';
/**
 *
 * @export
 * @interface AdvancerModelsRoleMetadataStudentMetadataModel
 */
export interface AdvancerModelsRoleMetadataStudentMetadataModel {
    /**
     *
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataStudentMetadataModel
     */
    'createdAt': string;
    /**
     *
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataStudentMetadataModel
     */
    'updatedAt': string;
    /**
     *
     * @type {number}
     * @memberof AdvancerModelsRoleMetadataStudentMetadataModel
     */
    'id'?: number;
    /**
     *
     * @type {number}
     * @memberof AdvancerModelsRoleMetadataStudentMetadataModel
     */
    'studentId'?: number;
    /**
     *
     * @type {AdvancerModelsAuthenticationAppUserModel}
     * @memberof AdvancerModelsRoleMetadataStudentMetadataModel
     */
    'student'?: AdvancerModelsAuthenticationAppUserModel;
    /**
     *
     * @type {boolean}
     * @memberof AdvancerModelsRoleMetadataStudentMetadataModel
     */
    'isProfilePictureApproved'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AdvancerModelsRoleMetadataStudentMetadataModel
     */
    'isBanned'?: boolean;
    /**
     *
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataStudentMetadataModel
     */
    'banReason'?: string | null;
    /**
     *
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataStudentMetadataModel
     */
    'banHeldReason'?: string | null;
    /**
     *
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataStudentMetadataModel
     */
    'bannedAt'?: string | null;
    /**
     *
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataStudentMetadataModel
     */
    'banHeldAt'?: string | null;
    /**
     *
     * @type {number}
     * @memberof AdvancerModelsRoleMetadataStudentMetadataModel
     */
    'activeSubscriptionId'?: number | null;
    /**
     *
     * @type {AdvancerModelsSubscriptionUserSubscriptionModel}
     * @memberof AdvancerModelsRoleMetadataStudentMetadataModel
     */
    'activeSubscription'?: AdvancerModelsSubscriptionUserSubscriptionModel;
    /**
     *
     * @type {number}
     * @memberof AdvancerModelsRoleMetadataStudentMetadataModel
     */
    'accentTypeId'?: number | null;
    /**
     *
     * @type {AdvancerModelsSpecialityAccentTypeModel}
     * @memberof AdvancerModelsRoleMetadataStudentMetadataModel
     */
    'accentType'?: AdvancerModelsSpecialityAccentTypeModel;
    /**
     *
     * @type {Array<AdvancerModelsJoinTableStudentMetadataLanguageLevelModel>}
     * @memberof AdvancerModelsRoleMetadataStudentMetadataModel
     */
    'languageLevels'?: Array<AdvancerModelsJoinTableStudentMetadataLanguageLevelModel> | null;
}
