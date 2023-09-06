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
/**
 *
 * @export
 * @interface SubscriptionAdministrationQueriesPaymentInterval
 */
export interface SubscriptionAdministrationQueriesPaymentInterval {
    /**
     *
     * @type {number}
     * @memberof SubscriptionAdministrationQueriesPaymentInterval
     */
    'id': number;
    /**
     * Belirlenen sürenin değeridir. Süre birimi (hafta, ay, yıl) ile birlikte anlamlı hale gelir.
     * @type {number}
     * @memberof SubscriptionAdministrationQueriesPaymentInterval
     */
    'durationValue': number;
    /**
     *
     * @type {string}
     * @memberof SubscriptionAdministrationQueriesPaymentInterval
     */
    'durationUnit': string;
    /**
     * İndirim oranı
     * @type {number}
     * @memberof SubscriptionAdministrationQueriesPaymentInterval
     */
    'discount'?: number | null;
    /**
     * Örneğin: 1 aylık paket 20% indirimli!
     * @type {string}
     * @memberof SubscriptionAdministrationQueriesPaymentInterval
     */
    'shortDescription'?: string | null;
}
