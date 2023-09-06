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
/**
 * OneSignalApi - axios parameter creator
 * @export
 */
export declare const OneSignalApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Kullanıcının onesignal player id\'sini sunucuya bildirmesini sağlar.
     * @param {string} [playerId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    setPlayerId: (playerId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * OneSignalApi - functional programming interface
 * @export
 */
export declare const OneSignalApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Kullanıcının onesignal player id\'sini sunucuya bildirmesini sağlar.
     * @param {string} [playerId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    setPlayerId(playerId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>>;
};
/**
 * OneSignalApi - factory interface
 * @export
 */
export declare const OneSignalApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Kullanıcının onesignal player id\'sini sunucuya bildirmesini sağlar.
     * @param {string} [playerId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    setPlayerId(playerId?: string, options?: any): AxiosPromise<object>;
};
/**
 * OneSignalApi - interface
 * @export
 * @interface OneSignalApi
 */
export interface OneSignalApiInterface {
    /**
     *
     * @summary Kullanıcının onesignal player id\'sini sunucuya bildirmesini sağlar.
     * @param {string} [playerId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OneSignalApiInterface
     */
    setPlayerId(playerId?: string, options?: AxiosRequestConfig): AxiosPromise<object>;
}
/**
 * OneSignalApi - object-oriented interface
 * @export
 * @class OneSignalApi
 * @extends {BaseAPI}
 */
export declare class OneSignalApi extends BaseAPI implements OneSignalApiInterface {
    /**
     *
     * @summary Kullanıcının onesignal player id\'sini sunucuya bildirmesini sağlar.
     * @param {string} [playerId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OneSignalApi
     */
    setPlayerId(playerId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<object, any>>;
}