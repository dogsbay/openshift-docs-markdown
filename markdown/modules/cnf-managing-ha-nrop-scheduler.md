{%- set _mod_docs_content_type = "CONCEPT" %}
# Managing high availability (HA) for the NUMA-aware scheduler {id="cnf-managing-ha-nrop_{{ context }}"}

To ensure high availability for the NUMA-aware secondary scheduler, the NUMA Resources Operator automatically creates scheduler replicas on control plane nodes. The Operator manages this configuration by using the `spec.replicas` field in the `NUMAResourcesScheduler` custom resource (CR). {._abstract}

{%- set FeatureName = "Managing high availability" %}
{% include "./snippets/technology-preview.md" %}

By default, the NUMA Resources Operator automatically enables HA mode by creating one scheduler replica for each control plane node, with a maximum of three replicas. 

The following manifest demonstrates the default behavior. To automatically enable replica detection, omit the `replicas` field.

```yaml {minja}
apiVersion: nodetopology.openshift.io/v1
kind: NUMAResourcesScheduler
metadata:
  name: example-auto-ha
spec:
  imageSpec: 'registry.redhat.io/openshift4/noderesourcetopology-scheduler-rhel9:v{{ product_version }}'
  # The 'replicas' field is not included, enabling auto-detection.
```

You can control scheduler behavior by using one of the following options:

*   Customizing the number of replicas.
*   Disabling NUMA-aware scheduling.