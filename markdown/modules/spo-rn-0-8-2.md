{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for Security Profiles Operator 0.8.2 {id="spo-release-notes-0-8-2_{{ context }}"}

Release notes for Security Profiles Operator 0.8.2. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the Security Profiles Operator 0.8.2:

*   [RHBA-2023:5958 - OpenShift Security Profiles Operator bug fix update](http://access.redhat.com/errata/RHBA-2023:5958)

## Bug fixes {id="spo-0-8-2-bug-fixes_{{ context }}"}

*   Before this update, `SELinuxProfile` objects did not inherit custom attributes from the same namespace. With this update, `SELinuxProfile` object attributes inherit from the same namespace as expected. ([OCPBUGS-17164](http://issues.redhat.com/browse/OCPBUGS-17164))
*   Before this update, `RawSELinuxProfile` objects would hang during the creation process and would not reach an `Installed` state. With this update, the operator creates `RawSELinuxProfile` objects successfully. ([OCPBUGS-19744](http://issues.redhat.com/browse/OCPBUGS-19744))
*   Before this update, patching the `enableLogEnricher` to `true` would cause the `seccompProfile` `log-enricher-trace` pods to remain in a `Pending` state. With this update, `log-enricher-trace` pods reach an `Installed` state as expected. ([OCPBUGS-22182](http://issues.redhat.com/browse/OCPBUGS-22182))
*   Before this update, the Security Profiles Operator generated high cardinality metrics, causing Prometheus pods using high amounts of memory. With this update, the following metrics will no longer apply in the Security Profiles Operator namespace:
    *   `rest_client_request_duration_seconds`
    *   `rest_client_request_size_bytes`
    *   `rest_client_response_size_bytes`

        ([OCPBUGS-22406](http://issues.redhat.com/browse/OCPBUGS-22406))