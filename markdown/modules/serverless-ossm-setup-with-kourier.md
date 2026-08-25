{%- set _mod_docs_content_type = "PROCEDURE" %}
# Integrating {{ SMProductShortName }} with {{ ServerlessProductName }} when Kourier is enabled {id="serverless-ossm-setup-with-kourier_{{ context }}"}

You can use {{ SMProductShortName }} with {{ ServerlessProductName }} even if Kourier is already enabled. This procedure might be useful if you have already installed Knative Serving with Kourier enabled, but decide to add a {{ SMProductShortName }} integration later.

**Prerequisites**

{% if openshift_enterprise %}
*   You have access to an {{ product_title }} account with cluster administrator access.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to an {{ product_title }} account with cluster or dedicated administrator access.
{% endif %}

*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   Install the OpenShift CLI (`oc`).
*   Install the {{ ServerlessOperatorName }} and Knative Serving on your cluster.
*   Install {{ SMProductName }}. {{ ServerlessProductName }} with {{ SMProductShortName }} and Kourier is supported for use with both {{ SMProductName }} versions 1.x and 2.x.

**Procedure**

1.  Add the namespaces that you would like to integrate with {{ SMProductShortName }} to the `ServiceMeshMemberRoll` object as members:
    ```yaml
    apiVersion: maistra.io/v1
    kind: ServiceMeshMemberRoll
    metadata:
      name: default
      namespace: istio-system
    spec:
      members:
        - <namespace> (1)
    ...
    ```
    1.  A list of namespaces to be integrated with {{ SMProductShortName }}.
1.  Apply the `ServiceMeshMemberRoll` resource:
    ```terminal
    $ oc apply -f <filename>
    ```
1.  Create a network policy that permits traffic flow from Knative system pods to Knative services:
    1.  For each namespace that you want to integrate with {{ SMProductShortName }}, create a `NetworkPolicy` resource:
        ```yaml
        apiVersion: networking.k8s.io/v1
        kind: NetworkPolicy
        metadata:
          name: allow-from-serving-system-namespace
          namespace: <namespace> (1)
        spec:
          ingress:
          - from:
            - namespaceSelector:
                matchLabels:
                  knative.openshift.io/part-of: "openshift-serverless"
          podSelector: {}
          policyTypes:
          - Ingress
        ...
        ```
        1.  Add the namespace that you want to integrate with {{ SMProductShortName }}.

        :::note

        The `knative.openshift.io/part-of: "openshift-serverless"` label was added in {{ ServerlessProductName }} 1.22.0. If you are using {{ ServerlessProductName }} 1.21.1 or earlier, add the `knative.openshift.io/part-of` label to the `knative-serving` and `knative-serving-ingress` namespaces.

        Add the label to the `knative-serving` namespace:

        ```terminal
        $ oc label namespace knative-serving knative.openshift.io/part-of=openshift-serverless
        ```

        Add the label to the `knative-serving-ingress` namespace:

        ```terminal
        $ oc label namespace knative-serving-ingress knative.openshift.io/part-of=openshift-serverless
        ```
        
        :::

    1.  Apply the `NetworkPolicy` resource:
        ```terminal
        $ oc apply -f <filename>
        ```