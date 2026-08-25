{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ rh_storage }} {id="telco-core-openshift-data-foundation_{{ context }}"}

{{ rh_storage }} is a software-defined storage service for containers that provides block storage, file system storage, and on-premise object storage. {._abstract}


New in this release

:   *   There are no reference design updates in this release.

Description
:   {{ rh_storage }} is a software-defined storage service for containers.
    {{ rh_storage }} can be deployed in one of two modes:
    *   Internal mode, where {{ rh_storage }} software components are deployed as software containers directly on the OpenShift cluster nodes, together with other containerized applications.
    *   External mode, where {{ rh_storage }} is deployed on a dedicated storage cluster, which is usually a separate Red Hat Ceph Storage cluster running on Red&#160;Hat Enterprise Linux.
    These storage services are running externally to the application workload cluster.

For telco core clusters, storage support is provided by {{ rh_storage }} storage services running in external mode, for several reasons:

*   Separating dependencies between {{ product_title }} and Ceph operations allows for independent {{ product_title }} and {{ rh_storage }} updates.
*   Separation of operations functions for the Storage and {{ product_title }} infrastructure layers, is a typical customer requirement for telco core use cases.
*   External Red Hat Ceph Storage clusters can be re-used by multiple {{ product_title }} clusters deployed in the same region.

{{ rh_storage }} supports separation of storage traffic using secondary CNI networks.


Limits and requirements
:   *   In an IPv4/IPv6 dual-stack networking environment, {{ rh_storage }} uses IPv4 addressing.
    For more information, see [IPv6 support](https://docs.redhat.com/en/documentation/red_hat_openshift_data_foundation/latest/html/planning_your_deployment/network-requirements_rhodf#ipv6-support_rhodf).

Engineering considerations
:   *   {{ rh_storage }} network traffic should be isolated from other traffic on a dedicated network, for example, by using VLAN isolation.
    *   Workload requirements must be scoped before attaching multiple {{ product_title }} clusters to an external {{ rh_storage }} cluster to ensure enough throughput, bandwidth, and performance KPIs.