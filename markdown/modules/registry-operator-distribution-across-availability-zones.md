{%- set _mod_docs_content_type = "REFERENCE" %}
# Image Registry Operator distribution across availability zones {id="registry-operator-distribution-across-availability-zones_{{ context }}"}

The default configuration of the Image Registry Operator spreads image registry pods across topology zones to prevent delayed recovery times in case of a complete zone failure where all pods are impacted. Reference the example YAML to understand the default parameter values that the Image Registry Operator uses when the Operator deploys with a zone-related topology constraint: {._abstract}

```yaml
  topologySpreadConstraints:
  - labelSelector:
      matchLabels:
        docker-registry: default
    maxSkew: 1
    topologyKey: kubernetes.io/hostname
    whenUnsatisfiable: DoNotSchedule
  - labelSelector:
      matchLabels:
        docker-registry: default
    maxSkew: 1
    topologyKey: node-role.kubernetes.io/worker
    whenUnsatisfiable: DoNotSchedule
  - labelSelector:
      matchLabels:
        docker-registry: default
    maxSkew: 1
    topologyKey: topology.kubernetes.io/zone
    whenUnsatisfiable: DoNotSchedule
```

{% if not (openshift_dedicated or openshift_rosa) %}
Reference the following YAML to understand the default parameter value that the Image Registry Operator uses when the Operator deploys with a zone-related topology constraint, which applies to bare metal and vSphere instances:

```yaml
 topologySpreadConstraints:
  - labelSelector:
      matchLabels:
        docker-registry: default
    maxSkew: 1
    topologyKey: kubernetes.io/hostname
    whenUnsatisfiable: DoNotSchedule
  - labelSelector:
      matchLabels:
        docker-registry: default
    maxSkew: 1
    topologyKey: node-role.kubernetes.io/worker
    whenUnsatisfiable: DoNotSchedule
```
{% endif %}

As a cluster administrator. you can override the default `topologySpreadConstraints` section values by configuring the `configs.imageregistry.operator.openshift.io/cluster` spec file.