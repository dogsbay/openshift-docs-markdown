---
title: "AppliedClusterResourceQuota [quota.openshift.io/v1]"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# AppliedClusterResourceQuota [quota.openshift.io/v1] {id="appliedclusterresourcequota-quota-openshift-io-v1"}
{%- set toc = "macro" -%}
{%- set toc_title = true %}


Description
:   AppliedClusterResourceQuota mirrors ClusterResourceQuota at a project scope, for projection into a project.  It allows a project-admin to know which ClusterResourceQuotas are applied to his project and their associated usage.


    Compatibility level 1: Stable within a major release for a minimum of 12 months or 3 minor releases (whichever is longer).


Type
:     `object`


Required
:   *   `metadata`
    *   `spec`

## Specification {id="_specification"}

| Property | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds |
| `metadata` | [`ObjectMeta`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-ObjectMeta) | metadata is the standard object’s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata |
| `spec` | `object` | ClusterResourceQuotaSpec defines the desired quota restrictions |
| `status` | `object` | ClusterResourceQuotaStatus defines the actual enforced quota and its current usage |

### .spec {id="_spec"}

Description
:   ClusterResourceQuotaSpec defines the desired quota restrictions


Type
:     `object`


Required
:   *   `selector`
    *   `quota`

| Property | Type | Description |
| --- | --- | --- |
| `quota` | [`ResourceQuotaSpec`](/rest_api/objects/index#io-k8s-api-core-v1-ResourceQuotaSpec) | quota defines the desired quota |
| `selector` | `object` | ClusterResourceQuotaSelector is used to select projects.  At least one of LabelSelector or AnnotationSelector must present.  If only one is present, it is the only selection criteria.  If both are specified, the project must match both restrictions. |

### .spec.selector {id="_specselector"}

Description
:   ClusterResourceQuotaSelector is used to select projects.  At least one of LabelSelector or AnnotationSelector must present.  If only one is present, it is the only selection criteria.  If both are specified, the project must match both restrictions.


Type
:     `object`

| Property | Type | Description |
| --- | --- | --- |
| `annotations` | `object (string)` | AnnotationSelector is used to select projects by annotation. |
| `labels` | [`LabelSelector`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-LabelSelector) | LabelSelector is used to select projects by label. |

### .status {id="_status"}

Description
:   ClusterResourceQuotaStatus defines the actual enforced quota and its current usage


Type
:     `object`


Required
:   *   `total`

| Property | Type | Description |
| --- | --- | --- |
| `namespaces` | `array` | namespaces slices the usage by project.  This division allows for quick resolution of deletion reconciliation inside of a single project without requiring a recalculation across all projects.  This can be used to pull the deltas for a given project. |
| `namespaces[]` | `object` | ResourceQuotaStatusByNamespace gives status for a particular project |
| `total` | [`ResourceQuotaStatus`](/rest_api/objects/index#io-k8s-api-core-v1-ResourceQuotaStatus) | total defines the actual enforced quota and its current usage across all projects |

### .status.namespaces {id="_statusnamespaces"}

Description
:   namespaces slices the usage by project.  This division allows for quick resolution of deletion reconciliation inside of a single project without requiring a recalculation across all projects.  This can be used to pull the deltas for a given project.


Type
:     `array`

### .status.namespaces[] {id="_statusnamespaces"}

Description
:   ResourceQuotaStatusByNamespace gives status for a particular project


Type
:     `object`


Required
:   *   `namespace`
    *   `status`

| Property | Type | Description |
| --- | --- | --- |
| `namespace` | `string` | namespace the project this status applies to |
| `status` | [`ResourceQuotaStatus`](/rest_api/objects/index#io-k8s-api-core-v1-ResourceQuotaStatus) | status indicates how many resources have been consumed by this project |

## API endpoints {id="_api_endpoints"}

The following API endpoints are available:

*   `/apis/quota.openshift.io/v1/appliedclusterresourcequotas`
    *   `GET`: list objects of kind AppliedClusterResourceQuota
*   `/apis/quota.openshift.io/v1/namespaces/{{ namespace }}/appliedclusterresourcequotas`{minja}
    *   `GET`: list objects of kind AppliedClusterResourceQuota
*   `/apis/quota.openshift.io/v1/namespaces/{{ namespace }}/appliedclusterresourcequotas/{{ name }}`{minja}
    *   `GET`: read the specified AppliedClusterResourceQuota

### /apis/quota.openshift.io/v1/appliedclusterresourcequotas {id="_apisquotaopenshiftiov1appliedclusterresourcequotas"}


HTTP method
:     `GET`


Description
:     list objects of kind AppliedClusterResourceQuota

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`AppliedClusterResourceQuotaList`](/rest_api/objects/index#com-github-openshift-api-quota-v1-AppliedClusterResourceQuotaList) schema |
| 401 - Unauthorized | Empty |

### /apis/quota.openshift.io/v1/namespaces/{{ namespace }}/appliedclusterresourcequotas {id="_apisquotaopenshiftiov1namespaces_namespace_appliedclusterresourcequotas"}


HTTP method
:     `GET`


Description
:     list objects of kind AppliedClusterResourceQuota

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`AppliedClusterResourceQuotaList`](/rest_api/objects/index#com-github-openshift-api-quota-v1-AppliedClusterResourceQuotaList) schema |
| 401 - Unauthorized | Empty |

### /apis/quota.openshift.io/v1/namespaces/{{ namespace }}/appliedclusterresourcequotas/{{ name }} {id="_apisquotaopenshiftiov1namespaces_namespace_appliedclusterresourcequotas_name"}

**Global path parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `string` | name of the AppliedClusterResourceQuota |


HTTP method
:     `GET`


Description
:     read the specified AppliedClusterResourceQuota

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`AppliedClusterResourceQuota`](/rest_api/schedule_and_quota_apis/appliedclusterresourcequota-quota-openshift-io-v1#appliedclusterresourcequota-quota-openshift-io-v1) schema |
| 401 - Unauthorized | Empty |