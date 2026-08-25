{% if context == "configuring-sriov-net-attach" %}
{%- set rs = "SriovNetwork" -%}
{%- set ocp_sriov_net = true -%}
{%- set object = "pods" -%}
{% endif %}

{% if context == "configuring-sriov-ib-attach" %}
{%- set rs = "SriovIBNetwork" -%}
{%- set ocp_sriov_net = true -%}
{%- set object = "pods" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" -%}
{% if ocp_sriov_net %}
# Configuring SR-IOV additional network {id="nw-sriov-network-attachment_{{ context }}"}

You can configure an additional network that uses SR-IOV hardware by creating an `{{ rs }}`{minja} object.
When you create an `{{ rs }}`{minja} object, the SR-IOV Network Operator automatically creates a `NetworkAttachmentDefinition` object. {._abstract}


:::note

Do not modify or delete an `{{ rs }}`{minja} object if it is attached to any {{ object }} in a `running` state.

:::


**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create a `{{ rs }}`{minja} object, and then save the YAML in the `<name>.yaml` file, where `<name>` is a name for this additional network. The object specification might resemble the following example:
    ```yaml {minja}
    apiVersion: sriovnetwork.openshift.io/v1
    kind: {{ rs }}
    metadata:
      name: attach1
      namespace: openshift-sriov-network-operator
    spec:
      resourceName: net1
      networkNamespace: project2
      ipam: |-
        {
          "type": "host-local",
          "subnet": "10.56.217.0/24",
          "rangeStart": "10.56.217.171",
          "rangeEnd": "10.56.217.181",
          "gateway": "10.56.217.1"
        }
    ```
1.  To create the object, enter the following command:
    ```terminal
    $ oc create -f <name>.yaml
    ```

    where:

    `<name>`
    :   Specifies the name of the additional network.

1.  Optional: To confirm that the `NetworkAttachmentDefinition` object that is associated with the `{{ rs }}`{minja} object that you created in the previous step exists, enter the following command. Replace `<namespace>` with the `networkNamespace` value you specified in the `{{ rs }}`{minja} object.
    ```terminal
    $ oc get net-attach-def -n <namespace>
    ```
{% endif %}

{% if object %}
{%- set object = "" -%}
{% endif %}

{% if rs %}
{%- set rs = "" -%}
{% endif %}

{% if context == "configuring-sriov-net-attach" %}
{%- set ocp_sriov_net = "" -%}
{% endif %}