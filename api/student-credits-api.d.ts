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
import { StudentCreditCommandsCreateCommand } from '../models';
import { StudentCreditCommandsCreateCommandResult } from '../models';
import { StudentCreditCommandsUpdateCommand } from '../models';
import { StudentCreditQueriesCommonDropdown } from '../models';
import { StudentCreditQueriesListQueryResult } from '../models';
import { StudentCreditQueriesStudentCreditDetails } from '../models';
/**
 * StudentCreditsApi - axios parameter creator
 * @export
 */
export declare const StudentCreditsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {StudentCreditCommandsCreateCommand} [studentCreditCommandsCreateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCredits: (studentCreditCommandsCreateCommand?: StudentCreditCommandsCreateCommand, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDetailsByIdCredits: (id?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDropDownStudents: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {number} [page]
     * @param {number} [itemPerPage]
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listStudentCredits: (page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {StudentCreditCommandsUpdateCommand} [studentCreditCommandsUpdateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCredits: (studentCreditCommandsUpdateCommand?: StudentCreditCommandsUpdateCommand, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * StudentCreditsApi - functional programming interface
 * @export
 */
export declare const StudentCreditsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {StudentCreditCommandsCreateCommand} [studentCreditCommandsCreateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCredits(studentCreditCommandsCreateCommand?: StudentCreditCommandsCreateCommand, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StudentCreditCommandsCreateCommandResult>>;
    /**
     *
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDetailsByIdCredits(id?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StudentCreditQueriesStudentCreditDetails>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDropDownStudents(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<StudentCreditQueriesCommonDropdown>>>;
    /**
     *
     * @param {number} [page]
     * @param {number} [itemPerPage]
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listStudentCredits(page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StudentCreditQueriesListQueryResult>>;
    /**
     *
     * @param {StudentCreditCommandsUpdateCommand} [studentCreditCommandsUpdateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCredits(studentCreditCommandsUpdateCommand?: StudentCreditCommandsUpdateCommand, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StudentCreditCommandsCreateCommandResult>>;
};
/**
 * StudentCreditsApi - factory interface
 * @export
 */
export declare const StudentCreditsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {StudentCreditCommandsCreateCommand} [studentCreditCommandsCreateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCredits(studentCreditCommandsCreateCommand?: StudentCreditCommandsCreateCommand, options?: any): AxiosPromise<StudentCreditCommandsCreateCommandResult>;
    /**
     *
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDetailsByIdCredits(id?: number, options?: any): AxiosPromise<StudentCreditQueriesStudentCreditDetails>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDropDownStudents(options?: any): AxiosPromise<Array<StudentCreditQueriesCommonDropdown>>;
    /**
     *
     * @param {number} [page]
     * @param {number} [itemPerPage]
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listStudentCredits(page?: number, itemPerPage?: number, searchKeyword?: string, options?: any): AxiosPromise<StudentCreditQueriesListQueryResult>;
    /**
     *
     * @param {StudentCreditCommandsUpdateCommand} [studentCreditCommandsUpdateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCredits(studentCreditCommandsUpdateCommand?: StudentCreditCommandsUpdateCommand, options?: any): AxiosPromise<StudentCreditCommandsCreateCommandResult>;
};
/**
 * StudentCreditsApi - interface
 * @export
 * @interface StudentCreditsApi
 */
export interface StudentCreditsApiInterface {
    /**
     *
     * @param {StudentCreditCommandsCreateCommand} [studentCreditCommandsCreateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApiInterface
     */
    createCredits(studentCreditCommandsCreateCommand?: StudentCreditCommandsCreateCommand, options?: AxiosRequestConfig): AxiosPromise<StudentCreditCommandsCreateCommandResult>;
    /**
     *
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApiInterface
     */
    getDetailsByIdCredits(id?: number, options?: AxiosRequestConfig): AxiosPromise<StudentCreditQueriesStudentCreditDetails>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApiInterface
     */
    getDropDownStudents(options?: AxiosRequestConfig): AxiosPromise<Array<StudentCreditQueriesCommonDropdown>>;
    /**
     *
     * @param {number} [page]
     * @param {number} [itemPerPage]
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApiInterface
     */
    listStudentCredits(page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig): AxiosPromise<StudentCreditQueriesListQueryResult>;
    /**
     *
     * @param {StudentCreditCommandsUpdateCommand} [studentCreditCommandsUpdateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApiInterface
     */
    updateCredits(studentCreditCommandsUpdateCommand?: StudentCreditCommandsUpdateCommand, options?: AxiosRequestConfig): AxiosPromise<StudentCreditCommandsCreateCommandResult>;
}
/**
 * StudentCreditsApi - object-oriented interface
 * @export
 * @class StudentCreditsApi
 * @extends {BaseAPI}
 */
export declare class StudentCreditsApi extends BaseAPI implements StudentCreditsApiInterface {
    /**
     *
     * @param {StudentCreditCommandsCreateCommand} [studentCreditCommandsCreateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApi
     */
    createCredits(studentCreditCommandsCreateCommand?: StudentCreditCommandsCreateCommand, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<StudentCreditCommandsCreateCommandResult, any>>;
    /**
     *
     * @param {number} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApi
     */
    getDetailsByIdCredits(id?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<StudentCreditQueriesStudentCreditDetails, any>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApi
     */
    getDropDownStudents(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<StudentCreditQueriesCommonDropdown[], any>>;
    /**
     *
     * @param {number} [page]
     * @param {number} [itemPerPage]
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApi
     */
    listStudentCredits(page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<StudentCreditQueriesListQueryResult, any>>;
    /**
     *
     * @param {StudentCreditCommandsUpdateCommand} [studentCreditCommandsUpdateCommand]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApi
     */
    updateCredits(studentCreditCommandsUpdateCommand?: StudentCreditCommandsUpdateCommand, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<StudentCreditCommandsCreateCommandResult, any>>;
}