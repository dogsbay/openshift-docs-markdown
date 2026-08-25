{%- set name = "network" -%}
{%- set role = "admin" -%}
{% if context == "configuring-multi-network-policy" %}
{%- set multi = true -%}
{%- set name = "multi-network" -%}
{%- set role = "cluster-admin" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a {{ name }} policy allowing traffic to an application from all namespaces {id="nw-networkpolicy-allow-traffic-from-all-applications_{{ context }}"}

You can configure a policy that allows traffic from all pods in all namespaces to a particular application. {._abstract}

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

**Procedure**

1.  Create a policy that allows traffic from all pods in all namespaces to a particular application. Save the YAML in the `web-allow-all-namespaces.yaml` file:
    {%- if not multi %}
    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: NetworkPolicy
    metadata:
      name: web-allow-all-namespaces
      namespace: default
    spec:
      podSelector:
        matchLabels:
          app: web
      policyTypes:
      - Ingress
      ingress:
      - from:
        - namespaceSelector: {}
    ```
{% endif %}
{% if multi %}
    ```yaml
    apiVersion: k8s.cni.cncf.io/v1beta1
    kind: MultiNetworkPolicy
    metadata:
      name: web-allow-all-namespaces
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
        - namespaceSelector: {}
    ```
{%- endif %}

    where:

    `app`
    :   Applies the policy only to `app:web` pods in default namespace.

    `namespaceSelector`
    :   Selects all pods in all namespaces.

    :::note

    By default, if you do not specify a `namespaceSelector` parameter in the policy object, no namespaces get selected. This means the policy allows traffic only from the namespace where the network policy deployes.
    
    :::


1.  Apply the policy by entering the following command. Successful output lists the name of the policy object and the `created` status.
    ```terminal
    $ oc apply -f web-allow-all-namespaces.yaml
    ```

**Verification**

1.  Start a web service in the `default` namespace by entering the following command:
    ```terminal
    $ oc run web --namespace=default --image=nginx --labels="app=web" --expose --port=80
    ```
1.  Run the following command to deploy an `alpine` image in the `secondary` namespace and to start a shell:
    ```terminal
    $ oc run test-$RANDOM --namespace=secondary --rm -i -t --image=alpine -- sh
    ```
1.  Run the following command in the shell and observe that the service allows the request:
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