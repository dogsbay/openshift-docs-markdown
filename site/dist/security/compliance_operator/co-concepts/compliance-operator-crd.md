---
title: Understanding the Custom Resource Definitions
---

# Understanding the Custom Resource Definitions {#custom-resource-definitions}

You can use the Custom Resource Definitions (CRDs) provided by the Compliance Operator to run compliance scans and get remediation for the issues found.

The Compliance Operator in the OpenShift Container Platform provides you with several Custom Resource Definitions (CRDs) to run the compliance scans. The Compliance Operator converts security policies into CRDs, which you can use.

The CRD workflow uses these objects:

- `ProfileBundle`, `Profile`, and `TailoredProfile` to define scan requirements
- `ScanSetting` to configure the scan type, occurrence, and location
- `ScanSettingBinding` to process requirements with those settings
- `ComplianceSuite` to monitor deployed scans
- Scan results and remediation after the suite reaches the `DONE` phase
