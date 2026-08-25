{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring alert routing for user-defined projects {id="configuring-alert-routing-for-user-defined-projects_{{ context }}"}

If you are a non-administrator user who has been given the `alert-routing-edit` cluster role, you can create or edit alert routing for user-defined projects.

**Prerequisites**

{% if not (openshift_dedicated or openshift_rosa) %}
*   A cluster administrator has enabled monitoring for user-defined projects.
*   A cluster administrator has enabled alert routing for user-defined projects.
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
*   Alert routing has been enabled for user-defined projects.
{%- endif %}
*   You are logged in as a user that has the `alert-routing-edit` cluster role for the project for which you want to create alert routing.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a YAML file for alert routing. The example in this procedure uses a file called `example-app-alert-routing.yaml`.
1.  Add an `AlertmanagerConfig` YAML definition to the file. For example:
    ```yaml
    apiVersion: monitoring.coreos.com/v1beta1
    kind: AlertmanagerConfig
    metadata:
      name: example-routing
      namespace: ns1
    spec:
      route:
        receiver: default
        groupBy: [job]
      receivers:
      - name: default
        webhookConfigs:
        - url: https://example.org/post
    ```
1.  Save the file.
1.  Apply the resource to the cluster:
    ```terminal
    $ oc apply -f example-app-alert-routing.yaml
    ```

    The configuration is automatically applied to the Alertmanager pods.