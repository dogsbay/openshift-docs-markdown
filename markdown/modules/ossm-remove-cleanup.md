{%- set _mod_docs_content_type = "PROCEDURE" %}
# Clean up Operator resources {id="ossm-remove-cleanup_{{ context }}"}

You can manually remove resources left behind after removing the {{ SMProductName }} Operator using the {{ product_title }} web console.

**Prerequisites**

*   An account with cluster administration access. If you use {{ product_dedicated }}, you must have an account with the `dedicated-admin` role.
*   Access to the OpenShift CLI (`oc`).

**Procedure**

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  Log in to the {{ product_title }} CLI as a cluster administrator.
1.  Run the following commands to clean up resources after uninstalling the Operators. If you intend to keep using {{ JaegerShortName }} as a stand-alone service without service mesh, do not delete the Jaeger resources.

    :::note

    The OpenShift Elasticsearch Operator is installed in `openshift-operators-redhat` by default. The other Operators are installed in the `openshift-operators` namespace by default. If you installed the Operators in another namespace, replace `openshift-operators` with the name of the project where the {{ SMProductName }} Operator was installed.
    
    :::

    ```terminal
    $ oc -n openshift-operators delete ds -lmaistra-version
    ```
    ```terminal
    $ oc delete clusterrole/istio-admin clusterrole/istio-cni clusterrolebinding/istio-cni clusterrole/ossm-cni clusterrolebinding/ossm-cni
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
    $ oc delete cm -n openshift-operators -lmaistra-version
    ```
    ```terminal
    $ oc delete sa -n openshift-operators -lmaistra-version
    ```
{% endif %}

{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
1.  Log in to the {{ product_title }} CLI as a cluster administrator.
1.  Run the following commands to clean up resources after uninstalling the Operators. If you intend to keep using {{ JaegerShortName }} as a stand-alone service without service mesh, do not delete the Jaeger resources.

    :::note

    The OpenShift Elasticsearch Operator is installed in `openshift-operators-redhat` by default. The other Operators are installed in the `openshift-operators` namespace by default. If you installed the Operators in another namespace, replace `openshift-operators` with the name of the project where the {{ SMProductName }} Operator was installed.
    
    :::

    ```terminal
    $ oc delete svc maistra-admission-controller -n openshift-operators
    ```
    ```terminal
    $ oc -n openshift-operators delete ds -lmaistra-version
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
    $ oc delete cm -n openshift-operators maistra-operator-cabundle
    ```
    ```terminal
    $ oc delete cm -n openshift-operators istio-cni-config istio-cni-config-v2-3
    ```
    ```terminal
    $ oc delete sa -n openshift-operators istio-cni
    ```
{% endif %}