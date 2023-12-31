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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { FluentValidationResultsValidationFailure } from '../models';
// @ts-ignore
import { VideoRecordQueriesListQueryResult } from '../models';
/**
 * VideoRecordApi - axios parameter creator
 * @export
 */
export const VideoRecordApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Geçmiş video kayıtlarını listeler.
         * @param {number} [lastVideoRecordId] 
         * @param {string} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listVideoRecords: async (lastVideoRecordId?: number, query?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/VideoRecord/List`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (lastVideoRecordId !== undefined) {
                localVarQueryParameter['LastVideoRecordId'] = lastVideoRecordId;
            }

            if (query !== undefined) {
                localVarQueryParameter['Query'] = query;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Geçmiş bir videonun izlediğini sunucuya bildirir.
         * @param {number} [videoRecordId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        videoRecordWatched: async (videoRecordId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/VideoRecord/VideoRecordWatched`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (videoRecordId !== undefined) {
                localVarQueryParameter['VideoRecordId'] = videoRecordId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * VideoRecordApi - functional programming interface
 * @export
 */
export const VideoRecordApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VideoRecordApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Geçmiş video kayıtlarını listeler.
         * @param {number} [lastVideoRecordId] 
         * @param {string} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listVideoRecords(lastVideoRecordId?: number, query?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VideoRecordQueriesListQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listVideoRecords(lastVideoRecordId, query, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Geçmiş bir videonun izlediğini sunucuya bildirir.
         * @param {number} [videoRecordId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async videoRecordWatched(videoRecordId?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.videoRecordWatched(videoRecordId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VideoRecordApi - factory interface
 * @export
 */
export const VideoRecordApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VideoRecordApiFp(configuration)
    return {
        /**
         * 
         * @summary Geçmiş video kayıtlarını listeler.
         * @param {number} [lastVideoRecordId] 
         * @param {string} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listVideoRecords(lastVideoRecordId?: number, query?: string, options?: any): AxiosPromise<VideoRecordQueriesListQueryResult> {
            return localVarFp.listVideoRecords(lastVideoRecordId, query, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Geçmiş bir videonun izlediğini sunucuya bildirir.
         * @param {number} [videoRecordId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        videoRecordWatched(videoRecordId?: number, options?: any): AxiosPromise<object> {
            return localVarFp.videoRecordWatched(videoRecordId, options).then((request) => request(axios, basePath));
        },
    };
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
export class VideoRecordApi extends BaseAPI implements VideoRecordApiInterface {
    /**
     * 
     * @summary Geçmiş video kayıtlarını listeler.
     * @param {number} [lastVideoRecordId] 
     * @param {string} [query] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideoRecordApi
     */
    public listVideoRecords(lastVideoRecordId?: number, query?: string, options?: AxiosRequestConfig) {
        return VideoRecordApiFp(this.configuration).listVideoRecords(lastVideoRecordId, query, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Geçmiş bir videonun izlediğini sunucuya bildirir.
     * @param {number} [videoRecordId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideoRecordApi
     */
    public videoRecordWatched(videoRecordId?: number, options?: AxiosRequestConfig) {
        return VideoRecordApiFp(this.configuration).videoRecordWatched(videoRecordId, options).then((request) => request(this.axios, this.basePath));
    }
}

