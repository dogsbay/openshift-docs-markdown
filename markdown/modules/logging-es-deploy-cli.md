{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ logging_uc }} with Elasticsearch using the CLI {id="logging-es-deploy-cli_{{ context }}"}

Elasticsearch is a memory-intensive application. By default, {{ product_title }} installs three Elasticsearch nodes with memory requests and limits of 16 GB. This initial set of three {{ product_title }} nodes might not have enough memory to run Elasticsearch within your cluster. If you experience memory issues that are related to Elasticsearch, add more Elasticsearch nodes to your cluster rather than increasing the memory on existing nodes.

**Prerequisites**

*   Ensure that you have the necessary persistent storage for Elasticsearch. Note that each Elasticsearch node requires its own storage volume.

    :::note

    If you use a local volume for persistent storage, do not use a raw block volume, which is described with `volumeMode: block` in the `LocalVolume` object. Elasticsearch cannot use raw block volumes.
    
    :::


{% if openshift_origin %}
*   Ensure that you have downloaded the {{ cluster_manager_url_pull }} as shown in _Obtaining the installation program_ in the installation documentation for your platform.

    If you have the pull secret, add the `redhat-operators` catalog to the OperatorHub custom resource (CR) as shown in **Configuring {{ product_title }} to use Red&#160;Hat Operators**.
{% endif %}

**Procedure**

1.  Create a `Namespace` object for the {{ es_op }}:
    ```yaml title="Example Namespace object"
    apiVersion: v1
    kind: Namespace
    metadata:
      name: openshift-operators-redhat (1)
      annotations:
        openshift.io/node-selector: ""
      labels:
        openshift.io/cluster-monitoring: "true" (2)
    ```
    1.  You must specify the `openshift-operators-redhat` namespace. The `openshift-operators`
    namespace might contain Community Operators, which are untrusted and could publish
    a metric with the same name as an {{ product_title }} metric, which would cause
    conflicts.
    1.  A string value that specifies the label as shown to ensure that cluster monitoring scrapes the `openshift-operators-redhat` namespace.
1.  Apply the `Namespace` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Create a `Namespace` object for the {{ clo }}:
    ```yaml title="Example Namespace object"
    apiVersion: v1
    kind: Namespace
    metadata:
      name: openshift-logging (1)
      annotations:
        openshift.io/node-selector: ""
      labels:
        openshift.io/cluster-monitoring: "true"
    ```
    1.  You must specify `openshift-logging` as the namespace for logging versions 5.7 and earlier. For logging 5.8 and later, you can use any namespace.
1.  Apply the `Namespace` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Create an `OperatorGroup` object for the {{ es_op }}:
    ```yaml title="Example OperatorGroup object"
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: openshift-operators-redhat
      namespace: openshift-operators-redhat (1)
    spec: {}
    ```
    1.  You must specify the `openshift-operators-redhat` namespace.
1.  Apply the `OperatorGroup` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Create a `Subscription` object to subscribe a namespace to the {{ es_op }}:
    {% include "./snippets/logging-stable-updates-snip.md" %}
    ```yaml title="Example Subscription object"
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: elasticsearch-operator
      namespace: openshift-operators-redhat (1)
    spec:
      channel: <channel> (2)
      installPlanApproval: Automatic (3)
      source: redhat-operators (4)
      sourceNamespace: openshift-marketplace
      name: elasticsearch-operator
    ```
    1.  You must specify the `openshift-operators-redhat` namespace.
    1.  Specify `stable`, or `stable-<x.y>` as the channel.
    1.  `Automatic` allows the Operator Lifecycle Manager (OLM) to automatically update the Operator when a new version is available. `Manual` requires a user with appropriate credentials to approve the Operator update.
    1.  Specify `redhat-operators`. If your {{ product_title }} cluster is installed on a restricted network, also known as a disconnected cluster, specify the name of the `CatalogSource` object you created when you configured the Operator Lifecycle Manager (OLM)
1.  Apply the subscription by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Verify the Operator installation by running the following command:
    ```terminal
    $ oc get csv --all-namespaces
    ```
    ```terminal title="Example output"
    NAMESPACE                                          NAME                            DISPLAY                            VERSION          REPLACES                        PHASE
    default                                            elasticsearch-operator.v5.8.3   OpenShift Elasticsearch Operator   5.8.3            elasticsearch-operator.v5.8.2   Succeeded
    kube-node-lease                                    elasticsearch-operator.v5.8.3   OpenShift Elasticsearch Operator   5.8.3            elasticsearch-operator.v5.8.2   Succeeded
    kube-public                                        elasticsearch-operator.v5.8.3   OpenShift Elasticsearch Operator   5.8.3            elasticsearch-operator.v5.8.2   Succeeded
    kube-system                                        elasticsearch-operator.v5.8.3   OpenShift Elasticsearch Operator   5.8.3            elasticsearch-operator.v5.8.2   Succeeded
    openshift-apiserver-operator                       elasticsearch-operator.v5.8.3   OpenShift Elasticsearch Operator   5.8.3            elasticsearch-operator.v5.8.2   Succeeded
    openshift-apiserver                                elasticsearch-operator.v5.8.3   OpenShift Elasticsearch Operator   5.8.3            elasticsearch-operator.v5.8.2   Succeeded
    openshift-authentication-operator                  elasticsearch-operator.v5.8.3   OpenShift Elasticsearch Operator   5.8.3            elasticsearch-operator.v5.8.2   Succeeded
    openshift-authentication                           elasticsearch-operator.v5.8.3   OpenShift Elasticsearch Operator   5.8.3            elasticsearch-operator.v5.8.2   Succeeded
    openshift-cloud-controller-manager-operator        elasticsearch-operator.v5.8.3   OpenShift Elasticsearch Operator   5.8.3            elasticsearch-operator.v5.8.2   Succeeded
    openshift-cloud-controller-manager                 elasticsearch-operator.v5.8.3   OpenShift Elasticsearch Operator   5.8.3            elasticsearch-operator.v5.8.2   Succeeded
    openshift-cloud-credential-operator                elasticsearch-operator.v5.8.3   OpenShift Elasticsearch Operator   5.8.3            elasticsearch-operator.v5.8.2   Succeeded
    ```
