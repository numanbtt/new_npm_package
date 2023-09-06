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
 * @interface TeacherAdministrationCommandsSpecalities
 */
export interface TeacherAdministrationCommandsSpecalities {
    /**
     * Girilebilecek değerler:  KIND_AND_PATIENT,  FUN_AND_GREGARIOUS,  SCHOLARLY_AND_KNOWLEDGEABLE
     * @type {Array<string>}
     * @memberof TeacherAdministrationCommandsSpecalities
     */
    'teachingStyles'?: Array<string> | null;
    /**
     * Girilebilecek değerler:  PRONUNCIATION_LESSONS,  GRAMMAR_LESSONS,  LESSONS_WITH_MOVIES,  LESSONS_FOR_CHILDREN,  BUSINESS_ENGLISH,  UNIVERSITY_ENGLISH_PREPARATION,  EXAM,  TOEFL_PREPARATION,  IELTS_PREPARATION
     * @type {Array<string>}
     * @memberof TeacherAdministrationCommandsSpecalities
     */
    'lessonTypes'?: Array<string> | null;
    /**
     * Girilebilecek değerler:  BEGINNER,  INTERMEDIATE,  ADVANCED
     * @type {Array<string>}
     * @memberof TeacherAdministrationCommandsSpecalities
     */
    'languageLevel'?: Array<string> | null;
    /**
     *
     * @type {string}
     * @memberof TeacherAdministrationCommandsSpecalities
     */
    'accent'?: string | null;
}
