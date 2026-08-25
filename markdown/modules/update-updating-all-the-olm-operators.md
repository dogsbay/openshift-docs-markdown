{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating all the OLM Operators {id="update-updating-all-the-olm-operators_{{ context }}"}

In the second phase of a multi-version upgrade, you must approve all of the Operators and additionally add installations plans for any other Operators that you want to upgrade. {._abstract}

Follow the same procedure as outlined in "Updating the OLM Operators".
Ensure that you also update any non-OLM Operators as required.

**Procedure**

1.  Monitor the cluster update.
For example, to monitor the cluster update from version 4.14 to 4.15, run the following command:
    ```terminal
    $ watch "oc get clusterversion; echo; oc get co | head -1; oc get co | grep 4.14; oc get co | grep 4.15; echo; oc get no; echo; oc get po -A | grep -E -iv 'running|complete'"
    ```
1.  Check to see which Operators need to be updated:
    ```terminal
    $ oc get installplan -A | grep -E 'APPROVED|false'
    ```
1.  Patch the `InstallPlan` resources for those Operators:
    ```terminal
    $ oc patch installplan -n metallb-system install-nwjnh --type merge --patch \
    '{"spec":{"approved":true}}'
    ```
1.  Monitor the namespace by running the following command:
    ```terminal
    $ oc get all -n metallb-system
    ```

    When the update is complete, the required pods should be in a `Running` state, and the required `ReplicaSet` resources should be ready.

**Verification**

During the update the `watch` command cycles through one or several of the cluster Operators at a time, providing a status of the Operator update in the `MESSAGE` column.

When the cluster Operators update process is complete, each control plane nodes is rebooted, one at a time.


:::note

During this part of the update, messages are reported that state cluster Operators are being updated again or are in a degraded state.
This is because the control plane node is offline while it reboots nodes.

:::