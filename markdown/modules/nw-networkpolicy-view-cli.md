{%- set name = "network" -%}
{%- set role = "admin" -%}
{% if context == "configuring-multi-network-policy" %}
{%- set multi = true -%}
{%- set name = "multi-network" -%}
{%- set role = "cluster-admin" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# View {{ name }} policies using the CLI {id="nw-networkpolicy-view-cli_{{ context }}"}

You can examine the {{ name }} policies in a namespace. {._abstract}

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

*   You installed the {{ oc_first }}.
{%- if not microshift %}
*   You are logged in to the cluster with a user with `{{ role }}` privileges.
{%- endif %}
*   You are working in the namespace where the {{ name }} policy exists.

**Procedure**

1.  List {{ name }} policies in a namespace.
    1.  To view {{ name }} policy objects defined in a namespace enter the following
    command:
        ```terminal
        $ oc get {{ name }}policy
        ```
    1.  Optional: To examine a specific {{ name }} policy enter the following command:
        ```terminal
        $ oc describe {{ name }}policy <policy_name> -n <namespace>
        ```

        where:

        `<policy_name>`
        :   Specifies the name of the {{ name }} policy to inspect.

        `<namespace>`
        :   Optional: Specifies the namespace if the object is defined in a different namespace than the current namespace.
{%- if not multi %}
        ```terminal
        $ oc describe networkpolicy allow-same-namespace
        ```
        ```text
        Name:         allow-same-namespace
        Namespace:    ns1
        Created on:   2021-05-24 22:28:56 -0400 EDT
        Labels:       <none>
        Annotations:  <none>
        Spec:
          PodSelector:     <none> (Allowing the specific traffic to all pods in this namespace)
          Allowing ingress traffic:
            To Port: <any> (traffic allowed to all ports)
            From:
              PodSelector: <none>
          Not affecting egress traffic
          Policy Types: Ingress
        ```
{% endif %}

{% if multi %}
{%- set multi = false -%}
{% endif %}
{%- set name = false -%}
{%- set role = false -%}