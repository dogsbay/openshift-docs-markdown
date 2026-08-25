{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ logging_uc }} with Elasticsearch using the web console {id="logging-es-deploy-console_{{ context }}"}

You can use the {{ product_title }} web console to install the OpenShift Elasticsearch and Red Hat OpenShift Logging Operators. Elasticsearch is a memory-intensive application. By default, {{ product_title }} installs three Elasticsearch nodes with memory requests and limits of 16 GB. This initial set of three {{ product_title }} nodes might not have enough memory to run Elasticsearch within your cluster. If you experience memory issues that are related to Elasticsearch, add more Elasticsearch nodes to your cluster rather than increasing the memory on existing nodes.


:::note

If you do not want to use the default Elasticsearch log store, you can remove the internal Elasticsearch `logStore` and Kibana `visualization` components from the `ClusterLogging` custom resource (CR). Removing these components is optional but saves resources.

:::


**Prerequisites**

*   Ensure that you have the necessary persistent storage for Elasticsearch. Note that each Elasticsearch node
requires its own storage volume.

    :::note

    If you use a local volume for persistent storage, do not use a raw block volume, which is described with `volumeMode: block` in the `LocalVolume` object. Elasticsearch cannot use raw block volumes.
    
    :::


{% if openshift_origin %}
*   Ensure that you have downloaded the {{ cluster_manager_url_pull }} as shown in _Obtaining the installation program_ in the installation documentation for your platform.

    If you have the pull secret, add the `redhat-operators` catalog to the OperatorHub custom resource (CR) as shown in _Configuring {{ product_title }} to use Red Hat Operators_.
{% endif %}

**Procedure**

To install the OpenShift Elasticsearch Operator and Red Hat OpenShift Logging Operator using the {{ product_title }} web console:

1.  Install the OpenShift Elasticsearch Operator:
    1.  In the {{ product_title }} web console, click **Ecosystem** → **Software Catalog**.
    1.  Choose  **OpenShift Elasticsearch Operator** from the list of available Operators, and click **Install**.
    1.  Ensure that the **All namespaces on the cluster** is selected under **Installation Mode**.
    1.  Ensure that **openshift-operators-redhat** is selected under **Installed Namespace**.

        You must specify the `openshift-operators-redhat` namespace. The `openshift-operators`
        namespace might contain Community Operators, which are untrusted and could publish
        a metric with the same name as an {{ product_title }} metric, which would cause
        conflicts.
    1.  Select **Enable Operator recommended cluster monitoring on this namespace**.

        This option sets the `openshift.io/cluster-monitoring: "true"` label in the Namespace object. You must select this option to ensure that cluster monitoring scrapes the `openshift-operators-redhat` namespace.
    1.  Select **stable-5.y** as the **Update Channel**.
        {% include "./snippets/logging-stable-updates-snip.md" %}
    1.  Select an **Approval Strategy**.
        *   The **Automatic** strategy allows Operator Lifecycle Manager (OLM) to automatically update the Operator when a new version is available.
        *   The **Manual** strategy requires a user with appropriate credentials to approve the Operator update.
    1.  Click **Install**.
    1.  Verify that the OpenShift Elasticsearch Operator installed by switching to the **Ecosystem** → **Installed Operators** page.
    1.  Ensure that **OpenShift Elasticsearch Operator** is listed in all projects with a **Status** of **Succeeded**.
1.  Install the Red Hat OpenShift Logging Operator:
    1.  In the {{ product_title }} web console, click **Ecosystem** → **Software Catalog**.
    1.  Choose  **Red Hat OpenShift Logging** from the list of available Operators, and click **Install**.
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
    1.  Verify that the Red Hat OpenShift Logging Operator installed by switching to the **Ecosystem** → **Installed Operators** page.
    1.  Ensure that **Red Hat OpenShift Logging** is listed in the **openshift-logging** project with a **Status** of **Succeeded**.

        If the Operator does not appear as installed, to troubleshoot further:
        *   Switch to the **Ecosystem** → **Installed Operators** page and inspect
        the **Status** column for any errors or failures.
        *   Switch to the **Workloads** → **Pods** page and check the logs in any pods in the
        `openshift-logging` project that are reporting issues.
