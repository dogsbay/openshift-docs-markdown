{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling communication with Knative applications on a cluster with restrictive network policies {id="serverless-services-network-policies-enabling-comms_{{ context }}"}

To allow access to your applications from Knative system pods, you must add a label to each of the Knative system namespaces, and then create a `NetworkPolicy` object in your application namespace that allows access to the namespace for other namespaces that have this label.


:::important

A network policy that denies requests to non-Knative services on your cluster still prevents access to these services. However, by allowing access from Knative system namespaces to your Knative application, you are allowing access to your Knative application from all namespaces in the cluster.

If you do not want to allow access to your Knative application from all namespaces on the cluster, you might want to use _JSON Web Token authentication for Knative services_ instead. JSON Web Token authentication for Knative services requires Service Mesh.

:::


**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   {{ ServerlessOperatorName }} and Knative Serving are installed on your cluster.

**Procedure**

1.  Add the `knative.openshift.io/system-namespace=true` label to each Knative system namespace that requires access to your application:
    1.  Label the `knative-serving` namespace:
        ```terminal
        $ oc label namespace knative-serving knative.openshift.io/system-namespace=true
        ```
    1.  Label the `knative-serving-ingress` namespace:
        ```terminal
        $ oc label namespace knative-serving-ingress knative.openshift.io/system-namespace=true
        ```
    1.  Label the `knative-eventing` namespace:
        ```terminal
        $ oc label namespace knative-eventing knative.openshift.io/system-namespace=true
        ```
    1.  Label the `knative-kafka` namespace:
        ```terminal
        $ oc label namespace knative-kafka knative.openshift.io/system-namespace=true
        ```
1.  Create a `NetworkPolicy` object in your application namespace to allow access from namespaces with the `knative.openshift.io/system-namespace` label:
    ```yaml title="Example NetworkPolicy object"
    apiVersion: networking.k8s.io/v1
    kind: NetworkPolicy
    metadata:
      name: <network_policy_name> (1)
      namespace: <namespace> (2)
    spec:
      ingress:
      - from:
        - namespaceSelector:
            matchLabels:
              knative.openshift.io/system-namespace: "true"
      podSelector: {}
      policyTypes:
      - Ingress
    ```
    1.  Provide a name for your network policy.
    1.  The namespace where your application exists.