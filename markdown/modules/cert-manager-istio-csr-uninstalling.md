{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the Istio-CSR agent managed by {{ cert_manager_operator }} {id="cert-manager-istio-csr-uninstalling_{{ context }}"}

You can uninstall the Istio-CSR agent managed by the {{ cert_manager_operator }} to remove the agent and its associated resources. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have enabled the Istio-CSR feature.
*   You have created the `IstioCSR` custom resource.

**Procedure**

1.  Remove the `IstioCSR` custom resource by running the following command:
    ```terminal
    $ oc -n <istio_csr_project_name> delete istiocsrs.operator.openshift.io default
    ```
1.  Remove related resources:

    :::important

    To avoid disrupting any {{ SMProductName }} or Istio components, ensure that no component is referencing the Istio-CSR service or the certificates issued for Istio before removing the following resources.
    
    :::

    1.  List the cluster scoped-resources by running the following command and save the names of the listed resources for later reference:
        ```terminal
        $ oc get clusterrolebindings,clusterroles -l "app=cert-manager-istio-csr,app.kubernetes.io/name=cert-manager-istio-csr"
        ```
    1.  List the resources in Istio-csr deployed namespace by running the following command and save the names of the listed resources for later reference:
        ```terminal
        $ oc get certificate,deployments,services,serviceaccounts -l "app=cert-manager-istio-csr,app.kubernetes.io/name=cert-manager-istio-csr" -n <istio_csr_project_name>
        ```
    1.  List the resources in {{ SMProductName }} or Istio deployed namespaces by running the following command and save the names of the listed resources for later reference:
        ```terminal
        $ oc get roles,rolebindings -l "app=cert-manager-istio-csr,app.kubernetes.io/name=cert-manager-istio-csr" -n <istio_csr_project_name>
        ```
    1.  For each resource listed in previous steps, delete the resource by running the following command:
        ```terminal
        $ oc -n <istio_csr_project_name> delete <resource_type>/<resource_name>
        ```

        Repeat this process until all of the related resources have been deleted.