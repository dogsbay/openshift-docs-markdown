{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ rh_rhacm_first }} {id="telco-hub-red-hat-advanced-cluster-management-rhacm_{{ context }}"}


New in this release {._abstract}

:   *   No reference design updates in this release.

Description
:   {{ rh_rhacm_first }} provides multicluster engine installation and ongoing lifecycle management functionality for deployed clusters.
    You can manage cluster configuration and upgrades declaratively by applying `Policy` custom resources (CRs) to clusters during maintenance windows.


    {{ rh_rhacm }} provides functionality such as the following:

    *   Zero touch provisioning (ZTP) and ongoing scaling of clusters using the multicluster engine component in {{ rh_rhacm }}.
    *   Configuration, upgrades, and cluster status through the {{ rh_rhacm }} policy controller.
    *   During managed cluster installation, {{ rh_rhacm }} can apply labels to individual nodes as configured through the `ClusterInstance` CR.
    *   The {{ cgu_operator_full }} component of {{ rh_rhacm }} provides phased rollout of configuration changes to managed clusters.
    *   The {{ rh_rhacm }} multicluster engine Observability component provides selective monitoring, dashboards, alerts, and metrics.
    The recommended method for {{ sno }} cluster installation is the image-based installation method in multicluster engine, which uses the `ClusterInstance` CR for cluster definition.


    The recommended method for {{ sno }} upgrade is the image-based upgrade method.


    :::note


    The {{ rh_rhacm }} multicluster engine Observability component brings you a centralized view of the health and status of all the managed clusters.
    By default, every managed cluster is enabled to send metrics and alerts, created by their {{ cmo_first }}, back to Observability.
    For more information, see "Observability".
    
    :::



Limits and requirements

:   *   For more information about limits on number of clusters managed by a single hub cluster, see "Telco management hub cluster use model".
    *   The number of managed clusters that can be effectively managed by the hub depends on various factors, including:
        *   Resource availability at each managed cluster
        *   Policy complexity and cluster size
        *   Network utilization
        *   Workload demands and distribution
    *   The hub and managed clusters must maintain sufficient bidirectional connectivity.
      Refer to the {{ rh_rhacm }} Hub Network Configuration for further details.

Engineering considerations
:   *   You can configure the cluster backup and restore Operator to include third-party resources.
    *   The use of {{ rh_rhacm }} hub side templating when defining configuration through policy is strongly recommended.
    This feature reduces the number of policies needed to manage the fleet by enabling for each cluster or for each group. For example, regional or hardware type content to be templated in a policy and substituted on cluster or group basis.
    *   Managed clusters typically have some number of configuration values which are specific to an individual cluster.
    These should be managed using {{ rh_rhacm }} policy hub side templating with values pulled from `ConfigMap` CRs based on the cluster name.