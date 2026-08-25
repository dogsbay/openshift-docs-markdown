---
title: "ConfigMap [v1]"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# ConfigMap [v1] {id="configmap-v1"}
{%- set toc = "macro" -%}
{%- set toc_title = true %}


Description
:   ConfigMap holds configuration data for pods to consume.


Type
:     `object`

## Specification {id="_specification"}

| Property | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources |
| `binaryData` | `object (string)` | BinaryData contains the binary data. Each key must consist of alphanumeric characters, '-', '_' or '.'. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet. |
| `data` | `object (string)` | Data contains the configuration data. Each key must consist of alphanumeric characters, '-', '_' or '.'. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process. |
| `immutable` | `boolean` | Immutable, if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds |
| `metadata` | [`ObjectMeta`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-ObjectMeta) | Standard object’s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata |

## API endpoints {id="_api_endpoints"}

The following API endpoints are available:

*   `/api/v1/configmaps`
    *   `GET`: list or watch objects of kind ConfigMap
*   `/api/v1/watch/configmaps`
    *   `GET`: watch individual changes to a list of ConfigMap. deprecated: use the &#x27;watch&#x27; parameter with a list operation instead.
*   `/api/v1/namespaces/{{ namespace }}/configmaps`{minja}
    *   `DELETE`: delete collection of ConfigMap
    *   `GET`: list or watch objects of kind ConfigMap
    *   `POST`: create a ConfigMap
*   `/api/v1/watch/namespaces/{{ namespace }}/configmaps`{minja}
    *   `GET`: watch individual changes to a list of ConfigMap. deprecated: use the &#x27;watch&#x27; parameter with a list operation instead.
*   `/api/v1/namespaces/{{ namespace }}/configmaps/{{ name }}`{minja}
    *   `DELETE`: delete a ConfigMap
    *   `GET`: read the specified ConfigMap
    *   `PATCH`: partially update the specified ConfigMap
    *   `PUT`: replace the specified ConfigMap
*   `/api/v1/watch/namespaces/{{ namespace }}/configmaps/{{ name }}`{minja}
    *   `GET`: watch changes to an object of kind ConfigMap. deprecated: use the &#x27;watch&#x27; parameter with a list operation instead, filtered to a single item with the &#x27;fieldSelector&#x27; parameter.

### /api/v1/configmaps {id="_apiv1configmaps"}


HTTP method
:     `GET`


Description
:     list or watch objects of kind ConfigMap

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`ConfigMapList`](/rest_api/objects/index#io-k8s-api-core-v1-ConfigMapList) schema |
| 401 - Unauthorized | Empty |

### /api/v1/watch/configmaps {id="_apiv1watchconfigmaps"}


HTTP method
:     `GET`


Description
:     watch individual changes to a list of ConfigMap. deprecated: use the &#x27;watch&#x27; parameter with a list operation instead.

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`WatchEvent`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-WatchEvent) schema |
| 401 - Unauthorized | Empty |

### /api/v1/namespaces/{{ namespace }}/configmaps {id="_apiv1namespaces_namespace_configmaps"}


HTTP method
:     `DELETE`


Description
:     delete collection of ConfigMap

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`Status`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-Status) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `GET`


Description
:     list or watch objects of kind ConfigMap

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`ConfigMapList`](/rest_api/objects/index#io-k8s-api-core-v1-ConfigMapList) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `POST`


Description
:     create a ConfigMap

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**Body parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `body` | [`ConfigMap`](/rest_api/metadata_apis/configmap-v1#configmap-v1) schema |  |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`ConfigMap`](/rest_api/metadata_apis/configmap-v1#configmap-v1) schema |
| 201 - Created | [`ConfigMap`](/rest_api/metadata_apis/configmap-v1#configmap-v1) schema |
| 202 - Accepted | [`ConfigMap`](/rest_api/metadata_apis/configmap-v1#configmap-v1) schema |
| 401 - Unauthorized | Empty |

### /api/v1/watch/namespaces/{{ namespace }}/configmaps {id="_apiv1watchnamespaces_namespace_configmaps"}


HTTP method
:     `GET`


Description
:     watch individual changes to a list of ConfigMap. deprecated: use the &#x27;watch&#x27; parameter with a list operation instead.

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`WatchEvent`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-WatchEvent) schema |
| 401 - Unauthorized | Empty |

### /api/v1/namespaces/{{ namespace }}/configmaps/{{ name }} {id="_apiv1namespaces_namespace_configmaps_name"}

**Global path parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `string` | name of the ConfigMap |


HTTP method
:     `DELETE`


Description
:     delete a ConfigMap

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
:     read the specified ConfigMap

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`ConfigMap`](/rest_api/metadata_apis/configmap-v1#configmap-v1) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `PATCH`


Description
:     partially update the specified ConfigMap

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`ConfigMap`](/rest_api/metadata_apis/configmap-v1#configmap-v1) schema |
| 201 - Created | [`ConfigMap`](/rest_api/metadata_apis/configmap-v1#configmap-v1) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `PUT`


Description
:     replace the specified ConfigMap

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**Body parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `body` | [`ConfigMap`](/rest_api/metadata_apis/configmap-v1#configmap-v1) schema |  |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`ConfigMap`](/rest_api/metadata_apis/configmap-v1#configmap-v1) schema |
| 201 - Created | [`ConfigMap`](/rest_api/metadata_apis/configmap-v1#configmap-v1) schema |
| 401 - Unauthorized | Empty |

### /api/v1/watch/namespaces/{{ namespace }}/configmaps/{{ name }} {id="_apiv1watchnamespaces_namespace_configmaps_name"}

**Global path parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `string` | name of the ConfigMap |


HTTP method
:     `GET`


Description
:     watch changes to an object of kind ConfigMap. deprecated: use the &#x27;watch&#x27; parameter with a list operation instead, filtered to a single item with the &#x27;fieldSelector&#x27; parameter.

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`WatchEvent`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-WatchEvent) schema |
| 401 - Unauthorized | Empty |