---
title: "DeploymentLog [apps.openshift.io/v1]"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# DeploymentLog [apps.openshift.io/v1] {id="deploymentlog-apps-openshift-io-v1"}
{%- set toc = "macro" -%}
{%- set toc_title = true %}


Description
:   DeploymentLog represents the logs for a deployment


    Compatibility level 1: Stable within a major release for a minimum of 12 months or 3 minor releases (whichever is longer).


Type
:     `object`

## Specification {id="_specification"}

| Property | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds |

## API endpoints {id="_api_endpoints"}

The following API endpoints are available:

*   `/apis/apps.openshift.io/v1/namespaces/{{ namespace }}/deploymentconfigs/{{ name }}/log`{minja}
    *   `GET`: read log of the specified DeploymentConfig

### /apis/apps.openshift.io/v1/namespaces/{{ namespace }}/deploymentconfigs/{{ name }}/log {id="_apisappsopenshiftiov1namespaces_namespace_deploymentconfigs_name_log"}

**Global path parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `string` | name of the DeploymentLog |


HTTP method
:     `GET`


Description
:     read log of the specified DeploymentConfig

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`DeploymentLog`](/rest_api/workloads_apis/deploymentlog-apps-openshift-io-v1#deploymentlog-apps-openshift-io-v1) schema |
| 401 - Unauthorized | Empty |