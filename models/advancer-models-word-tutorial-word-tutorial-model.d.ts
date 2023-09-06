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
import { AdvancerModelsSpecialityAccentTypeModel } from './advancer-models-speciality-accent-type-model';
import { AdvancerModelsSpecialityLanguageLevelModel } from './advancer-models-speciality-language-level-model';
import { AdvancerModelsWordTutorialCategoryWordTutorialCategoryModel } from './advancer-models-word-tutorial-category-word-tutorial-category-model';
import { AdvancerModelsWordTutorialWordTutorialFavoriteModel } from './advancer-models-word-tutorial-word-tutorial-favorite-model';
import { AdvancerModelsWordTutorialWordTutorialLikeModel } from './advancer-models-word-tutorial-word-tutorial-like-model';
import { AdvancerModelsWordTutorialWordTutorialShareModel } from './advancer-models-word-tutorial-word-tutorial-share-model';
import { AdvancerModelsWordTutorialWordTutorialSubtitleModel } from './advancer-models-word-tutorial-word-tutorial-subtitle-model';
import { AdvancerModelsWordTutorialWordTutorialTranslationModel } from './advancer-models-word-tutorial-word-tutorial-translation-model';
import { AdvancerModelsWordTutorialWordTutorialVideoWatchModel } from './advancer-models-word-tutorial-word-tutorial-video-watch-model';
/**
 *
 * @export
 * @interface AdvancerModelsWordTutorialWordTutorialModel
 */
export interface AdvancerModelsWordTutorialWordTutorialModel {
    /**
     *
     * @type {string}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'createdAt': string;
    /**
     *
     * @type {string}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'updatedAt': string;
    /**
     *
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'id'?: number;
    /**
     *
     * @type {string}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'slug'?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'isDeleted'?: boolean;
    /**
     *
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'totalFavoriteCount'?: number;
    /**
     *
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'totalLikeCount'?: number;
    /**
     *
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'totalVideoViewCount'?: number;
    /**
     *
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'totalShareCount'?: number;
    /**
     *
     * @type {string}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'youtubeVideoId'?: string | null;
    /**
     *
     * @type {string}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'videoCoverImageId'?: string | null;
    /**
     *
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'accentTypeId'?: number | null;
    /**
     *
     * @type {AdvancerModelsSpecialityAccentTypeModel}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'accentType'?: AdvancerModelsSpecialityAccentTypeModel;
    /**
     *
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'languageLevelId'?: number | null;
    /**
     *
     * @type {AdvancerModelsSpecialityLanguageLevelModel}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'languageLevel'?: AdvancerModelsSpecialityLanguageLevelModel;
    /**
     *
     * @type {Array<AdvancerModelsWordTutorialWordTutorialTranslationModel>}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'translations'?: Array<AdvancerModelsWordTutorialWordTutorialTranslationModel> | null;
    /**
     *
     * @type {Array<AdvancerModelsWordTutorialWordTutorialSubtitleModel>}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'subtitles'?: Array<AdvancerModelsWordTutorialWordTutorialSubtitleModel> | null;
    /**
     *
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'wordTutorialCategoryId'?: number;
    /**
     *
     * @type {AdvancerModelsWordTutorialCategoryWordTutorialCategoryModel}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'wordTutorialCategory'?: AdvancerModelsWordTutorialCategoryWordTutorialCategoryModel;
    /**
     *
     * @type {Array<AdvancerModelsWordTutorialWordTutorialLikeModel>}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'likes'?: Array<AdvancerModelsWordTutorialWordTutorialLikeModel> | null;
    /**
     *
     * @type {Array<AdvancerModelsWordTutorialWordTutorialShareModel>}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'shares'?: Array<AdvancerModelsWordTutorialWordTutorialShareModel> | null;
    /**
     *
     * @type {Array<AdvancerModelsWordTutorialWordTutorialVideoWatchModel>}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'videoWatches'?: Array<AdvancerModelsWordTutorialWordTutorialVideoWatchModel> | null;
    /**
     *
     * @type {Array<AdvancerModelsWordTutorialWordTutorialFavoriteModel>}
     * @memberof AdvancerModelsWordTutorialWordTutorialModel
     */
    'favorites'?: Array<AdvancerModelsWordTutorialWordTutorialFavoriteModel> | null;
}
