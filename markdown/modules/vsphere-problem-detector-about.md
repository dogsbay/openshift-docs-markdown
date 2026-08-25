{%- set _mod_docs_content_type = "CONCEPT" %}
# About the {{ operator_name }} {id="vsphere-problem-detector-about_{{ context }}"}

The {{ operator_name }} checks a cluster that you deployed on {{ vmw_full }} for common installation and configuration issues that relate to storage. {._abstract}

After the Cluster Storage Operator starts and determines that a cluster runs on {{ vmw_full }}, the Cluster Storage Operator launches the {{ operator_name }}. When the {{ operator_name }} starts, the Operator immediately runs the checks. The {{ operator_name }} communicates with the {{ vmw_short }} vCenter Server to find the virtual machines in the cluster, the default datastore, and other information about the {{ vmw_short }} vCenter Server configuration. The Operator uses the credentials from the Cloud Credential Operator to connect to {{ vmw_short }}.

The Operator runs the checks according to the following schedule:

*   The checks run every hour.
*   If any check fails, the Operator runs the checks again in intervals of 1 minute, 2 minutes, 4, 8, and so on. The Operator doubles the interval up to a maximum interval of 8 hours.
*   When all checks pass, the schedule returns to an hour interval.

After a failure, the Operator increases its check frequency to quickly report success when the failure condition gets resolved. You can run the Operator manually for immediate troubleshooting information.