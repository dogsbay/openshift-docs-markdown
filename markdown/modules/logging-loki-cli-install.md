{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ logging_uc }} and the {{ loki_op }} using the CLI {id="logging-loki-cli-install_{{ context }}"}

To install and configure logging on your {{ product_title }} cluster, an Operator such as {{ loki_op }} for log storage must be installed first. This can be done from the {{ product_title }} CLI.

**Prerequisites**

*   You have administrator permissions.
*   You installed the {{ oc_first }}.
*   You have access to a supported object store. For example: AWS S3, {{ gcp_full }} Storage, Azure, Swift, Minio, or {{ rh_storage }}.

**Procedure**

{% leveloffset +1 %}{% include "./snippets/logging-stable-updates-snip.md" %}{% endleveloffset %}

1.  Create a `Namespace` object for {{ loki_op }}:
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
    1.  You must specify the `openshift-operators-redhat` namespace. To prevent possible conflicts with metrics, you should configure the Prometheus Cluster Monitoring stack to scrape metrics from the `openshift-operators-redhat` namespace and not the `openshift-operators` namespace. The `openshift-operators` namespace might contain community Operators, which are untrusted and could publish a metric with the same name as an {{ product_title }} metric, which would cause conflicts.
    1.  A string value that specifies the label as shown to ensure that cluster monitoring scrapes the `openshift-operators-redhat` namespace.
1.  Apply the `Namespace` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Create a `Subscription` object for {{ loki_op }}:
    ```yaml title="Example Subscription object"
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: loki-operator
      namespace: openshift-operators-redhat (1)
    spec:
      channel: stable (2)
      name: loki-operator
      source: redhat-operators (3)
      sourceNamespace: openshift-marketplace
    ```
    1.  You must specify the `openshift-operators-redhat` namespace.
    1.  Specify `stable`, or `stable-5.<y>` as the channel.
    1.  Specify `redhat-operators`. If your {{ product_title }} cluster is installed on a restricted network, also known as a disconnected cluster, specify the name of the `CatalogSource` object you created when you configured the Operator Lifecycle Manager (OLM).
1.  Apply the `Subscription` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Create a `namespace` object for the {{ clo }}:
    ```yaml title="Example namespace object"
    apiVersion: v1
    kind: Namespace
    metadata:
      name: openshift-logging (1)
      annotations:
        openshift.io/node-selector: ""
      labels:
        openshift.io/cluster-logging: "true"
        openshift.io/cluster-monitoring: "true" (2)
    ```
    1.  The Red&#160;Hat OpenShift Logging Operator is only deployable to the `openshift-logging` namespace.
    1.  A string value that specifies the label as shown to ensure that cluster monitoring scrapes the `openshift-operators-redhat` namespace.
1.  Apply the `namespace` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Create an `OperatorGroup` object
    ```yaml title="Example OperatorGroup object"
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: cluster-logging
      namespace: openshift-logging (1)
    spec:
      targetNamespaces:
      - openshift-logging
    ```
    1.  You must specify the `openshift-logging` namespace.
1.  Apply the `OperatorGroup` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Create a `Subscription` object:
    ```yaml
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
    1.  You must specify the `openshift-logging` namespace.
    1.  Specify `stable`, or `stable-5.<y>` as the channel.
    1.  Specify `redhat-operators`. If your {{ product_title }} cluster is installed on a restricted network, also known as a disconnected cluster, specify the name of the CatalogSource object you created when you configured the Operator Lifecycle Manager (OLM).
1.  Apply the `Subscription` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Create a `LokiStack` CR:
    ```yaml title="Example LokiStack CR"
    apiVersion: loki.grafana.com/v1
    kind: LokiStack
    metadata:
      name: logging-loki (1)
      namespace: openshift-logging (2)
    spec:
      size: 1x.small (3)
      storage:
        schemas:
        - version: v13
          effectiveDate: "<yyyy>-<mm>-<dd>"
        secret:
          name: logging-loki-s3 (4)
          type: s3 (5)
          credentialMode: (6)
      storageClassName: <storage_class_name> (7)
      tenants:
        mode: openshift-logging (8)
    ```
    1.  Use the name `logging-loki`.
    1.  You must specify the `openshift-logging` namespace.
    1.  Specify the deployment size. In the {{ logging }} 5.8 and later versions, the supported size options for production instances of Loki are `1x.extra-small`, `1x.small`, or `1x.medium`.
    1.  Specify the name of your log store secret.
    1.  Specify the corresponding storage type.
    1.  Optional field, logging 5.9 and later. Supported user configured values are as follows: `static` is the default authentication mode available for all supported object storage types using credentials stored in a Secret. `token` for short-lived tokens retrieved from a credential source. In this mode the static configuration does not contain credentials needed for the object storage. Instead, they are generated during runtime using a service, which allows for shorter-lived credentials and much more granular control. This authentication mode is not supported for all object storage types. `token-cco` is the default value when Loki is running on managed STS mode and using CCO on STS/WIF clusters.
    1.  Specify the name of a storage class for temporary storage. For best performance, specify a storage class that allocates block storage. Available storage classes for your cluster can be listed by using the `oc get storageclasses` command.
    1.  LokiStack defaults to running in multi-tenant mode, which cannot be modified. One tenant is provided for each log type: audit, infrastructure, and application logs. This enables access control for individual users and user groups to different log streams.
1.  Apply the `LokiStack CR` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Create a `ClusterLogging` CR object:
    ```yaml title="Example ClusterLogging CR object"
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogging
    metadata:
      name: instance (1)
      namespace: openshift-logging (2)
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
1.  Apply the `ClusterLogging CR` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Verify the installation by running the following command:
    ```terminal
    $ oc get pods -n openshift-logging
    ```
    ```terminal title="Example output"
    $ oc get pods -n openshift-logging
    NAME                                               READY   STATUS    RESTARTS   AGE
    cluster-logging-operator-fb7f7cf69-8jsbq           1/1     Running   0          98m
    collector-222js                                    2/2     Running   0          18m
    collector-g9ddv                                    2/2     Running   0          18m
    collector-hfqq8                                    2/2     Running   0          18m
    collector-sphwg                                    2/2     Running   0          18m
    collector-vv7zn                                    2/2     Running   0          18m
    collector-wk5zz                                    2/2     Running   0          18m
    logging-view-plugin-6f76fbb78f-n2n4n               1/1     Running   0          18m
    lokistack-sample-compactor-0                       1/1     Running   0          42m
    lokistack-sample-distributor-7d7688bcb9-dvcj8      1/1     Running   0          42m
    lokistack-sample-gateway-5f6c75f879-bl7k9          2/2     Running   0          42m
    lokistack-sample-gateway-5f6c75f879-xhq98          2/2     Running   0          42m
    lokistack-sample-index-gateway-0                   1/1     Running   0          42m
    lokistack-sample-ingester-0                        1/1     Running   0          42m
    lokistack-sample-querier-6b7b56bccc-2v9q4          1/1     Running   0          42m
    lokistack-sample-query-frontend-84fb57c578-gq2f7   1/1     Running   0          42m
    ```