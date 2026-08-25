{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ oadp_full }} {id="telco-hub-oadp-operator_{{ context }}"}


New in this release
:   *   No reference design updates in this release

Description
:   The {{ oadp_first }} Operator is automatically installed and managed by {{ rh_rhacm_first }} when the backup feature is enabled.


    The {{ oadp_short }} Operator facilitates the backup and restore of workloads in {{ product_title }} clusters.
    Based on the upstream open source project Velero, it allows you to backup and restore all Kubernetes resources for a given project, including persistent volumes.


    While it is not mandatory to have it on the hub cluster, it is highly recommended for cluster backup, disaster recovery and high availability architecture for the hub cluster.
    The {{ oadp_short }} Operator must be enabled to use the disaster recovery solutions for {{ rh_rhacm }}.
    The reference configuration enables backup (OADP) through the `MultiClusterHub` custom resource (CR) provided by the {{ rh_rhacm }} Operator.


Limits and requirements

:   *   Only one version of {{ oadp_short }} can be installed on a cluster.
    The version installed by {{ rh_rhacm }} must be used for {{ rh_rhacm }} disaster recovery features.

Engineering considerations

:   *   No engineering consideration updates in this release.