{%- set _mod_docs_content_type = "CONCEPT" %}
# Identify metrics for indicating optimal node resource usage {id="nodes-dashboard-using-identify_{{ context }}"}

To diagnose and troubleshoot scaling issues, you can use the node metrics dashboard to review metrics across four categories: **Critical**, **Outliers**, **Average durations**, and **Number of Operations**.  {._abstract}

The metrics in the **Critical** category help you indicate optimal node resource usage. These metrics include:

*   Top 3 containers with the most OOM kills in the last day
*   Failure rate for image pulls in the last hour
*   Nodes with system reserved memory utilization > 80%
*   Nodes with Kubelet system reserved memory utilization > 50%
*   Nodes with CRI-O system reserved memory utilization > 50%
*   Nodes with system reserved CPU utilization > 80%
*   Nodes with Kubelet system reserved CPU utilization > 50%
*   Nodes with CRI-O system reserved CPU utilization > 50%