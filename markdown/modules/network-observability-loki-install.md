{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ loki_op }} {id="network-observability-loki-installation_{{ context }}"}

Install the supported {{ loki_op }} version from the software catalog to enable the secure `LokiStack` instance, which provides automatic in-cluster authentication and authorization for network observability. {._abstract}

The [{{ loki_op }} versions 6.0+](https://catalog.redhat.com/software/containers/openshift-logging/loki-rhel9-operator/64479927e1820602a81cdf13) are the supported {{ loki_op }} versions for network observability; these versions provide the ability to create a `LokiStack` instance using the `openshift-network` tenant configuration mode and provide fully-automatic, in-cluster authentication and authorization support for network observability.

**Prerequisites**

*   You have administrator permissions.
*   You have access to the {{ product_title }} web console.
*   You have access to a supported object store. For example: AWS S3, Google Cloud Storage, Azure, Swift, Minio, or OpenShift Data Foundation.

**Procedure**

1.  In the {{ product_title }} web console, click **Ecosystem** -> **Software Catalog**.
1.  Choose  **{{ loki_op }}** from the list of available Operators, and click **Install**.
1.  Under **Installation Mode**, select **All namespaces on the cluster**.

**Verification**

1.  Verify that you installed the {{ loki_op }}. Visit the **Ecosystem** -> **Installed Operators** page and look for **{{ loki_op }}**.
1.  Verify that **{{ loki_op }}** is listed with **Status** as **Succeeded** in all the projects.


:::important

To uninstall Loki, refer to the uninstallation process that corresponds with the method you used to install Loki. You might have remaining `ClusterRoles` and `ClusterRoleBindings`, data stored in object store, and persistent volume that must be removed.

:::