{%- set _mod_docs_content_type = "PROCEDURE" %}
# Storing and retrieving Argo CD logs {id="gitops-storing-and-retrieving-argo-cd-logs_{{ context }}"}

You can use the Kibana dashboard to store and retrieve Argo CD logs.

**Prerequisites**

*   The {{ gitops_title }} Operator is installed in your cluster.
*   {{ logging_uc }} is installed with default configuration in your cluster.

**Procedure**

1.  In the {{ product_title }} web console, go to the {{ rh_app_icon }} menu -> **Observability** -> **Logging** to view the Kibana dashboard.
1.  Create an index pattern.
    1.  To display all the indices, define the index pattern as `**`, and click *Next step**.
    1.  Select **@timestamp** for **Time Filter field name**.
    1.  Click **Create index pattern**.
1.  In the navigation panel of the Kibana dashboard, click the **Discover** tab.
1.  Create a filter to retrieve logs for Argo CD. The following steps create a filter that retrieves logs for all the pods in the `openshift-gitops` namespace:
    1.  Click **Add a filter +**.
    1.  Select the **kubernetes.namespace_name** field.
    1.  Select the **is** operator.
    1.  Select the **openshift-gitops** value.
    1.  Click **Save**.
1.  Optional: Add additional filters to narrow the search. For example, to retrieve logs for a particular pod, you can create another filter with `kubernetes.pod_name` as the field.
1.  View the filtered Argo CD logs in the Kibana dashboard.