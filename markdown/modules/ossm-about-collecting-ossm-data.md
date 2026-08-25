{%- set _mod_docs_content_type = "CONCEPT" %}
# About collecting service mesh data {id="ossm-about-collecting-ossm-data_{{ context }}"}

You can use the `oc adm must-gather` CLI command to collect information about your cluster, including features and objects associated with {{ SMProductName }}.

**Prerequisites**

*   Access to the cluster as a user with the `cluster-admin` role.
*   The {{ product_title }} CLI (`oc`) installed.

**Procedure**

1.  To collect {{ SMProductName }} data with `must-gather`, you must specify the {{ SMProductName }} image.
    ```terminal
    $ oc adm must-gather --image=registry.redhat.io/openshift-service-mesh/istio-must-gather-rhel8:{{ MaistraVersion }}
    ```
1.  To collect {{ SMProductName }} data for a specific {{ SMProductShortName }} control plane namespace with `must-gather`, you must specify the {{ SMProductName }} image and namespace. In this example, after `gather,` replace `<namespace>` with your {{ SMProductShortName }} control plane namespace, such as `istio-system`.
    ```terminal
    $ oc adm must-gather --image=registry.redhat.io/openshift-service-mesh/istio-must-gather-rhel8:{{ MaistraVersion }} gather <namespace>
    ```

    This creates a local directory that contains the following items:
    *   The Istio Operator namespace and its child objects
    *   All control plane namespaces and their children objects
    *   All namespaces and their children objects that belong to any service mesh
    *   All Istio custom resource definitions (CRD)
    *   All Istio CRD objects, such as VirtualServices, in a given namespace
    *   All Istio webhooks