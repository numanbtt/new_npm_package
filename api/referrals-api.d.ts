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
import { RequestArgs, BaseAPI } from '../base';
import { ReferralCommandsCreateCommand } from '../models';
import { ReferralCommandsCreateCommandResult } from '../models';
import { ReferralCommandsUpdateCommand } from '../models';
import { ReferralCommandsUpdateStatusCommand } from '../models';
import { ReferralQueriesListQueryResult } from '../models';
import { ReferralQueriesListStudentQueryResult } from '../models';
import { ReferralQueriesReferralDetails } from '../models';
import { ReferralQueriesReferralDropdown } from '../models';
import { ReferralQueriesReferralValidationDetails } from '../models';
/**
 * ReferralsApi - axios parameter creator
 * @export
 */
export declare const ReferralsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {ReferralCommandsCreateCommand} [referralCommandsCreateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReferral: (referralCommandsCreateCommand?: ReferralCommandsCreateCommand, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteReferral: (id?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDetailsByIdReferral: (id?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDropDownReferral: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {number} [page]
     * @param {number} [itemPerPage]
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReferral: (page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {number} [page]
     * @param {number} [itemPerPage]
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReferralStudents: (page?: number, itemPerPage?: number, searchKeyword?: string, id?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {ReferralCommandsUpdateCommand} [referralCommandsUpdateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateReferral: (referralCommandsUpdateCommand?: ReferralCommandsUpdateCommand, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {ReferralCommandsUpdateStatusCommand} [referralCommandsUpdateStatusCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateStatusReferral: (referralCommandsUpdateStatusCommand?: ReferralCommandsUpdateStatusCommand, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {string} [code]
     * @param {number} [packageId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validationReferral: (code?: string, packageId?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * ReferralsApi - functional programming interface
 * @export
 */
export declare const ReferralsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {ReferralCommandsCreateCommand} [referralCommandsCreateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReferral(referralCommandsCreateCommand?: ReferralCommandsCreateCommand, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReferralCommandsCreateCommandResult>>;
    /**
     *
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteReferral(id?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>>;
    /**
     *
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDetailsByIdReferral(id?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReferralQueriesReferralDetails>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDropDownReferral(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ReferralQueriesReferralDropdown>>>;
    /**
     *
     * @param {number} [page]
     * @param {number} [itemPerPage]
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReferral(page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReferralQueriesListQueryResult>>;
    /**
     *
     * @param {number} [page]
     * @param {number} [itemPerPage]
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReferralStudents(page?: number, itemPerPage?: number, searchKeyword?: string, id?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReferralQueriesListStudentQueryResult>>;
    /**
     *
     * @param {ReferralCommandsUpdateCommand} [referralCommandsUpdateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateReferral(referralCommandsUpdateCommand?: ReferralCommandsUpdateCommand, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReferralCommandsCreateCommandResult>>;
    /**
     *
     * @param {ReferralCommandsUpdateStatusCommand} [referralCommandsUpdateStatusCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateStatusReferral(referralCommandsUpdateStatusCommand?: ReferralCommandsUpdateStatusCommand, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReferralCommandsCreateCommandResult>>;
    /**
     *
     * @param {string} [code]
     * @param {number} [packageId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validationReferral(code?: string, packageId?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReferralQueriesReferralValidationDetails>>;
};
/**
 * ReferralsApi - factory interface
 * @export
 */
export declare const ReferralsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {ReferralCommandsCreateCommand} [referralCommandsCreateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReferral(referralCommandsCreateCommand?: ReferralCommandsCreateCommand, options?: any): AxiosPromise<ReferralCommandsCreateCommandResult>;
    /**
     *
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteReferral(id?: number, options?: any): AxiosPromise<object>;
    /**
     *
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDetailsByIdReferral(id?: number, options?: any): AxiosPromise<ReferralQueriesReferralDetails>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDropDownReferral(options?: any): AxiosPromise<Array<ReferralQueriesReferralDropdown>>;
    /**
     *
     * @param {number} [page]
     * @param {number} [itemPerPage]
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReferral(page?: number, itemPerPage?: number, searchKeyword?: string, options?: any): AxiosPromise<ReferralQueriesListQueryResult>;
    /**
     *
     * @param {number} [page]
     * @param {number} [itemPerPage]
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReferralStudents(page?: number, itemPerPage?: number, searchKeyword?: string, id?: number, options?: any): AxiosPromise<ReferralQueriesListStudentQueryResult>;
    /**
     *
     * @param {ReferralCommandsUpdateCommand} [referralCommandsUpdateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateReferral(referralCommandsUpdateCommand?: ReferralCommandsUpdateCommand, options?: any): AxiosPromise<ReferralCommandsCreateCommandResult>;
    /**
     *
     * @param {ReferralCommandsUpdateStatusCommand} [referralCommandsUpdateStatusCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateStatusReferral(referralCommandsUpdateStatusCommand?: ReferralCommandsUpdateStatusCommand, options?: any): AxiosPromise<ReferralCommandsCreateCommandResult>;
    /**
     *
     * @param {string} [code]
     * @param {number} [packageId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validationReferral(code?: string, packageId?: number, options?: any): AxiosPromise<ReferralQueriesReferralValidationDetails>;
};
/**
 * ReferralsApi - interface
 * @export
 * @interface ReferralsApi
 */
export interface ReferralsApiInterface {
    /**
     *
     * @param {ReferralCommandsCreateCommand} [referralCommandsCreateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    createReferral(referralCommandsCreateCommand?: ReferralCommandsCreateCommand, options?: AxiosRequestConfig): AxiosPromise<ReferralCommandsCreateCommandResult>;
    /**
     *
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    deleteReferral(id?: number, options?: AxiosRequestConfig): AxiosPromise<object>;
    /**
     *
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    getDetailsByIdReferral(id?: number, options?: AxiosRequestConfig): AxiosPromise<ReferralQueriesReferralDetails>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    getDropDownReferral(options?: AxiosRequestConfig): AxiosPromise<Array<ReferralQueriesReferralDropdown>>;
    /**
     *
     * @param {number} [page]
     * @param {number} [itemPerPage]
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    listReferral(page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig): AxiosPromise<ReferralQueriesListQueryResult>;
    /**
     *
     * @param {number} [page]
     * @param {number} [itemPerPage]
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    listReferralStudents(page?: number, itemPerPage?: number, searchKeyword?: string, id?: number, options?: AxiosRequestConfig): AxiosPromise<ReferralQueriesListStudentQueryResult>;
    /**
     *
     * @param {ReferralCommandsUpdateCommand} [referralCommandsUpdateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    updateReferral(referralCommandsUpdateCommand?: ReferralCommandsUpdateCommand, options?: AxiosRequestConfig): AxiosPromise<ReferralCommandsCreateCommandResult>;
    /**
     *
     * @param {ReferralCommandsUpdateStatusCommand} [referralCommandsUpdateStatusCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    updateStatusReferral(referralCommandsUpdateStatusCommand?: ReferralCommandsUpdateStatusCommand, options?: AxiosRequestConfig): AxiosPromise<ReferralCommandsCreateCommandResult>;
    /**
     *
     * @param {string} [code]
     * @param {number} [packageId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    validationReferral(code?: string, packageId?: number, options?: AxiosRequestConfig): AxiosPromise<ReferralQueriesReferralValidationDetails>;
}
/**
 * ReferralsApi - object-oriented interface
 * @export
 * @class ReferralsApi
 * @extends {BaseAPI}
 */
export declare class ReferralsApi extends BaseAPI implements ReferralsApiInterface {
    /**
     *
     * @param {ReferralCommandsCreateCommand} [referralCommandsCreateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApi
     */
    createReferral(referralCommandsCreateCommand?: ReferralCommandsCreateCommand, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReferralCommandsCreateCommandResult, any>>;
    /**
     *
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApi
     */
    deleteReferral(id?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<object, any>>;
    /**
     *
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApi
     */
    getDetailsByIdReferral(id?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReferralQueriesReferralDetails, any>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApi
     */
    getDropDownReferral(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReferralQueriesReferralDropdown[], any>>;
    /**
     *
     * @param {number} [page]
     * @param {number} [itemPerPage]
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApi
     */
    listReferral(page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReferralQueriesListQueryResult, any>>;
    /**
     *
     * @param {number} [page]
     * @param {number} [itemPerPage]
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApi
     */
    listReferralStudents(page?: number, itemPerPage?: number, searchKeyword?: string, id?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReferralQueriesListStudentQueryResult, any>>;
    /**
     *
     * @param {ReferralCommandsUpdateCommand} [referralCommandsUpdateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApi
     */
    updateReferral(referralCommandsUpdateCommand?: ReferralCommandsUpdateCommand, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReferralCommandsCreateCommandResult, any>>;
    /**
     *
     * @param {ReferralCommandsUpdateStatusCommand} [referralCommandsUpdateStatusCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApi
     */
    updateStatusReferral(referralCommandsUpdateStatusCommand?: ReferralCommandsUpdateStatusCommand, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReferralCommandsCreateCommandResult, any>>;
    /**
     *
     * @param {string} [code]
     * @param {number} [packageId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApi
     */
    validationReferral(code?: string, packageId?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReferralQueriesReferralValidationDetails, any>>;
}
