---
title: Propagating custom metadata to ComplianceCheckResult objects
---

# Propagating custom metadata to ComplianceCheckResult objects {#compliance-operator-checkresult-custom-metadata}

Starting in Compliance Operator 1.9.0, add labels and annotations to `Rule` and `CustomRule` objects so matching metadata is displayed on `ComplianceCheckResult` objects after a scan. Downstream tools, dashboards, and ticketing workflows can use this metadata without maintaining a separate mapping.
