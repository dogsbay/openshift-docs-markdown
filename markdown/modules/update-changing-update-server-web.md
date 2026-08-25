{%- set _mod_docs_content_type = "PROCEDURE" %}
# Changing the update server by using the web console {id="update-changing-update-server-web_{{ context }}"}

You can change the update server your cluster uses to retrieve information about update paths. {._abstract}

{% if not openshift_origin %}
Changing the update server is optional. If you have an OpenShift Update Service (OSUS) installed and configured locally, you must set the URL for the server as the `upstream` to use the local server during updates.
{% endif %}
{% if openshift_origin %}
Changing the update server is optional.
{% endif %}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  On the web console, navigate to **Administration** → **Cluster Settings** and click **version**.
1.  Click the **YAML** tab and then edit the `upstream` parameter value:
    ```yaml title="Example YAML snippet"
      ...
      spec:
        clusterID: db93436d-7b05-42cc-b856-43e11ad2d31a
        upstream: '<update_server_url>'
      ...
    ```

    Replace `<update_server_url>` with the URL for the update server.

    The default `upstream` value is `https://api.openshift.com/api/upgrades_info/v1/graph`.
1.  Click **Save**.