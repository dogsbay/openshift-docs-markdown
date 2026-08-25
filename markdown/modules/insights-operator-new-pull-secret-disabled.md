{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling remote health reporting {id="insights-operator-new-pull-secret_{{ context }}"}

You can change your existing global cluster pull secret to disable remote health reporting. This configuration disables both Telemetry and the {{ insights_operator }}. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

1.  Download the global cluster pull secret to your local file system:
    ```terminal
    $ oc extract secret/pull-secret -n openshift-config --to=.
    ```
1.  In a text editor, edit the `.dockerconfigjson` file that you downloaded by removing the `cloud.openshift.com` JSON entry:
    ```json
    "cloud.openshift.com":{"auth":"<hash>","email":"<email_address>"}
    ```
1.  Save the file.
1.  Update the secret in your cluster. For more information, see "Updating the global cluster pull secret".

    You might need to wait several minutes for the secret to update in your cluster.