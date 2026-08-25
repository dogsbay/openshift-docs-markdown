{%- set name = "network" -%}
{%- set role = "admin" -%}
{% if context == "configuring-multi-network-policy" %}
{%- set multi = true -%}
{%- set name = "multi-network" -%}
{%- set role = "cluster-admin" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a {{ name }} policy using the CLI {id="nw-networkpolicy-create-cli_{{ context }}"}

To define granular rules describing ingress or egress network traffic allowed for namespaces in your cluster, you can create a {{ name }} policy. {._abstract}

{% if not (multi or microshift) %}

:::note

If you log in with a user with the `cluster-admin` role, then you can create a network policy in any namespace in the cluster.

:::

{% endif %}

**Prerequisites**

{%- if not microshift %}
*   Your cluster uses a network plugin that supports `NetworkPolicy` objects, such as the OVN-Kubernetes network plugin, with `mode: NetworkPolicy` set.
{%- endif %}
*   You installed the {{ oc_first }}.
{%- if not microshift %}
*   You logged in to the cluster with a user with `{{ role }}`{minja} privileges.
{%- endif %}
*   You are working in the namespace that the {{ name }} policy applies to.

**Procedure**

1.  Create a policy rule.
    1.  Create a `<policy_name>.yaml` file:
        ```terminal
        $ touch <policy_name>.yaml
        ```

        where:

        `<policy_name>`
        :   Specifies the {{ name }} policy file name.
    1.  Define a {{ name }} policy in the created file. The following example denies ingress traffic from all pods in all namespaces. This is a fundamental policy, blocking all cross-pod networking other than cross-pod traffic allowed by the configuration of other Network Policies.
{% if not multi %}
        ```yaml
        kind: NetworkPolicy
        apiVersion: networking.k8s.io/v1
        spec:
          podSelector: {}
          policyTypes:
          - Ingress
          ingress: []
        ```
{% endif %}
{% if multi %}
        ```yaml
        apiVersion: k8s.cni.cncf.io/v1beta1
        kind: MultiNetworkPolicy
        metadata:
          name: deny-by-default
          annotations:
            k8s.v1.cni.cncf.io/policy-for:<namespace_name>/<network_name>
        spec:
          podSelector: {}
          policyTypes:
          - Ingress
          ingress: []
        ```

        where:

        `<network_name>`
        :   Specifies the name of a network attachment definition.
{% endif %}

        The following example configuration allows ingress traffic  from all pods in the same namespace:
{% if not multi %}
        ```yaml
        kind: NetworkPolicy
        apiVersion: networking.k8s.io/v1
        metadata:
          name: allow-same-namespace
        spec:
          podSelector:
          ingress:
          - from:
            - podSelector: {}
        # ...
        ```
{% endif %}
{% if multi %}
        ```yaml
        apiVersion: k8s.cni.cncf.io/v1beta1
        kind: MultiNetworkPolicy
        metadata:
          name: allow-same-namespace
          annotations:
            k8s.v1.cni.cncf.io/policy-for:<namespace_name>/<network_name>
        spec:
          podSelector:
          ingress:
          - from:
            - podSelector: {}
        # ...
        ```

        where:

        `<network_name>`
        :   Specifies the name of a network attachment definition.
{% endif %}

        The following example allows ingress traffic to one pod from a particular namespace. This policy allows traffic to pods that have the `pod-a` label from pods running in `namespace-y`.
{% if not multi %}
        ```yaml
        kind: NetworkPolicy
        apiVersion: networking.k8s.io/v1
        metadata:
          name: allow-traffic-pod
        spec:
          podSelector:
           matchLabels:
              pod: pod-a
          policyTypes:
          - Ingress
          ingress:
          - from:
            - namespaceSelector:
                matchLabels:
                   kubernetes.io/metadata.name: namespace-y
        # ...
        ```
{% endif %}
{% if multi %}
        ```yaml
        apiVersion: k8s.cni.cncf.io/v1beta1
        kind: MultiNetworkPolicy
        metadata:
          name: allow-traffic-pod
          annotations:
            k8s.v1.cni.cncf.io/policy-for:<namespace_name>/<network_name>
        spec:
          podSelector:
           matchLabels:
              pod: pod-a
          policyTypes:
          - Ingress
          ingress:
          - from:
            - namespaceSelector:
                matchLabels:
                   kubernetes.io/metadata.name: namespace-y
        # ...
        ```

        where:

        `<network_name>`
        :   Specifies the name of a network attachment definition.
{% endif %}

        The following example configuration restricts traffic to a service. This policy when applied ensures every pod with both labels `app=bookstore` and `role=api` can only be accessed by pods with label `app=bookstore`. In this example the application could be a REST API server, marked with labels `app=bookstore` and `role=api`.

        This example configuration addresses the following use cases:
        *   Restricting the traffic to a service to only the other microservices that need to use it.
        *   Restricting the connections to a database to only permit the application using it.
{% if not multi %}
            ```yaml
            kind: NetworkPolicy
            apiVersion: networking.k8s.io/v1
            metadata:
              name: api-allow
            spec:
              podSelector:
                matchLabels:
                  app: bookstore
                  role: api
              ingress:
              - from:
                  - podSelector:
                      matchLabels:
                        app: bookstore
            # ...
            ```
{% endif %}
{% if multi %}
            ```yaml
            apiVersion: k8s.cni.cncf.io/v1beta1
            kind: MultiNetworkPolicy
            metadata:
              name: api-allow
              annotations:
                k8s.v1.cni.cncf.io/policy-for:<namespace_name>/<network_name>
            spec:
              podSelector:
                matchLabels:
                  app: bookstore
                  role: api
              ingress:
              - from:
                  - podSelector:
                      matchLabels:
                        app: bookstore
            # ...
            ```

            where:

            `<network_name>`
            :   Specifies the name of a network attachment definition.
{% endif %}
1.  To create the {{ name }} policy object, enter the following command. Successful output lists the name of the policy object and the `created` status.
    ```terminal
    $ oc apply -f <policy_name>.yaml -n <namespace>
    ```
    where:


    `<policy_name>`
    :   Specifies the {{ name }} policy file name.

    `<namespace>`
    :   Optional parameter. If you defined the object in a different namespace than the current namespace, the parameter specifices the namespace.

    Successful output lists the name of the policy object and the `created` status.

{% if not microshift %}

    :::note

    If you log in to the web console with `cluster-admin` privileges, you have a choice of creating a network policy in any namespace in the cluster directly in YAML or from a form in the web console.
    
    :::

{% endif %}

{% if multi %}
{%- set multi = "" -%}
{% endif %}
{%- set name = "" -%}
{%- set role = "" -%}