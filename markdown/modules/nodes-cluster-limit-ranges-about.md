{%- set _mod_docs_content_type = "CONCEPT" %}
# About limit ranges {id="nodes-cluster-limit-ranges-about_{{ context }}"}

You can set specific resource limits for a pod, container, image, image stream, or persistent volume claim (PVC) in a specific project by defining a `LimitRange` object. A limit range allows you to restrict resource consumption in that project.  {._abstract}

All requests to create and modify resources are evaluated against each `LimitRange` object in the project. If the resource violates any of the enumerated constraints, the resource is rejected.

{% if openshift_online %}

:::important

For {{ product_title }} Pro, the maximum pod memory is 3Gi. The minimum pod or container memory that you can specify is 100Mi.

:::

{% endif %}

The following shows a limit range object for all components: pod, container, image, image stream, or PVC. You can configure limits for any or all of these components in the same object. You create a different limit range object for each project where you want to control resources.

```yaml title="Sample limit range object for a container"
apiVersion: "v1"
kind: "LimitRange"
metadata:
  name: "resource-limits"
spec:
  limits:
    - type: "Container"
      max:
        cpu: "2"
        memory: "1Gi"
      min:
        cpu: "100m"
        memory: "4Mi"
      default:
        cpu: "300m"
        memory: "200Mi"
      defaultRequest:
        cpu: "200m"
        memory: "100Mi"
      maxLimitRequestRatio:
        cpu: "10"
```