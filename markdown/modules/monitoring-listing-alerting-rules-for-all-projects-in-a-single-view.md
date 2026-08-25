{%- set _mod_docs_content_type = "PROCEDURE" %}
# Listing alerting rules for all projects in a single view {id="listing-alerting-rules-for-all-projects-in-a-single-view_{{ context }}"}

{% if not (openshift_dedicated or openshift_rosa) %}
As a cluster administrator,
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
As a `dedicated-admin`,
{%- endif %}
you can list alerting rules for core {{ product_title }} and user-defined projects together in a single view.

**Prerequisites**

{% if openshift_rosa or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{% endif %}
{% if not (openshift_rosa or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{%- endif %}
*   You have installed the {{ oc_first }}.

**Procedure**

1.  In the {{ product_title }} web console, go to **Observe** -> **Alerting** -> **Alerting rules**.
1.  Select the **Platform** and **User** sources in the **Filter** drop-down menu.

    :::note

    The **Platform** source is selected by default.
    
    :::