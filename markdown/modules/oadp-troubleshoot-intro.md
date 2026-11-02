{%- set _mod_docs_content_type = "CONCEPT" %}
# About troubleshooting OADP {id="oadp-troubleshoot-intro_{{ context }}"}

Troubleshoot {{ oadp_first }} issues by using diagnostic tools such as the OADP CLI, webhooks, `must-gather` custom resource, and other methods. This helps you identify and resolve problems with backup and restore operations. {._abstract}

You can troubleshoot OADP issues by using the following methods:

*   Debug Velero custom resources (CRs) by using the OpenShift CLI tool.
*   Debug Velero or Restic pod crashes, which are caused due to a lack of memory or CPU.
*   Debug issues with Velero and admission webhooks.
*   Check OADP installation issues, OADP Operator issues, backup and restore CR issues, and Restic issues.
*   Use the available OADP timeouts to reduce errors, retries, or failures.
*   Run the `DataProtectionTest` (DPT) custom resource to verify your backup storage bucket configuration and check the CSI snapshot readiness for persistent volume claims.
*   Collect logs and CR information by using the `must-gather` tool.
*   Monitor and analyze the workload performance with the help of OADP monitoring.