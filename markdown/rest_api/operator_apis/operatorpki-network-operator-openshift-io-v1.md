---
title: "OperatorPKI []"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# OperatorPKI [network.operator.openshift.io/v1] {id="operatorpki-network-operator-openshift-io-v1"}
{%- set toc = "macro" -%}
{%- set toc_title = true %}


Description
:   OperatorPKI is a simple certificate authority. It is not intended for external
    use - rather, it is internal to the network operator. The CNO creates a CA and
    a certificate signed by that CA. The certificate has both ClientAuth
    and ServerAuth extended usages enabled.


    	More specifically, given an OperatorPKI with &lt;name>, the CNO will manage:

    *   A Secret called &lt;name>-ca with two data keys:
    *   tls.key - the private key
    *   tls.crt - the CA certificate
    *   A ConfigMap called &lt;name>-ca with a single data key:
    *   cabundle.crt - the CA certificate(s)
    *   A Secret called &lt;name>-cert with two data keys:
    *   tls.key - the private key
    *   tls.crt - the certificate, signed by the CA


    The CA certificate will have a validity of 10 years, rotated after 9.
    The target certificate will have a validity of 6 months, rotated after 3


    The CA certificate will have a CommonName of "&lt;namespace>_&lt;name>-ca@&lt;timestamp>", where
    &lt;timestamp> is the last rotation time.


Type
:     `object`


Required
:   *   `spec`

## Specification {id="_specification"}

| Property | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds |
| `metadata` | [`ObjectMeta`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-ObjectMeta) | Standard object’s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata |
| `spec` | `object` | OperatorPKISpec is the PKI configuration. |
| `status` | `object` | OperatorPKIStatus is not implemented. |
### .spec {id="_spec"}

Description
:   OperatorPKISpec is the PKI configuration.


Type
:     `object`


Required
:   *   `targetCert`

| Property | Type | Description |
| --- | --- | --- |
| `targetCert` | `object` | targetCert configures the certificate signed by the CA. It will have both ClientAuth and ServerAuth enabled |
### .spec.targetCert {id="_spectargetcert"}

Description
:   targetCert configures the certificate signed by the CA. It will have
    both ClientAuth and ServerAuth enabled


Type
:     `object`


Required
:   *   `commonName`

| Property | Type | Description |
| --- | --- | --- |
| `commonName` | `string` | commonName is the value in the certificate’s CN |
### .status {id="_status"}

Description
:   OperatorPKIStatus is not implemented.


Type
:     `object`

## API endpoints {id="_api_endpoints"}

The following API endpoints are available:

*   `/apis/network.operator.openshift.io/v1/operatorpkis`
    *   `GET`: list objects of kind OperatorPKI
*   `/apis/network.operator.openshift.io/v1/namespaces/{{ namespace }}/operatorpkis`
    *   `DELETE`: delete collection of OperatorPKI
    *   `GET`: list objects of kind OperatorPKI
    *   `POST`: create an OperatorPKI
*   `/apis/network.operator.openshift.io/v1/namespaces/{{ namespace }}/operatorpkis/{{ name }}`
    *   `DELETE`: delete an OperatorPKI
    *   `GET`: read the specified OperatorPKI
    *   `PATCH`: partially update the specified OperatorPKI
    *   `PUT`: replace the specified OperatorPKI

### /apis/network.operator.openshift.io/v1/operatorpkis {id="_apisnetworkoperatoropenshiftiov1operatorpkis"}


HTTP method
:     `GET`


Description
:     list objects of kind OperatorPKI

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`OperatorPKIList`](/rest_api/objects/index#io-openshift-operator-network-v1-OperatorPKIList) schema |
| 401 - Unauthorized | Empty |

### /apis/network.operator.openshift.io/v1/namespaces/{{ namespace }}/operatorpkis {id="_apisnetworkoperatoropenshiftiov1namespaces_namespace_operatorpkis"}


HTTP method
:     `DELETE`


Description
:     delete collection of OperatorPKI

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`Status`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-Status) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `GET`


Description
:     list objects of kind OperatorPKI

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`OperatorPKIList`](/rest_api/objects/index#io-openshift-operator-network-v1-OperatorPKIList) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `POST`


Description
:     create an OperatorPKI

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**Body parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `body` | [`OperatorPKI`](/rest_api/operator_apis/operatorpki-network-operator-openshift-io-v1#operatorpki-network-operator-openshift-io-v1) schema |  |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`OperatorPKI`](/rest_api/operator_apis/operatorpki-network-operator-openshift-io-v1#operatorpki-network-operator-openshift-io-v1) schema |
| 201 - Created | [`OperatorPKI`](/rest_api/operator_apis/operatorpki-network-operator-openshift-io-v1#operatorpki-network-operator-openshift-io-v1) schema |
| 202 - Accepted | [`OperatorPKI`](/rest_api/operator_apis/operatorpki-network-operator-openshift-io-v1#operatorpki-network-operator-openshift-io-v1) schema |
| 401 - Unauthorized | Empty |

### /apis/network.operator.openshift.io/v1/namespaces/{{ namespace }}/operatorpkis/{{ name }} {id="_apisnetworkoperatoropenshiftiov1namespaces_namespace_operatorpkis_name"}

**Global path parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `string` | name of the OperatorPKI |


HTTP method
:     `DELETE`


Description
:     delete an OperatorPKI

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`Status`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-Status) schema |
| 202 - Accepted | [`Status`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-Status) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `GET`


Description
:     read the specified OperatorPKI

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`OperatorPKI`](/rest_api/operator_apis/operatorpki-network-operator-openshift-io-v1#operatorpki-network-operator-openshift-io-v1) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `PATCH`


Description
:     partially update the specified OperatorPKI

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`OperatorPKI`](/rest_api/operator_apis/operatorpki-network-operator-openshift-io-v1#operatorpki-network-operator-openshift-io-v1) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `PUT`


Description
:     replace the specified OperatorPKI

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**Body parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `body` | [`OperatorPKI`](/rest_api/operator_apis/operatorpki-network-operator-openshift-io-v1#operatorpki-network-operator-openshift-io-v1) schema |  |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`OperatorPKI`](/rest_api/operator_apis/operatorpki-network-operator-openshift-io-v1#operatorpki-network-operator-openshift-io-v1) schema |
| 201 - Created | [`OperatorPKI`](/rest_api/operator_apis/operatorpki-network-operator-openshift-io-v1#operatorpki-network-operator-openshift-io-v1) schema |
| 401 - Unauthorized | Empty |