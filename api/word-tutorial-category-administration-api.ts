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
import { WordTutorialCategoryAdministrationCommandsCreateCommandResult } from '../models';
// @ts-ignore
import { WordTutorialCategoryAdministrationQueriesListQueryResult } from '../models';
/**
 * WordTutorialCategoryAdministrationApi - axios parameter creator
 * @export
 */
export const WordTutorialCategoryAdministrationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Kelime eğitimi kategorisinin kapak fotoğrafını değiştirmeyi sağlar
         * @param {File} [newCoverPhoto] 
         * @param {number} [wordTutorialCategoryId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeCoverPhotoOfTheWordTutorialCategory: async (newCoverPhoto?: File, wordTutorialCategoryId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/WordTutorialCategoryAdministration/ChangeCoverPhoto`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (wordTutorialCategoryId !== undefined) {
                localVarQueryParameter['WordTutorialCategoryId'] = wordTutorialCategoryId;
            }


            if (newCoverPhoto !== undefined) { 
                localVarFormParams.append('NewCoverPhoto', newCoverPhoto as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Kelime eğitimi kategorisinin açıklamasını değiştirmeyi sağlar
         * @param {number} [wordTutorialCategoryId] 
         * @param {string} [wordTutorialCategoryDescription] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeDescriptionOfTheWordTutorialCategory: async (wordTutorialCategoryId?: number, wordTutorialCategoryDescription?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/WordTutorialCategoryAdministration/ChangeDescription`;
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

            if (wordTutorialCategoryId !== undefined) {
                localVarQueryParameter['WordTutorialCategoryId'] = wordTutorialCategoryId;
            }

            if (wordTutorialCategoryDescription !== undefined) {
                localVarQueryParameter['WordTutorialCategoryDescription'] = wordTutorialCategoryDescription;
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
         * @summary Kelime eğitimi kategorisinin isim etiketini değiştirmeyi sağlar
         * @param {number} [wordTutorialCategoryId] 
         * @param {string} [wordTutorialCategorySlug] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeSlugOfTheWordTutorialCategory: async (wordTutorialCategoryId?: number, wordTutorialCategorySlug?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/WordTutorialCategoryAdministration/ChangeSlug`;
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

            if (wordTutorialCategoryId !== undefined) {
                localVarQueryParameter['WordTutorialCategoryId'] = wordTutorialCategoryId;
            }

            if (wordTutorialCategorySlug !== undefined) {
                localVarQueryParameter['WordTutorialCategorySlug'] = wordTutorialCategorySlug;
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
         * @summary Kelime eğitimi kategorisinin ismini değiştirmeyi sağlar
         * @param {number} [wordTutorialCategoryId] 
         * @param {string} [wordTutorialCategoryTitle] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeTitleOfTheWordTutorialCategory: async (wordTutorialCategoryId?: number, wordTutorialCategoryTitle?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/WordTutorialCategoryAdministration/ChangeTitle`;
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

            if (wordTutorialCategoryId !== undefined) {
                localVarQueryParameter['WordTutorialCategoryId'] = wordTutorialCategoryId;
            }

            if (wordTutorialCategoryTitle !== undefined) {
                localVarQueryParameter['WordTutorialCategoryTitle'] = wordTutorialCategoryTitle;
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
         * @summary Kelime eğitimi kategorisi eklemeyi sağlar
         * @param {File} [coverPhoto] 
         * @param {string} [title] 
         * @param {string} [slug] 
         * @param {string} [description] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWordTutorialCategory: async (coverPhoto?: File, title?: string, slug?: string, description?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/WordTutorialCategoryAdministration/Create`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (title !== undefined) {
                localVarQueryParameter['Title'] = title;
            }

            if (slug !== undefined) {
                localVarQueryParameter['Slug'] = slug;
            }

            if (description !== undefined) {
                localVarQueryParameter['Description'] = description;
            }


            if (coverPhoto !== undefined) { 
                localVarFormParams.append('CoverPhoto', coverPhoto as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Kelime eğitimi kategorisini silmeyi sağlar
         * @param {number} [wordTutorialCategoryId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWordTutorialCategory: async (wordTutorialCategoryId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/WordTutorialCategoryAdministration/Delete`;
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

            if (wordTutorialCategoryId !== undefined) {
                localVarQueryParameter['WordTutorialCategoryId'] = wordTutorialCategoryId;
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
         * @summary Kelime eğitim kategorilerini listelemeyi sağlar
         * @param {number} [page] 
         * @param {number} [itemPerPage] 
         * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWordTutorialCategoriesForAdministration: async (page?: number, itemPerPage?: number, searchKeyword?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/WordTutorialCategoryAdministration/List`;
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
 * WordTutorialCategoryAdministrationApi - functional programming interface
 * @export
 */
export const WordTutorialCategoryAdministrationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WordTutorialCategoryAdministrationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Kelime eğitimi kategorisinin kapak fotoğrafını değiştirmeyi sağlar
         * @param {File} [newCoverPhoto] 
         * @param {number} [wordTutorialCategoryId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async changeCoverPhotoOfTheWordTutorialCategory(newCoverPhoto?: File, wordTutorialCategoryId?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeCoverPhotoOfTheWordTutorialCategory(newCoverPhoto, wordTutorialCategoryId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Kelime eğitimi kategorisinin açıklamasını değiştirmeyi sağlar
         * @param {number} [wordTutorialCategoryId] 
         * @param {string} [wordTutorialCategoryDescription] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async changeDescriptionOfTheWordTutorialCategory(wordTutorialCategoryId?: number, wordTutorialCategoryDescription?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeDescriptionOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategoryDescription, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Kelime eğitimi kategorisinin isim etiketini değiştirmeyi sağlar
         * @param {number} [wordTutorialCategoryId] 
         * @param {string} [wordTutorialCategorySlug] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async changeSlugOfTheWordTutorialCategory(wordTutorialCategoryId?: number, wordTutorialCategorySlug?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeSlugOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategorySlug, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Kelime eğitimi kategorisinin ismini değiştirmeyi sağlar
         * @param {number} [wordTutorialCategoryId] 
         * @param {string} [wordTutorialCategoryTitle] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async changeTitleOfTheWordTutorialCategory(wordTutorialCategoryId?: number, wordTutorialCategoryTitle?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeTitleOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategoryTitle, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Kelime eğitimi kategorisi eklemeyi sağlar
         * @param {File} [coverPhoto] 
         * @param {string} [title] 
         * @param {string} [slug] 
         * @param {string} [description] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createWordTutorialCategory(coverPhoto?: File, title?: string, slug?: string, description?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WordTutorialCategoryAdministrationCommandsCreateCommandResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createWordTutorialCategory(coverPhoto, title, slug, description, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Kelime eğitimi kategorisini silmeyi sağlar
         * @param {number} [wordTutorialCategoryId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteWordTutorialCategory(wordTutorialCategoryId?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWordTutorialCategory(wordTutorialCategoryId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Kelime eğitim kategorilerini listelemeyi sağlar
         * @param {number} [page] 
         * @param {number} [itemPerPage] 
         * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listWordTutorialCategoriesForAdministration(page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WordTutorialCategoryAdministrationQueriesListQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listWordTutorialCategoriesForAdministration(page, itemPerPage, searchKeyword, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WordTutorialCategoryAdministrationApi - factory interface
 * @export
 */
export const WordTutorialCategoryAdministrationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WordTutorialCategoryAdministrationApiFp(configuration)
    return {
        /**
         * 
         * @summary Kelime eğitimi kategorisinin kapak fotoğrafını değiştirmeyi sağlar
         * @param {File} [newCoverPhoto] 
         * @param {number} [wordTutorialCategoryId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeCoverPhotoOfTheWordTutorialCategory(newCoverPhoto?: File, wordTutorialCategoryId?: number, options?: any): AxiosPromise<object> {
            return localVarFp.changeCoverPhotoOfTheWordTutorialCategory(newCoverPhoto, wordTutorialCategoryId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Kelime eğitimi kategorisinin açıklamasını değiştirmeyi sağlar
         * @param {number} [wordTutorialCategoryId] 
         * @param {string} [wordTutorialCategoryDescription] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeDescriptionOfTheWordTutorialCategory(wordTutorialCategoryId?: number, wordTutorialCategoryDescription?: string, options?: any): AxiosPromise<object> {
            return localVarFp.changeDescriptionOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategoryDescription, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Kelime eğitimi kategorisinin isim etiketini değiştirmeyi sağlar
         * @param {number} [wordTutorialCategoryId] 
         * @param {string} [wordTutorialCategorySlug] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeSlugOfTheWordTutorialCategory(wordTutorialCategoryId?: number, wordTutorialCategorySlug?: string, options?: any): AxiosPromise<object> {
            return localVarFp.changeSlugOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategorySlug, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Kelime eğitimi kategorisinin ismini değiştirmeyi sağlar
         * @param {number} [wordTutorialCategoryId] 
         * @param {string} [wordTutorialCategoryTitle] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeTitleOfTheWordTutorialCategory(wordTutorialCategoryId?: number, wordTutorialCategoryTitle?: string, options?: any): AxiosPromise<object> {
            return localVarFp.changeTitleOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategoryTitle, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Kelime eğitimi kategorisi eklemeyi sağlar
         * @param {File} [coverPhoto] 
         * @param {string} [title] 
         * @param {string} [slug] 
         * @param {string} [description] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWordTutorialCategory(coverPhoto?: File, title?: string, slug?: string, description?: string, options?: any): AxiosPromise<WordTutorialCategoryAdministrationCommandsCreateCommandResult> {
            return localVarFp.createWordTutorialCategory(coverPhoto, title, slug, description, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Kelime eğitimi kategorisini silmeyi sağlar
         * @param {number} [wordTutorialCategoryId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWordTutorialCategory(wordTutorialCategoryId?: number, options?: any): AxiosPromise<object> {
            return localVarFp.deleteWordTutorialCategory(wordTutorialCategoryId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Kelime eğitim kategorilerini listelemeyi sağlar
         * @param {number} [page] 
         * @param {number} [itemPerPage] 
         * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWordTutorialCategoriesForAdministration(page?: number, itemPerPage?: number, searchKeyword?: string, options?: any): AxiosPromise<WordTutorialCategoryAdministrationQueriesListQueryResult> {
            return localVarFp.listWordTutorialCategoriesForAdministration(page, itemPerPage, searchKeyword, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WordTutorialCategoryAdministrationApi - interface
 * @export
 * @interface WordTutorialCategoryAdministrationApi
 */
export interface WordTutorialCategoryAdministrationApiInterface {
    /**
     * 
     * @summary Kelime eğitimi kategorisinin kapak fotoğrafını değiştirmeyi sağlar
     * @param {File} [newCoverPhoto] 
     * @param {number} [wordTutorialCategoryId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialCategoryAdministrationApiInterface
     */
    changeCoverPhotoOfTheWordTutorialCategory(newCoverPhoto?: File, wordTutorialCategoryId?: number, options?: AxiosRequestConfig): AxiosPromise<object>;

    /**
     * 
     * @summary Kelime eğitimi kategorisinin açıklamasını değiştirmeyi sağlar
     * @param {number} [wordTutorialCategoryId] 
     * @param {string} [wordTutorialCategoryDescription] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialCategoryAdministrationApiInterface
     */
    changeDescriptionOfTheWordTutorialCategory(wordTutorialCategoryId?: number, wordTutorialCategoryDescription?: string, options?: AxiosRequestConfig): AxiosPromise<object>;

    /**
     * 
     * @summary Kelime eğitimi kategorisinin isim etiketini değiştirmeyi sağlar
     * @param {number} [wordTutorialCategoryId] 
     * @param {string} [wordTutorialCategorySlug] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialCategoryAdministrationApiInterface
     */
    changeSlugOfTheWordTutorialCategory(wordTutorialCategoryId?: number, wordTutorialCategorySlug?: string, options?: AxiosRequestConfig): AxiosPromise<object>;

    /**
     * 
     * @summary Kelime eğitimi kategorisinin ismini değiştirmeyi sağlar
     * @param {number} [wordTutorialCategoryId] 
     * @param {string} [wordTutorialCategoryTitle] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialCategoryAdministrationApiInterface
     */
    changeTitleOfTheWordTutorialCategory(wordTutorialCategoryId?: number, wordTutorialCategoryTitle?: string, options?: AxiosRequestConfig): AxiosPromise<object>;

    /**
     * 
     * @summary Kelime eğitimi kategorisi eklemeyi sağlar
     * @param {File} [coverPhoto] 
     * @param {string} [title] 
     * @param {string} [slug] 
     * @param {string} [description] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialCategoryAdministrationApiInterface
     */
    createWordTutorialCategory(coverPhoto?: File, title?: string, slug?: string, description?: string, options?: AxiosRequestConfig): AxiosPromise<WordTutorialCategoryAdministrationCommandsCreateCommandResult>;

    /**
     * 
     * @summary Kelime eğitimi kategorisini silmeyi sağlar
     * @param {number} [wordTutorialCategoryId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialCategoryAdministrationApiInterface
     */
    deleteWordTutorialCategory(wordTutorialCategoryId?: number, options?: AxiosRequestConfig): AxiosPromise<object>;

    /**
     * 
     * @summary Kelime eğitim kategorilerini listelemeyi sağlar
     * @param {number} [page] 
     * @param {number} [itemPerPage] 
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialCategoryAdministrationApiInterface
     */
    listWordTutorialCategoriesForAdministration(page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig): AxiosPromise<WordTutorialCategoryAdministrationQueriesListQueryResult>;

}

/**
 * WordTutorialCategoryAdministrationApi - object-oriented interface
 * @export
 * @class WordTutorialCategoryAdministrationApi
 * @extends {BaseAPI}
 */
export class WordTutorialCategoryAdministrationApi extends BaseAPI implements WordTutorialCategoryAdministrationApiInterface {
    /**
     * 
     * @summary Kelime eğitimi kategorisinin kapak fotoğrafını değiştirmeyi sağlar
     * @param {File} [newCoverPhoto] 
     * @param {number} [wordTutorialCategoryId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialCategoryAdministrationApi
     */
    public changeCoverPhotoOfTheWordTutorialCategory(newCoverPhoto?: File, wordTutorialCategoryId?: number, options?: AxiosRequestConfig) {
        return WordTutorialCategoryAdministrationApiFp(this.configuration).changeCoverPhotoOfTheWordTutorialCategory(newCoverPhoto, wordTutorialCategoryId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Kelime eğitimi kategorisinin açıklamasını değiştirmeyi sağlar
     * @param {number} [wordTutorialCategoryId] 
     * @param {string} [wordTutorialCategoryDescription] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialCategoryAdministrationApi
     */
    public changeDescriptionOfTheWordTutorialCategory(wordTutorialCategoryId?: number, wordTutorialCategoryDescription?: string, options?: AxiosRequestConfig) {
        return WordTutorialCategoryAdministrationApiFp(this.configuration).changeDescriptionOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategoryDescription, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Kelime eğitimi kategorisinin isim etiketini değiştirmeyi sağlar
     * @param {number} [wordTutorialCategoryId] 
     * @param {string} [wordTutorialCategorySlug] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialCategoryAdministrationApi
     */
    public changeSlugOfTheWordTutorialCategory(wordTutorialCategoryId?: number, wordTutorialCategorySlug?: string, options?: AxiosRequestConfig) {
        return WordTutorialCategoryAdministrationApiFp(this.configuration).changeSlugOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategorySlug, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Kelime eğitimi kategorisinin ismini değiştirmeyi sağlar
     * @param {number} [wordTutorialCategoryId] 
     * @param {string} [wordTutorialCategoryTitle] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialCategoryAdministrationApi
     */
    public changeTitleOfTheWordTutorialCategory(wordTutorialCategoryId?: number, wordTutorialCategoryTitle?: string, options?: AxiosRequestConfig) {
        return WordTutorialCategoryAdministrationApiFp(this.configuration).changeTitleOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategoryTitle, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Kelime eğitimi kategorisi eklemeyi sağlar
     * @param {File} [coverPhoto] 
     * @param {string} [title] 
     * @param {string} [slug] 
     * @param {string} [description] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialCategoryAdministrationApi
     */
    public createWordTutorialCategory(coverPhoto?: File, title?: string, slug?: string, description?: string, options?: AxiosRequestConfig) {
        return WordTutorialCategoryAdministrationApiFp(this.configuration).createWordTutorialCategory(coverPhoto, title, slug, description, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Kelime eğitimi kategorisini silmeyi sağlar
     * @param {number} [wordTutorialCategoryId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialCategoryAdministrationApi
     */
    public deleteWordTutorialCategory(wordTutorialCategoryId?: number, options?: AxiosRequestConfig) {
        return WordTutorialCategoryAdministrationApiFp(this.configuration).deleteWordTutorialCategory(wordTutorialCategoryId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Kelime eğitim kategorilerini listelemeyi sağlar
     * @param {number} [page] 
     * @param {number} [itemPerPage] 
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialCategoryAdministrationApi
     */
    public listWordTutorialCategoriesForAdministration(page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig) {
        return WordTutorialCategoryAdministrationApiFp(this.configuration).listWordTutorialCategoriesForAdministration(page, itemPerPage, searchKeyword, options).then((request) => request(this.axios, this.basePath));
    }
}
