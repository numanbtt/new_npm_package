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


// May contain unused imports in some cases
// @ts-ignore
import { AdvancerModelsAuthenticationAppUserModel } from './advancer-models-authentication-app-user-model';
// May contain unused imports in some cases
// @ts-ignore
import { AdvancerModelsJoinTableTeacherMetadataLanguageLevelModel } from './advancer-models-join-table-teacher-metadata-language-level-model';
// May contain unused imports in some cases
// @ts-ignore
import { AdvancerModelsJoinTableTeacherMetadataLessonTypeModel } from './advancer-models-join-table-teacher-metadata-lesson-type-model';
// May contain unused imports in some cases
// @ts-ignore
import { AdvancerModelsJoinTableTeacherMetadataTeachingStyleModel } from './advancer-models-join-table-teacher-metadata-teaching-style-model';
// May contain unused imports in some cases
// @ts-ignore
import { AdvancerModelsSchedulerTeacherAvailabilityModel } from './advancer-models-scheduler-teacher-availability-model';
// May contain unused imports in some cases
// @ts-ignore
import { AdvancerModelsSpecialityAccentTypeModel } from './advancer-models-speciality-accent-type-model';

/**
 * 
 * @export
 * @interface AdvancerModelsRoleMetadataTeacherMetadataModel
 */
export interface AdvancerModelsRoleMetadataTeacherMetadataModel {
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'updatedAt': string;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'teacherId'?: number;
    /**
     * 
     * @type {AdvancerModelsAuthenticationAppUserModel}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'teacher'?: AdvancerModelsAuthenticationAppUserModel;
    /**
     * 
     * @type {boolean}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'isAccountApproved'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'isProfilePictureApproved'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'isBanned'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'isOnline'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'onlineAt'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'banReason'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'banHeldReason'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'bannedAt'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'banHeldAt'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'totalLessonCount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'accentTypeId'?: number;
    /**
     * 
     * @type {AdvancerModelsSpecialityAccentTypeModel}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'accentType'?: AdvancerModelsSpecialityAccentTypeModel;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'description'?: string | null;
    /**
     * 
     * @type {Array<AdvancerModelsJoinTableTeacherMetadataTeachingStyleModel>}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'teachingStyles'?: Array<AdvancerModelsJoinTableTeacherMetadataTeachingStyleModel> | null;
    /**
     * 
     * @type {Array<AdvancerModelsJoinTableTeacherMetadataLessonTypeModel>}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'lessonTypes'?: Array<AdvancerModelsJoinTableTeacherMetadataLessonTypeModel> | null;
    /**
     * 
     * @type {Array<AdvancerModelsJoinTableTeacherMetadataLanguageLevelModel>}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'languageLevels'?: Array<AdvancerModelsJoinTableTeacherMetadataLanguageLevelModel> | null;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'trailerVideoCoverImagePath'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'trailerVideoYoutubeId'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'isZoomCreated'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'zoomUserResponse'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'hourlyRate'?: number | null;
    /**
     * Banka adıdır.  Örneğin:  Türkiye İş Bankası
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'bankName'?: string | null;
    /**
     * Banka hesabının sahibinin adıdır.  Örneğin:  Ahmet Fevzi
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'bankAccountHolderName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'bankIban'?: string | null;
    /**
     * Öğretmene verilen tüm puanlamaların toplamının, toplamda kaç farklı puanlama yapıldığına bölünmesiyle bulunur.  Örneğin:  1. Kişi 4 puan verirse  2. Kişi 5 puan verirse  3. Kişi 3.5 puan verirse  RateCache: 12.5 / 3 = 4.166666666666667 olur.
     * @type {number}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'rateCache'?: number;
    /**
     * Öğretmene verilen tüm puanlamaların toplamını tutar.  Örneğin:  1. Kişi 4 puan verirse  2. Kişi 5 puan verirse  3. Kişi 3.5 puan verirse  SumOfAllRates: 12.5 olur
     * @type {number}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'sumOfAllRates'?: number;
    /**
     * Öğretmene toplamda kaç adet puanlama verildiğini tutar.  Örneğin:  1. Kişi 4 puan verirse  2. Kişi 5 puan verirse  3. Kişi 3.5 puan verirse  TotalRateCount: 3 olur
     * @type {number}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'totalRateCount'?: number;
    /**
     * Admin panel üzerinden belirlenen, site üzerinde gösterilmesi istenilen fake puanlamayı tutar.
     * @type {number}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'visibleRate'?: number | null;
    /**
     * 
     * @type {Array<AdvancerModelsSchedulerTeacherAvailabilityModel>}
     * @memberof AdvancerModelsRoleMetadataTeacherMetadataModel
     */
    'availabilities'?: Array<AdvancerModelsSchedulerTeacherAvailabilityModel> | null;
}

