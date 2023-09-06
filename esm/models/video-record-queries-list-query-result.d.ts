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
import { VideoRecordQueriesListVideoRecordsPagination } from './video-record-queries-list-video-records-pagination';
import { VideoRecordQueriesVideoRecordListItem } from './video-record-queries-video-record-list-item';
/**
 *
 * @export
 * @interface VideoRecordQueriesListQueryResult
 */
export interface VideoRecordQueriesListQueryResult {
    /**
     * Canlı görüşmelerin kayıtları
     * @type {Array<VideoRecordQueriesVideoRecordListItem>}
     * @memberof VideoRecordQueriesListQueryResult
     */
    'videoRecords': Array<VideoRecordQueriesVideoRecordListItem>;
    /**
     *
     * @type {VideoRecordQueriesListVideoRecordsPagination}
     * @memberof VideoRecordQueriesListQueryResult
     */
    'pagination': VideoRecordQueriesListVideoRecordsPagination;
}
