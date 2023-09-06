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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, setBearerAuthToObject, setSearchParams, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, BaseAPI } from '../base';
/**
 * LegalDocumentAdministrationApi - axios parameter creator
 * @export
 */
export const LegalDocumentAdministrationApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Belirlenen dökümanın içeriğini değiştirir.
         * @param {number} [legalDocumentId]
         * @param {string} [content]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeContentOfTheLegalDocument: (legalDocumentId, content, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/LegalDocumentAdministration/ChangeContent`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearer required
            // http bearer authentication required
            yield setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (legalDocumentId !== undefined) {
                localVarQueryParameter['LegalDocumentId'] = legalDocumentId;
            }
            if (content !== undefined) {
                localVarQueryParameter['Content'] = content;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Belirlenen dökümanın kısa adını değiştirir.
         * @param {number} [legalDocumentId]
         * @param {string} [slug]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeSlugOfTheLegalDocument: (legalDocumentId, slug, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/LegalDocumentAdministration/ChangeSlug`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearer required
            // http bearer authentication required
            yield setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (legalDocumentId !== undefined) {
                localVarQueryParameter['LegalDocumentId'] = legalDocumentId;
            }
            if (slug !== undefined) {
                localVarQueryParameter['Slug'] = slug;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Belirlenen dökümanın başlığını değiştirir.
         * @param {number} [legalDocumentId]
         * @param {string} [title]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeTitleOfTheLegalDocument: (legalDocumentId, title, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/LegalDocumentAdministration/ChangeTitle`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearer required
            // http bearer authentication required
            yield setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (legalDocumentId !== undefined) {
                localVarQueryParameter['LegalDocumentId'] = legalDocumentId;
            }
            if (title !== undefined) {
                localVarQueryParameter['Title'] = title;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Sistemde kayıtlı tüm yasal dökümanları getirir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllLegalDocumentsForAdministration: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/LegalDocumentAdministration/GetAll`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearer required
            // http bearer authentication required
            yield setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * LegalDocumentAdministrationApi - functional programming interface
 * @export
 */
export const LegalDocumentAdministrationApiFp = function (configuration) {
    const localVarAxiosParamCreator = LegalDocumentAdministrationApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @summary Belirlenen dökümanın içeriğini değiştirir.
         * @param {number} [legalDocumentId]
         * @param {string} [content]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeContentOfTheLegalDocument(legalDocumentId, content, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.changeContentOfTheLegalDocument(legalDocumentId, content, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Belirlenen dökümanın kısa adını değiştirir.
         * @param {number} [legalDocumentId]
         * @param {string} [slug]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeSlugOfTheLegalDocument(legalDocumentId, slug, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.changeSlugOfTheLegalDocument(legalDocumentId, slug, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Belirlenen dökümanın başlığını değiştirir.
         * @param {number} [legalDocumentId]
         * @param {string} [title]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeTitleOfTheLegalDocument(legalDocumentId, title, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.changeTitleOfTheLegalDocument(legalDocumentId, title, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Sistemde kayıtlı tüm yasal dökümanları getirir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllLegalDocumentsForAdministration(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getAllLegalDocumentsForAdministration(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
    };
};
/**
 * LegalDocumentAdministrationApi - factory interface
 * @export
 */
export const LegalDocumentAdministrationApiFactory = function (configuration, basePath, axios) {
    const localVarFp = LegalDocumentAdministrationApiFp(configuration);
    return {
        /**
         *
         * @summary Belirlenen dökümanın içeriğini değiştirir.
         * @param {number} [legalDocumentId]
         * @param {string} [content]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeContentOfTheLegalDocument(legalDocumentId, content, options) {
            return localVarFp.changeContentOfTheLegalDocument(legalDocumentId, content, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Belirlenen dökümanın kısa adını değiştirir.
         * @param {number} [legalDocumentId]
         * @param {string} [slug]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeSlugOfTheLegalDocument(legalDocumentId, slug, options) {
            return localVarFp.changeSlugOfTheLegalDocument(legalDocumentId, slug, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Belirlenen dökümanın başlığını değiştirir.
         * @param {number} [legalDocumentId]
         * @param {string} [title]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeTitleOfTheLegalDocument(legalDocumentId, title, options) {
            return localVarFp.changeTitleOfTheLegalDocument(legalDocumentId, title, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Sistemde kayıtlı tüm yasal dökümanları getirir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllLegalDocumentsForAdministration(options) {
            return localVarFp.getAllLegalDocumentsForAdministration(options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * LegalDocumentAdministrationApi - object-oriented interface
 * @export
 * @class LegalDocumentAdministrationApi
 * @extends {BaseAPI}
 */
export class LegalDocumentAdministrationApi extends BaseAPI {
    /**
     *
     * @summary Belirlenen dökümanın içeriğini değiştirir.
     * @param {number} [legalDocumentId]
     * @param {string} [content]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LegalDocumentAdministrationApi
     */
    changeContentOfTheLegalDocument(legalDocumentId, content, options) {
        return LegalDocumentAdministrationApiFp(this.configuration).changeContentOfTheLegalDocument(legalDocumentId, content, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Belirlenen dökümanın kısa adını değiştirir.
     * @param {number} [legalDocumentId]
     * @param {string} [slug]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LegalDocumentAdministrationApi
     */
    changeSlugOfTheLegalDocument(legalDocumentId, slug, options) {
        return LegalDocumentAdministrationApiFp(this.configuration).changeSlugOfTheLegalDocument(legalDocumentId, slug, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Belirlenen dökümanın başlığını değiştirir.
     * @param {number} [legalDocumentId]
     * @param {string} [title]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LegalDocumentAdministrationApi
     */
    changeTitleOfTheLegalDocument(legalDocumentId, title, options) {
        return LegalDocumentAdministrationApiFp(this.configuration).changeTitleOfTheLegalDocument(legalDocumentId, title, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Sistemde kayıtlı tüm yasal dökümanları getirir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LegalDocumentAdministrationApi
     */
    getAllLegalDocumentsForAdministration(options) {
        return LegalDocumentAdministrationApiFp(this.configuration).getAllLegalDocumentsForAdministration(options).then((request) => request(this.axios, this.basePath));
    }
}
