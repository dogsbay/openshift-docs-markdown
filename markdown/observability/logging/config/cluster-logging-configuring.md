{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "cluster-logging-configuring" %}
# Configuring OpenShift Logging {id="cluster-logging-configuring"}
{% include "./_attributes/common-attributes.md" %}

{{ logging_title_uc }} is configurable using a `ClusterLogging` custom resource (CR) deployed
in the `openshift-logging` project.

The {{ clo }} watches for changes to `ClusterLogging` CR,
creates any missing logging components, and adjusts the logging environment accordingly.

The `ClusterLogging` CR is based on the `ClusterLogging` custom resource definition (CRD), which defines a complete {{ logging }} environment and includes all the components of the logging stack to collect, store and visualize logs.

```yaml title="Sample ClusterLogging custom resource (CR)"
apiVersion: logging.openshift.io/v1
kind: ClusterLogging
metadata:
  creationTimestamp: '2019-03-20T18:07:02Z'
  generation: 1
  name: instance
  namespace: openshift-logging
spec:
  collection:
    logs:
      fluentd:
        resources: null
      type: fluentd
  logStore:
    elasticsearch:
      nodeCount: 3
      redundancyPolicy: SingleRedundancy
      resources:
        limits:
          cpu:
          memory:
        requests:
          cpu:
          memory:
      storage: {}
    type: elasticsearch
  managementState: Managed
  visualization:
    kibana:
      proxy:
        resources: null
      replicas: 1
      resources: null
    type: kibana
```
You can configure the following for {{ logging }}:

*   You can overwrite the image for each {{ logging }} component by modifying the appropriate
environment variable in the `cluster-logging-operator` Deployment.
*   You can specify specific nodes for the logging components using node selectors.


:::important

The logging routes are managed by the {{ clo }} and cannot be modified by the user.

:::