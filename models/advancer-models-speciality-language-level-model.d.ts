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
import { AdvancerModelsJoinTableTeacherMetadataLanguageLevelModel } from './advancer-models-join-table-teacher-metadata-language-level-model';
/**
 *
 * @export
 * @interface AdvancerModelsSpecialityLanguageLevelModel
 */
export interface AdvancerModelsSpecialityLanguageLevelModel {
    /**
     *
     * @type {string}
     * @memberof AdvancerModelsSpecialityLanguageLevelModel
     */
    'createdAt': string;
    /**
     *
     * @type {string}
     * @memberof AdvancerModelsSpecialityLanguageLevelModel
     */
    'updatedAt': string;
    /**
     *
     * @type {number}
     * @memberof AdvancerModelsSpecialityLanguageLevelModel
     */
    'id'?: number;
    /**
     *
     * @type {string}
     * @memberof AdvancerModelsSpecialityLanguageLevelModel
     */
    'enumName'?: string | null;
    /**
     *
     * @type {Array<AdvancerModelsJoinTableTeacherMetadataLanguageLevelModel>}
     * @memberof AdvancerModelsSpecialityLanguageLevelModel
     */
    'teachers'?: Array<AdvancerModelsJoinTableTeacherMetadataLanguageLevelModel> | null;
}