1.  Create an OpenShift Logging instance:
    1.  Switch to the **Administration** → **Custom Resource Definitions** page.
    1.  On the **Custom Resource Definitions** page, click **ClusterLogging**.
    1.  On the **Custom Resource Definition details** page, select **View Instances** from the **Actions** menu.
    1.  On the **ClusterLoggings** page, click **Create ClusterLogging**.

        You might have to refresh the page to load the data.
    1.  In the YAML field, replace the code with the following:

        :::note

        This default OpenShift Logging configuration should support a wide array of environments. Review the topics on tuning and
        configuring {{ logging }} components for information on modifications you can make to your OpenShift Logging cluster.
        
        :::

        ```yaml
        apiVersion: logging.openshift.io/v1
        kind: ClusterLogging
        metadata:
          name: instance (1)
          namespace: openshift-logging
        spec:
          managementState: Managed (2)
          logStore:
            type: elasticsearch (3)
            retentionPolicy: (4)
              application:
                maxAge: 1d
              infra:
                maxAge: 7d
              audit:
                maxAge: 7d
            elasticsearch:
              nodeCount: 3 (5)
              storage:
                storageClassName: <storage_class_name> (6)
                size: 200G
              resources: (7)
                  limits:
                    memory: 16Gi
                  requests:
                    memory: 16Gi
              proxy: (8)
                resources:
                  limits:
                    memory: 256Mi
                  requests:
                    memory: 256Mi
              redundancyPolicy: SingleRedundancy
          visualization:
            type: kibana (9)
            kibana:
              replicas: 1
          collection:
            type: fluentd (10)
            fluentd: {}
        ```
        1.  The name must be `instance`.
        1.  The OpenShift Logging management state. In some cases, if you change the OpenShift Logging defaults, you must set this to `Unmanaged`.
        However, an unmanaged deployment does not receive updates until OpenShift Logging is placed back into a managed state.
        1.  Settings for configuring Elasticsearch. Using the CR, you can configure shard replication policy and persistent storage.
        1.  Specify the length of time that Elasticsearch should retain each log source. Enter an integer and a time designation: weeks(w), hours(h/H), minutes(m) and seconds(s). For example, `7d` for seven days. Logs older than the `maxAge` are deleted. You must specify a retention policy for each log source or the Elasticsearch indices will not be created for that source.
        1.  Specify the number of Elasticsearch nodes. See the note that follows this list.
        1.  Enter the name of an existing storage class for Elasticsearch storage. For best performance, specify a storage class that allocates block storage. If you do not specify a storage class, OpenShift Logging uses ephemeral storage.
        1.  Specify the CPU and memory requests for Elasticsearch as needed. If you leave these values blank, the OpenShift Elasticsearch Operator sets default values that should be sufficient for most deployments. The default values are `16Gi` for the memory request and `1` for the CPU request.
        1.  Specify the CPU and memory requests for the Elasticsearch proxy as needed. If you leave these values blank, the OpenShift Elasticsearch Operator sets default values that should be sufficient for most deployments. The default values are `256Mi` for the memory request and `100m` for the CPU request.
        1.  Settings for configuring Kibana. Using the CR, you can scale Kibana for redundancy and configure the CPU and memory for your Kibana nodes. For more information, see **Configuring the log visualizer**.
        1.  Settings for configuring Fluentd. Using the CR, you can configure Fluentd CPU and memory limits. For more information, see "Configuring Fluentd".

        :::note

        +
        
        :::


        The maximum number of master nodes is three. If you specify a `nodeCount` greater than `3`, {{ product_title }} creates three Elasticsearch nodes that are Master-eligible nodes, with the master, client, and data roles. The additional Elasticsearch nodes are created as Data-only nodes, using client and data roles. Master nodes perform cluster-wide actions such as creating or deleting an index, shard allocation, and tracking nodes. Data nodes hold the shards and perform data-related operations such as CRUD, search, and aggregations. Data-related operations are I/O-, memory-, and CPU-intensive. It is important to monitor these resources and to add more Data nodes if the current nodes are overloaded.

For example, if `nodeCount=4`, the following nodes are created:

```terminal
$ oc get deployment
```

```terminal title="Example output"
cluster-logging-operator-66f77ffccb-ppzbg       1/1    Running 0 7m
elasticsearch-cd-tuhduuw-1-f5c885dbf-dlqws      1/1    Running 0 2m4s
elasticsearch-cdm-ftuhduuw-1-ffc4b9566-q6bhp    2/2    Running 0 2m40s
elasticsearch-cdm-ftuhduuw-2-7b4994dbfc-rd2gc   2/2    Running 0 2m36s
elasticsearch-cdm-ftuhduuw-3-84b5ff7ff8-gqnm2   2/2    Running 0 2m4s
```

1.  Click **Create**. This creates the {{ logging }} components, the `Elasticsearch` custom resource and components, and the Kibana interface.
    1.  Verify the install:
1.  Switch to the **Workloads** → **Pods** page.
1.  Select the **openshift-logging** project.

    You should see several pods for OpenShift Logging, Elasticsearch, your collector, and Kibana similar to the following list:
    ```terminal title="Example output"
    cluster-logging-operator-66f77ffccb-ppzbg       1/1     Running   0          7m
    elasticsearch-cdm-ftuhduuw-1-ffc4b9566-q6bhp    2/2     Running   0          2m40s
    elasticsearch-cdm-ftuhduuw-2-7b4994dbfc-rd2gc   2/2     Running   0          2m36s
    elasticsearch-cdm-ftuhduuw-3-84b5ff7ff8-gqnm2   2/2     Running   0          2m4s
    collector-587vb                                   1/1     Running   0          2m26s
    collector-7mpb9                                   1/1     Running   0          2m30s
    collector-flm6j                                   1/1     Running   0          2m33s
    collector-gn4rn                                   1/1     Running   0          2m26s
    collector-nlgb6                                   1/1     Running   0          2m30s
    collector-snpkt                                   1/1     Running   0          2m28s
    kibana-d6d5668c5-rppqm                          2/2     Running   0          2m39s
    ```