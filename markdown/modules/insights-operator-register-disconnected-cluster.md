{%- set _mod_docs_content_type = "PROCEDURE" %}
# Registering your disconnected cluster {id="insights-operator-register-disconnected-cluster_{{ context }}"}

Register your disconnected {{ product_title }} cluster on the {{ hybrid_console }} so that your cluster does not get impacted by disabling remote health reporting. For more information, see "Consequences of disabling remote health reporting". {._abstract}


:::important

By registering your disconnected cluster, you can continue to report your subscription usage to Red&#160;Hat. Red&#160;Hat can then return accurate usage and capacity trends associated with your subscription, so that you can use the returned information to better organize subscription allocations across all of your resources.

:::


**Prerequisites**

*   You logged in to the {{ product_title }} web console as the `cluster-admin` role.
*   You can log in to the {{ hybrid_console }}.

**Procedure**

1.  Go to the [**Register disconnected cluster**](https://console.redhat.com/openshift/register) web page on the {{ hybrid_console }}.
1.  Optional: To access the **Register disconnected cluster** web page from the home page of the {{ hybrid_console }}, go to the **Cluster List** navigation menu item and then select the **Register cluster** button.
1.  Enter your cluster’s details in the provided fields on the **Register disconnected cluster** page.
1.  From the **Subscription settings** section of the page, select the subscription settings that apply to your Red&#160;Hat subscription offering.
1.  To register your disconnected cluster, select the **Register cluster** button.