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
import { AppInfoQueriesAppStatusQueryResult } from '../models';
import { AppInfoQueriesTimeStampQueryResult } from '../models';
/**
 * AppInfoApi - axios parameter creator
 * @export
 */
export declare const AppInfoApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Uygulamanın sürüm ve bakım bilgilerini getirir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAppStatus: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {string} [date]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTimeSlots: (date?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AppInfoApi - functional programming interface
 * @export
 */
export declare const AppInfoApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Uygulamanın sürüm ve bakım bilgilerini getirir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAppStatus(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppInfoQueriesAppStatusQueryResult>>;
    /**
     *
     * @param {string} [date]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTimeSlots(date?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppInfoQueriesTimeStampQueryResult>>;
};
/**
 * AppInfoApi - factory interface
 * @export
 */
export declare const AppInfoApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Uygulamanın sürüm ve bakım bilgilerini getirir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAppStatus(options?: any): AxiosPromise<AppInfoQueriesAppStatusQueryResult>;
    /**
     *
     * @param {string} [date]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTimeSlots(date?: string, options?: any): AxiosPromise<AppInfoQueriesTimeStampQueryResult>;
};
/**
 * AppInfoApi - interface
 * @export
 * @interface AppInfoApi
 */
export interface AppInfoApiInterface {
    /**
     *
     * @summary Uygulamanın sürüm ve bakım bilgilerini getirir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppInfoApiInterface
     */
    getAppStatus(options?: AxiosRequestConfig): AxiosPromise<AppInfoQueriesAppStatusQueryResult>;
    /**
     *
     * @param {string} [date]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppInfoApiInterface
     */
    getTimeSlots(date?: string, options?: AxiosRequestConfig): AxiosPromise<AppInfoQueriesTimeStampQueryResult>;
}
/**
 * AppInfoApi - object-oriented interface
 * @export
 * @class AppInfoApi
 * @extends {BaseAPI}
 */
export declare class AppInfoApi extends BaseAPI implements AppInfoApiInterface {
    /**
     *
     * @summary Uygulamanın sürüm ve bakım bilgilerini getirir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppInfoApi
     */
    getAppStatus(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<AppInfoQueriesAppStatusQueryResult, any>>;
    /**
     *
     * @param {string} [date]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppInfoApi
     */
    getTimeSlots(date?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<AppInfoQueriesTimeStampQueryResult, any>>;
}