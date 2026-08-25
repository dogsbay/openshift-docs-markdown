{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing {{ cert_manager_operator }} resources {id="cert-manager-remove-resources-console_{{ context }}"}

After you uninstall the {{ cert_manager_operator }}, you can delete its associated resources from your cluster. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Remove the deployments of the cert-manager components, such as `cert-manager`, `cainjector`, and `webhook`, present in the `cert-manager` namespace.
    1.  Click the **Project** drop-down menu to see a list of all available projects, and select the **cert-manager** project.
    1.  Navigate to **Workloads** → **Deployments**.
    1.  Select the deployment that you want to delete.
    1.  Click the **Actions** drop-down menu, and select **Delete Deployment** to see a confirmation dialog box.
    1.  Click **Delete** to delete the deployment.
    1.  Alternatively, delete deployments of the cert-manager components such as `cert-manager`, `cainjector` and `webhook` present in the `cert-manager` namespace by using the command-line interface (CLI).
        ```terminal
        $ oc delete deployment -n cert-manager -l app.kubernetes.io/instance=cert-manager
        ```
1.  Optional: Remove the custom resource definitions (CRDs) that were installed by the {{ cert_manager_operator }}:
    1.  Remove the finalizers from the `CertManager` custom resource (CR) by running the following command:
        ```terminal
        $ oc patch certmanagers.operator cluster --type=merge -p='{"metadata":{"finalizers":null}}'
        ```
    1.  Navigate to **Administration** → **CustomResourceDefinitions**.
    1.  Enter `certmanager` in the **Name** field to filter the CRDs.
    1.  Click the Options menu {{ kebab }} next to each of the following CRDs, and select **Delete Custom Resource Definition**:
        *   `Certificate`
        *   `CertificateRequest`
        *   `CertManager` (`operator.openshift.io`)
        *   `Challenge`
        *   `ClusterIssuer`
        *   `Issuer`
        *   `Order`
1.  Optional: Remove the `cert-manager-operator` namespace.
    1.  Navigate to **Administration** → **Namespaces**.
    1.  Click the Options menu {{ kebab }} next to the **cert-manager-operator** and select **Delete Namespace**.
    1.  In the confirmation dialog, enter `cert-manager-operator` in the field and click **Delete**.