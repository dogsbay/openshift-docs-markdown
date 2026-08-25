{%- set name = "network" -%}
{%- set role = "admin" -%}
{% if context == "configuring-multi-network-policy" %}
{%- set multi = true -%}
{%- set name = "multi-network" -%}
{%- set role = "cluster-admin" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Editing a {{ name }} policy {id="nw-networkpolicy-edit_{{ context }}"}

To modify existing policy configurations, you can edit a {{ name }} policy in a namespace. Edit policies by modifying the policy file and applying it with `oc apply`, or by using the `oc edit` command directly. {._abstract}

{% if not multi %}

:::note

If you log in with `cluster-admin` privileges, you can edit network policies in any namespace in the cluster.

:::

{% endif %}

{% if not microshift %}

:::note

If you log in with `cluster-admin` privileges, you can edit network policies in any namespace in the cluster. In the web console, you can edit policies directly in YAML or by using the **Actions** menu.

:::

{% endif %}

**Prerequisites**

{%- if not microshift %}
*   Your cluster uses a network plugin that supports `NetworkPolicy` objects, such as the OVN-Kubernetes network plugin, with `mode: NetworkPolicy` set.
{%- endif %}
*   You installed the {{ oc_first }}.
{%- if not microshift %}
*   You are logged in to the cluster with a user with `{{ role }}` privileges.
{%- endif %}
*   You are working in the namespace where the {{ name }} policy exists.

**Procedure**

1.  Optional: To list the {{ name }} policy objects in a namespace, enter the following command:
    ```terminal
    $ oc get {{ name }} policy -n <namespace>
    ```

    where:

    `<namespace>`
    :   Optional: Specifies the namespace if the object is defined in a different namespace than the current namespace.

1.  Edit the {{ name }} policy object.
    1.  If you saved the {{ name }} policy definition in a file, edit the file and make any necessary changes, and then enter the following command.
        ```terminal
        $ oc apply -n <namespace> -f <policy_file>.yaml
        ```

        where:

        `<namespace>`
        :   Optional: Specifies the namespace if the object is defined in a different namespace than the current namespace.

        `<policy_file>`
        :   Specifies the name of the file containing the network policy.
    1.  If you need to update the {{ name }} policy object directly, enter the following command:
        ```terminal
        $ oc edit {{ name }} policy <policy_name> -n <namespace>
        ```

        where:

        `<policy_name>`
        :   Specifies the name of the network policy.

        `<namespace>`
        :   Optional: Specifies the namespace if the object is defined in a different namespace than the current namespace.

1.  Confirm that the {{ name }} policy object is updated.
    ```terminal
    $ oc describe {{ name }}policy <policy_name> -n <namespace>
    ```

    where:

    `<policy_name>`
    :   Specifies the name of the {{ name }} policy.

    `<namespace>`
    :   Optional: Specifies the namespace if the object is defined in a different namespace than the current namespace.

{% if multi %}
{%- set multi = false -%}
{% endif %}
{%- set name = false -%}
{%- set role = false -%}