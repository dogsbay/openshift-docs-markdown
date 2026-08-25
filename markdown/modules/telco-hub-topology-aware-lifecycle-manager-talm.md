{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ cgu_operator_full }} {id="telco-hub-topology-aware-lifecycle-manager-talm_{{ context }}"}


New in this release {._abstract}

:   *   No reference design updates in this release.

Description
    :   {{ cgu_operator }} is an Operator that runs only on the hub cluster for managing how changes like cluster upgrades, Operator upgrades, and cluster configuration are rolled out to the network. {{ cgu_operator }} supports the following features:

    *   Progressive rollout of policy updates to fleets of clusters in user configurable batches.
    *   Per-cluster actions add `ztp-done` labels or other user-configurable labels following configuration changes to managed clusters.
    *   {{ cgu_operator }} supports optional pre-caching of {{ product_title }}, {{ olm }} Operator, and additional images to {{ sno }} clusters before initiating an upgrade. The pre-caching feature is not applicable when using the recommended image-based upgrade method for upgrading {{ sno }} clusters.
        *   Specifying optional pre-caching configurations with `PreCachingConfig` CRs.
        *   Configurable image filtering to exclude unused content.
        *   Storage validation before and after pre-caching, using defined space requirement parameters.


Limits and requirements

:   *   {{ cgu_operator }} supports concurrent cluster upgrades in batches of 500.
    *   Pre-caching is limited to {{ sno }} cluster topology.

Engineering considerations

:   *   The `PreCachingConfig` custom resource (CR) is optional. You do not need to create it if you want to pre-cache platform-related images only, such as {{ product_title }} and {{ olm }}.
    *   {{ cgu_operator }} supports the use of hub-side templating with Red Hat Advanced Cluster Management policies.