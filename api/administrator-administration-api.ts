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
import { AdministratorAdministrationCommandsCreateAdministratorCommandResult } from '../models';
// @ts-ignore
import { AdministratorAdministrationQueriesListQueryResult } from '../models';
// @ts-ignore
import { FluentValidationResultsValidationFailure } from '../models';
/**
 * AdministratorAdministrationApi - axios parameter creator
 * @export
 */
export const AdministratorAdministrationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Sistem yöneticisinin email adresini değiştirmeyi sağlar
         * @param {number} [administratorId] 
         * @param {string} [administratorEmail] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeAdministratorEmail: async (administratorId?: number, administratorEmail?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/AdministratorAdministration/ChangeAdministratorEmail`;
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

            if (administratorId !== undefined) {
                localVarQueryParameter['AdministratorId'] = administratorId;
            }

            if (administratorEmail !== undefined) {
                localVarQueryParameter['AdministratorEmail'] = administratorEmail;
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
         * @summary Sistem yöneticisinin şifresini değiştirmeyi sağlar
         * @param {number} [administratorId] 
         * @param {string} [administratorPassword] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeAdministratorPassword: async (administratorId?: number, administratorPassword?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/AdministratorAdministration/ChangeAdministratorPassword`;
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

            if (administratorId !== undefined) {
                localVarQueryParameter['AdministratorId'] = administratorId;
            }

            if (administratorPassword !== undefined) {
                localVarQueryParameter['AdministratorPassword'] = administratorPassword;
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
         * @summary Sistem yöneticisi eklemeyi sağlar
         * @param {string} [name] 
         * @param {string} [eMail] 
         * @param {string} [password] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAdministrator: async (name?: string, eMail?: string, password?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/AdministratorAdministration/CreateAdministrator`;
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

            if (name !== undefined) {
                localVarQueryParameter['Name'] = name;
            }

            if (eMail !== undefined) {
                localVarQueryParameter['EMail'] = eMail;
            }

            if (password !== undefined) {
                localVarQueryParameter['Password'] = password;
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
         * @summary Sistem yöneticisi silmeyi sağlar
         * @param {number} [administratorId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAdministrator: async (administratorId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/AdministratorAdministration/DeleteAdministrator`;
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

            if (administratorId !== undefined) {
                localVarQueryParameter['AdministratorId'] = administratorId;
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
         * @summary Sistem yöneticilerini listelemeyi sağlar
         * @param {number} [page] 
         * @param {number} [itemPerPage] 
         * @param {string} [searchKeyword] Admin listesinde arama yapılacak kelimeyi barındırır
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAdministrators: async (page?: number, itemPerPage?: number, searchKeyword?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/AdministratorAdministration/List`;
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

            if (page !== undefined) {
                localVarQueryParameter['Page'] = page;
            }

            if (itemPerPage !== undefined) {
                localVarQueryParameter['ItemPerPage'] = itemPerPage;
            }

            if (searchKeyword !== undefined) {
                localVarQueryParameter['SearchKeyword'] = searchKeyword;
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
 * AdministratorAdministrationApi - functional programming interface
 * @export
 */
export const AdministratorAdministrationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdministratorAdministrationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Sistem yöneticisinin email adresini değiştirmeyi sağlar
         * @param {number} [administratorId] 
         * @param {string} [administratorEmail] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async changeAdministratorEmail(administratorId?: number, administratorEmail?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeAdministratorEmail(administratorId, administratorEmail, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sistem yöneticisinin şifresini değiştirmeyi sağlar
         * @param {number} [administratorId] 
         * @param {string} [administratorPassword] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async changeAdministratorPassword(administratorId?: number, administratorPassword?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeAdministratorPassword(administratorId, administratorPassword, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sistem yöneticisi eklemeyi sağlar
         * @param {string} [name] 
         * @param {string} [eMail] 
         * @param {string} [password] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAdministrator(name?: string, eMail?: string, password?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdministratorAdministrationCommandsCreateAdministratorCommandResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAdministrator(name, eMail, password, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sistem yöneticisi silmeyi sağlar
         * @param {number} [administratorId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAdministrator(administratorId?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAdministrator(administratorId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sistem yöneticilerini listelemeyi sağlar
         * @param {number} [page] 
         * @param {number} [itemPerPage] 
         * @param {string} [searchKeyword] Admin listesinde arama yapılacak kelimeyi barındırır
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAdministrators(page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdministratorAdministrationQueriesListQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAdministrators(page, itemPerPage, searchKeyword, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdministratorAdministrationApi - factory interface
 * @export
 */
export const AdministratorAdministrationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdministratorAdministrationApiFp(configuration)
    return {
        /**
         * 
         * @summary Sistem yöneticisinin email adresini değiştirmeyi sağlar
         * @param {number} [administratorId] 
         * @param {string} [administratorEmail] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeAdministratorEmail(administratorId?: number, administratorEmail?: string, options?: any): AxiosPromise<object> {
            return localVarFp.changeAdministratorEmail(administratorId, administratorEmail, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sistem yöneticisinin şifresini değiştirmeyi sağlar
         * @param {number} [administratorId] 
         * @param {string} [administratorPassword] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeAdministratorPassword(administratorId?: number, administratorPassword?: string, options?: any): AxiosPromise<object> {
            return localVarFp.changeAdministratorPassword(administratorId, administratorPassword, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sistem yöneticisi eklemeyi sağlar
         * @param {string} [name] 
         * @param {string} [eMail] 
         * @param {string} [password] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAdministrator(name?: string, eMail?: string, password?: string, options?: any): AxiosPromise<AdministratorAdministrationCommandsCreateAdministratorCommandResult> {
            return localVarFp.createAdministrator(name, eMail, password, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sistem yöneticisi silmeyi sağlar
         * @param {number} [administratorId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAdministrator(administratorId?: number, options?: any): AxiosPromise<object> {
            return localVarFp.deleteAdministrator(administratorId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sistem yöneticilerini listelemeyi sağlar
         * @param {number} [page] 
         * @param {number} [itemPerPage] 
         * @param {string} [searchKeyword] Admin listesinde arama yapılacak kelimeyi barındırır
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAdministrators(page?: number, itemPerPage?: number, searchKeyword?: string, options?: any): AxiosPromise<AdministratorAdministrationQueriesListQueryResult> {
            return localVarFp.listAdministrators(page, itemPerPage, searchKeyword, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AdministratorAdministrationApi - interface
 * @export
 * @interface AdministratorAdministrationApi
 */
export interface AdministratorAdministrationApiInterface {
    /**
     * 
     * @summary Sistem yöneticisinin email adresini değiştirmeyi sağlar
     * @param {number} [administratorId] 
     * @param {string} [administratorEmail] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdministratorAdministrationApiInterface
     */
    changeAdministratorEmail(administratorId?: number, administratorEmail?: string, options?: AxiosRequestConfig): AxiosPromise<object>;

    /**
     * 
     * @summary Sistem yöneticisinin şifresini değiştirmeyi sağlar
     * @param {number} [administratorId] 
     * @param {string} [administratorPassword] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdministratorAdministrationApiInterface
     */
    changeAdministratorPassword(administratorId?: number, administratorPassword?: string, options?: AxiosRequestConfig): AxiosPromise<object>;

    /**
     * 
     * @summary Sistem yöneticisi eklemeyi sağlar
     * @param {string} [name] 
     * @param {string} [eMail] 
     * @param {string} [password] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdministratorAdministrationApiInterface
     */
    createAdministrator(name?: string, eMail?: string, password?: string, options?: AxiosRequestConfig): AxiosPromise<AdministratorAdministrationCommandsCreateAdministratorCommandResult>;

    /**
     * 
     * @summary Sistem yöneticisi silmeyi sağlar
     * @param {number} [administratorId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdministratorAdministrationApiInterface
     */
    deleteAdministrator(administratorId?: number, options?: AxiosRequestConfig): AxiosPromise<object>;

    /**
     * 
     * @summary Sistem yöneticilerini listelemeyi sağlar
     * @param {number} [page] 
     * @param {number} [itemPerPage] 
     * @param {string} [searchKeyword] Admin listesinde arama yapılacak kelimeyi barındırır
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdministratorAdministrationApiInterface
     */
    listAdministrators(page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig): AxiosPromise<AdministratorAdministrationQueriesListQueryResult>;

}

/**
 * AdministratorAdministrationApi - object-oriented interface
 * @export
 * @class AdministratorAdministrationApi
 * @extends {BaseAPI}
 */
export class AdministratorAdministrationApi extends BaseAPI implements AdministratorAdministrationApiInterface {
    /**
     * 
     * @summary Sistem yöneticisinin email adresini değiştirmeyi sağlar
     * @param {number} [administratorId] 
     * @param {string} [administratorEmail] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdministratorAdministrationApi
     */
    public changeAdministratorEmail(administratorId?: number, administratorEmail?: string, options?: AxiosRequestConfig) {
        return AdministratorAdministrationApiFp(this.configuration).changeAdministratorEmail(administratorId, administratorEmail, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sistem yöneticisinin şifresini değiştirmeyi sağlar
     * @param {number} [administratorId] 
     * @param {string} [administratorPassword] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdministratorAdministrationApi
     */
    public changeAdministratorPassword(administratorId?: number, administratorPassword?: string, options?: AxiosRequestConfig) {
        return AdministratorAdministrationApiFp(this.configuration).changeAdministratorPassword(administratorId, administratorPassword, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sistem yöneticisi eklemeyi sağlar
     * @param {string} [name] 
     * @param {string} [eMail] 
     * @param {string} [password] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdministratorAdministrationApi
     */
    public createAdministrator(name?: string, eMail?: string, password?: string, options?: AxiosRequestConfig) {
        return AdministratorAdministrationApiFp(this.configuration).createAdministrator(name, eMail, password, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sistem yöneticisi silmeyi sağlar
     * @param {number} [administratorId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdministratorAdministrationApi
     */
    public deleteAdministrator(administratorId?: number, options?: AxiosRequestConfig) {
        return AdministratorAdministrationApiFp(this.configuration).deleteAdministrator(administratorId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sistem yöneticilerini listelemeyi sağlar
     * @param {number} [page] 
     * @param {number} [itemPerPage] 
     * @param {string} [searchKeyword] Admin listesinde arama yapılacak kelimeyi barındırır
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdministratorAdministrationApi
     */
    public listAdministrators(page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig) {
        return AdministratorAdministrationApiFp(this.configuration).listAdministrators(page, itemPerPage, searchKeyword, options).then((request) => request(this.axios, this.basePath));
    }
}

