---
title: "RoleBindingRestriction [authorization.openshift.io/v1]"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# RoleBindingRestriction [authorization.openshift.io/v1] {id="rolebindingrestriction-authorization-openshift-io-v1"}
{%- set toc = "macro" -%}
{%- set toc_title = true %}


Description
:   RoleBindingRestriction is an object that can be matched against a subject
    (user, group, or service account) to determine whether rolebindings on that
    subject are allowed in the namespace to which the RoleBindingRestriction
    belongs.  If any one of those RoleBindingRestriction objects matches
    a subject, rolebindings on that subject in the namespace are allowed.


    Compatibility level 1: Stable within a major release for a minimum of 12 months or 3 minor releases (whichever is longer).


Type
:     `object`

## Specification {id="_specification"}

| Property | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds |
| `metadata` | [`ObjectMeta`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-ObjectMeta) | Standard object’s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata |
| `spec` | `object` | spec defines the matcher. |

### .spec {id="_spec"}

Description
:   spec defines the matcher.


Type
:     `object`

| Property | Type | Description |
| --- | --- | --- |
| `grouprestriction` | `` | grouprestriction matches against group subjects. |
| `serviceaccountrestriction` | `` | serviceaccountrestriction matches against service-account subjects. |
| `userrestriction` | `` | userrestriction matches against user subjects. |

## API endpoints {id="_api_endpoints"}

The following API endpoints are available:

*   `/apis/authorization.openshift.io/v1/rolebindingrestrictions`
    *   `GET`: list objects of kind RoleBindingRestriction
*   `/apis/authorization.openshift.io/v1/namespaces/{{ namespace }}/rolebindingrestrictions`{minja}
    *   `DELETE`: delete collection of RoleBindingRestriction
    *   `GET`: list objects of kind RoleBindingRestriction
    *   `POST`: create a RoleBindingRestriction
*   `/apis/authorization.openshift.io/v1/namespaces/{{ namespace }}/rolebindingrestrictions/{{ name }}`{minja}
    *   `DELETE`: delete a RoleBindingRestriction
    *   `GET`: read the specified RoleBindingRestriction
    *   `PATCH`: partially update the specified RoleBindingRestriction
    *   `PUT`: replace the specified RoleBindingRestriction

### /apis/authorization.openshift.io/v1/rolebindingrestrictions {id="_apisauthorizationopenshiftiov1rolebindingrestrictions"}


HTTP method
:     `GET`


Description
:     list objects of kind RoleBindingRestriction

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`RoleBindingRestrictionList`](/rest_api/objects/index#io-openshift-authorization-v1-RoleBindingRestrictionList) schema |
| 401 - Unauthorized | Empty |

### /apis/authorization.openshift.io/v1/namespaces/{{ namespace }}/rolebindingrestrictions {id="_apisauthorizationopenshiftiov1namespaces_namespace_rolebindingrestrictions"}


HTTP method
:     `DELETE`


Description
:     delete collection of RoleBindingRestriction

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`Status`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-Status) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `GET`


Description
:     list objects of kind RoleBindingRestriction

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`RoleBindingRestrictionList`](/rest_api/objects/index#io-openshift-authorization-v1-RoleBindingRestrictionList) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `POST`


Description
:     create a RoleBindingRestriction

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**Body parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `body` | [`RoleBindingRestriction`](/rest_api/role_apis/rolebindingrestriction-authorization-openshift-io-v1#rolebindingrestriction-authorization-openshift-io-v1) schema |  |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`RoleBindingRestriction`](/rest_api/role_apis/rolebindingrestriction-authorization-openshift-io-v1#rolebindingrestriction-authorization-openshift-io-v1) schema |
| 201 - Created | [`RoleBindingRestriction`](/rest_api/role_apis/rolebindingrestriction-authorization-openshift-io-v1#rolebindingrestriction-authorization-openshift-io-v1) schema |
| 202 - Accepted | [`RoleBindingRestriction`](/rest_api/role_apis/rolebindingrestriction-authorization-openshift-io-v1#rolebindingrestriction-authorization-openshift-io-v1) schema |
| 401 - Unauthorized | Empty |

### /apis/authorization.openshift.io/v1/namespaces/{{ namespace }}/rolebindingrestrictions/{{ name }} {id="_apisauthorizationopenshiftiov1namespaces_namespace_rolebindingrestrictions_name"}

**Global path parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `string` | name of the RoleBindingRestriction |


HTTP method
:     `DELETE`


Description
:     delete a RoleBindingRestriction

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
:     read the specified RoleBindingRestriction

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`RoleBindingRestriction`](/rest_api/role_apis/rolebindingrestriction-authorization-openshift-io-v1#rolebindingrestriction-authorization-openshift-io-v1) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `PATCH`


Description
:     partially update the specified RoleBindingRestriction

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`RoleBindingRestriction`](/rest_api/role_apis/rolebindingrestriction-authorization-openshift-io-v1#rolebindingrestriction-authorization-openshift-io-v1) schema |
| 401 - Unauthorized | Empty |


HTTP method
:     `PUT`


Description
:     replace the specified RoleBindingRestriction

**Query parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dryRun` | `string` | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed |
| `fieldValidation` | `string` | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. |

**Body parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `body` | [`RoleBindingRestriction`](/rest_api/role_apis/rolebindingrestriction-authorization-openshift-io-v1#rolebindingrestriction-authorization-openshift-io-v1) schema |  |

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`RoleBindingRestriction`](/rest_api/role_apis/rolebindingrestriction-authorization-openshift-io-v1#rolebindingrestriction-authorization-openshift-io-v1) schema |
| 201 - Created | [`RoleBindingRestriction`](/rest_api/role_apis/rolebindingrestriction-authorization-openshift-io-v1#rolebindingrestriction-authorization-openshift-io-v1) schema |
| 401 - Unauthorized | Empty |