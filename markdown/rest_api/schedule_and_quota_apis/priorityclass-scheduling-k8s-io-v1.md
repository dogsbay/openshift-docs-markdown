---
title: "PriorityClass [scheduling.k8s.io/v1]"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# PriorityClass [scheduling.k8s.io/v1] {id="priorityclass-scheduling-k8s-io-v1"}
{%- set toc = "macro" -%}
{%- set toc_title = true %}


Description
:   PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.


Type
:     `object`


Required
:   *   `value`

## Specification {id="_specification"}

| Property | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources |
| `description` | `string` | description is an arbitrary string that usually provides guidelines on when this priority class should be used. |
| `globalDefault` | `boolean` | globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds |
| `metadata` | [`ObjectMeta`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-ObjectMeta) | Standard object’s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata |
| `preemptionPolicy` | `string` | preemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.<br>Possible enum values:  - `"Never"` means that pod never preempts other pods with lower priority.  - `"PreemptLowerPriority"` means that pod can preempt other pods with lower priority. |
| `value` | `integer` | value represents the integer value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec. |

## API endpoints {id="_api_endpoints"}

The following API endpoints are available:

*   `/apis/scheduling.k8s.io/v1/priorityclasses`
    *   `DELETE`: delete collection of PriorityClass
    *   `GET`: list or watch objects of kind PriorityClass
    *   `POST`: create a PriorityClass
*   `/apis/scheduling.k8s.io/v1/watch/priorityclasses`
    *   `GET`: watch individual changes to a list of PriorityClass. deprecated: use the &#x27;watch&#x27; parameter with a list operation instead.
*   `/apis/scheduling.k8s.io/v1/priorityclasses/{{ name }}`{minja}
    *   `DELETE`: delete a PriorityClass
    *   `GET`: read the specified PriorityClass
    *   `PATCH`: partially update the specified PriorityClass
    *   `PUT`: replace the specified PriorityClass
*   `/apis/scheduling.k8s.io/v1/watch/priorityclasses/{{ name }}`{minja}
    *   `GET`: watch changes to an object of kind PriorityClass. deprecated: use the &#x27;watch&#x27; parameter with a list operation instead, filtered to a single item with the &#x27;fieldSelector&#x27; parameter.

### /apis/scheduling.k8s.io/v1/priorityclasses {id="_apisschedulingk8siov1priorityclasses"}


HTTP method
:     `DELETE`


Description
:     delete collection of PriorityClass

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
:     list or watch objects of kind PriorityClass

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`PriorityClassList`](/rest_api/objects/index#io-k8s-api-scheduling-v1-PriorityClassList) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `POST`


Description
:     create a PriorityClass

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**Body parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `body` | [`PriorityClass`](/rest_api/schedule_and_quota_apis/priorityclass-scheduling-k8s-io-v1#priorityclass-scheduling-k8s-io-v1) schema |  |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`PriorityClass`](/rest_api/schedule_and_quota_apis/priorityclass-scheduling-k8s-io-v1#priorityclass-scheduling-k8s-io-v1) schema |
| 201 - Created | [`PriorityClass`](/rest_api/schedule_and_quota_apis/priorityclass-scheduling-k8s-io-v1#priorityclass-scheduling-k8s-io-v1) schema |
| 202 - Accepted | [`PriorityClass`](/rest_api/schedule_and_quota_apis/priorityclass-scheduling-k8s-io-v1#priorityclass-scheduling-k8s-io-v1) schema |
| 401 - Unauthorized | Empty |

### /apis/scheduling.k8s.io/v1/watch/priorityclasses {id="_apisschedulingk8siov1watchpriorityclasses"}


HTTP method
:     `GET`


Description
:     watch individual changes to a list of PriorityClass. deprecated: use the &#x27;watch&#x27; parameter with a list operation instead.

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`WatchEvent`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-WatchEvent) schema |
| 401 - Unauthorized | Empty |

### /apis/scheduling.k8s.io/v1/priorityclasses/{{ name }} {id="_apisschedulingk8siov1priorityclasses_name"}

**Global path parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `string` | name of the PriorityClass |


HTTP method
:     `DELETE`


Description
:     delete a PriorityClass

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
:     read the specified PriorityClass

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`PriorityClass`](/rest_api/schedule_and_quota_apis/priorityclass-scheduling-k8s-io-v1#priorityclass-scheduling-k8s-io-v1) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `PATCH`


Description
:     partially update the specified PriorityClass

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`PriorityClass`](/rest_api/schedule_and_quota_apis/priorityclass-scheduling-k8s-io-v1#priorityclass-scheduling-k8s-io-v1) schema |
| 201 - Created | [`PriorityClass`](/rest_api/schedule_and_quota_apis/priorityclass-scheduling-k8s-io-v1#priorityclass-scheduling-k8s-io-v1) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `PUT`


Description
:     replace the specified PriorityClass

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**Body parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `body` | [`PriorityClass`](/rest_api/schedule_and_quota_apis/priorityclass-scheduling-k8s-io-v1#priorityclass-scheduling-k8s-io-v1) schema |  |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`PriorityClass`](/rest_api/schedule_and_quota_apis/priorityclass-scheduling-k8s-io-v1#priorityclass-scheduling-k8s-io-v1) schema |
| 201 - Created | [`PriorityClass`](/rest_api/schedule_and_quota_apis/priorityclass-scheduling-k8s-io-v1#priorityclass-scheduling-k8s-io-v1) schema |
| 401 - Unauthorized | Empty |

### /apis/scheduling.k8s.io/v1/watch/priorityclasses/{{ name }} {id="_apisschedulingk8siov1watchpriorityclasses_name"}

**Global path parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `string` | name of the PriorityClass |


HTTP method
:     `GET`


Description
:     watch changes to an object of kind PriorityClass. deprecated: use the &#x27;watch&#x27; parameter with a list operation instead, filtered to a single item with the &#x27;fieldSelector&#x27; parameter.

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`WatchEvent`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-WatchEvent) schema |
| 401 - Unauthorized | Empty |