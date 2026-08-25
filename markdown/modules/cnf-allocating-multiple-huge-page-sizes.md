{%- set _mod_docs_content_type = "PROCEDURE" %}
# Allocating multiple huge page sizes {id="cnf-allocating-multiple-huge-page-sizes_{{ context }}"}

You can request huge pages with different sizes under the same container. By doing this task, you can define more complicated pods consisting of containers with different huge page size needs. {._abstract}

The following example, shows you how to define sizes `1G` and `2M`. The Node Tuning Operator configures both sizes on the node.

**Procedure**

*   Edit the `PerformanceProfile` object to define `1G` and `2M` sizes for the huge pages. The Node Tuning Operator configures both sizes on the node.
    ```yaml
    apiVersion: performance.openshift.io/v2
    kind: PerformanceProfile
    metadata:
        name: example-performance-profile
    #...
    spec:
      hugepages:
        defaultHugepagesSize: 1G
        pages:
        - count: 1024
          node: 0
          size: 2M
        - count: 4
          node: 1
          size: 1G
    # ...
    ```