{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift Compliance Operator 1.2.0 {id="compliance-operator-release-notes-1-2-0_{{ context }}"}

Release notes for OpenShift Compliance Operator 1.2.0. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift Compliance Operator 1.2.0:

*   [RHBA-2023:4245 - OpenShift Compliance Operator enhancement update](https://access.redhat.com/errata/RHBA-2023:4245)

## New features and enhancements {id="compliance-operator-1-2-0-new-features-and-enhancements_{{ context }}"}

*   The CIS {{ product_title }} 4 Benchmark v1.4.0 profile is now available for platform and node applications. To locate the CIS {{ product_title }} v4 Benchmark, go to  [CIS Benchmarks](https://www.cisecurity.org/benchmark/kubernetes) and click **Download Latest CIS Benchmark**, where you can then register to download the benchmark.

    :::important

    Upgrading to Compliance Operator 1.2.0 will overwrite the CIS {{ product_title }} 4 Benchmark 1.1.0 profiles.

    If your {{ product_title }} environment contains existing `cis` and `cis-node` remediations, there might be some differences in scan results after upgrading to Compliance Operator 1.2.0.
    
    :::

*   Additional clarity for auditing security context constraints (SCCs) is now available for the `scc-limit-container-allowed-capabilities` rule.