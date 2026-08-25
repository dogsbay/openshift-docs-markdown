{%- set _mod_docs_content_type = "CONCEPT" %}
# Troubleshooting {{ product_title }} on {{ gcp_short }} installation error codes {id="osd-on-gcp-troubleshoot-cluster-install_{{ context }}"}

The following table lists {{ product_title }} on {{ gcp_first }} installation error codes and what you can do to resolve these errors. {._abstract}

**{{ product_title }} on {{ gcp_short }} installation error codes**

| Error code | Description | Resolution |
| --- | --- | --- |
| OCM3022 | Invalid {{ gcp_short }} project ID. | Verify the project ID in the Google cloud console and retry cluster creation. |
| OCM3023 | {{ gcp_short }} instance type not found. | Verify the instance type and retry cluster creation.<br>For more information about {{ product_title }} on {{ gcp_short }} instance types, see _{{ gcp_full }} instance types_ in the _Additional resources_ section. |
| OCM3024 | {{ gcp_short }} precondition failed. | Verify the organization policy constraints and retry cluster creation.<br>For more information about organization policy constraints, see [Organization policy constraints](https://cloud.google.com/resource-manager/docs/organization-policy/org-policy-constraints). |
| OCM3025 | {{ gcp_short }} SSD quota limit exceeded. | Check your available persistent disk SSD quota either in the {{ gcp_full }} console or in the `gcloud` CLI. There must be at least 896 GB of SSD available. Increase the SSD quota limit and retry cluster creation.<br>For more information about managing persistent disk SSD quota, see [Allocation quotas](https://cloud.google.com/compute/resource-usage). |
| OCM3026 | {{ gcp_short }} compute quota limit exceeded. | Increase your CPU compute quota and retry cluster installation.<br>For more information about the CPU compute quota, see [Compute Engine quota and limits overview](https://cloud.google.com/compute/quotas-limits). |
| OCM3027 | {{ gcp_short }} service account quota limit exceeded. | Ensure your quota allows for additional unused service accounts. Check your current usage for quotas in your {{ gcp_short }} account and try again.<br>For more information about managing your quotas, see [Manage your quotas using the console](https://cloud.google.com/docs/quotas/view-manage#managing_your_quota_console). |