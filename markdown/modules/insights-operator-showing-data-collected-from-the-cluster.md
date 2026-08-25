{%- set _mod_docs_content_type = "PROCEDURE" %}
# Showing data collected by the {{ insights_operator }} {id="insights-operator-showing-data-collected-from-the-cluster_{{ context }}"}

You can review the data that is collected by the {{ insights_operator }}. {._abstract}

**Prerequisites**

*   Access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Find the name of the currently running pod for the {{ insights_operator }}:
    ```terminal
    $ INSIGHTS_OPERATOR_POD=$(oc get pods --namespace=openshift-insights -o custom-columns=:metadata.name --no-headers  --field-selector=status.phase=Running)
    ```
1.  Copy the recent data archives collected by the {{ insights_operator }}:
    ```terminal
    $ oc cp openshift-insights/$INSIGHTS_OPERATOR_POD:/var/lib/insights-operator ./insights-data
    ```

    The recent {{ insights_operator }} archives are now available in the `insights-data` directory.