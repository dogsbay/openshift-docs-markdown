{%- set _mod_docs_content_type = "PROCEDURE" %}
# Change namespace exclusions for the ingress on a cluster in {{ cluster_manager_first }} {id="osd-create-cluster-exclude-namespace-selector-day2-ui_{{ context }}"}

Specify a namespace label selector so that namespaces matching those labels are excluded from the default `application ingress` on your configured {{ product_title }} cluster in {{ cluster_manager }}. {._abstract}

**Procedure**

1.  From {{ cluster_manager_url }}, navigate to the **Cluster List** page and select the cluster that you want to set namespace exclusions for.
1.  On the selected cluster, select the **Networking** tab.
1.  Select **Edit application ingress**. 

    :::note

    All of the custom settings are optional.
    
    :::

1.  In **Route selector**, enter a comma-separated list of `key=value` pairs to limit which routes this ingress exposes.
Leave the field empty if all routes should remain eligible based on your other choices.
1.  In **Excluded namespaces**, enter a comma-separated list of namespace names whose routes must not use this ingress.
1.  In **Exclude namespace selectors**, specify one or more label selectors. For each selector, provide a label key and a comma-separated list of label values. The default Ingress Controller does not apply to namespaces whose labels satisfy any of the configured selectors.

    :::important

    Do not include spaces around commas, for example, use `finance,HR,legal`, and not `finance, HR, legal`.
    
    :::

1.  Set **Namespace ownership policy** for route admission when namespaces share hostnames, for example, select **Strict** for restrictive admission.
1.  Set **Wildcard policy** to allow or disallow wildcard patterns in route hostnames, for example, select **Disallowed** to block wildcard host routes.

    For more information about custom application ingress settings, click the information icon provided for each setting.
1.  Select **Save** to configure the ingress with your changes.