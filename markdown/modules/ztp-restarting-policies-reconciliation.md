{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restarting policy reconciliation {id="ztp-restarting-policies-reconciliation_{{ context }}"}

You can restart policy reconciliation when unexpected compliance issues occur, for example, when the `ClusterGroupUpgrade` custom resource (CR) has timed out. {._abstract}

**Procedure**

1.  A `ClusterGroupUpgrade` CR is generated in the namespace `ztp-install` by the {{ cgu_operator_full }} after the managed cluster becomes `Ready`:
    ```terminal
    $ export CLUSTER=<clusterName>
    ```
    ```terminal
    $ oc get clustergroupupgrades -n ztp-install $CLUSTER
    ```
1.  If there are unexpected issues and the policies fail to become complaint within the configured timeout (the default is 4 hours), the status of the `ClusterGroupUpgrade` CR shows `UpgradeTimedOut`:
    ```terminal
    $ oc get clustergroupupgrades -n ztp-install $CLUSTER -o jsonpath='{.status.conditions[?(@.type=="Ready")]}'
    ```
1.  A `ClusterGroupUpgrade` CR in the `UpgradeTimedOut` state automatically restarts its policy reconciliation every hour. If you have changed your policies, you can start a retry immediately by deleting the existing `ClusterGroupUpgrade` CR. This triggers the automatic creation of a new `ClusterGroupUpgrade` CR that begins reconciling the policies immediately:
    ```terminal
    $ oc delete clustergroupupgrades -n ztp-install $CLUSTER
    ```


:::note

When the `ClusterGroupUpgrade` CR completes with status `UpgradeCompleted` and the managed cluster has the label `ztp-done` applied, you can make additional configuration changes by using `{{ policy_gen_cr }}`. Deleting the existing `ClusterGroupUpgrade` CR will not make the {{ cgu_operator }} generate a new CR.

At this point, {{ ztp }} has completed its interaction with the cluster and any further interactions should be treated as an update and a new `ClusterGroupUpgrade` CR created for remediation of the policies.

:::