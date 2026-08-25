{%- set _mod_docs_content_type = "PROCEDURE" %}

# Accessing installed add-on services on your cluster {id="access-service_{{ context }}"}

After you successfully install an add-on service on your {{ product_title }}
{%- if openshift_rosa %}
(ROSA)
{%- endif %}
cluster, you can access the service by using the OpenShift web console.

**Prerequisites**

*   You have successfully installed a service on your {{ product_title }} cluster.

**Procedure**

1.  Navigate to the **Cluster List** page in {{ cluster_manager_url }}.
1.  Select the cluster with an installed service you want to access.
1.  Navigate to the **Add-ons** tab, and locate the installed service that you want to access.
1.  Click **View on console** from the service option to open the OpenShift web console.
1.  Enter your credentials to log in to the OpenShift web console.
1.  Click the **Red Hat Applications** menu by clicking the three-by-three matrix icon in the upper right corner of the main screen.
1.  Select the service you want to open from the drop-down menu. A new browser tab opens and you are required to authenticate through Red Hat Single Sign-On.

You have now accessed your service and can begin using it.