{%- set _mod_docs_content_type = "PROCEDURE" %}
# Filtering {{ red_hat_lightspeed }} advisor service recommendations {id="filtering-unnecessary-advisor-recommendations_{{ context }}"}

As an {{ product_title }} cluster manager, you can filter the recommendations that are displayed on the recommendations list. By applying filters, you can reduce the number of reported recommendations and concentrate on your highest priority recommendations. {._abstract}

The following procedure demonstrates how to set and remove **Category** filters; however, the procedure is applicable to any of the filter types and respective values. 

**Prerequisites**

*   You are logged in to the [{{ cluster_manager }}](https://console.redhat.com/openshift) in the {{ hybrid_console_second }}.

**Procedure**

1.  Go to [**OpenShift** > **Advisor** > **Recommendations**](https://console.redhat.com/openshift/insights/advisor/recommendations?).
1.  In the main, filter-type drop-down list, select the **Category** filter type.
1.  Expand the filter-value drop-down list and select the checkbox next to each category of recommendation you want to view. Leave the checkboxes for unnecessary categories clear.
1.  Optional: Add additional filters to further refine the list.

    Only recommendations from the selected categories are shown in the list.

**Verification**

*   After applying filters, you can view the updated recommendations list. The applied filters are added next to the default filters.