{%- set _mod_docs_content_type = "REFERENCE" %}
# Hub cluster topology {id="telco-hub-cluster-topology_{{ context }}"}

In production environments, the {{ product_title }} hub cluster must be highly available to maintain high availability of the management functions. {._abstract}


Limits and requirements
:   Use a highly available cluster topology for the hub cluster, for example:
    *   Compact (3 nodes combined control plane and compute nodes)
    *   Standard (3 control plane nodes + N compute nodes)

Engineering considerations
:   *   In non-production environments, a {{ sno }} cluster can be used for limited hub cluster functionality.
    *   Certain capabilities, for example {{ rh_storage_first }}, are not supported on {{ sno }}.
    In this configuration, some hub cluster features might not be available.
    *   The number of optional compute nodes can vary depending on the scale of the specific use case.
    *   Compute nodes can be added later as required.
    *   Consult the 4.21 release notes regarding the decrease in the default maximum open files soft limit for containers in this release.