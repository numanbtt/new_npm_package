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
import { DUMMY_BASE_URL, assertParamExists, setBearerAuthToObject, setSearchParams, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, BaseAPI } from '../base';
/**
 * ChatApi - axios parameter creator
 * @export
 */
export const ChatApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Chat sistemine giriş yapılabilmesi için sadece Fosh Chat\'te kullanılabilen özel bir jwt üretir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChatJwt: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/Chat/GetChatJwt`;
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
        /**
         *
         * @summary Chat sistemi sadece kullanıcı idlerini bilmekte. Bu yüzden kullanıcının diğer detaylarını bu komut ile çekeceğiz.
         * @param {Array<string>} userIdList Bilgileri öğrenilmek istenilen kullanıcıların guid id listesi
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserInformations: (userIdList, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'userIdList' is not null or undefined
            assertParamExists('getUserInformations', 'userIdList', userIdList);
            const localVarPath = `/api/Chat/GetUserInformations`;
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
            if (userIdList) {
                localVarQueryParameter['UserIdList'] = userIdList;
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
         * @summary Öğrenci olarak chat\'i şikayet etmeye yarar.
         * @param {string} [chatSessionId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reportChatAsStudent: (chatSessionId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/Chat/ReportChatAsStudent`;
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
            if (chatSessionId !== undefined) {
                localVarQueryParameter['ChatSessionId'] = chatSessionId;
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
         * @summary Öğretmen olarak chat\'i şikayet etmeye yarar.
         * @param {string} [chatSessionId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reportChatAsTeacher: (chatSessionId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/Chat/ReportChatAsTeacher`;
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
            if (chatSessionId !== undefined) {
                localVarQueryParameter['ChatSessionId'] = chatSessionId;
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
 * ChatApi - functional programming interface
 * @export
 */
export const ChatApiFp = function (configuration) {
    const localVarAxiosParamCreator = ChatApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @summary Chat sistemine giriş yapılabilmesi için sadece Fosh Chat\'te kullanılabilen özel bir jwt üretir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChatJwt(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getChatJwt(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Chat sistemi sadece kullanıcı idlerini bilmekte. Bu yüzden kullanıcının diğer detaylarını bu komut ile çekeceğiz.
         * @param {Array<string>} userIdList Bilgileri öğrenilmek istenilen kullanıcıların guid id listesi
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserInformations(userIdList, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getUserInformations(userIdList, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Öğrenci olarak chat\'i şikayet etmeye yarar.
         * @param {string} [chatSessionId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reportChatAsStudent(chatSessionId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.reportChatAsStudent(chatSessionId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Öğretmen olarak chat\'i şikayet etmeye yarar.
         * @param {string} [chatSessionId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reportChatAsTeacher(chatSessionId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.reportChatAsTeacher(chatSessionId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
    };
};
/**
 * ChatApi - factory interface
 * @export
 */
export const ChatApiFactory = function (configuration, basePath, axios) {
    const localVarFp = ChatApiFp(configuration);
    return {
        /**
         *
         * @summary Chat sistemine giriş yapılabilmesi için sadece Fosh Chat\'te kullanılabilen özel bir jwt üretir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChatJwt(options) {
            return localVarFp.getChatJwt(options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Chat sistemi sadece kullanıcı idlerini bilmekte. Bu yüzden kullanıcının diğer detaylarını bu komut ile çekeceğiz.
         * @param {Array<string>} userIdList Bilgileri öğrenilmek istenilen kullanıcıların guid id listesi
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserInformations(userIdList, options) {
            return localVarFp.getUserInformations(userIdList, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Öğrenci olarak chat\'i şikayet etmeye yarar.
         * @param {string} [chatSessionId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reportChatAsStudent(chatSessionId, options) {
            return localVarFp.reportChatAsStudent(chatSessionId, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Öğretmen olarak chat\'i şikayet etmeye yarar.
         * @param {string} [chatSessionId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reportChatAsTeacher(chatSessionId, options) {
            return localVarFp.reportChatAsTeacher(chatSessionId, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * ChatApi - object-oriented interface
 * @export
 * @class ChatApi
 * @extends {BaseAPI}
 */
export class ChatApi extends BaseAPI {
    /**
     *
     * @summary Chat sistemine giriş yapılabilmesi için sadece Fosh Chat\'te kullanılabilen özel bir jwt üretir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    getChatJwt(options) {
        return ChatApiFp(this.configuration).getChatJwt(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Chat sistemi sadece kullanıcı idlerini bilmekte. Bu yüzden kullanıcının diğer detaylarını bu komut ile çekeceğiz.
     * @param {Array<string>} userIdList Bilgileri öğrenilmek istenilen kullanıcıların guid id listesi
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    getUserInformations(userIdList, options) {
        return ChatApiFp(this.configuration).getUserInformations(userIdList, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Öğrenci olarak chat\'i şikayet etmeye yarar.
     * @param {string} [chatSessionId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    reportChatAsStudent(chatSessionId, options) {
        return ChatApiFp(this.configuration).reportChatAsStudent(chatSessionId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Öğretmen olarak chat\'i şikayet etmeye yarar.
     * @param {string} [chatSessionId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    reportChatAsTeacher(chatSessionId, options) {
        return ChatApiFp(this.configuration).reportChatAsTeacher(chatSessionId, options).then((request) => request(this.axios, this.basePath));
    }
}
