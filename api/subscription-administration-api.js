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
 * SubscriptionAdministrationApi - axios parameter creator
 * @export
 */
export const SubscriptionAdministrationApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Haftada kaç günlük eğitim alınabileceğine dair paket seçeneklerine ekleme yapar.
         * @param {number} [day]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addDayOptionToSubscriptionPackages: (day, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/SubscriptionAdministration/AddDayOption`;
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
            if (day !== undefined) {
                localVarQueryParameter['Day'] = day;
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
         * @summary Paket içerisinde günde kaç dakika eğitim alabileceği seçeneğini ekler.
         * @param {number} [minutes]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addMinutesPerDayOptionToSubscriptionPackages: (minutes, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/SubscriptionAdministration/AddMinutesPerDayOption`;
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
            if (minutes !== undefined) {
                localVarQueryParameter['Minutes'] = minutes;
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
         * @summary Paket süresi seçeneği ekler.
         * @param {string} [durationName]
         * @param {number} [durationAsMonth]
         * @param {number} [discountRate]
         * @param {string} [description]
         * @param {number} [dayOptionId]
         * @param {number} [minuteOptionId]
         * @param {number} [pricePerMint]
         * @param {number} [discountedAmount]
         * @param {number} [total]
         * @param {number} [totalDiscounted]
         * @param {number} [totalMinutes]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addPackageDurationOptionToSubscriptionPackages: (durationName, durationAsMonth, discountRate, description, dayOptionId, minuteOptionId, pricePerMint, discountedAmount, total, totalDiscounted, totalMinutes, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/SubscriptionAdministration/AddPackageDurationOption`;
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
            if (durationName !== undefined) {
                localVarQueryParameter['DurationName'] = durationName;
            }
            if (durationAsMonth !== undefined) {
                localVarQueryParameter['DurationAsMonth'] = durationAsMonth;
            }
            if (discountRate !== undefined) {
                localVarQueryParameter['DiscountRate'] = discountRate;
            }
            if (description !== undefined) {
                localVarQueryParameter['Description'] = description;
            }
            if (dayOptionId !== undefined) {
                localVarQueryParameter['DayOptionId'] = dayOptionId;
            }
            if (minuteOptionId !== undefined) {
                localVarQueryParameter['MinuteOptionId'] = minuteOptionId;
            }
            if (pricePerMint !== undefined) {
                localVarQueryParameter['PricePerMint'] = pricePerMint;
            }
            if (discountedAmount !== undefined) {
                localVarQueryParameter['DiscountedAmount'] = discountedAmount;
            }
            if (total !== undefined) {
                localVarQueryParameter['Total'] = total;
            }
            if (totalDiscounted !== undefined) {
                localVarQueryParameter['TotalDiscounted'] = totalDiscounted;
            }
            if (totalMinutes !== undefined) {
                localVarQueryParameter['TotalMinutes'] = totalMinutes;
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
         * @summary Dakika başına ücreti günceller.
         * @param {number} [price]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changePricePerMinuteForSubscriptionPackages: (price, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/SubscriptionAdministration/ChangePricePerMinute`;
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
            if (price !== undefined) {
                localVarQueryParameter['Price'] = price;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSubscriptionDropdownOptions: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/SubscriptionAdministration/ListSubscriptionDropdownOptions`;
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
         * @summary Abonelik seçeneklerini getirir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSubscriptionOptionsForManagement: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/SubscriptionAdministration/ListSubscriptionOptions`;
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
         * @summary Haftada kaç günlük eğitim alınabileceğine dair paket seçeneklerinden bir öğeyi siler.
         * @param {number} [day]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeDayOptionFromSubscriptionPackages: (day, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/SubscriptionAdministration/RemoveDayOption`;
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
            if (day !== undefined) {
                localVarQueryParameter['Day'] = day;
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
         * @summary Paket içerisinde günde kaç dakika eğitim alabileceği seçeneğini siler.
         * @param {number} [day]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeMinutesPerDayOptionFromSubscriptionPackages: (day, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/SubscriptionAdministration/RemoveMinutesPerDayOption`;
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
            if (day !== undefined) {
                localVarQueryParameter['Day'] = day;
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
         * @summary Paket süresi seçeneğini siler.
         * @param {number} [packageDurationId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removePackageDurationOptionFromSubscriptionPackages: (packageDurationId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/SubscriptionAdministration/RemovePackageDurationOption`;
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
            if (packageDurationId !== undefined) {
                localVarQueryParameter['PackageDurationId'] = packageDurationId;
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
 * SubscriptionAdministrationApi - functional programming interface
 * @export
 */
export const SubscriptionAdministrationApiFp = function (configuration) {
    const localVarAxiosParamCreator = SubscriptionAdministrationApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @summary Haftada kaç günlük eğitim alınabileceğine dair paket seçeneklerine ekleme yapar.
         * @param {number} [day]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addDayOptionToSubscriptionPackages(day, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.addDayOptionToSubscriptionPackages(day, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Paket içerisinde günde kaç dakika eğitim alabileceği seçeneğini ekler.
         * @param {number} [minutes]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addMinutesPerDayOptionToSubscriptionPackages(minutes, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.addMinutesPerDayOptionToSubscriptionPackages(minutes, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Paket süresi seçeneği ekler.
         * @param {string} [durationName]
         * @param {number} [durationAsMonth]
         * @param {number} [discountRate]
         * @param {string} [description]
         * @param {number} [dayOptionId]
         * @param {number} [minuteOptionId]
         * @param {number} [pricePerMint]
         * @param {number} [discountedAmount]
         * @param {number} [total]
         * @param {number} [totalDiscounted]
         * @param {number} [totalMinutes]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addPackageDurationOptionToSubscriptionPackages(durationName, durationAsMonth, discountRate, description, dayOptionId, minuteOptionId, pricePerMint, discountedAmount, total, totalDiscounted, totalMinutes, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.addPackageDurationOptionToSubscriptionPackages(durationName, durationAsMonth, discountRate, description, dayOptionId, minuteOptionId, pricePerMint, discountedAmount, total, totalDiscounted, totalMinutes, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Dakika başına ücreti günceller.
         * @param {number} [price]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changePricePerMinuteForSubscriptionPackages(price, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.changePricePerMinuteForSubscriptionPackages(price, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSubscriptionDropdownOptions(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.listSubscriptionDropdownOptions(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Abonelik seçeneklerini getirir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSubscriptionOptionsForManagement(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.listSubscriptionOptionsForManagement(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Haftada kaç günlük eğitim alınabileceğine dair paket seçeneklerinden bir öğeyi siler.
         * @param {number} [day]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeDayOptionFromSubscriptionPackages(day, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.removeDayOptionFromSubscriptionPackages(day, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Paket içerisinde günde kaç dakika eğitim alabileceği seçeneğini siler.
         * @param {number} [day]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeMinutesPerDayOptionFromSubscriptionPackages(day, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.removeMinutesPerDayOptionFromSubscriptionPackages(day, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Paket süresi seçeneğini siler.
         * @param {number} [packageDurationId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removePackageDurationOptionFromSubscriptionPackages(packageDurationId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.removePackageDurationOptionFromSubscriptionPackages(packageDurationId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
    };
};
/**
 * SubscriptionAdministrationApi - factory interface
 * @export
 */
export const SubscriptionAdministrationApiFactory = function (configuration, basePath, axios) {
    const localVarFp = SubscriptionAdministrationApiFp(configuration);
    return {
        /**
         *
         * @summary Haftada kaç günlük eğitim alınabileceğine dair paket seçeneklerine ekleme yapar.
         * @param {number} [day]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addDayOptionToSubscriptionPackages(day, options) {
            return localVarFp.addDayOptionToSubscriptionPackages(day, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Paket içerisinde günde kaç dakika eğitim alabileceği seçeneğini ekler.
         * @param {number} [minutes]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addMinutesPerDayOptionToSubscriptionPackages(minutes, options) {
            return localVarFp.addMinutesPerDayOptionToSubscriptionPackages(minutes, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Paket süresi seçeneği ekler.
         * @param {string} [durationName]
         * @param {number} [durationAsMonth]
         * @param {number} [discountRate]
         * @param {string} [description]
         * @param {number} [dayOptionId]
         * @param {number} [minuteOptionId]
         * @param {number} [pricePerMint]
         * @param {number} [discountedAmount]
         * @param {number} [total]
         * @param {number} [totalDiscounted]
         * @param {number} [totalMinutes]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addPackageDurationOptionToSubscriptionPackages(durationName, durationAsMonth, discountRate, description, dayOptionId, minuteOptionId, pricePerMint, discountedAmount, total, totalDiscounted, totalMinutes, options) {
            return localVarFp.addPackageDurationOptionToSubscriptionPackages(durationName, durationAsMonth, discountRate, description, dayOptionId, minuteOptionId, pricePerMint, discountedAmount, total, totalDiscounted, totalMinutes, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Dakika başına ücreti günceller.
         * @param {number} [price]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changePricePerMinuteForSubscriptionPackages(price, options) {
            return localVarFp.changePricePerMinuteForSubscriptionPackages(price, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSubscriptionDropdownOptions(options) {
            return localVarFp.listSubscriptionDropdownOptions(options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Abonelik seçeneklerini getirir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSubscriptionOptionsForManagement(options) {
            return localVarFp.listSubscriptionOptionsForManagement(options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Haftada kaç günlük eğitim alınabileceğine dair paket seçeneklerinden bir öğeyi siler.
         * @param {number} [day]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeDayOptionFromSubscriptionPackages(day, options) {
            return localVarFp.removeDayOptionFromSubscriptionPackages(day, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Paket içerisinde günde kaç dakika eğitim alabileceği seçeneğini siler.
         * @param {number} [day]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeMinutesPerDayOptionFromSubscriptionPackages(day, options) {
            return localVarFp.removeMinutesPerDayOptionFromSubscriptionPackages(day, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Paket süresi seçeneğini siler.
         * @param {number} [packageDurationId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removePackageDurationOptionFromSubscriptionPackages(packageDurationId, options) {
            return localVarFp.removePackageDurationOptionFromSubscriptionPackages(packageDurationId, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * SubscriptionAdministrationApi - object-oriented interface
 * @export
 * @class SubscriptionAdministrationApi
 * @extends {BaseAPI}
 */
export class SubscriptionAdministrationApi extends BaseAPI {
    /**
     *
     * @summary Haftada kaç günlük eğitim alınabileceğine dair paket seçeneklerine ekleme yapar.
     * @param {number} [day]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionAdministrationApi
     */
    addDayOptionToSubscriptionPackages(day, options) {
        return SubscriptionAdministrationApiFp(this.configuration).addDayOptionToSubscriptionPackages(day, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Paket içerisinde günde kaç dakika eğitim alabileceği seçeneğini ekler.
     * @param {number} [minutes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionAdministrationApi
     */
    addMinutesPerDayOptionToSubscriptionPackages(minutes, options) {
        return SubscriptionAdministrationApiFp(this.configuration).addMinutesPerDayOptionToSubscriptionPackages(minutes, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Paket süresi seçeneği ekler.
     * @param {string} [durationName]
     * @param {number} [durationAsMonth]
     * @param {number} [discountRate]
     * @param {string} [description]
     * @param {number} [dayOptionId]
     * @param {number} [minuteOptionId]
     * @param {number} [pricePerMint]
     * @param {number} [discountedAmount]
     * @param {number} [total]
     * @param {number} [totalDiscounted]
     * @param {number} [totalMinutes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionAdministrationApi
     */
    addPackageDurationOptionToSubscriptionPackages(durationName, durationAsMonth, discountRate, description, dayOptionId, minuteOptionId, pricePerMint, discountedAmount, total, totalDiscounted, totalMinutes, options) {
        return SubscriptionAdministrationApiFp(this.configuration).addPackageDurationOptionToSubscriptionPackages(durationName, durationAsMonth, discountRate, description, dayOptionId, minuteOptionId, pricePerMint, discountedAmount, total, totalDiscounted, totalMinutes, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Dakika başına ücreti günceller.
     * @param {number} [price]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionAdministrationApi
     */
    changePricePerMinuteForSubscriptionPackages(price, options) {
        return SubscriptionAdministrationApiFp(this.configuration).changePricePerMinuteForSubscriptionPackages(price, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionAdministrationApi
     */
    listSubscriptionDropdownOptions(options) {
        return SubscriptionAdministrationApiFp(this.configuration).listSubscriptionDropdownOptions(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Abonelik seçeneklerini getirir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionAdministrationApi
     */
    listSubscriptionOptionsForManagement(options) {
        return SubscriptionAdministrationApiFp(this.configuration).listSubscriptionOptionsForManagement(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Haftada kaç günlük eğitim alınabileceğine dair paket seçeneklerinden bir öğeyi siler.
     * @param {number} [day]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionAdministrationApi
     */
    removeDayOptionFromSubscriptionPackages(day, options) {
        return SubscriptionAdministrationApiFp(this.configuration).removeDayOptionFromSubscriptionPackages(day, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Paket içerisinde günde kaç dakika eğitim alabileceği seçeneğini siler.
     * @param {number} [day]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionAdministrationApi
     */
    removeMinutesPerDayOptionFromSubscriptionPackages(day, options) {
        return SubscriptionAdministrationApiFp(this.configuration).removeMinutesPerDayOptionFromSubscriptionPackages(day, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Paket süresi seçeneğini siler.
     * @param {number} [packageDurationId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionAdministrationApi
     */
    removePackageDurationOptionFromSubscriptionPackages(packageDurationId, options) {
        return SubscriptionAdministrationApiFp(this.configuration).removePackageDurationOptionFromSubscriptionPackages(packageDurationId, options).then((request) => request(this.axios, this.basePath));
    }
}