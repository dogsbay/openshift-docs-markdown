{% if context == "cluster-api-getting-started" %}
{%- set machine_to_cluster = true -%}
{% endif %}
{% if context == "cluster-api-disabling" %}
{%- set cluster_to_machine = true -%}
{% endif %}

{% if machine_to_cluster %}
{%- set from_api_name = "Machine API" -%}
{%- set to_api_name = "Cluster API" -%}
{%- set from_api_value = "MachineAPI" -%}
{%- set to_api_value = "ClusterAPI" -%}
{%- set from_api_group = "machine.openshift.io" -%}
{%- set to_api_group = "cluster.x-k8s.io" -%}
{%- set from_namespace = "openshift-machine-api" -%}
{% endif %}

{% if cluster_to_machine %}
{%- set from_api_name = "Cluster API" -%}
{%- set to_api_name = "Machine API" -%}
{%- set from_api_value = "ClusterAPI" -%}
{%- set to_api_value = "MachineAPI" -%}
{%- set from_api_group = "cluster.x-k8s.io" -%}
{%- set to_api_group = "machine.openshift.io" -%}
{%- set from_namespace = "openshift-cluster-api" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Migrating a {{ from_api_name }} resource to use the {{ to_api_name }} {id="migrating-between-capi-mapi_{{ context }}"}

You can migrate individual {{ from_api_name }} objects to equivalent {{ to_api_name }} objects. {._abstract}

{%- set FeatureName = "Migrating a {{ from_api_name }} resource to use the {{ to_api_name }}" %}
{% include "./snippets/technology-preview.md" %}

**Prerequisites**

*   You have deployed an {{ product_title }} cluster on a supported infrastructure type.

{% if machine_to_cluster %}
*   You have enabled the use of the Cluster API.
{% endif %}
*   You have enabled the `MachineAPIMigration` feature gate in the `TechPreviewNoUpgrade` feature set.
*   You have access to the cluster using an account with `cluster-admin` permissions.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Identify the {{ from_api_name }} resource that you want to migrate to a {{ to_api_name }} resource by running the following command:
    ```terminal {minja}
    $ oc get <resource_kind> -n {{ from_namespace }}
    ```
    where `<resource_kind>` is one of the following values:


    `machine.{{ from_api_group }}`{minja}
    :   The fully qualified name of the resource kind for a compute or control plane machine.


    `machineset.{{ from_api_group }}`{minja}
    :   The fully qualified name of the resource kind for a compute machine set.
1.  Edit the resource specification by running the following command:
    ```terminal
    $ oc edit <resource_kind>/<resource_name> -n openshift-machine-api
    ```
    where:


    `<resource_kind>`
    :   Specifies a compute machine with `machine.machine.openshift.io` or compute machine set with `machineset.machine.openshift.io`.
{%- if machine_to_cluster %}

    `<resource_name>`
    :   Specifies the name of the Machine API resource that you want to migrate to a Cluster API resource.
{%- endif %}
{%- if cluster_to_machine %}

    `<resource_name>`
    :   Specifies the name of the Machine API resource that corresponds to the Cluster API resource that you want to migrate to the Machine API.
{%- endif %}
1.  In the resource specification, update the value of the `spec.authoritativeAPI` field:
    ```yaml {minja}
    apiVersion: machine.openshift.io/v1beta1
    kind: <resource_kind>
    metadata:
      name: <resource_name>
      [...]
    spec:
      authoritativeAPI: {{ to_api_value }}
      [...]
    status:
      authoritativeAPI: {{ from_api_value }}
      [...]
    ```
    where:


    `kind`
    :   Specifies the resource kind of the resource that you want to migrate.
        For example, the resource kind for a compute machine set is `MachineSet` and the resource kind for a compute machine is `Machine`.

    `metadata.name`
    :   Specifies the name of the resource that you want to migrate.

    `spec.authoritativeAPI`
    :   Specifies the authoritative API that you want this resource to use.
        For example, to start migrating a {{ from_api_name }} resource to the {{ to_api_name }}, specify `{{ to_api_value }}`{minja}.

    `status.authoritativeAPI`
    :   Specifies the value for the current authoritative API.
        This value indicates which API currently manages this resource.
        Do not change the value in this part of the specification.

    :::important

    Do not change other values when you update the value of the `spec.authoritativeAPI` field.
    Because other controllers might process updates to other values before the synchronization controller processes the `spec.authoritativeAPI` field update, changing other values can cause unexpected behavior.

    For more information, see "Unexpected behavior when changing resource configurations".
    
    :::


**Verification**

*   Check the status of the conversion by running the following command:
    ```terminal
    $ oc -n openshift-machine-api get <resource_kind>/<resource_name> -o json | jq .status.authoritativeAPI
    ```
    where:


    `<resource_kind>`
    :   Specifies a compute machine with `machine.machine.openshift.io` or compute machine set with `machineset.machine.openshift.io`.
{%- if machine_to_cluster %}

    `<resource_name>`
    :   Specifies the name of the Machine API resource that you want to migrate to a Cluster API resource.
{%- endif %}
{%- if cluster_to_machine %}

    `<resource_name>`
    :   Specifies the name of the Machine API resource that corresponds to the Cluster API resource that you want to migrate to the Machine API.
{%- endif %}
    *   While the conversion progresses, this command returns a value of `Migrating`.
    If this value persists for a long time, check the logs for the `cluster-capi-operator` deployment in the `openshift-cluster-api` namespace for more information and to identify potential issues.
    *   When the conversion is complete, this command returns a value of `{{ to_api_value }}`{minja}.
{% if cluster_to_machine %}

    :::important

    Do not delete any nonauthoritative resource that does not use the current authoritative API unless you want to delete the corresponding resource that does use the current authoritative API.

    When you delete a nonauthoritative resource that does not use the current authoritative API, the synchronization controller deletes the corresponding resource that does use the current authoritative API.
    For more information, see "Unexpected resource deletion behavior" in the _Troubleshooting resource migration_ content.
    
    :::

{% endif %}

{%- set from_api_name = "" -%}
{%- set to_api_name = "" -%}
{%- set from_api_value = "" -%}
{%- set to_api_value = "" -%}
{%- set from_api_group = "" -%}
{%- set to_api_group = "" -%}
{%- set from_namespace = "" -%}

{% if context == "cluster-api-getting-started" %}
{%- set machine_to_cluster = "" -%}
{% endif %}
{% if context == "cluster-api-disabling" %}
{%- set cluster_to_machine = "" -%}
{% endif %}