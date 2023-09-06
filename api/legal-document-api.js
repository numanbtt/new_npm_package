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
import { DUMMY_BASE_URL, setSearchParams, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, BaseAPI } from '../base';
/**
 * LegalDocumentApi - axios parameter creator
 * @export
 */
export const LegalDocumentApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Sistemde kayıtlı tüm yasal dökümanları getirir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllLegalDocuments: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/LegalDocument/GetAll`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
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
 * LegalDocumentApi - functional programming interface
 * @export
 */
export const LegalDocumentApiFp = function (configuration) {
    const localVarAxiosParamCreator = LegalDocumentApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @summary Sistemde kayıtlı tüm yasal dökümanları getirir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllLegalDocuments(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getAllLegalDocuments(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
    };
};
/**
 * LegalDocumentApi - factory interface
 * @export
 */
export const LegalDocumentApiFactory = function (configuration, basePath, axios) {
    const localVarFp = LegalDocumentApiFp(configuration);
    return {
        /**
         *
         * @summary Sistemde kayıtlı tüm yasal dökümanları getirir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllLegalDocuments(options) {
            return localVarFp.getAllLegalDocuments(options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * LegalDocumentApi - object-oriented interface
 * @export
 * @class LegalDocumentApi
 * @extends {BaseAPI}
 */
export class LegalDocumentApi extends BaseAPI {
    /**
     *
     * @summary Sistemde kayıtlı tüm yasal dökümanları getirir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LegalDocumentApi
     */
    getAllLegalDocuments(options) {
        return LegalDocumentApiFp(this.configuration).getAllLegalDocuments(options).then((request) => request(this.axios, this.basePath));
    }
}