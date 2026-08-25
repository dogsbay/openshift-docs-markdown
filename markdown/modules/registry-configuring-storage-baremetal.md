{% if context == "installing-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-power" %}
{%- set ibm_power = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
{%- if not (ibm_z or ibm_power) %}
# Configuring registry storage for bare metal and other manual installations {id="registry-configuring-storage-baremetal_{{ context }}"}

{% endif %}
{% if ibm_z %}
# Configuring registry storage for {{ ibm_z_title }} {id="_configuring_registry_storage_for_ibm_z_title"}

{% endif %}
{% if ibm_power %}
# Configuring registry storage for {{ ibm_power_title }} {id="_configuring_registry_storage_for_ibm_power_title"}

{% endif %}

As a cluster administrator, following installation you must configure your registry to use storage. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have a cluster
{% if not (ibm_z or ibm_power) %}
that uses manually-provisioned {{ op_system_first }} nodes, such as bare metal.
{% endif %}
{% if ibm_z %}
on {{ ibm_z_name }}.
{% endif %}
{% if ibm_power %}
on {{ ibm_power_name }}.
{% endif %}
*   You have provisioned persistent storage for your cluster, such as {{ rh_storage_first }}.

    :::important

    {{ product_title }} supports `ReadWriteOnce` access for image registry storage when you have only one replica. `ReadWriteOnce` access also requires that the registry uses the `Recreate` rollout strategy. To deploy an image registry that supports high availability with two or more replicas, `ReadWriteMany` access is required.
    
    :::

*   You must have a system with at least 100Gi capacity.

**Procedure**

1.  To configure your registry to use storage, change the `spec.storage.pvc` in
the `configs.imageregistry/cluster` resource.

    :::note

    When you use shared storage, review your security settings to prevent outside access.
    
    :::

1.  Verify that you do not have a registry pod:
    ```terminal
    $ oc get pod -n openshift-image-registry -l docker-registry=default
    ```
    ```terminal title="Example output"
    No resources found in openshift-image-registry namespace
    ```

    :::note

    If you do have a registry pod in your output, you do not need to continue with this procedure.
    
    :::

1.  Check the registry configuration:
    ```terminal
    $ oc edit configs.imageregistry.operator.openshift.io
    ```
    ```yaml title="Example output"
    storage:
      pvc:
        claim:
    ```

    Leave the `claim` field blank to allow the automatic creation of an
    `image-registry-storage` PVC.
1.  Check the `clusteroperator` status:
    ```terminal
    $ oc get clusteroperator image-registry
    ```
    ```terminal title="Example output"
    NAME             VERSION              AVAILABLE   PROGRESSING   DEGRADED   SINCE   MESSAGE
    image-registry   {{ product_version }}                 True        False         False      6h50m
    ```
1.  Ensure that your registry is set to managed to enable building and pushing of images.
    *   Run:
        ```
        $ oc edit configs.imageregistry/cluster
        ```

        Then, change the line
        ```
        managementState: Removed
        ```

        to
        ```
        managementState: Managed
        ```

{% if context == "installing-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-ibm-power" %}
{%- set ibm_power = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = false -%}
{% endif %}