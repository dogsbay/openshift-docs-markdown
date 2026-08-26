{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing metrics using the Observe UI {id="viewing-metrics-observe-ui_{{ context }}"}

Review metrics in the {{ product_title }} web console from the **Administrator** or **Developer** perspective, which must have access to the `openshift-adp` project. {._abstract}

**Procedure**

*   Navigate to the **Observe** → **Metrics** page:
    *   If you are using the **Developer** perspective, follow these steps:
        1.  Select **Custom query**, or click the **Show PromQL** link.
        1.  Type the query and click **Enter**.
    *   If you are using the **Administrator** perspective, type the expression in the text field and select **Run Queries**.

        **Figure 1. OADP metrics query**

        ![OADP metrics query](/images/oadp-metrics-query.png)