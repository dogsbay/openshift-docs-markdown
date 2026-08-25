{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitoring managed cluster policy deployment progress {id="ztp-monitoring-policy-deployment-progress_{{ context }}"}

The ArgoCD pipeline uses `{{ policy_gen_cr }}`{minja} CRs in Git to generate the {{ rh_rhacm }} policies and then sync them to the hub cluster. You can monitor the progress of the managed cluster policy synchronization after the assisted service installs {{ product_title }} on the managed cluster. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in to the hub cluster as a user with `cluster-admin` privileges.

**Procedure**

1.  The {{ cgu_operator_first }} applies the configuration policies that are bound to the cluster.

    After the cluster installation is complete and the cluster becomes `Ready`, a `ClusterGroupUpgrade` CR corresponding to this cluster, with a list of ordered policies defined by the `ran.openshift.io/ztp-deploy-wave annotations`, is automatically created by the {{ cgu_operator }}. The cluster’s policies are applied in the order listed in `ClusterGroupUpgrade` CR.

    You can monitor the high-level progress of configuration policy reconciliation by using the following commands:
    ```terminal
    $ export CLUSTER=<clusterName>
    ```
    ```terminal
    $ oc get clustergroupupgrades -n ztp-install $CLUSTER -o jsonpath='{.status.conditions[-1:]}' | jq
    ```
    ```terminal title="Example output"
    {
      "lastTransitionTime": "2022-11-09T07:28:09Z",
      "message": "Remediating non-compliant policies",
      "reason": "InProgress",
      "status": "True",
      "type": "Progressing"
    }
    ```
1.  You can monitor the detailed cluster policy compliance status by using the {{ rh_rhacm }} dashboard or the command line.
    1.  To check policy compliance by using `oc`, run the following command:
        ```terminal
        $ oc get policies -n $CLUSTER
        ```
        ```terminal title="Example output"
        NAME                                                     REMEDIATION ACTION   COMPLIANCE STATE   AGE
        ztp-common.common-config-policy                          inform               Compliant          3h42m
        ztp-common.common-subscriptions-policy                   inform               NonCompliant       3h42m
        ztp-group.group-du-sno-config-policy                     inform               NonCompliant       3h42m
        ztp-group.group-du-sno-validator-du-policy               inform               NonCompliant       3h42m
        ztp-install.example1-common-config-policy-pjz9s          enforce              Compliant          167m
        ztp-install.example1-common-subscriptions-policy-zzd9k   enforce              NonCompliant       164m
        ztp-site.example1-config-policy                          inform               NonCompliant       3h42m
        ztp-site.example1-perf-policy                            inform               NonCompliant       3h42m
        ```
    1.  To check policy status from the {{ rh_rhacm }} web console, perform the following actions:
        1.  Click **Governance** → **Find policies**.
        1.  Click on a cluster policy to check its status.


        :::note

        When all of the cluster policies become compliant, {{ ztp }} installation and configuration for the cluster is complete. The `ztp-done` label is added to the cluster.

        In the reference configuration, the final policy that becomes compliant is the one defined in the `*-du-validator-policy` policy. This policy, when compliant on a cluster, ensures that all cluster configuration, Operator installation, and Operator configuration is complete.
        
        :::