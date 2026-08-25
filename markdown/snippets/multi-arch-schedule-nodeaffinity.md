{%- set _mod_docs_content_type = "SNIPPET" %}


Using `nodeAffinity` to schedule nodes with specific architectures
:   You can allow a workload to be scheduled on only a set of nodes with architectures supported by its images. You can set the `spec.affinity.nodeAffinity` field in your pod’s template specification.
    ```yaml title="Example deployment with node affinity set"
    apiVersion: apps/v1
    kind: Deployment
    metadata: # ...
    spec:
       # ...
      template:
         # ...
        spec:
          affinity:
            nodeAffinity:
              requiredDuringSchedulingIgnoredDuringExecution:
                nodeSelectorTerms:
                - matchExpressions:
                  - key: kubernetes.io/arch
                    operator: In
                    values:
                    - amd64
                    - arm64
    # ...
    ```
    *   The `values` parameter specifies the supported architectures. Valid values include `amd64`, `arm64`, or both values.