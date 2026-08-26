{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding the monitoring stack {id="understanding-the-monitoring-stack_{{ context }}"}

The monitoring stack includes the following components:


Default platform monitoring components
{%- if not (openshift_dedicated or openshift_rosa) %}
:   A set of platform monitoring components are installed in the `openshift-monitoring` project by default during an {{ product_title }} installation. This provides monitoring for core cluster components including Kubernetes services. The default monitoring stack also enables remote health monitoring for clusters.
{%- endif %}
{%- if openshift_dedicated or openshift_rosa %}
:   A set of platform monitoring components are installed in the `openshift-monitoring` project by default during a {{ product_title }} installation. Red&#160;Hat Site Reliability Engineers (SRE) use these components to monitor core cluster components including Kubernetes services. This includes critical metrics, such as CPU and memory, collected from all of the workloads in every namespace.
{%- endif %}

    You can see these components in the **Installed by default** section in the following diagram.


Components for monitoring user-defined projects
{%- if not (openshift_dedicated or openshift_rosa) %}
:   If you enable monitoring for user-defined projects, additional monitoring components are installed in the `openshift-user-workload-monitoring` project. This provides optional monitoring for user-defined projects.
{%- endif %}
{%- if openshift_dedicated or openshift_rosa %}
:   A set of user-defined project monitoring components are installed in the `openshift-user-workload-monitoring` project by default during a {{ product_title }} installation. You can use these components to monitor services and pods in user-defined projects.
{%- endif %}

    You can see these components in the **User** section in the following diagram.

![{{ product_title }} monitoring architecture](/images/monitoring-architecture.png)