1.  Create an `OperatorGroup` object for the {{ clo }}:
    ```yaml title="Example OperatorGroup object"
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: cluster-logging
      namespace: openshift-logging (1)
    spec:
      targetNamespaces:
      - openshift-logging (2)
    ```
    1.  You must specify `openshift-logging` as the namespace for logging versions 5.7 and earlier. For logging 5.8 and later, you can use any namespace.
    1.  You must specify `openshift-logging` as the namespace for logging versions 5.7 and earlier. For logging 5.8 and later, you can use any namespace.
1.  Apply the `OperatorGroup` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Create a `Subscription` object to subscribe the namespace to the {{ clo }}:
    ```yaml title="Example Subscription object"
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: cluster-logging
      namespace: openshift-logging (1)
    spec:
      channel: stable (2)
      name: cluster-logging
      source: redhat-operators (3)
      sourceNamespace: openshift-marketplace
    ```
    1.  You must specify the `openshift-logging` namespace for logging versions 5.7 and older. For logging 5.8 and later versions, you can use any namespace.
    1.  Specify `stable` or `stable-x.y` as the channel.
    1.  Specify `redhat-operators`. If your {{ product_title }} cluster is installed on a restricted network, also known as a disconnected cluster, specify the name of the `CatalogSource` object you created when you configured the Operator Lifecycle Manager (OLM).
1.  Apply the `subscription` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Create a `ClusterLogging` object as a YAML file:
    ```yaml title="Example ClusterLogging object"
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
    1.  Specify the number of Elasticsearch nodes.
    1.  Enter the name of an existing storage class for Elasticsearch storage. For best performance, specify a storage class that allocates block storage. If you do not specify a storage class, OpenShift Logging uses ephemeral storage.
    1.  Specify the CPU and memory requests for Elasticsearch as needed. If you leave these values blank, the OpenShift Elasticsearch Operator sets default values that should be sufficient for most deployments. The default values are `16Gi` for the memory request and `1` for the CPU request.
    1.  Specify the CPU and memory requests for the Elasticsearch proxy as needed. If you leave these values blank, the OpenShift Elasticsearch Operator sets default values that should be sufficient for most deployments. The default values are `256Mi` for the memory request and `100m` for the CPU request.
    1.  Settings for configuring Kibana. Using the CR, you can scale Kibana for redundancy and configure the CPU and memory for your Kibana nodes.
    1.  Settings for configuring Fluentd. Using the CR, you can configure Fluentd CPU and memory limits.

    :::note

    The maximum number of master nodes is three. If you specify a `nodeCount` greater than `3`, {{ product_title }} creates three Elasticsearch nodes that are Master-eligible nodes, with the master, client, and data roles. The additional Elasticsearch nodes are created as Data-only nodes, using client and data roles. Master nodes perform cluster-wide actions such as creating or deleting an index, shard allocation, and tracking nodes. Data nodes hold the shards and perform data-related operations such as CRUD, search, and aggregations. Data-related operations are I/O-, memory-, and CPU-intensive. It is important to monitor these resources and to add more Data nodes if the current nodes are overloaded.

    For example, if `nodeCount=4`, the following nodes are created:

    ```terminal
    $ oc get deployment
    ```

    ```terminal title="Example output"
    cluster-logging-operator-66f77ffccb-ppzbg       1/1     Running   0          7m
    elasticsearch-cdm-ftuhduuw-1-ffc4b9566-q6bhp    2/2     Running   0          2m40s
    elasticsearch-cdm-ftuhduuw-2-7b4994dbfc-rd2gc   2/2     Running   0          2m36s
    elasticsearch-cdm-ftuhduuw-3-84b5ff7ff8-gqnm2   2/2     Running   0          2m4s
    ```
    
    :::

1.  Apply the `ClusterLogging` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Verify the installation by running the following command:
    ```terminal
    $ oc get pods -n openshift-logging
    ```
    ```terminal title="Example output"
    NAME                                            READY   STATUS    RESTARTS   AGE
    cluster-logging-operator-66f77ffccb-ppzbg       1/1     Running   0          7m
    elasticsearch-cdm-ftuhduuw-1-ffc4b9566-q6bhp    2/2     Running   0          2m40s
    elasticsearch-cdm-ftuhduuw-2-7b4994dbfc-rd2gc   2/2     Running   0          2m36s
    elasticsearch-cdm-ftuhduuw-3-84b5ff7ff8-gqnm2   2/2     Running   0          2m4s
    collector-587vb                                 1/1     Running   0          2m26s
    collector-7mpb9                                 1/1     Running   0          2m30s
    collector-flm6j                                 1/1     Running   0          2m33s
    collector-gn4rn                                 1/1     Running   0          2m26s
    collector-nlgb6                                 1/1     Running   0          2m30s
    collector-snpkt                                 1/1     Running   0          2m28s
    kibana-d6d5668c5-rppqm                          2/2     Running   0          2m39s
    ```