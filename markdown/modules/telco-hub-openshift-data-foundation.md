{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ rh_storage_first }} {id="telco-hub-openshift-data-foundation_{{ context }}"}


New in this release
:   *   No reference design updates in this release

Description
:   {{ rh_storage_first }} provides file, block, and object storage services to the hub cluster. {._abstract}


Limits and requirements
:   *   {{ odf_first }} in internal mode requires the Local Storage Operator to define a storage class which will provide the necessary underlying storage.
    *   When doing the planning for a telco management cluster, consider the {{ odf_short }} infrastructure and networking requirements.
    *   Dual stack support is limited.
    {{ odf_short }} IPv4 is supported on dual-stack clusters.

Engineering considerations
:   *   Address capacity warnings promptly as recovery can be difficult in case of storage capacity exhaustion, see [Capacity planning](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/4.21/html-single/planning_your_deployment/index#capacity_planning).