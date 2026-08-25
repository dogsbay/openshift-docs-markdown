{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the namespace selector for CA bundle distribution {id="cert-manager-istio-csr-config-namespace-sel_{{ context }}"}

The Istio-CSR agent creates and updates the `istio-ca-root-cert` `ConfigMap`, which contains the CA bundle. Workloads in the service mesh use this CA bundle to validate connections to the Istio control plane. You can configure a namespace selector to specify the namespaces in which the Istio-CSR agent creates this `ConfigMap`. If you do not configure a selector, the Istio-CSR agent creates the `ConfigMap` in all namespaces. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have created the `IstioCSR` custom resource (CR).

**Procedure**

1.  Edit the `IstioCSR` CR by running the following command:
    ```terminal
    oc edit istiocsrs.operator.openshift.io default -n <istio_csr_project_name>
    ```

    Replace `<istio_csr_project_name>` with the namespace where you created the `IstioCSR` CR.
1.  Configure the `spec.istioCSRConfig.istioDataPlaneNamespaceSelector` section to set the namespace selector. See the following example:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: IstioCSR
    ...
    spec:
      istioCSRConfig:
        istioDataPlaneNamespaceSelector: maistra.io/member-of=istio-system
    # ...
    ```

    The `maistra.io/member-of=istio-system` namespace selector defines the label key and value that identify the namespaces in your service mesh. Use the `<key>=<value>` format.

    :::note

    The istio-csr component does not delete or manage `ConfigMap` objects in namespaces that do not match the configured selector. If you create or update the selector after deploying the `IstioCSR` CR, or if you remove a label from a namespace, you must manually delete these `ConfigMap` objects to avoid conflicts.

    You can run the following command to list `ConfigMap` objects that are not in namespaces matching the selector. In this example, the selector is `maistra.io/member-of=istio-system`:
    ```terminal
    printf "%-25s %10s\n" "ConfigMap" "Namespace"; \
    for ns in $(oc get namespaces -l "maistra.io/member-of!=istio-system" -o=jsonpath='{.items[*].metadata.name}'); do \
      oc get configmaps -l "istio.io/config=true" -n $ns --no-headers -o jsonpath='{.items[*].metadata.name}{"\t"}{.items[*].metadata.namespace}{"\n"}' --ignore-not-found; \
    done
    ```
    
    :::

1.  Save and close the editor to apply your changes. After the changes are applied, the {{ cert_manager_operator }} updates the namespace selector configuration for the istio-csr operand.