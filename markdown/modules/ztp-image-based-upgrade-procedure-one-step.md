{%- set _mod_docs_content_type = "PROCEDURE" %}
# Performing an image-based upgrade on managed clusters at scale in one step {id="ztp-image-based-upgrade-procedure-one-step_{{ context }}"}

For use cases when service interruption is not a concern, you can upgrade a set of your managed clusters by using the `ImageBasedGroupUpgrade` custom resource (CR). You can use the `ImageBasedGroupUpgrade` CR to combine several actions in one step with one rollout strategy.
With one rollout strategy, you can reduce the upgrade time but you can only troubleshoot failed clusters after the upgrade plan is complete. {._abstract}

**Prerequisites**

*   You have logged in to the hub cluster as a user with `cluster-admin` privileges.
*   You have created policies and `ConfigMap` objects for resources used in the image-based upgrade.
*   You have installed the {{ lcao }} and OADP Operators on all managed clusters through the hub cluster.

**Procedure**

1.  Create a YAML file on the hub cluster that has the `ImageBasedGroupUpgrade` CR:
    {% include "./snippets/ibu-ImageBasedGroupUpgrade.md" %}
1.  Apply the created file by running the following command on the hub cluster:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

**Verification**

*   Monitor the status updates by running the following command:
    ```terminal
    $ oc get ibgu -o yaml
    ```

    ```yaml title="Example output"
    # ...
    status:
      clusters:
      - completedActions:
        - action: Prep
        failedActions:
        - action: Upgrade
        name: spoke1
      - completedActions:
        - action: Prep
        - action: Upgrade
        - action: FinalizeUpgrade
        name: spoke4
      - failedActions:
        - action: Prep
        name: spoke6
    # ...
    ```