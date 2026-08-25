{%- set _mod_docs_content_type = "REFERENCE" %}
# About the ClusterLogging custom resource {id="cluster-logging-about-crd_{{ context }}"}

To make changes to your {{ logging }} environment, create and modify the `ClusterLogging` custom resource (CR).

```yaml title="Sample ClusterLogging custom resource (CR)"
apiVersion: logging.openshift.io/v1
kind: ClusterLogging
metadata:
  name: instance (1)
  namespace: openshift-logging (2)
spec:
  managementState: Managed (3)
# ...
```
1.  The CR name must be `instance`.
1.  The CR must be installed to the `openshift-logging` namespace.
1.  The {{ clo }} management state. When the state is set to `unmanaged`, the Operator is in an unsupported state and does not receive updates.