{%- set name = "network" -%}
{%- set role = "admin" -%}
{% if context == "configuring-multi-network-policy" %}
{%- set multi = true -%}
{%- set name = "multi-network" -%}
{%- set role = "cluster-admin" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a {{ name }} policy allowing traffic to an application from a namespace {id="nw-networkpolicy-allow-traffic-from-a-namespace_{{ context }}"}

You can configure a policy that allows traffic to a pod with the label `app=web` from a particular namespace.  {._abstract}

This configuration is useful in the following use cases:

*   Restrict traffic to a production database only to namespaces that have production workloads deployed.
*   Enable monitoring tools deployed to a particular namespace to scrape metrics from the current namespace.

{% if not microshift %}

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
*   You logged in to the cluster with a user with `{{ role }}` privileges.
{%- endif %}
*   You are working in the namespace that the {{ name }} policy applies to.


:::warning

Do not apply the `network.openshift.io/policy-group: ingress` label to custom namespace or projects. This label is Operator-managed and reserved for {{ product_title }} networking functions. It should not be altered on system-created namespaces.

Using this label can result in intermittent network connectivity drops, unintended application of system `NetworkPolicies` resource, or configuration drift as the operator attempts to reconcile the state. For custom traffic grouping, always use unique, user-defined labels as shown in the following procedure.

:::


**Procedure**

1.  Create a policy that allows traffic from all pods in a particular namespaces with a label `purpose=production`. Save the YAML in the `web-allow-prod.yaml` file:
    {%- if multi %}
    ```yaml
    apiVersion: k8s.cni.cncf.io/v1beta1
    kind: MultiNetworkPolicy
    metadata:
      name: web-allow-prod
      namespace: default
      annotations:
        k8s.v1.cni.cncf.io/policy-for:<namespace_name>/<network_name>
    spec:
      podSelector:
        matchLabels:
          app: web
      policyTypes:
      - Ingress
      ingress:
      - from:
        - namespaceSelector:
            matchLabels:
              purpose: production
    ```
{% endif %}
{% if not multi %}
    ```yaml
    kind: NetworkPolicy
    apiVersion: networking.k8s.io/v1
    metadata:
      name: web-allow-prod
      namespace: default
    spec:
      podSelector:
        matchLabels:
          app: web
      policyTypes:
      - Ingress
      ingress:
      - from:
        - namespaceSelector:
            matchLabels:
              purpose: production
    ```
{%- endif %}

    where:

    `app`
    :   Applies the policy only to `app:web` pods in the default namespace.

    `purpose`
    :   Restricts traffic to only pods in namespaces that have the label `purpose=production`.

1.  Apply the policy by entering the following command. Successful output lists the name of the policy object and the `created` status.
    ```terminal
    $ oc apply -f web-allow-prod.yaml
    ```

**Verification**

1.  Start a web service in the `default` namespace by entering the following command:
    ```terminal
    $ oc run web --namespace=default --image=nginx --labels="app=web" --expose --port=80
    ```
1.  Run the following command to create the `prod` namespace:
    ```terminal
    $ oc create namespace prod
    ```
1.  Run the following command to label the `prod` namespace:
    ```terminal
    $ oc label namespace/prod purpose=production
    ```
1.  Run the following command to create the `dev` namespace:
    ```terminal
    $ oc create namespace dev
    ```
1.  Run the following command to label the `dev` namespace:
    ```terminal
    $ oc label namespace/dev purpose=testing
    ```
1.  Run the following command to deploy an `alpine` image in the `dev` namespace and to start a shell:
    ```terminal
    $ oc run test-$RANDOM --namespace=dev --rm -i -t --image=alpine -- sh
    ```
1.  Run the following command in the shell and observe the reason for the blocked request. For example, expected output states `wget: download timed out`.
    ```terminal
    # wget -qO- --timeout=2 http://web.default
    ```
1.  Run the following command to deploy an `alpine` image in the `prod` namespace and start a shell:
    ```terminal
    $ oc run test-$RANDOM --namespace=prod --rm -i -t --image=alpine -- sh
    ```
1.  Run the following command in the shell and observe that the request is allowed:
    ```terminal
    # wget -qO- --timeout=2 http://web.default
    ```
    ```terminal
    <!DOCTYPE html>
    <html>
    <head>
    <title>Welcome to nginx!</title>
    <style>
    html { color-scheme: light dark; }
    body { width: 35em; margin: 0 auto;
    font-family: Tahoma, Verdana, Arial, sans-serif; }
    </style>
    </head>
    <body>
    <h1>Welcome to nginx!</h1>
    <p>If you see this page, the nginx web server is successfully installed and
    working. Further configuration is required.</p>

    <p>For online documentation and support please refer to
    <a href="http://nginx.org/">nginx.org</a>.<br/>
    Commercial support is available at
    <a href="http://nginx.com/">nginx.com</a>.</p>

    <p><em>Thank you for using nginx.</em></p>
    </body>
    </html>
    ```

{% if multi %}
{%- set multi = false -%}
{% endif %}
{%- set name = false -%}
{%- set role = false -%}