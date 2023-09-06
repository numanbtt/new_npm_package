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
import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { RequestArgs, BaseAPI } from '../base';
import { VideoRecordQueriesListQueryResult } from '../models';
/**
 * VideoRecordApi - axios parameter creator
 * @export
 */
export declare const VideoRecordApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Geçmiş video kayıtlarını listeler.
     * @param {number} [lastVideoRecordId]
     * @param {string} [query]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listVideoRecords: (lastVideoRecordId?: number, query?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Geçmiş bir videonun izlediğini sunucuya bildirir.
     * @param {number} [videoRecordId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    videoRecordWatched: (videoRecordId?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * VideoRecordApi - functional programming interface
 * @export
 */
export declare const VideoRecordApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Geçmiş video kayıtlarını listeler.
     * @param {number} [lastVideoRecordId]
     * @param {string} [query]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listVideoRecords(lastVideoRecordId?: number, query?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VideoRecordQueriesListQueryResult>>;
    /**
     *
     * @summary Geçmiş bir videonun izlediğini sunucuya bildirir.
     * @param {number} [videoRecordId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    videoRecordWatched(videoRecordId?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>>;
};
/**
 * VideoRecordApi - factory interface
 * @export
 */
export declare const VideoRecordApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Geçmiş video kayıtlarını listeler.
     * @param {number} [lastVideoRecordId]
     * @param {string} [query]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listVideoRecords(lastVideoRecordId?: number, query?: string, options?: any): AxiosPromise<VideoRecordQueriesListQueryResult>;
    /**
     *
     * @summary Geçmiş bir videonun izlediğini sunucuya bildirir.
     * @param {number} [videoRecordId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    videoRecordWatched(videoRecordId?: number, options?: any): AxiosPromise<object>;
};
/**
 * VideoRecordApi - interface
 * @export
 * @interface VideoRecordApi
 */
export interface VideoRecordApiInterface {
    /**
     *
     * @summary Geçmiş video kayıtlarını listeler.
     * @param {number} [lastVideoRecordId]
     * @param {string} [query]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideoRecordApiInterface
     */
    listVideoRecords(lastVideoRecordId?: number, query?: string, options?: AxiosRequestConfig): AxiosPromise<VideoRecordQueriesListQueryResult>;
    /**
     *
     * @summary Geçmiş bir videonun izlediğini sunucuya bildirir.
     * @param {number} [videoRecordId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideoRecordApiInterface
     */
    videoRecordWatched(videoRecordId?: number, options?: AxiosRequestConfig): AxiosPromise<object>;
}
/**
 * VideoRecordApi - object-oriented interface
 * @export
 * @class VideoRecordApi
 * @extends {BaseAPI}
 */
export declare class VideoRecordApi extends BaseAPI implements VideoRecordApiInterface {
    /**
     *
     * @summary Geçmiş video kayıtlarını listeler.
     * @param {number} [lastVideoRecordId]
     * @param {string} [query]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideoRecordApi
     */
    listVideoRecords(lastVideoRecordId?: number, query?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<VideoRecordQueriesListQueryResult, any>>;
    /**
     *
     * @summary Geçmiş bir videonun izlediğini sunucuya bildirir.
     * @param {number} [videoRecordId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideoRecordApi
     */
    videoRecordWatched(videoRecordId?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<object, any>>;
}