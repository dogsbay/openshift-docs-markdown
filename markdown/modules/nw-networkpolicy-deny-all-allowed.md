{%- set name = "network" -%}
{%- set role = "admin" -%}
{% if context == "configuring-multi-network-policy" %}
{%- set multi = true -%}
{%- set name = "multi-network" -%}
{%- set role = "cluster-admin" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a default deny all {{ name }} policy {id="nw-networkpolicy-deny-all-multi-network-policy_{{ context }}"}

The default deny all {{ name }} policy blocks all cross-pod networking other than network traffic allowed by the configuration of other deployed network policies and traffic between host-networked pods.  {._abstract}

The steps in the procedure enforces a strong deny policy by applying a `deny-by-default` policy in the `my-project` namespace.


:::warning

Without configuring a `NetworkPolicy` custom resource (CR) that allows traffic communication, the following policy might cause communication problems across your cluster.

:::


**Prerequisites**

{%- if not microshift %}
*   Your cluster uses a network plugin that supports `NetworkPolicy` objects, such as the OVN-Kubernetes network plugin, with `mode: NetworkPolicy` set.
{%- endif %}
*   You installed the {{ oc_first }}.
{%- if not microshift %}
*   You logged in to the cluster with a user with `{{ role }}` privileges.
{%- endif %}
*   You are working in the namespace that the {{ name }} policy applies to.

**Procedure**

1.  Create the following YAML that defines a `deny-by-default` policy to deny ingress from all pods in all namespaces. Save the YAML in the `deny-by-default.yaml` file:
    {%- if multi %}
    ```yaml
    apiVersion: k8s.cni.cncf.io/v1beta1
    kind: MultiNetworkPolicy
    metadata:
      name: deny-by-default
      namespace: my-project
      annotations:
        k8s.v1.cni.cncf.io/policy-for:<namespace_name>/<network_name>
    spec:
      podSelector: {}
      policyTypes:
      - Ingress
      ingress: []
    ```

    where:

    `namespace`
    :   Specifies the namespace in which to deploy the policy. For example, the `my-project` namespace.

    `annotations`
    :   Specifies the name of namespace project followed by the network attachment definition name.

    `podSelector`
    :   If this field is empty, the configuration matches all the pods. Therefore, the policy applies to all pods in the `my-project` namespace.

    `policyTypes`
    :   Specifies a list of rule types that the `NetworkPolicy` relates to.

    `- Ingress`
    :   Specifies `Ingress` only `policyTypes`.

    `ingress`
    :   Specifies ingress rules. If not specified, all incoming traffic is dropped to all pods.
{% endif %}
{% if not multi %}
        ```yaml
        kind: NetworkPolicy
        apiVersion: networking.k8s.io/v1
        metadata:
          name: deny-by-default
          namespace: my-project
        spec:
          podSelector: {}
          ingress: []
        ```
    where:
    `namespace`:: Specifies the namespace in which to deploy the policy. For example, the `my-project` namespace.
    `podSelector`:: If this field is empty, the configuration matches all the pods. Therefore, the policy applies to all pods in the `my-project` namespace.
    `ingress`:: Where `[]` indicates that no `ingress` rules are specified. This causes incoming traffic to be dropped to all pods.
{% endif %}

1.  Apply the policy by entering the following command. Successful output lists the name of the policy object and the `created` status.
    ```terminal
    $ oc apply -f deny-by-default.yaml
    ```

{% if multi %}
{%- set multi = false -%}
{% endif %}
{%- set name = false -%}
{%- set role = false -%}