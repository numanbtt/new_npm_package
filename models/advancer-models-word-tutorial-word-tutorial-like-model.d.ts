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
import { AdvancerModelsWordTutorialWordTutorialModel } from './advancer-models-word-tutorial-word-tutorial-model';
/**
 *
 * @export
 * @interface AdvancerModelsWordTutorialWordTutorialLikeModel
 */
export interface AdvancerModelsWordTutorialWordTutorialLikeModel {
    /**
     *
     * @type {string}
     * @memberof AdvancerModelsWordTutorialWordTutorialLikeModel
     */
    'createdAt': string;
    /**
     *
     * @type {string}
     * @memberof AdvancerModelsWordTutorialWordTutorialLikeModel
     */
    'updatedAt': string;
    /**
     *
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialLikeModel
     */
    'id'?: number;
    /**
     *
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialLikeModel
     */
    'wordTutorialId'?: number;
    /**
     *
     * @type {AdvancerModelsWordTutorialWordTutorialModel}
     * @memberof AdvancerModelsWordTutorialWordTutorialLikeModel
     */
    'wordTutorial'?: AdvancerModelsWordTutorialWordTutorialModel;
    /**
     *
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialLikeModel
     */
    'appUserId'?: number;
    /**
     *
     * @type {AdvancerModelsAuthenticationAppUserModel}
     * @memberof AdvancerModelsWordTutorialWordTutorialLikeModel
     */
    'appUser'?: AdvancerModelsAuthenticationAppUserModel;
}