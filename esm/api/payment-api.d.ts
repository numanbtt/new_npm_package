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
import { PaymentCommandsSubscriptionCommandResult } from '../models';
import { PaymentCommandsSubscriptionPackageDetails } from '../models';
import { PaymentQueriesListDropDownSubscriptionOptionsQueryResult } from '../models';
import { PaymentQueriesListSubscriptionOptionsQueryResult } from '../models';
/**
 * PaymentApi - axios parameter creator
 * @export
 */
export declare const PaymentApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Kullanıcının şu anki aboneliğini iptal eder. Bu durumda kullanıcı ödeme dönemi sonuna kadar haklarından faydalanabilir veya aboneliğini tekrar aktif hale getirebilir.
     * @param {string} [reason]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cancelCurrentSubscription: (reason?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listDropDownSubscriptionOptions: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Abonelik seçeneklerini getirir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSubscriptionOptions: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Öğrencinin abonelik başlatmasını veya abonelik tipini değiştirmesini sağlar.
     * @param {PaymentCommandsSubscriptionPackageDetails} [paymentCommandsSubscriptionPackageDetails]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    subscribe: (paymentCommandsSubscriptionPackageDetails?: PaymentCommandsSubscriptionPackageDetails, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * PaymentApi - functional programming interface
 * @export
 */
export declare const PaymentApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Kullanıcının şu anki aboneliğini iptal eder. Bu durumda kullanıcı ödeme dönemi sonuna kadar haklarından faydalanabilir veya aboneliğini tekrar aktif hale getirebilir.
     * @param {string} [reason]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cancelCurrentSubscription(reason?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listDropDownSubscriptionOptions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaymentQueriesListDropDownSubscriptionOptionsQueryResult>>;
    /**
     *
     * @summary Abonelik seçeneklerini getirir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSubscriptionOptions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaymentQueriesListSubscriptionOptionsQueryResult>>;
    /**
     *
     * @summary Öğrencinin abonelik başlatmasını veya abonelik tipini değiştirmesini sağlar.
     * @param {PaymentCommandsSubscriptionPackageDetails} [paymentCommandsSubscriptionPackageDetails]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    subscribe(paymentCommandsSubscriptionPackageDetails?: PaymentCommandsSubscriptionPackageDetails, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaymentCommandsSubscriptionCommandResult>>;
};
/**
 * PaymentApi - factory interface
 * @export
 */
export declare const PaymentApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Kullanıcının şu anki aboneliğini iptal eder. Bu durumda kullanıcı ödeme dönemi sonuna kadar haklarından faydalanabilir veya aboneliğini tekrar aktif hale getirebilir.
     * @param {string} [reason]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cancelCurrentSubscription(reason?: string, options?: any): AxiosPromise<object>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listDropDownSubscriptionOptions(options?: any): AxiosPromise<PaymentQueriesListDropDownSubscriptionOptionsQueryResult>;
    /**
     *
     * @summary Abonelik seçeneklerini getirir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSubscriptionOptions(options?: any): AxiosPromise<PaymentQueriesListSubscriptionOptionsQueryResult>;
    /**
     *
     * @summary Öğrencinin abonelik başlatmasını veya abonelik tipini değiştirmesini sağlar.
     * @param {PaymentCommandsSubscriptionPackageDetails} [paymentCommandsSubscriptionPackageDetails]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    subscribe(paymentCommandsSubscriptionPackageDetails?: PaymentCommandsSubscriptionPackageDetails, options?: any): AxiosPromise<PaymentCommandsSubscriptionCommandResult>;
};
/**
 * PaymentApi - interface
 * @export
 * @interface PaymentApi
 */
export interface PaymentApiInterface {
    /**
     *
     * @summary Kullanıcının şu anki aboneliğini iptal eder. Bu durumda kullanıcı ödeme dönemi sonuna kadar haklarından faydalanabilir veya aboneliğini tekrar aktif hale getirebilir.
     * @param {string} [reason]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApiInterface
     */
    cancelCurrentSubscription(reason?: string, options?: AxiosRequestConfig): AxiosPromise<object>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApiInterface
     */
    listDropDownSubscriptionOptions(options?: AxiosRequestConfig): AxiosPromise<PaymentQueriesListDropDownSubscriptionOptionsQueryResult>;
    /**
     *
     * @summary Abonelik seçeneklerini getirir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApiInterface
     */
    listSubscriptionOptions(options?: AxiosRequestConfig): AxiosPromise<PaymentQueriesListSubscriptionOptionsQueryResult>;
    /**
     *
     * @summary Öğrencinin abonelik başlatmasını veya abonelik tipini değiştirmesini sağlar.
     * @param {PaymentCommandsSubscriptionPackageDetails} [paymentCommandsSubscriptionPackageDetails]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApiInterface
     */
    subscribe(paymentCommandsSubscriptionPackageDetails?: PaymentCommandsSubscriptionPackageDetails, options?: AxiosRequestConfig): AxiosPromise<PaymentCommandsSubscriptionCommandResult>;
}
/**
 * PaymentApi - object-oriented interface
 * @export
 * @class PaymentApi
 * @extends {BaseAPI}
 */
export declare class PaymentApi extends BaseAPI implements PaymentApiInterface {
    /**
     *
     * @summary Kullanıcının şu anki aboneliğini iptal eder. Bu durumda kullanıcı ödeme dönemi sonuna kadar haklarından faydalanabilir veya aboneliğini tekrar aktif hale getirebilir.
     * @param {string} [reason]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    cancelCurrentSubscription(reason?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<object, any>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    listDropDownSubscriptionOptions(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PaymentQueriesListDropDownSubscriptionOptionsQueryResult, any>>;
    /**
     *
     * @summary Abonelik seçeneklerini getirir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    listSubscriptionOptions(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PaymentQueriesListSubscriptionOptionsQueryResult, any>>;
    /**
     *
     * @summary Öğrencinin abonelik başlatmasını veya abonelik tipini değiştirmesini sağlar.
     * @param {PaymentCommandsSubscriptionPackageDetails} [paymentCommandsSubscriptionPackageDetails]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    subscribe(paymentCommandsSubscriptionPackageDetails?: PaymentCommandsSubscriptionPackageDetails, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PaymentCommandsSubscriptionCommandResult, any>>;
}
