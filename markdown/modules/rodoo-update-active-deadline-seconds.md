{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the run-once active deadline override value {id="rodoo-update-active-deadline-seconds_{{ context }}"}

Update the `activeDeadlineSeconds` field in the `RunOnceDurationOverride` resource to customize the override value that the operator applies to run-once pods. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have installed the {{ run_once_operator }}.

**Procedure**

1.  Log in to the OpenShift CLI.
1.  Edit the `RunOnceDurationOverride` resource:
    ```terminal
    $ oc edit runoncedurationoverride cluster
    ```
1.  Update the `activeDeadlineSeconds` field:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: RunOnceDurationOverride
    metadata:
    # ...
    spec:
      runOnceDurationOverride:
        spec:
          activeDeadlineSeconds: 1800
    # ...
    ```

    where:

    `spec.runOnceDurationOverride.spec.activeDeadlineSeconds`
    :   Specifies the desired time limit value, in seconds.

1.  Save the file to apply the changes.

    Any future run-once pods created in namespaces where the run-once duration override is enabled will have their `activeDeadlineSeconds` field set to this new value. Existing run-once pods in these namespaces will receive this new value when they are updated.