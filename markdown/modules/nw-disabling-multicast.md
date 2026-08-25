{% if context == "ovn-kubernetes-disabling-multicast" %}
{%- set namespace = "namespace" -%}
{%- set annotation = "k8s.ovn.org/multicast-enabled-" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling multicast between pods {id="nw-disabling-multicast_{{ context }}"}

To disable multicast between pods in a project, you can remove the `k8s.ovn.org/multicast-enabled` annotation from the namespace by using the `oc annotate` command or a namespace manifest. {._abstract}

**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   You must log in to the cluster with a user that has the `cluster-admin` role.

**Procedure**

*   Disable multicast by running the following command:
    ```terminal {minja}
    $ oc annotate {{ namespace }} <namespace> \
        {{ annotation }}
    ```

    For `<namespace>`, specify the namespace for the project you want to disable multicast for.
{%- if context == "ovn-kubernetes-disabling-multicast" %}

    :::tip

    You can alternatively apply the following YAML to delete the annotation:

    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: <namespace>
      annotations:
        k8s.ovn.org/multicast-enabled: null
    ```
    
    :::

{%- endif %}

{% if context == "openshift-sdn-disabling-multicast" %}
{%- set annotation = "" -%}
{%- set namespace = "" -%}
{% endif %}
{% if context == "ovn-kubernetes-disabling-multicast" %}
{%- set annotation = "" -%}
{%- set namespace = "" -%}
{% endif %}