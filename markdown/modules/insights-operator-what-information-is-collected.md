{%- set _mod_docs_content_type = "CONCEPT" %}
# Information collected by the {{ insights_operator }} {id="insights-operator-what-information-is-collected_{{ context }}"}

The {{ insights_operator }} collects specific information. {._abstract}

The type of information is listed as follows:

*   General information about your cluster and its components to identify issues that are specific to your {{ product_title }} version and environment.
*   Configuration files, such as the image registry configuration, of your cluster to determine incorrect settings and issues that are specific to parameters you set.
*   Errors that occur in the cluster components.
*   Progress information of running updates, and the status of any component upgrades.
*   Details of the platform that {{ product_title }} is deployed on and the region that the cluster is located in
{%- if not openshift_dedicated %}
*   Cluster workload information transformed into discreet Secure Hash Algorithm (SHA) values, which allows Red&#160;Hat to assess workloads for security and version vulnerabilities without disclosing sensitive details.
*   Workload information about the operating system and runtime environment, including runtime kinds, names, and version. This data gives Red&#160;Hat a better understanding of how you use {{ product_title }} containers so that we can proactively help you make investment decisions to drive optimal utilization.
{%- endif %}
*   If an Operator reports an issue, information is collected about core {{ product_title }} pods in the `openshift-&#42;` and `kube-&#42;` projects. This includes state, resource, security context, volume information, and more.