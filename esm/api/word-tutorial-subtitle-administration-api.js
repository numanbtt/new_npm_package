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
 * WordTutorialSubtitleAdministrationApi - axios parameter creator
 * @export
 */
export const WordTutorialSubtitleAdministrationApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Kelime eğitimine ait yeni bir çeviri dosyası yüklenmesini sağlar.
         * @param {File} [file]
         * @param {number} [wordTutorialId]
         * @param {string} [subtitleLanguageCode]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addSubtitleToWordTutorial: (file, wordTutorialId, subtitleLanguageCode, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/WordTutorialSubtitleAdministration/AddSubtitleToWordTutorial`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();
            if (wordTutorialId !== undefined) {
                localVarQueryParameter['WordTutorialId'] = wordTutorialId;
            }
            if (subtitleLanguageCode !== undefined) {
                localVarQueryParameter['SubtitleLanguageCode'] = subtitleLanguageCode;
            }
            if (file !== undefined) {
                localVarFormParams.append('File', file);
            }
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = localVarFormParams;
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Kelime eğitiminden bir altyazı dosyasının silinmesini sağlar.
         * @param {number} [subtitleId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeSubtitleFromWordTutorial: (subtitleId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/WordTutorialSubtitleAdministration/RemoveSubtitleFromWordTutorial`;
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
            if (subtitleId !== undefined) {
                localVarQueryParameter['SubtitleId'] = subtitleId;
            }
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
 * WordTutorialSubtitleAdministrationApi - functional programming interface
 * @export
 */
export const WordTutorialSubtitleAdministrationApiFp = function (configuration) {
    const localVarAxiosParamCreator = WordTutorialSubtitleAdministrationApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @summary Kelime eğitimine ait yeni bir çeviri dosyası yüklenmesini sağlar.
         * @param {File} [file]
         * @param {number} [wordTutorialId]
         * @param {string} [subtitleLanguageCode]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addSubtitleToWordTutorial(file, wordTutorialId, subtitleLanguageCode, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.addSubtitleToWordTutorial(file, wordTutorialId, subtitleLanguageCode, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Kelime eğitiminden bir altyazı dosyasının silinmesini sağlar.
         * @param {number} [subtitleId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeSubtitleFromWordTutorial(subtitleId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.removeSubtitleFromWordTutorial(subtitleId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
    };
};
/**
 * WordTutorialSubtitleAdministrationApi - factory interface
 * @export
 */
export const WordTutorialSubtitleAdministrationApiFactory = function (configuration, basePath, axios) {
    const localVarFp = WordTutorialSubtitleAdministrationApiFp(configuration);
    return {
        /**
         *
         * @summary Kelime eğitimine ait yeni bir çeviri dosyası yüklenmesini sağlar.
         * @param {File} [file]
         * @param {number} [wordTutorialId]
         * @param {string} [subtitleLanguageCode]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addSubtitleToWordTutorial(file, wordTutorialId, subtitleLanguageCode, options) {
            return localVarFp.addSubtitleToWordTutorial(file, wordTutorialId, subtitleLanguageCode, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Kelime eğitiminden bir altyazı dosyasının silinmesini sağlar.
         * @param {number} [subtitleId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeSubtitleFromWordTutorial(subtitleId, options) {
            return localVarFp.removeSubtitleFromWordTutorial(subtitleId, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * WordTutorialSubtitleAdministrationApi - object-oriented interface
 * @export
 * @class WordTutorialSubtitleAdministrationApi
 * @extends {BaseAPI}
 */
export class WordTutorialSubtitleAdministrationApi extends BaseAPI {
    /**
     *
     * @summary Kelime eğitimine ait yeni bir çeviri dosyası yüklenmesini sağlar.
     * @param {File} [file]
     * @param {number} [wordTutorialId]
     * @param {string} [subtitleLanguageCode]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialSubtitleAdministrationApi
     */
    addSubtitleToWordTutorial(file, wordTutorialId, subtitleLanguageCode, options) {
        return WordTutorialSubtitleAdministrationApiFp(this.configuration).addSubtitleToWordTutorial(file, wordTutorialId, subtitleLanguageCode, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Kelime eğitiminden bir altyazı dosyasının silinmesini sağlar.
     * @param {number} [subtitleId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialSubtitleAdministrationApi
     */
    removeSubtitleFromWordTutorial(subtitleId, options) {
        return WordTutorialSubtitleAdministrationApiFp(this.configuration).removeSubtitleFromWordTutorial(subtitleId, options).then((request) => request(this.axios, this.basePath));
    }
}
