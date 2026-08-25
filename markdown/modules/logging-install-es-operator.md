{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the OpenShift Elasticsearch Operator by using the web console {id="logging-install-es-operator_{{ context }}"}

The OpenShift Elasticsearch Operator creates and manages the Elasticsearch cluster used by OpenShift Logging.

**Prerequisites**

*   Elasticsearch is a memory-intensive application. Each Elasticsearch node needs at least 16GB of memory for both memory requests and limits, unless you specify otherwise in the `ClusterLogging` custom resource.

    The initial set of {{ product_title }} nodes might not be large enough to support the Elasticsearch cluster. You must add additional nodes to the {{ product_title }} cluster to run with the recommended or higher memory, up to a maximum of 64GB for each Elasticsearch node.

    Elasticsearch nodes can operate with a lower memory setting, though this is not recommended for production environments.
*   Ensure that you have the necessary persistent storage for Elasticsearch. Note that each Elasticsearch node
requires its own storage volume.

    :::note

    If you use a local volume for persistent storage, do not use a raw block volume, which is described with `volumeMode: block` in the `LocalVolume` object. Elasticsearch cannot use raw block volumes.
    
    :::


**Procedure**

1.  In the {{ product_title }} web console, click **Ecosystem** → **Software Catalog**.
1.  Click **OpenShift Elasticsearch Operator** from the list of available Operators, and click **Install**.
1.  Ensure that the **All namespaces on the cluster** is selected under **Installation mode**.
1.  Ensure that **openshift-operators-redhat** is selected under **Installed Namespace**.

    You must specify the `openshift-operators-redhat` namespace. The `openshift-operators` namespace might contain Community Operators, which are untrusted and could publish a metric with the same name as {{ product_title }} metric, which would cause conflicts.
1.  Select **Enable operator recommended cluster monitoring on this namespace**.

    This option sets the `openshift.io/cluster-monitoring: "true"` label in the `Namespace` object. You must select this option to ensure that cluster monitoring scrapes the `openshift-operators-redhat` namespace.
1.  Select **stable-5.x** as the **Update channel**.
1.  Select an **Update approval** strategy:
    *   The **Automatic** strategy allows Operator Lifecycle Manager (OLM) to automatically update the Operator when a new version is available.
    *   The **Manual** strategy requires a user with appropriate credentials to approve the Operator update.
1.  Click **Install**.

**Verification**

1.  Verify that the OpenShift Elasticsearch Operator installed by switching to the **Ecosystem** → **Installed Operators** page.
1.  Ensure that **OpenShift Elasticsearch Operator** is listed in all projects with a **Status** of **Succeeded**.