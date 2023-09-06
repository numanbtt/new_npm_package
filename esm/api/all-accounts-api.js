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
 * AllAccountsApi - axios parameter creator
 * @export
 */
export const AllAccountsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Giriş yapmış hesabın şifresini değiştirmesini sağlar.
         * @param {string} [newPassword]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changePassword: (newPassword, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/AllAccounts/ChangeMyPassword`;
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
            if (newPassword !== undefined) {
                localVarQueryParameter['NewPassword'] = newPassword;
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
         * @summary Sosyal hesaplar ile giriş yapıldığında, kullanıcı browser\'ının dönüş yaptığı url\'dir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginResult: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/AllAccounts/LoginResult`;
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
        /**
         *
         * @summary Misafir kullanıcının unuttuğu şifresini yenileyebilmesini sağlar. Dikkat: Sosyal medya girişlerinde bu metodun çalışmaması gerekir.
         * @param {string} [email]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lostPassword: (email, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/AllAccounts/LostPassword`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (email !== undefined) {
                localVarQueryParameter['Email'] = email;
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
         * @summary Hesap şifresinin kurtarılmasını sağlar.
         * @param {string} [email]
         * @param {string} [recoverCode]
         * @param {string} [newPassword]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recoverPassword: (email, recoverCode, newPassword, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/AllAccounts/RecoverPassword`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }
            if (recoverCode !== undefined) {
                localVarQueryParameter['RecoverCode'] = recoverCode;
            }
            if (newPassword !== undefined) {
                localVarQueryParameter['NewPassword'] = newPassword;
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
 * AllAccountsApi - functional programming interface
 * @export
 */
export const AllAccountsApiFp = function (configuration) {
    const localVarAxiosParamCreator = AllAccountsApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @summary Giriş yapmış hesabın şifresini değiştirmesini sağlar.
         * @param {string} [newPassword]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changePassword(newPassword, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.changePassword(newPassword, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Sosyal hesaplar ile giriş yapıldığında, kullanıcı browser\'ının dönüş yaptığı url\'dir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginResult(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.loginResult(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Misafir kullanıcının unuttuğu şifresini yenileyebilmesini sağlar. Dikkat: Sosyal medya girişlerinde bu metodun çalışmaması gerekir.
         * @param {string} [email]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lostPassword(email, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.lostPassword(email, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Hesap şifresinin kurtarılmasını sağlar.
         * @param {string} [email]
         * @param {string} [recoverCode]
         * @param {string} [newPassword]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recoverPassword(email, recoverCode, newPassword, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.recoverPassword(email, recoverCode, newPassword, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
    };
};
/**
 * AllAccountsApi - factory interface
 * @export
 */
export const AllAccountsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = AllAccountsApiFp(configuration);
    return {
        /**
         *
         * @summary Giriş yapmış hesabın şifresini değiştirmesini sağlar.
         * @param {string} [newPassword]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changePassword(newPassword, options) {
            return localVarFp.changePassword(newPassword, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Sosyal hesaplar ile giriş yapıldığında, kullanıcı browser\'ının dönüş yaptığı url\'dir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginResult(options) {
            return localVarFp.loginResult(options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Misafir kullanıcının unuttuğu şifresini yenileyebilmesini sağlar. Dikkat: Sosyal medya girişlerinde bu metodun çalışmaması gerekir.
         * @param {string} [email]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lostPassword(email, options) {
            return localVarFp.lostPassword(email, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Hesap şifresinin kurtarılmasını sağlar.
         * @param {string} [email]
         * @param {string} [recoverCode]
         * @param {string} [newPassword]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recoverPassword(email, recoverCode, newPassword, options) {
            return localVarFp.recoverPassword(email, recoverCode, newPassword, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * AllAccountsApi - object-oriented interface
 * @export
 * @class AllAccountsApi
 * @extends {BaseAPI}
 */
export class AllAccountsApi extends BaseAPI {
    /**
     *
     * @summary Giriş yapmış hesabın şifresini değiştirmesini sağlar.
     * @param {string} [newPassword]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AllAccountsApi
     */
    changePassword(newPassword, options) {
        return AllAccountsApiFp(this.configuration).changePassword(newPassword, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Sosyal hesaplar ile giriş yapıldığında, kullanıcı browser\'ının dönüş yaptığı url\'dir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AllAccountsApi
     */
    loginResult(options) {
        return AllAccountsApiFp(this.configuration).loginResult(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Misafir kullanıcının unuttuğu şifresini yenileyebilmesini sağlar. Dikkat: Sosyal medya girişlerinde bu metodun çalışmaması gerekir.
     * @param {string} [email]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AllAccountsApi
     */
    lostPassword(email, options) {
        return AllAccountsApiFp(this.configuration).lostPassword(email, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Hesap şifresinin kurtarılmasını sağlar.
     * @param {string} [email]
     * @param {string} [recoverCode]
     * @param {string} [newPassword]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AllAccountsApi
     */
    recoverPassword(email, recoverCode, newPassword, options) {
        return AllAccountsApiFp(this.configuration).recoverPassword(email, recoverCode, newPassword, options).then((request) => request(this.axios, this.basePath));
    }
}