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
 * WordTutorialCategoryAdministrationApi - axios parameter creator
 * @export
 */
export const WordTutorialCategoryAdministrationApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Kelime eğitimi kategorisinin kapak fotoğrafını değiştirmeyi sağlar
         * @param {File} [newCoverPhoto]
         * @param {number} [wordTutorialCategoryId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeCoverPhotoOfTheWordTutorialCategory: (newCoverPhoto, wordTutorialCategoryId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/WordTutorialCategoryAdministration/ChangeCoverPhoto`;
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
            // authentication bearer required
            // http bearer authentication required
            yield setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (wordTutorialCategoryId !== undefined) {
                localVarQueryParameter['WordTutorialCategoryId'] = wordTutorialCategoryId;
            }
            if (newCoverPhoto !== undefined) {
                localVarFormParams.append('NewCoverPhoto', newCoverPhoto);
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
         * @summary Kelime eğitimi kategorisinin açıklamasını değiştirmeyi sağlar
         * @param {number} [wordTutorialCategoryId]
         * @param {string} [wordTutorialCategoryDescription]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeDescriptionOfTheWordTutorialCategory: (wordTutorialCategoryId, wordTutorialCategoryDescription, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/WordTutorialCategoryAdministration/ChangeDescription`;
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
            if (wordTutorialCategoryId !== undefined) {
                localVarQueryParameter['WordTutorialCategoryId'] = wordTutorialCategoryId;
            }
            if (wordTutorialCategoryDescription !== undefined) {
                localVarQueryParameter['WordTutorialCategoryDescription'] = wordTutorialCategoryDescription;
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
         * @summary Kelime eğitimi kategorisinin isim etiketini değiştirmeyi sağlar
         * @param {number} [wordTutorialCategoryId]
         * @param {string} [wordTutorialCategorySlug]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeSlugOfTheWordTutorialCategory: (wordTutorialCategoryId, wordTutorialCategorySlug, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/WordTutorialCategoryAdministration/ChangeSlug`;
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
            if (wordTutorialCategoryId !== undefined) {
                localVarQueryParameter['WordTutorialCategoryId'] = wordTutorialCategoryId;
            }
            if (wordTutorialCategorySlug !== undefined) {
                localVarQueryParameter['WordTutorialCategorySlug'] = wordTutorialCategorySlug;
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
         * @summary Kelime eğitimi kategorisinin ismini değiştirmeyi sağlar
         * @param {number} [wordTutorialCategoryId]
         * @param {string} [wordTutorialCategoryTitle]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeTitleOfTheWordTutorialCategory: (wordTutorialCategoryId, wordTutorialCategoryTitle, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/WordTutorialCategoryAdministration/ChangeTitle`;
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
            if (wordTutorialCategoryId !== undefined) {
                localVarQueryParameter['WordTutorialCategoryId'] = wordTutorialCategoryId;
            }
            if (wordTutorialCategoryTitle !== undefined) {
                localVarQueryParameter['WordTutorialCategoryTitle'] = wordTutorialCategoryTitle;
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
         * @summary Kelime eğitimi kategorisi eklemeyi sağlar
         * @param {File} [coverPhoto]
         * @param {string} [title]
         * @param {string} [slug]
         * @param {string} [description]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWordTutorialCategory: (coverPhoto, title, slug, description, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/WordTutorialCategoryAdministration/Create`;
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
            // authentication bearer required
            // http bearer authentication required
            yield setBearerAuthToObject(localVarHeaderParameter, configuration);
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
                localVarFormParams.append('CoverPhoto', coverPhoto);
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
         * @summary Kelime eğitimi kategorisini silmeyi sağlar
         * @param {number} [wordTutorialCategoryId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWordTutorialCategory: (wordTutorialCategoryId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/WordTutorialCategoryAdministration/Delete`;
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
            if (wordTutorialCategoryId !== undefined) {
                localVarQueryParameter['WordTutorialCategoryId'] = wordTutorialCategoryId;
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
         * @summary Kelime eğitim kategorilerini listelemeyi sağlar
         * @param {number} [page]
         * @param {number} [itemPerPage]
         * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWordTutorialCategoriesForAdministration: (page, itemPerPage, searchKeyword, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/WordTutorialCategoryAdministration/List`;
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
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * WordTutorialCategoryAdministrationApi - functional programming interface
 * @export
 */
export const WordTutorialCategoryAdministrationApiFp = function (configuration) {
    const localVarAxiosParamCreator = WordTutorialCategoryAdministrationApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @summary Kelime eğitimi kategorisinin kapak fotoğrafını değiştirmeyi sağlar
         * @param {File} [newCoverPhoto]
         * @param {number} [wordTutorialCategoryId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeCoverPhotoOfTheWordTutorialCategory(newCoverPhoto, wordTutorialCategoryId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.changeCoverPhotoOfTheWordTutorialCategory(newCoverPhoto, wordTutorialCategoryId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Kelime eğitimi kategorisinin açıklamasını değiştirmeyi sağlar
         * @param {number} [wordTutorialCategoryId]
         * @param {string} [wordTutorialCategoryDescription]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeDescriptionOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategoryDescription, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.changeDescriptionOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategoryDescription, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Kelime eğitimi kategorisinin isim etiketini değiştirmeyi sağlar
         * @param {number} [wordTutorialCategoryId]
         * @param {string} [wordTutorialCategorySlug]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeSlugOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategorySlug, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.changeSlugOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategorySlug, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Kelime eğitimi kategorisinin ismini değiştirmeyi sağlar
         * @param {number} [wordTutorialCategoryId]
         * @param {string} [wordTutorialCategoryTitle]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeTitleOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategoryTitle, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.changeTitleOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategoryTitle, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
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
        createWordTutorialCategory(coverPhoto, title, slug, description, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.createWordTutorialCategory(coverPhoto, title, slug, description, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Kelime eğitimi kategorisini silmeyi sağlar
         * @param {number} [wordTutorialCategoryId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWordTutorialCategory(wordTutorialCategoryId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.deleteWordTutorialCategory(wordTutorialCategoryId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
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
        listWordTutorialCategoriesForAdministration(page, itemPerPage, searchKeyword, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.listWordTutorialCategoriesForAdministration(page, itemPerPage, searchKeyword, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
    };
};
/**
 * WordTutorialCategoryAdministrationApi - factory interface
 * @export
 */
export const WordTutorialCategoryAdministrationApiFactory = function (configuration, basePath, axios) {
    const localVarFp = WordTutorialCategoryAdministrationApiFp(configuration);
    return {
        /**
         *
         * @summary Kelime eğitimi kategorisinin kapak fotoğrafını değiştirmeyi sağlar
         * @param {File} [newCoverPhoto]
         * @param {number} [wordTutorialCategoryId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeCoverPhotoOfTheWordTutorialCategory(newCoverPhoto, wordTutorialCategoryId, options) {
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
        changeDescriptionOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategoryDescription, options) {
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
        changeSlugOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategorySlug, options) {
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
        changeTitleOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategoryTitle, options) {
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
        createWordTutorialCategory(coverPhoto, title, slug, description, options) {
            return localVarFp.createWordTutorialCategory(coverPhoto, title, slug, description, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Kelime eğitimi kategorisini silmeyi sağlar
         * @param {number} [wordTutorialCategoryId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWordTutorialCategory(wordTutorialCategoryId, options) {
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
        listWordTutorialCategoriesForAdministration(page, itemPerPage, searchKeyword, options) {
            return localVarFp.listWordTutorialCategoriesForAdministration(page, itemPerPage, searchKeyword, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * WordTutorialCategoryAdministrationApi - object-oriented interface
 * @export
 * @class WordTutorialCategoryAdministrationApi
 * @extends {BaseAPI}
 */
export class WordTutorialCategoryAdministrationApi extends BaseAPI {
    /**
     *
     * @summary Kelime eğitimi kategorisinin kapak fotoğrafını değiştirmeyi sağlar
     * @param {File} [newCoverPhoto]
     * @param {number} [wordTutorialCategoryId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordTutorialCategoryAdministrationApi
     */
    changeCoverPhotoOfTheWordTutorialCategory(newCoverPhoto, wordTutorialCategoryId, options) {
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
    changeDescriptionOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategoryDescription, options) {
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
    changeSlugOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategorySlug, options) {
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
    changeTitleOfTheWordTutorialCategory(wordTutorialCategoryId, wordTutorialCategoryTitle, options) {
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
    createWordTutorialCategory(coverPhoto, title, slug, description, options) {
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
    deleteWordTutorialCategory(wordTutorialCategoryId, options) {
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
    listWordTutorialCategoriesForAdministration(page, itemPerPage, searchKeyword, options) {
        return WordTutorialCategoryAdministrationApiFp(this.configuration).listWordTutorialCategoriesForAdministration(page, itemPerPage, searchKeyword, options).then((request) => request(this.axios, this.basePath));
    }
}