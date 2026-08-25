{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a scheduler profile {id="nodes-scheduler-profiles-configuring_{{ context }}"}

To customize how the cluster distributes pods across your nodes based on resource use, you can configure a specific scheduler profile. {._abstract}

**Prerequisites**

*   Access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Edit the `Scheduler` object:
    ```terminal
    $ oc edit scheduler cluster
    ```
1.  Specify the profile to use in the `spec.profile` field:
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: Scheduler
    metadata:
      name: cluster
    #...
    spec:
      mastersSchedulable: false
      profile: HighNodeUtilization
    #...
    ```

    Set `spec.profile` to `LowNodeUtilization`, `HighNodeUtilization`, or `NoScoring`.
1.  Save the file to apply the changes.