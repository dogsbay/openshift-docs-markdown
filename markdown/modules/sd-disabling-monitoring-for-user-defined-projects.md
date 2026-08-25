{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disable monitoring for user-defined projects {id="sd-disabling-monitoring-for-user-defined-projects_{{ context }}"}

You can disable the built-in monitoring for user-defined projects when you plan to use an external monitoring solution or need to reduce cluster resource consumption. {._abstract}

**Prerequisites**

*   You logged in to {{ cluster_manager_url }}.

**Procedure**

1.  From the {{ cluster_manager }} {{ hybrid_console_second }}, select a cluster.
1.  Click the **Settings** tab.
1.  Click the **Enable user workload monitoring** checkbox to clear the option, and then click **Save**.

    User workload monitoring is disabled. The Prometheus, Prometheus Operator, and Thanos Ruler components are stopped in the `openshift-user-workload-monitoring` project.