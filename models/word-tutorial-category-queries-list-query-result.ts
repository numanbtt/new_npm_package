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
import { WordTutorialCategoryQueriesListWordTutorialCategoriesPagination } from './word-tutorial-category-queries-list-word-tutorial-categories-pagination';
// May contain unused imports in some cases
// @ts-ignore
import { WordTutorialCategoryQueriesWordTutorialCategoryInList } from './word-tutorial-category-queries-word-tutorial-category-in-list';

/**
 * 
 * @export
 * @interface WordTutorialCategoryQueriesListQueryResult
 */
export interface WordTutorialCategoryQueriesListQueryResult {
    /**
     * 
     * @type {WordTutorialCategoryQueriesListWordTutorialCategoriesPagination}
     * @memberof WordTutorialCategoryQueriesListQueryResult
     */
    'pagination': WordTutorialCategoryQueriesListWordTutorialCategoriesPagination;
    /**
     * 
     * @type {Array<WordTutorialCategoryQueriesWordTutorialCategoryInList>}
     * @memberof WordTutorialCategoryQueriesListQueryResult
     */
    'categories': Array<WordTutorialCategoryQueriesWordTutorialCategoryInList>;
}

