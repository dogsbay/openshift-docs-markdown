{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating KubeFed custom resources {id="creating-kubefed-CRs_{{ context }}"}

You must create the `KubeFedWebHook` and `KubeFed` custom resources (CRs) for {{ KubeFedProductShortName }} deployment.
The {{ KubeFedProductName }} Operator creates the required custom resource definitions (CRDs) for these CRs automatically.

**Prerequisites**

*   You must have the `oc` CLI tool installed.

**Procedure**

1.  Create a `KubeFedWebHook` resource to instantiate an admission webhook controller for {{ KubeFedProductShortName }}. The namespace for this CR is `openshift-federation-system`.
    ```
    $ cat <<-EOF | oc apply -n <namespace> -f -
     ---
     apiVersion: operator.kubefed.io/v1alpha1
     kind: KubeFedWebHook
     metadata:
       name: kubefed-webhook-resource
     spec:
    ---
    ```
1.  Create a `KubeFed` resource to drive the installation of {{ KubeFedProductShortName }}. If you are planning to federate a cluster-scoped resource type, for example `StorageClass`, create this CR with `scope: Cluster`.

    The namespace for this CR is `openshift-federation-system`, unless you are deploying namespace-scoped {{ KubeFedProductShortName }}, in which case you can use the namespace(s) that you want to deploy {{ KubeFedProductShortName }} to.
    ```
    $ cat <<-EOF | oc apply -n <namespace> -f -
    ---
    apiVersion: operator.kubefed.io/v1alpha1
    kind: KubeFed
    metadata:
      name: kubefed-resource
    spec:
      scope: Cluster
    ---
    ```