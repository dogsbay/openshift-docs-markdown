{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding {{ red_hat_lightspeed }} advisor service recommendations {id="insights-operator-advisor-recommendations_{{ context }}"}

The {{ red_hat_lightspeed }} advisor service bundles information about various cluster states and component configurations that can negatively affect the service availability, fault tolerance, performance, or security of your clusters and workloads.  {._abstract}

The information set is called a recommendation in the {{ red_hat_lightspeed }} advisor service. Recommendations for clusters includes the following information:

*   **Name:** A concise description of the recommendation
*   **Added:** When the recommendation was published to the {{ red_hat_lightspeed }} advisor service archive
*   **Category:** Whether the issue has the potential to negatively affect service availability, fault tolerance, performance, or security
*   **Total risk:** A value derived from the _likelihood_ that the condition will negatively affect your cluster or workload, and the _impact_ on operations if that were to happen
*   **Clusters:** A list of clusters on which a recommendation is detected
*   **Description:** A brief synopsis of the issue, including how it affects your clusters