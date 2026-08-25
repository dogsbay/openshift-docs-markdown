{%- set _mod_docs_content_type = "REFERENCE" %}
# Compliance overview {id="compliance-overview_{{ context }}"}

For many {{ product_title }} customers, regulatory readiness, or compliance, on some level is required before any systems can be put into production. That regulatory readiness can be imposed by national standards, industry standards, or the organization’s corporate governance framework. {._abstract}

## Compliance checking {id="compliance-checking_{{ context }}"}

Administrators can use the [Compliance Operator](/security/compliance_operator/co-concepts/compliance-operator-understanding#understanding-compliance-operator) to run compliance scans and recommend remediations for any issues found. The [`oc-compliance` plugin](/security/compliance_operator/co-scans/oc-compliance-plug-in-using#using-oc-compliance-plug-in) is an OpenShift CLI (`oc`) plugin that provides a set of utilities to easily interact with the Compliance Operator.

## File integrity checking {id="file-integrity-checking_{{ context }}"}

Administrators can use the [File Integrity Operator](/security/file_integrity_operator/file-integrity-operator-understanding#understanding-file-integrity-operator) to continually run file integrity checks on cluster nodes and provide a log of files that have been modified.