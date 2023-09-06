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
import { DUMMY_BASE_URL, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, BaseAPI } from '../base';
/**
 * SchedulerApi - axios parameter creator
 * @export
 */
export const SchedulerApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Öğretmenin müsaitlik vakitlerini değiştirebilmesini sağlar.
         * @param {Array<SchedulerCommandsSchedulerChange>} [schedulerCommandsSchedulerChange]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeMyAvailableTimes: (schedulerCommandsSchedulerChange, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/Scheduler/ChangeMyAvailableTimes`;
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
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = serializeDataIfNeeded(schedulerCommandsSchedulerChange, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Öğretmenin kendi müsaitlik takvimini getirir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMyAvailableTimes: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/Scheduler/GetMyAvailableTimes`;
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
 * SchedulerApi - functional programming interface
 * @export
 */
export const SchedulerApiFp = function (configuration) {
    const localVarAxiosParamCreator = SchedulerApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @summary Öğretmenin müsaitlik vakitlerini değiştirebilmesini sağlar.
         * @param {Array<SchedulerCommandsSchedulerChange>} [schedulerCommandsSchedulerChange]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeMyAvailableTimes(schedulerCommandsSchedulerChange, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.changeMyAvailableTimes(schedulerCommandsSchedulerChange, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Öğretmenin kendi müsaitlik takvimini getirir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMyAvailableTimes(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getMyAvailableTimes(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
            });
        },
    };
};
/**
 * SchedulerApi - factory interface
 * @export
 */
export const SchedulerApiFactory = function (configuration, basePath, axios) {
    const localVarFp = SchedulerApiFp(configuration);
    return {
        /**
         *
         * @summary Öğretmenin müsaitlik vakitlerini değiştirebilmesini sağlar.
         * @param {Array<SchedulerCommandsSchedulerChange>} [schedulerCommandsSchedulerChange]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changeMyAvailableTimes(schedulerCommandsSchedulerChange, options) {
            return localVarFp.changeMyAvailableTimes(schedulerCommandsSchedulerChange, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Öğretmenin kendi müsaitlik takvimini getirir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMyAvailableTimes(options) {
            return localVarFp.getMyAvailableTimes(options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * SchedulerApi - object-oriented interface
 * @export
 * @class SchedulerApi
 * @extends {BaseAPI}
 */
export class SchedulerApi extends BaseAPI {
    /**
     *
     * @summary Öğretmenin müsaitlik vakitlerini değiştirebilmesini sağlar.
     * @param {Array<SchedulerCommandsSchedulerChange>} [schedulerCommandsSchedulerChange]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchedulerApi
     */
    changeMyAvailableTimes(schedulerCommandsSchedulerChange, options) {
        return SchedulerApiFp(this.configuration).changeMyAvailableTimes(schedulerCommandsSchedulerChange, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Öğretmenin kendi müsaitlik takvimini getirir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchedulerApi
     */
    getMyAvailableTimes(options) {
        return SchedulerApiFp(this.configuration).getMyAvailableTimes(options).then((request) => request(this.axios, this.basePath));
    }
}