{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ es_op }} by using the CLI {id="cluster-logging-deploy-es-cli_{{ context }}"}

You can use the {{ oc_first }} to install the {{ es_op }}.

**Prerequisites**

*   Ensure that you have the necessary persistent storage for Elasticsearch. Note that each Elasticsearch node requires its own storage volume.

    :::note

    If you use a local volume for persistent storage, do not use a raw block volume, which is described with `volumeMode: block` in the `LocalVolume` object. Elasticsearch cannot use raw block volumes.
    
    :::


    Elasticsearch is a memory-intensive application. By default, {{ product_title }} installs three Elasticsearch nodes with memory requests and limits of 16 GB. This initial set of three {{ product_title }} nodes might not have enough memory to run Elasticsearch within your cluster. If you experience memory issues that are related to Elasticsearch, add more Elasticsearch nodes to your cluster rather than increasing the memory on existing nodes.

{% if openshift_origin %}
*   Ensure that you have downloaded the {{ cluster_manager_url_pull }} as shown in "Obtaining the installation program" in the installation documentation for your platform.

    If you have the pull secret, add the `redhat-operators` catalog to the `OperatorHub` custom resource (CR) as shown in **Configuring {{ product_title }} to use Red Hat Operators**.
{% endif %}
*   You have administrator permissions.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a `Namespace` object as a YAML file:
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: openshift-operators-redhat (1)
      annotations:
        openshift.io/node-selector: ""
      labels:
        openshift.io/cluster-monitoring: "true" (2)
    ```
    1.  You must specify the `openshift-operators-redhat` namespace. To prevent possible conflicts with metrics, configure the Prometheus Cluster Monitoring stack to scrape metrics from the `openshift-operators-redhat` namespace and not the `openshift-operators` namespace. The `openshift-operators` namespace might contain community Operators, which are untrusted and could publish a metric with the same name as
{%- if openshift_rosa %}
     a ROSA
{%- endif %}
{%- if openshift_dedicated %}
     an {{ product_title }}
{%- endif %}
    metric, which would cause conflicts.
    1.  String. You must specify this label as shown to ensure that cluster monitoring scrapes the `openshift-operators-redhat` namespace.
1.  Apply the `Namespace` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Create an `OperatorGroup` object  as a YAML file:
    ```yaml
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
1.  Create a `Subscription` object to subscribe the namespace to the {{ es_op }}:
    ```yaml title="Example Subscription"
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: elasticsearch-operator
      namespace: openshift-operators-redhat (1)
    spec:
      channel: stable-x.y (2)
      installPlanApproval: Automatic (3)
      source: redhat-operators (4)
      sourceNamespace: openshift-marketplace
      name: elasticsearch-operator
    ```
    1.  You must specify the `openshift-operators-redhat` namespace.
    1.  Specify `stable`, or `stable-x.y` as the channel. See the following note.
    1.  `Automatic` allows the Operator Lifecycle Manager (OLM) to automatically update the Operator when a new version is available. `Manual` requires a user with appropriate credentials to approve the Operator update.
    1.  Specify `redhat-operators`. If your {{ product_title }} cluster is installed on a restricted network, also known as a disconnected cluster,
    specify the name of the `CatalogSource` object created when you configured the Operator Lifecycle Manager (OLM).

    :::note

    Specifying `stable` installs the current version of the latest stable release. Using `stable` with `installPlanApproval: "Automatic"` automatically upgrades your Operators to the latest stable major and minor release.

    Specifying `stable-x.y` installs the current minor version of a specific major release. Using `stable-x.y` with `installPlanApproval: "Automatic"` automatically upgrades your Operators to the latest stable minor release within the major release.
    
    :::

1.  Apply the subscription by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

    The {{ es_op }} is installed to the `openshift-operators-redhat` namespace and copied to each project in the cluster.

**Verification**

1.  Run the following command:
    ```terminal
    $ oc get csv -n --all-namespaces
    ```
1.  Observe the output and confirm that pods for the {{ es_op }} exist in each namespace
    ```terminal title="Example output"
    NAMESPACE                                          NAME                            DISPLAY                            VERSION          REPLACES                        PHASE
    default                                            elasticsearch-operator.v5.8.1   OpenShift Elasticsearch Operator   5.8.1            elasticsearch-operator.v5.8.0   Succeeded
    kube-node-lease                                    elasticsearch-operator.v5.8.1   OpenShift Elasticsearch Operator   5.8.1            elasticsearch-operator.v5.8.0   Succeeded
    kube-public                                        elasticsearch-operator.v5.8.1   OpenShift Elasticsearch Operator   5.8.1            elasticsearch-operator.v5.8.0   Succeeded
    kube-system                                        elasticsearch-operator.v5.8.1   OpenShift Elasticsearch Operator   5.8.1            elasticsearch-operator.v5.8.0   Succeeded
    non-destructive-test                               elasticsearch-operator.v5.8.1   OpenShift Elasticsearch Operator   5.8.1            elasticsearch-operator.v5.8.0   Succeeded
    openshift-apiserver-operator                       elasticsearch-operator.v5.8.1   OpenShift Elasticsearch Operator   5.8.1            elasticsearch-operator.v5.8.0   Succeeded
    openshift-apiserver                                elasticsearch-operator.v5.8.1   OpenShift Elasticsearch Operator   5.8.1            elasticsearch-operator.v5.8.0   Succeeded
    ...
    ```