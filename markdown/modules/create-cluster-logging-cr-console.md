{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a ClusterLogging object by using the web console {id="create-cluster-logging-cr-console_{{ context }}"}

After you have installed the {{ logging }} Operators, you must create a `ClusterLogging` custom resource to configure log storage, visualization, and the log collector for your cluster.

**Prerequisites**

*   You have installed the Red Hat OpenShift Logging Operator.
*   You have access to the {{ product_title }} web console **Administrator** perspective.

**Procedure**

1.  Navigate to the **Custom Resource Definitions** page.
1.  On the **Custom Resource Definitions** page, click **ClusterLogging**.
1.  On the **Custom Resource Definition details** page, select **View Instances** from the **Actions** menu.
1.  On the **ClusterLoggings** page, click **Create ClusterLogging**.
1.  In the **collection** section, select a **Collector Implementation**.
    {% include "./snippets/logging-fluentd-dep-snip.md" %}
1.  In the **logStore** section, select a type.
    {% include "./snippets/logging-elastic-dep-snip.md" %}
1.  Click **Create**.