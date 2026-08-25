{%- set _mod_docs_content_type = "PROCEDURE" %}
# Obtaining your cluster ID {id="support-get-cluster-id_{{ context }}"}

When providing information to Red Hat Support, it is helpful to provide the unique identifier for your cluster. You can have your cluster ID autofilled by using the {{ product_title }} web console. You can also manually obtain your cluster ID by using the web console or the OpenShift CLI (`oc`). {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   You have access to the web console or the OpenShift CLI (`oc`) installed.

**Procedure**

{%- if openshift_rosa or openshift_dedicated %}
*   To manually obtain your cluster ID using {{ cluster_manager_url }}:
    1.  Navigate to **Cluster List**.
    1.  Click on the name of the cluster you need to open a support case for.
    1.  Find the value in the **Cluster ID** field of the **Details** section of the **Overview** tab.
{%- endif %}
{%- if openshift_enterprise or openshift_webscale or openshift_dedicated or openshift_rosa %}
*   To open a support case and have your cluster ID autofilled using the web console:
    1.  From the toolbar, navigate to **(?) Help** and select **Share Feedback** from the list.
    1.  Click **Open a support case** from the **Tell us about your experience** window.
{%- endif %}

{% if openshift_origin %}
*   To open a bug and have your cluster ID autofilled using the web console:
    1.  From the toolbar, navigate to **(?) Help** → **Report Bug**.
    1.  The **Cluster ID** value is autofilled after you click `Submit Bug`.
{% endif %}

*   To manually obtain your cluster ID using the web console:
    1.  Navigate to **Home** → **Overview**.
    1.  The value is available in the **Cluster ID** field of the **Details** section.
*   To obtain your cluster ID using the OpenShift CLI (`oc`), run the following command:
    ```terminal
    $ oc get clusterversion -o jsonpath='{.items[].spec.clusterID}{"\n"}'
    ```