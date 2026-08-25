{%- set _mod_docs_content_type = "CONCEPT" %}
# Connectivity prerequisites for managed cluster networks {id="ztp-managed-cluster-network-prereqs_{{ context }}"}

Before you can install and provision a managed cluster with the {{ ztp_first }} pipeline, the managed cluster host must meet the following networking prerequisites: {._abstract}

*   There must be bi-directional connectivity between the {{ ztp }} container in the hub cluster and the Baseboard Management Controller (BMC) of the target bare-metal host.
*   The managed cluster must be able to resolve and reach the API hostname of the hub hostname and `&#42;.apps` hostname. Here is an example of the API hostname of the hub and `&#42;.apps` hostname:
    *   `api.hub-cluster.internal.domain.com`
    *   `console-openshift-console.apps.hub-cluster.internal.domain.com`
*   The hub cluster must be able to resolve and reach the API and `&#42;.apps` hostname of the managed cluster. Here is an example of the API hostname of the managed cluster and `&#42;.apps` hostname:
    *   `api.sno-managed-cluster-1.internal.domain.com`
    *   `console-openshift-console.apps.sno-managed-cluster-1.internal.domain.com`