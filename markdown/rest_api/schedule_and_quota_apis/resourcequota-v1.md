---
title: "ResourceQuota [v1]"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# ResourceQuota [v1] {id="resourcequota-v1"}
{%- set toc = "macro" -%}
{%- set toc_title = true %}


Description
:   ResourceQuota sets aggregate quota restrictions enforced per namespace


Type
:     `object`

## Specification {id="_specification"}

| Property | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds |
| `metadata` | [`ObjectMeta`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-ObjectMeta) | Standard object’s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata |
| `spec` | `object` | ResourceQuotaSpec defines the desired hard limits to enforce for Quota. |
| `status` | `object` | ResourceQuotaStatus defines the enforced hard limits and observed use. |

### .spec {id="_spec"}

Description
:   ResourceQuotaSpec defines the desired hard limits to enforce for Quota.


Type
:     `object`

| Property | Type | Description |
| --- | --- | --- |
| `hard` | [`object (Quantity)`](/rest_api/objects/index#io-k8s-apimachinery-pkg-api-resource-Quantity) | hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/ |
| `scopeSelector` | `object` | A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements. |
| `scopes` | `array (string)` | A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects. |

### .spec.scopeSelector {id="_specscopeselector"}

Description
:   A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.


Type
:     `object`

| Property | Type | Description |
| --- | --- | --- |
| `matchExpressions` | `array` | A list of scope selector requirements by scope of the resources. |
| `matchExpressions[]` | `object` | A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values. |

### .spec.scopeSelector.matchExpressions {id="_specscopeselectormatchexpressions"}

Description
:   A list of scope selector requirements by scope of the resources.


Type
:     `array`

### .spec.scopeSelector.matchExpressions[] {id="_specscopeselectormatchexpressions"}

Description
:   A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.


Type
:     `object`


Required
:   *   `scopeName`
    *   `operator`

| Property | Type | Description |
| --- | --- | --- |
| `operator` | `string` | Represents a scope’s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.<br>Possible enum values:  - `"DoesNotExist"`  - `"Exists"`  - `"In"`  - `"NotIn"` |
| `scopeName` | `string` | The name of the scope that the selector applies to.<br>Possible enum values:  - `"BestEffort"` Match all pod objects that have best effort quality of service  - `"CrossNamespacePodAffinity"` Match all pod objects that have cross-namespace pod (anti)affinity mentioned.  - `"NotBestEffort"` Match all pod objects that do not have best effort quality of service  - `"NotTerminating"` Match all pod objects where spec.activeDeadlineSeconds is nil  - `"PriorityClass"` Match all pod objects that have priority class mentioned  - `"Terminating"` Match all pod objects where spec.activeDeadlineSeconds >=0  - `"VolumeAttributesClass"` Match all pvc objects that have volume attributes class mentioned. |
| `values` | `array (string)` | An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. |

### .status {id="_status"}

Description
:   ResourceQuotaStatus defines the enforced hard limits and observed use.


Type
:     `object`

| Property | Type | Description |
| --- | --- | --- |
| `hard` | [`object (Quantity)`](/rest_api/objects/index#io-k8s-apimachinery-pkg-api-resource-Quantity) | Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/ |
| `used` | [`object (Quantity)`](/rest_api/objects/index#io-k8s-apimachinery-pkg-api-resource-Quantity) | Used is the current observed total usage of the resource in the namespace. |

## API endpoints {id="_api_endpoints"}

The following API endpoints are available:

*   `/api/v1/resourcequotas`
    *   `GET`: list or watch objects of kind ResourceQuota
*   `/api/v1/watch/resourcequotas`
    *   `GET`: watch individual changes to a list of ResourceQuota. deprecated: use the &#x27;watch&#x27; parameter with a list operation instead.
*   `/api/v1/namespaces/{{ namespace }}/resourcequotas`{minja}
    *   `DELETE`: delete collection of ResourceQuota
    *   `GET`: list or watch objects of kind ResourceQuota
    *   `POST`: create a ResourceQuota
*   `/api/v1/watch/namespaces/{{ namespace }}/resourcequotas`{minja}
    *   `GET`: watch individual changes to a list of ResourceQuota. deprecated: use the &#x27;watch&#x27; parameter with a list operation instead.
*   `/api/v1/namespaces/{{ namespace }}/resourcequotas/{{ name }}`{minja}
    *   `DELETE`: delete a ResourceQuota
    *   `GET`: read the specified ResourceQuota
    *   `PATCH`: partially update the specified ResourceQuota
    *   `PUT`: replace the specified ResourceQuota
*   `/api/v1/watch/namespaces/{{ namespace }}/resourcequotas/{{ name }}`{minja}
    *   `GET`: watch changes to an object of kind ResourceQuota. deprecated: use the &#x27;watch&#x27; parameter with a list operation instead, filtered to a single item with the &#x27;fieldSelector&#x27; parameter.
*   `/api/v1/namespaces/{{ namespace }}/resourcequotas/{{ name }}/status`{minja}
    *   `GET`: read status of the specified ResourceQuota
    *   `PATCH`: partially update status of the specified ResourceQuota
    *   `PUT`: replace status of the specified ResourceQuota

### /api/v1/resourcequotas {id="_apiv1resourcequotas"}


HTTP method
:     `GET`


Description
:     list or watch objects of kind ResourceQuota

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`ResourceQuotaList`](/rest_api/objects/index#io-k8s-api-core-v1-ResourceQuotaList) schema |
| 401 - Unauthorized | Empty |

### /api/v1/watch/resourcequotas {id="_apiv1watchresourcequotas"}


HTTP method
:     `GET`


Description
:     watch individual changes to a list of ResourceQuota. deprecated: use the &#x27;watch&#x27; parameter with a list operation instead.

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`WatchEvent`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-WatchEvent) schema |
| 401 - Unauthorized | Empty |

### /api/v1/namespaces/{{ namespace }}/resourcequotas {id="_apiv1namespaces_namespace_resourcequotas"}


HTTP method
:     `DELETE`


Description
:     delete collection of ResourceQuota

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
:     list or watch objects of kind ResourceQuota

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`ResourceQuotaList`](/rest_api/objects/index#io-k8s-api-core-v1-ResourceQuotaList) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `POST`


Description
:     create a ResourceQuota

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**Body parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `body` | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |  |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |
| 201 - Created | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |
| 202 - Accepted | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |
| 401 - Unauthorized | Empty |

### /api/v1/watch/namespaces/{{ namespace }}/resourcequotas {id="_apiv1watchnamespaces_namespace_resourcequotas"}


HTTP method
:     `GET`


Description
:     watch individual changes to a list of ResourceQuota. deprecated: use the &#x27;watch&#x27; parameter with a list operation instead.

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`WatchEvent`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-WatchEvent) schema |
| 401 - Unauthorized | Empty |

### /api/v1/namespaces/{{ namespace }}/resourcequotas/{{ name }} {id="_apiv1namespaces_namespace_resourcequotas_name"}

**Global path parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `string` | name of the ResourceQuota |


HTTP method
:     `DELETE`


Description
:     delete a ResourceQuota

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |
| 202 - Accepted | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `GET`


Description
:     read the specified ResourceQuota

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `PATCH`


Description
:     partially update the specified ResourceQuota

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |
| 201 - Created | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `PUT`


Description
:     replace the specified ResourceQuota

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**Body parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `body` | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |  |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |
| 201 - Created | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |
| 401 - Unauthorized | Empty |

### /api/v1/watch/namespaces/{{ namespace }}/resourcequotas/{{ name }} {id="_apiv1watchnamespaces_namespace_resourcequotas_name"}

**Global path parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `string` | name of the ResourceQuota |


HTTP method
:     `GET`


Description
:     watch changes to an object of kind ResourceQuota. deprecated: use the &#x27;watch&#x27; parameter with a list operation instead, filtered to a single item with the &#x27;fieldSelector&#x27; parameter.

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`WatchEvent`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-WatchEvent) schema |
| 401 - Unauthorized | Empty |

### /api/v1/namespaces/{{ namespace }}/resourcequotas/{{ name }}/status {id="_apiv1namespaces_namespace_resourcequotas_name_status"}

**Global path parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `string` | name of the ResourceQuota |


HTTP method
:     `GET`


Description
:     read status of the specified ResourceQuota

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `PATCH`


Description
:     partially update status of the specified ResourceQuota

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |
| 201 - Created | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `PUT`


Description
:     replace status of the specified ResourceQuota

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**Body parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `body` | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |  |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |
| 201 - Created | [`ResourceQuota`](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1) schema |
| 401 - Unauthorized | Empty |