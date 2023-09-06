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
 * WordTutorialApi - axios parameter creator
 * @export
 */
export const WordTutorialApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Kullanıcının kelime eğitimini favori olarak işaretlemesini sağlar.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        favoriteWordTutorial: (wordTutorialId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/WordTutorial/Favorite`;
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
            if (wordTutorialId !== undefined) {
                localVarQueryParameter['WordTutorialId'] = wordTutorialId;
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
         * @summary Kullanıcının kelime eğitimini beğenmesini sağlar.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        likeWordTutorial: (wordTutorialId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/WordTutorial/Like`;
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
            if (wordTutorialId !== undefined) {
                localVarQueryParameter['WordTutorialId'] = wordTutorialId;
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
         * @summary Kişinin favori olarak kaydettiği kelimeleri listeler
         * @param {number} [lastId]
         * @param {string} [query]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMyFavoriteWordTutorials: (lastId, query, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/WordTutorial/ListMyFavorites`;
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
            if (lastId !== undefined) {
                localVarQueryParameter['LastId'] = lastId;
            }
            if (query !== undefined) {
                localVarQueryParameter['Query'] = query;
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
         * @summary Kullanıcının kelime eğitimini favorilerinden çıkartmasını sağlar.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unfavoriteWordTutorial: (wordTutorialId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/WordTutorial/Unfavorite`;
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
            if (wordTutorialId !== undefined) {
                localVarQueryParameter['WordTutorialId'] = wordTutorialId;
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
         * @summary Kullanıcının kelime eğitimini beğenmesini sağlar.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unlikeWordTutorial: (wordTutorialId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/WordTutorial/Unlike`;
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
            if (wordTutorialId !== undefined) {
                localVarQueryParameter['WordTutorialId'] = wordTutorialId;
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
         * @summary Kullanıcı tarafından gerçekleştirilen kelime eğitimi paylaşımını sunucuya bildirir.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wordTutorialShared: (wordTutorialId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/WordTutorial/Share`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (wordTutorialId !== undefined) {
                localVarQueryParameter['WordTutorialId'] = wordTutorialId;
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
         * @summary Kullanıcının izlediği videoyu sunucuya bildirir.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wordTutorialVideoWatched: (wordTutorialId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/WordTutorial/VideoWatched`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (wordTutorialId !== undefined) {
                localVarQueryParameter['WordTutorialId'] = wordTutorialId;
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
 * WordTutorialApi - functional programming interface
 * @export
 */
export const WordTutorialApiFp = function (configuration) {
    const localVarAxiosParamCreator = WordTutorialApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @summary Kullanıcının kelime eğitimini favori olarak işaretlemesini sağlar.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        favoriteWordTutorial(wordTutorialId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.favoriteWordTutorial(wordTutorialId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Kullanıcının kelime eğitimini beğenmesini sağlar.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        likeWordTutorial(wordTutorialId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.likeWordTutorial(wordTutorialId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Kişinin favori olarak kaydettiği kelimeleri listeler
         * @param {number} [lastId]
         * @param {string} [query]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMyFavoriteWordTutorials(lastId, query, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.listMyFavoriteWordTutorials(lastId, query, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Kullanıcının kelime eğitimini favorilerinden çıkartmasını sağlar.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unfavoriteWordTutorial(wordTutorialId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.unfavoriteWordTutorial(wordTutorialId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Kullanıcının kelime eğitimini beğenmesini sağlar.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unlikeWordTutorial(wordTutorialId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.unlikeWordTutorial(wordTutorialId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Kullanıcı tarafından gerçekleştirilen kelime eğitimi paylaşımını sunucuya bildirir.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wordTutorialShared(wordTutorialId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.wordTutorialShared(wordTutorialId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Kullanıcının izlediği videoyu sunucuya bildirir.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wordTutorialVideoWatched(wordTutorialId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.wordTutorialVideoWatched(wordTutorialId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
    };
};
/**
 * WordTutorialApi - factory interface
 * @export
 */
export const WordTutorialApiFactory = function (configuration, basePath, axios) {
    const localVarFp = WordTutorialApiFp(configuration);
    return {
        /**
         *
         * @summary Kullanıcının kelime eğitimini favori olarak işaretlemesini sağlar.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        favoriteWordTutorial(wordTutorialId, options) {
            return localVarFp.favoriteWordTutorial(wordTutorialId, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Kullanıcının kelime eğitimini beğenmesini sağlar.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        likeWordTutorial(wordTutorialId, options) {
            return localVarFp.likeWordTutorial(wordTutorialId, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Kişinin favori olarak kaydettiği kelimeleri listeler
         * @param {number} [lastId]
         * @param {string} [query]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMyFavoriteWordTutorials(lastId, query, options) {
            return localVarFp.listMyFavoriteWordTutorials(lastId, query, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Kullanıcının kelime eğitimini favorilerinden çıkartmasını sağlar.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unfavoriteWordTutorial(wordTutorialId, options) {
            return localVarFp.unfavoriteWordTutorial(wordTutorialId, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Kullanıcının kelime eğitimini beğenmesini sağlar.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unlikeWordTutorial(wordTutorialId, options) {
            return localVarFp.unlikeWordTutorial(wordTutorialId, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Kullanıcı tarafından gerçekleştirilen kelime eğitimi paylaşımını sunucuya bildirir.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wordTutorialShared(wordTutorialId, options) {
            return localVarFp.wordTutorialShared(wordTutorialId, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Kullanıcının izlediği videoyu sunucuya bildirir.
         * @param {number} [wordTutorialId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wordTutorialVideoWatched(wordTutorialId, options) {
            return localVarFp.wordTutorialVideoWatched(wordTutorialId, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * WordTutorialApi - object-oriented interface
 * @export
 * @class WordTutorialApi
 * @extends {BaseAPI}
 */
export class WordTutorialApi extends BaseAPI {
    /**
     *
     * @summary Kullanıcının kelime eğitimini favori olarak işaretlemesini sağlar.
     * @param {number} [wordTutorialId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialApi
     */
    favoriteWordTutorial(wordTutorialId, options) {
        return WordTutorialApiFp(this.configuration).favoriteWordTutorial(wordTutorialId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Kullanıcının kelime eğitimini beğenmesini sağlar.
     * @param {number} [wordTutorialId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialApi
     */
    likeWordTutorial(wordTutorialId, options) {
        return WordTutorialApiFp(this.configuration).likeWordTutorial(wordTutorialId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Kişinin favori olarak kaydettiği kelimeleri listeler
     * @param {number} [lastId]
     * @param {string} [query]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialApi
     */
    listMyFavoriteWordTutorials(lastId, query, options) {
        return WordTutorialApiFp(this.configuration).listMyFavoriteWordTutorials(lastId, query, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Kullanıcının kelime eğitimini favorilerinden çıkartmasını sağlar.
     * @param {number} [wordTutorialId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialApi
     */
    unfavoriteWordTutorial(wordTutorialId, options) {
        return WordTutorialApiFp(this.configuration).unfavoriteWordTutorial(wordTutorialId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Kullanıcının kelime eğitimini beğenmesini sağlar.
     * @param {number} [wordTutorialId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialApi
     */
    unlikeWordTutorial(wordTutorialId, options) {
        return WordTutorialApiFp(this.configuration).unlikeWordTutorial(wordTutorialId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Kullanıcı tarafından gerçekleştirilen kelime eğitimi paylaşımını sunucuya bildirir.
     * @param {number} [wordTutorialId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialApi
     */
    wordTutorialShared(wordTutorialId, options) {
        return WordTutorialApiFp(this.configuration).wordTutorialShared(wordTutorialId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Kullanıcının izlediği videoyu sunucuya bildirir.
     * @param {number} [wordTutorialId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialApi
     */
    wordTutorialVideoWatched(wordTutorialId, options) {
        return WordTutorialApiFp(this.configuration).wordTutorialVideoWatched(wordTutorialId, options).then((request) => request(this.axios, this.basePath));
    }
}
