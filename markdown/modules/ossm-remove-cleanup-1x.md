{%- set _mod_docs_content_type = "PROCEDURE" %}
# Clean up Operator resources {id="ossm-remove-cleanup-1x_{{ context }}"}

Follow this procedure to manually remove resources left behind after removing the {{ SMProductName }} Operator using the {{ product_title }} web console.

**Prerequisites**

*   An account with cluster administration access.
*   Access to the OpenShift CLI (`oc`).

**Procedure**

1.  Log in to the {{ product_title }} CLI as a cluster administrator.
1.  Run the following commands to clean up resources after uninstalling the Operators. If you intend to keep using Jaeger as a stand alone service without service mesh, do not delete the Jaeger resources.

    :::note

    The Operators are installed in the `openshift-operators` namespace by default.  If you installed the Operators in another namespace, replace `openshift-operators` with the name of the project where the {{ SMProductName }} Operator was installed.
    
    :::

    ```terminal
    $ oc delete validatingwebhookconfiguration/openshift-operators.servicemesh-resources.maistra.io
    ```
    ```terminal
    $ oc delete mutatingwebhookconfiguration/openshift-operators.servicemesh-resources.maistra.io
    ```
    ```terminal
    $ oc delete -n openshift-operators daemonset/istio-node
    ```
    ```terminal
    $ oc delete clusterrole/istio-admin clusterrole/istio-cni clusterrolebinding/istio-cni
    ```
    ```terminal
    $ oc delete clusterrole istio-view istio-edit
    ```
    ```terminal
    $ oc delete clusterrole jaegers.jaegertracing.io-v1-admin jaegers.jaegertracing.io-v1-crdview jaegers.jaegertracing.io-v1-edit jaegers.jaegertracing.io-v1-view
    ```
    ```terminal
    $ oc get crds -o name | grep '.*\.istio\.io' | xargs -r -n 1 oc delete
    ```
    ```terminal
    $ oc get crds -o name | grep '.*\.maistra\.io' | xargs -r -n 1 oc delete
    ```
    ```terminal
    $ oc get crds -o name | grep '.*\.kiali\.io' | xargs -r -n 1 oc delete
    ```
    ```terminal
    $ oc delete crds jaegers.jaegertracing.io
    ```
    ```terminal
    $ oc delete svc admission-controller -n <operator-project>
    ```
    ```terminal
    $ oc delete project <istio-system-project>
    ```