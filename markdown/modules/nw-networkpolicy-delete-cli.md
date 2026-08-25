{%- set name = "network" -%}
{%- set role = "admin" -%}
{% if context == "configuring-multi-network-policy" %}
{%- set multi = true -%}
{%- set name = "multi-network" -%}
{%- set role = "cluster-admin" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Delete a {{ name }} policy using the CLI {id="nw-networkpolicy-delete-cli_{{ context }}"}

You can delete a {{ name }} policy in a namespace. {._abstract}

{% if not multi %}

:::note

If you log in with `cluster-admin` privileges, you can delete network policies in any namespace in the cluster.

:::

{% endif %}

{% if not microshift %}

:::note

If you log in with `cluster-admin` privileges, you can delete network policies in any namespace in the cluster. In the web console, you can delete policies directly in YAML or by using the **Actions** menu.

:::

{% endif %}

**Prerequisites**

{%- if not microshift %}
*   Your cluster uses a network plugin that supports `NetworkPolicy` objects, such as the OVN-Kubernetes network plugin, with `mode: NetworkPolicy` set.
{%- endif %}
*   You installed the OpenShift CLI (`oc`).
{%- if not microshift %}
*   You logged in to the cluster with a user with `{{ role }}`{minja} privileges.
{%- endif %}
*   You are working in the namespace where the {{ name }} policy exists.

**Procedure**

*   To delete a {{ name }} policy object, enter the following command. Successful output lists the name of the policy object and the `deleted` status.
    ```terminal {minja}
    $ oc delete {{ name }}policy <policy_name> -n <namespace>
    ```

    where:

    `<policy_name>`
    :   Specifies the name of the {{ name }} policy.

    `<namespace>`
    :   Optional parameter. If you defined the object in a different namespace than the current namespace, the parameter specifices the namespace.

{% if multi %}
{%- set multi = "" -%}
{% endif %}
{%- set name = "" -%}
{%- set role = "" -%}