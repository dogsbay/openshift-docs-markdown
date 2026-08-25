{%- set _mod_docs_content_type = "CONCEPT" %}
# About deploying and configuring {{ logging }} {id="cluster-logging-deploying-about_{{ context }}"}

The {{ logging }} is designed to be used with the default configuration, which is tuned for small to medium sized {{ product_title }} clusters.

The installation instructions that follow include a sample `ClusterLogging` custom resource (CR), which you can use to create a {{ logging }} instance and configure your {{ logging }} environment.

If you want to use the default {{ logging }} install, you can use the sample CR directly.

If you want to customize your deployment, make changes to the sample CR as needed. The following describes the configurations you can make when installing your OpenShift Logging instance or modify after installation. See the Configuring sections for more information on working with each component, including modifications you can make outside of the `ClusterLogging` custom resource.

## Configuring and Tuning the {{ logging }} {id="cluster-logging-deploy-about-config_{{ context }}"}

You can configure your {{ logging }} by modifying the `ClusterLogging` custom resource deployed
in the `openshift-logging` project.

You can modify any of the following components upon install or after install:


Memory and CPU
:   You can adjust both the CPU and memory limits for each component by modifying the `resources`
    block with valid memory and CPU values:

```yaml
spec:
  logStore:
    elasticsearch:
      resources:
        limits:
          cpu:
          memory: 16Gi
        requests:
          cpu: 500m
          memory: 16Gi
      type: "elasticsearch"
  collection:
    logs:
      fluentd:
        resources:
          limits:
            cpu:
            memory:
          requests:
            cpu:
            memory:
        type: "fluentd"
  visualization:
    kibana:
      resources:
        limits:
          cpu:
          memory:
        requests:
          cpu:
          memory:
      type: kibana
```


Elasticsearch storage
:   You can configure a persistent storage class and size for the Elasticsearch cluster using the `storageClass` `name` and `size` parameters. The Red Hat OpenShift Logging Operator creates a persistent volume claim (PVC) for each data node in the Elasticsearch cluster based on these parameters.

```yaml
  spec:
    logStore:
      type: "elasticsearch"
      elasticsearch:
        nodeCount: 3
        storage:
          storageClassName: "gp2"
          size: "200G"
```

This example specifies each data node in the cluster will be bound to a PVC that
requests "200G" of "gp2" storage. Each primary shard will be backed by a single replica.


:::note

Omitting the `storage` block results in a deployment that includes ephemeral storage only.

```yaml
  spec:
    logStore:
      type: "elasticsearch"
      elasticsearch:
        nodeCount: 3
        storage: {}
```

:::



Elasticsearch replication policy
:   You can set the policy that defines how Elasticsearch shards are replicated across data nodes in the cluster:

    *   `FullRedundancy`. The shards for each index are fully replicated to every data node.
    *   `MultipleRedundancy`. The shards for each index are spread over half of the data nodes.
    *   `SingleRedundancy`. A single copy of each shard. Logs are always available and recoverable as long as at least two data nodes exist.
    *   `ZeroRedundancy`. No copies of any shards. Logs may be unavailable (or lost) in the event a node is down or fails.

## Sample modified ClusterLogging custom resource {id="cluster-logging-deploy-about-sample_{{ context }}"}

The following is an example of a `ClusterLogging` custom resource modified using the options previously described.

```yaml title="Sample modified ClusterLogging custom resource"
apiVersion: "logging.openshift.io/v1"
kind: "ClusterLogging"
metadata:
  name: "instance"
  namespace: "openshift-logging"
spec:
  managementState: "Managed"
  logStore:
    type: "elasticsearch"
    retentionPolicy:
      application:
        maxAge: 1d
      infra:
        maxAge: 7d
      audit:
        maxAge: 7d
    elasticsearch:
      nodeCount: 3
      resources:
        limits:
          memory: 32Gi
        requests:
          cpu: 3
          memory: 32Gi
        storage:
          storageClassName: "gp2"
          size: "200G"
      redundancyPolicy: "SingleRedundancy"
  visualization:
    type: "kibana"
    kibana:
      resources:
        limits:
          memory: 1Gi
        requests:
          cpu: 500m
          memory: 1Gi
      replicas: 1
  collection:
    logs:
      type: "fluentd"
      fluentd:
        resources:
          limits:
            memory: 1Gi
          requests:
            cpu: 200m
            memory: 1Gi
```