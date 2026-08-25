{%- set _mod_docs_content_type = "PROCEDURE" %}
# Downloading your {{ insights_operator }} archive {id="insights-operator-downloading-archive_{{ context }}"}

{{ insights_operator }} stores gathered data in an archive located in the `openshift-insights` namespace of your cluster. You can download and review the data that is gathered by the {{ insights_operator }}. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

1.  Find the name of the running pod for the {{ insights_operator }}:
    ```terminal
    $ oc get pods --namespace=openshift-insights -o custom-columns=:metadata.name --no-headers  --field-selector=status.phase=Running
    ```
1.  Copy the recent data archives collected by the {{ insights_operator }}:
    ```terminal
    $ oc cp openshift-insights/<insights_operator_pod_name>:/var/lib/insights-operator ./insights-data
    ```

    Replace `<insights_operator_pod_name>` with the pod name output from the preceding command.

    The recent {{ insights_operator }} archives are now available in the `insights-data` directory.