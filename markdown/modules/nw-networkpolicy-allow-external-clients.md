{%- set name = "network" -%}
{%- set role = "admin" -%}
{% if context == "configuring-multi-network-policy" %}
{%- set multi = true -%}
{%- set name = "multi-network" -%}
{%- set role = "cluster-admin" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a {{ name }} policy to allow traffic from external clients {id="nw-networkpolicy-allow-external-clients_{{ context }}"}

With the `deny-by-default` policy in place you can proceed to configure a policy that allows traffic from external clients to a pod with the label `app=web`. {._abstract}

{% if not microshift %}

:::note

If you log in with a user with the `cluster-admin` role, then you can create a network policy in any namespace in the cluster.

:::

{% endif %}
{% if microshift %}

:::note

Firewalled rules run before any `NetworkPolicy` is enforced.

:::

{% endif %}

Follow this procedure to configure a policy that allows external service from the public Internet directly or by using a Load Balancer to access the pod. Traffic is only allowed to a pod with the label `app=web`.

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

1.  Create a policy that allows traffic from the public Internet directly or by using a load balancer to access the pod. Save the YAML in the `web-allow-external.yaml` file:
{% if not multi %}
    ```yaml
    kind: NetworkPolicy
    apiVersion: networking.k8s.io/v1
    spec:
      policyTypes:
      - Ingress
      podSelector:
        matchLabels:
          app: web
      ingress:
        - {}
    ```
{% endif %}
{% if multi %}
    ```yaml
    apiVersion: k8s.cni.cncf.io/v1beta1
    kind: MultiNetworkPolicy
    metadata:
      name: web-allow-external
      namespace: default
      annotations:
        k8s.v1.cni.cncf.io/policy-for:<namespace_name>/<network_name>
    spec:
      policyTypes:
      - Ingress
      podSelector:
        matchLabels:
          app: web
      ingress:
        - {}
    ```
{% endif %}
1.  Apply the policy by entering the following command. Successful output lists the name of the policy object and the `created` status.
    ```terminal
    $ oc apply -f web-allow-external.yaml
    ```
{% if not microshift %}

    This policy allows traffic from all resources, including external traffic as illustrated in the following diagram:
    ![Allow traffic from external clients](/images/292_OpenShift_Configuring_multi-network_policy_1122.png)
{% endif %}

{% if multi %}
{%- set multi = "" -%}
{% endif %}
{%- set name = "" -%}
{%- set role = "" -%}