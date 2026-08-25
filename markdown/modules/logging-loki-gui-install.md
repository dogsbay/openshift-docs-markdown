{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ logging_uc }} and the {{ loki_op }} using the web console {id="logging-loki-gui-install_{{ context }}"}

To install and configure logging on your {{ product_title }} cluster, an Operator such as {{ loki_op }} for log storage must be installed first. This can be done from the software catalog within the web console.

**Prerequisites**

*   You have access to a supported object store (AWS S3, {{ gcp_full }} Storage, Azure, Swift, Minio, {{ rh_storage }}).
*   You have administrator permissions.
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  In the {{ product_title }} web console **Administrator** perspective, go to **Ecosystem** -> **Software Catalog**.
1.  Type {{ loki_op }} in the **Filter by keyword** field. Click **{{ loki_op }}** in the list of available Operators, and then click **Install**.

    :::important

    The Community {{ loki_op }} is not supported by Red&#160;Hat.
    
    :::

1.  Select **stable** or **stable-x.y** as the **Update channel**.
{% include "./snippets/logging-stable-updates-snip.md" %}

    The {{ loki_op }} must be deployed to the global operator group namespace `openshift-operators-redhat`, so the **Installation mode** and **Installed Namespace** are already selected. If this namespace does not already exist, it is created for you.
1.  Select **Enable Operator-recommended cluster monitoring on this namespace.**

    This option sets the `openshift.io/cluster-monitoring: "true"` label in the `Namespace` object. You must select this option to ensure that cluster monitoring scrapes the `openshift-operators-redhat` namespace.
1.  For **Update approval** select **Automatic**, then click **Install**.

    If the approval strategy in the subscription is set to **Automatic**, the update process initiates as soon as a new Operator version is available in the selected channel. If the approval strategy is set to **Manual**, you must manually approve pending updates.
1.  Install the Red&#160;Hat OpenShift Logging Operator:
    1.  In the {{ product_title }} web console, click **Ecosystem** -> **Software Catalog**.
    1.  Choose  **Red&#160;Hat OpenShift Logging** from the list of available Operators, and click **Install**.
    1.  Ensure that the **A specific namespace on the cluster** is selected under **Installation Mode**.
    1.  Ensure that **Operator recommended namespace** is **openshift-logging** under **Installed Namespace**.
    1.  Select **Enable Operator recommended cluster monitoring on this namespace**.

        This option sets the `openshift.io/cluster-monitoring: "true"` label in the Namespace object.
        You must select this option to ensure that cluster monitoring
        scrapes the `openshift-logging` namespace.
    1.  Select **stable-5.y** as the **Update Channel**.
    1.  Select an **Approval Strategy**.
        *   The **Automatic** strategy allows Operator Lifecycle Manager (OLM) to automatically update the Operator when a new version is available.
        *   The **Manual** strategy requires a user with appropriate credentials to approve the Operator update.
    1.  Click **Install**.
1.  Go to the **Ecosystem** -> **Installed Operators** page. Click the **All instances** tab.
1.  From the **Create new** drop-down list, select **LokiStack**.
1.  Select **YAML view**, and then use the following template to create a `LokiStack` CR:
    ```yaml title="Example LokiStack CR"
    apiVersion: loki.grafana.com/v1
    kind: LokiStack
    metadata:
      name: logging-loki # (1)
      namespace: openshift-logging # (2)
    spec:
      size: 1x.small # (3)
      storage:
        schemas:
        - version: v13
          effectiveDate: "<yyyy>-<mm>-<dd>"
        secret:
          name: logging-loki-s3 # (4)
          type: s3 # (5)
          credentialMode: # (6)
      storageClassName: <storage_class_name> # (7)
      tenants:
        mode: openshift-logging # (8)
    ```
    1.  Use the name `logging-loki`.
    1.  You must specify the `openshift-logging` namespace.
    1.  Specify the deployment size. In the {{ logging }} 5.8 and later versions, the supported size options for production instances of Loki are `1x.extra-small`, `1x.small`, or `1x.medium`.
    1.  Specify the name of your log store secret.
    1.  Specify the corresponding storage type.
    1.  Optional field, logging 5.9 and later. Supported user configured values are as follows: static is the default authentication mode available for all supported object storage types using credentials stored in a Secret. token for short-lived tokens retrieved from a credential source. In this mode the static configuration does not contain credentials needed for the object storage. Instead, they are generated during runtime using a service, which allows for shorter-lived credentials and much more granular control. This authentication mode is not supported for all object storage types. token-cco is the default value when Loki is running on managed STS mode and using CCO on STS/WIF clusters.
    1.  Specify the name of a storage class for temporary storage. For best performance, specify a storage class that allocates block storage. Available storage classes for your cluster can be listed by using the `oc get storageclasses` command.
    1.  LokiStack defaults to running in multi-tenant mode, which cannot be modified. One tenant is provided for each log type: audit, infrastructure, and application logs. This enables access control for individual users and user groups to different log streams.

    :::important

    It is not possible to change the number `1x` for the deployment size.
    
    :::

1.  Click **Create**.
1.  Create an OpenShift Logging instance:
    1.  Switch to the **Administration** -> **Custom Resource Definitions** page.
    1.  On the **Custom Resource Definitions** page, click **ClusterLogging**.
    1.  On the **Custom Resource Definition details** page, select **View Instances** from the **Actions** menu.
    1.  On the **ClusterLoggings** page, click **Create ClusterLogging**.

        You might have to refresh the page to load the data.
    1.  In the YAML field, replace the code with the following:
        ```yaml
        apiVersion: logging.openshift.io/v1
        kind: ClusterLogging
        metadata:
          name: instance # (1)
          namespace: openshift-logging # (2)
        spec:
          collection:
            type: vector
          logStore:
            lokistack:
              name: logging-loki
            retentionPolicy:
              application:
                maxAge: 7d
              audit:
                maxAge: 7d
              infra:
                maxAge: 7d
            type: lokistack
          visualization:
            type: ocp-console
            ocpConsole:
              logsLimit: 15

          managementState: Managed
        ```
        1.  Name must be `instance`.
        1.  Namespace must be `openshift-logging`.

**Verification**

1.  Go to **Ecosystem** -> **Installed Operators**.
1.  Make sure the **openshift-logging** project is selected.
1.  In the **Status** column, verify that you see green checkmarks with **InstallSucceeded** and the text **Up to date**.


:::note

An Operator might display a `Failed` status before the installation finishes. If the Operator install completes with an `InstallSucceeded` message, refresh the page.

:::