{%- set _mod_docs_content_type = "PROCEDURE" %}
# Applying update policies to managed clusters {id="talo-apply-policies_{{ context }}"}

You can update your managed clusters by applying your policies. {._abstract}

**Prerequisites**

*   Install the {{ cgu_operator_first }}.
*   {{ cgu_operator }} requires {{ rh_rhacm }} 2.9 or later.
*   Provision one or more managed clusters.
*   Log in as a user with `cluster-admin` privileges.
*   Create {{ rh_rhacm }} policies in the hub cluster.

**Procedure**

1.  Save the contents of the `ClusterGroupUpgrade` CR in the `cgu-1.yaml` file.
    ```yaml
    apiVersion: ran.openshift.io/v1alpha1
    kind: ClusterGroupUpgrade
    metadata:
      name: cgu-1
      namespace: default
    spec:
      managedPolicies:
        - policy1-common-cluster-version-policy
        - policy2-common-nto-sub-policy
        - policy3-common-ptp-sub-policy
        - policy4-common-sriov-sub-policy
      enable: false
      clusters:
      - spoke1
      - spoke2
      - spoke5
      - spoke6
      remediationStrategy:
        maxConcurrency: 2
        timeout: 240
      batchTimeoutAction:
    ```
    *   `spec.managedPolicies` the name of the policies to apply.
    *   `spec.clusters` the list of clusters to update.
    *   `spec.remediationStrategy.maxConcurrency` the `maxConcurrency` field signifies the number of clusters updated at the same time.
    *   `spec.remediationStrategy.timeout` the update timeout in minutes.
    *   `spec.batchTimeoutAction` controls what happens if a batch times out. Possible values are `abort` or `continue`. If unspecified, the default is `continue`.
1.  Create the `ClusterGroupUpgrade` CR by running the following command:
    ```terminal
    $ oc create -f cgu-1.yaml
    ```
    1.  Check if the `ClusterGroupUpgrade` CR was created in the hub cluster by running the following command:
        ```terminal
        $ oc get cgu --all-namespaces
        ```
        ```terminal title="Example output"
        NAMESPACE   NAME  AGE  STATE      DETAILS
        default     cgu-1 8m55 NotEnabled Not Enabled
        ```
    1.  Check the status of the update by running the following command:
        ```terminal
        $ oc get cgu -n default cgu-1 -ojsonpath='{.status}' | jq
        ```
        ```json title="Example output"
        {
          "computedMaxConcurrency": 2,
          "conditions": [
            {
              "lastTransitionTime": "2022-02-25T15:34:07Z",
              "message": "Not enabled",
              "reason": "NotEnabled",
              "status": "False",
              "type": "Progressing"
            }
          ],
          "managedPoliciesContent": {
            "policy1-common-cluster-version-policy": "null",
            "policy2-common-nto-sub-policy": "[{\"kind\":\"Subscription\",\"name\":\"node-tuning-operator\",\"namespace\":\"openshift-cluster-node-tuning-operator\"}]",
            "policy3-common-ptp-sub-policy": "[{\"kind\":\"Subscription\",\"name\":\"ptp-operator-subscription\",\"namespace\":\"openshift-ptp\"}]",
            "policy4-common-sriov-sub-policy": "[{\"kind\":\"Subscription\",\"name\":\"sriov-network-operator-subscription\",\"namespace\":\"openshift-sriov-network-operator\"}]"
          },
          "managedPoliciesForUpgrade": [
            {
              "name": "policy1-common-cluster-version-policy",
              "namespace": "default"
            },
            {
              "name": "policy2-common-nto-sub-policy",
              "namespace": "default"
            },
            {
              "name": "policy3-common-ptp-sub-policy",
              "namespace": "default"
            },
            {
              "name": "policy4-common-sriov-sub-policy",
              "namespace": "default"
            }
          ],
          "managedPoliciesNs": {
            "policy1-common-cluster-version-policy": "default",
            "policy2-common-nto-sub-policy": "default",
            "policy3-common-ptp-sub-policy": "default",
            "policy4-common-sriov-sub-policy": "default"
          },
          "placementBindings": [
            "cgu-policy1-common-cluster-version-policy",
            "cgu-policy2-common-nto-sub-policy",
            "cgu-policy3-common-ptp-sub-policy",
            "cgu-policy4-common-sriov-sub-policy"
          ],
          "placementRules": [
            "cgu-policy1-common-cluster-version-policy",
            "cgu-policy2-common-nto-sub-policy",
            "cgu-policy3-common-ptp-sub-policy",
            "cgu-policy4-common-sriov-sub-policy"
          ],
          "remediationPlan": [
            [
              "spoke1",
              "spoke2"
            ],
            [
              "spoke5",
              "spoke6"
            ]
          ],
          "status": {}
        }
        ```

        The `spec.enable` field in the `ClusterGroupUpgrade` CR is set to `false`.
1.  Change the value of the `spec.enable` field to `true` by running the following command:
    ```terminal
    $ oc --namespace=default patch clustergroupupgrade.ran.openshift.io/cgu-1 \
    --patch '{"spec":{"enable":true}}' --type=merge
    ```

**Verification**

1.  Check the status of the update by running the following command:
    ```terminal
    $ oc get cgu -n default cgu-1 -ojsonpath='{.status}' | jq
    ```
    ```json title="Example output"
    {
      "computedMaxConcurrency": 2,
      "conditions": [
        {
          "lastTransitionTime": "2022-02-25T15:33:07Z",
          "message": "All selected clusters are valid",
          "reason": "ClusterSelectionCompleted",
          "status": "True",
          "type": "ClustersSelected"
        },
        {
          "lastTransitionTime": "2022-02-25T15:33:07Z",
          "message": "Completed validation",
          "reason": "ValidationCompleted",
          "status": "True",
          "type": "Validated"
        },
        {
          "lastTransitionTime": "2022-02-25T15:34:07Z",
          "message": "Remediating non-compliant policies",
          "reason": "InProgress",
          "status": "True",
          "type": "Progressing"
        }
      ],
      "managedPoliciesContent": {
        "policy1-common-cluster-version-policy": "null",
        "policy2-common-nto-sub-policy": "[{\"kind\":\"Subscription\",\"name\":\"node-tuning-operator\",\"namespace\":\"openshift-cluster-node-tuning-operator\"}]",
        "policy3-common-ptp-sub-policy": "[{\"kind\":\"Subscription\",\"name\":\"ptp-operator-subscription\",\"namespace\":\"openshift-ptp\"}]",
        "policy4-common-sriov-sub-policy": "[{\"kind\":\"Subscription\",\"name\":\"sriov-network-operator-subscription\",\"namespace\":\"openshift-sriov-network-operator\"}]"
      },
      "managedPoliciesForUpgrade": [
        {
          "name": "policy1-common-cluster-version-policy",
          "namespace": "default"
        },
        {
          "name": "policy2-common-nto-sub-policy",
          "namespace": "default"
        },
        {
          "name": "policy3-common-ptp-sub-policy",
          "namespace": "default"
        },
        {
          "name": "policy4-common-sriov-sub-policy",
          "namespace": "default"
        }
      ],
      "managedPoliciesNs": {
        "policy1-common-cluster-version-policy": "default",
        "policy2-common-nto-sub-policy": "default",
        "policy3-common-ptp-sub-policy": "default",
        "policy4-common-sriov-sub-policy": "default"
      },
      "placementBindings": [
        "cgu-policy1-common-cluster-version-policy",
        "cgu-policy2-common-nto-sub-policy",
        "cgu-policy3-common-ptp-sub-policy",
        "cgu-policy4-common-sriov-sub-policy"
      ],
      "placementRules": [
        "cgu-policy1-common-cluster-version-policy",
        "cgu-policy2-common-nto-sub-policy",
        "cgu-policy3-common-ptp-sub-policy",
        "cgu-policy4-common-sriov-sub-policy"
      ],
      "remediationPlan": [
        [
          "spoke1",
          "spoke2"
        ],
        [
          "spoke5",
          "spoke6"
        ]
      ],
      "status": {
        "currentBatch": 1,
        "currentBatchRemediationProgress": {
           "spoke1": {
              "policyIndex": 1,
              "state": "InProgress"
           },
           "spoke2": {
              "policyIndex": 1,
              "state": "InProgress"
           }
        },
        "currentBatchStartedAt": "2022-02-25T15:54:16Z",
        "startedAt": "2022-02-25T15:54:16Z"
      }
    }
    ```

    Reflects the update progress of the current batch. Run this command again to receive updated information about the progress.
1.  Check the status of the policies by running the following command:
    ```terminal
    oc get policies -A
    ```
    ```terminal title="Example output"
    NAMESPACE   NAME                                        REMEDIATION ACTION    COMPLIANCE STATE     AGE
    spoke1    default.policy1-common-cluster-version-policy enforce               Compliant            18m
    spoke1    default.policy2-common-nto-sub-policy         enforce               NonCompliant         18m
    spoke2    default.policy1-common-cluster-version-policy enforce               Compliant            18m
    spoke2    default.policy2-common-nto-sub-policy         enforce               NonCompliant         18m
    spoke5    default.policy3-common-ptp-sub-policy         inform                NonCompliant         18m
    spoke5    default.policy4-common-sriov-sub-policy       inform                NonCompliant         18m
    spoke6    default.policy3-common-ptp-sub-policy         inform                NonCompliant         18m
    spoke6    default.policy4-common-sriov-sub-policy       inform                NonCompliant         18m
    default   policy1-common-ptp-sub-policy                 inform                Compliant            18m
    default   policy2-common-sriov-sub-policy               inform                NonCompliant         18m
    default   policy3-common-ptp-sub-policy                 inform                NonCompliant         18m
    default   policy4-common-sriov-sub-policy               inform                NonCompliant         18m
    ```
    *   The `spec.remediationAction` value changes to `enforce` for the child policies applied to the clusters from the current batch.
    *   The `spec.remedationAction` value remains `inform` for the child policies in the rest of the clusters.
    *   After the batch is complete, the `spec.remediationAction` value changes back to `inform` for the enforced child policies.
1.  If the policies include Operator subscriptions, you can check the installation progress directly on the single-node cluster.
    1.  Export the `KUBECONFIG` file of the single-node cluster you want to check the installation progress for by running the following command:
        ```terminal
        $ export KUBECONFIG=<cluster_kubeconfig_absolute_path>
        ```
    1.  Check all the subscriptions present on the single-node cluster and look for the one in the policy you are trying to install through the `ClusterGroupUpgrade` CR by running the following command:
        ```terminal
        $ oc get subs -A | grep -i <subscription_name>
        ```
        ```terminal title="Example output for cluster-logging policy"
        NAMESPACE                              NAME                         PACKAGE                      SOURCE             CHANNEL
        openshift-logging                      cluster-logging              cluster-logging              redhat-operators   stable
        ```
1.  If one of the managed policies includes a `ClusterVersion` CR, check the status of platform updates in the current batch by running the following command against the spoke cluster:
    ```terminal
    $ oc get clusterversion
    ```
    ```terminal title="Example output" {minja}
    NAME      VERSION   AVAILABLE   PROGRESSING   SINCE   STATUS
    version   4.{{ product_version }}.5     True        True          43s     Working towards 4.{{ product_version }}.7: 71 of 735 done (9% complete)
    ```
1.  Check the Operator subscription by running the following command:
    ```terminal
    $ oc get subs -n <operator-namespace> <operator-subscription> -ojsonpath="{.status}"
    ```
1.  Check the install plans present on the single-node cluster that is associated with the desired subscription by running the following command:
    ```terminal
    $ oc get installplan -n <subscription_namespace>
    ```
    ```terminal title="Example output for cluster-logging Operator"
    NAMESPACE                              NAME            CSV                                 APPROVAL   APPROVED
    openshift-logging                      install-6khtw   cluster-logging.5.3.3-4             Manual     true
    ```

    The install plans have their `Approval` field set to `Manual` and their `Approved` field changes from `false` to `true` after {{ cgu_operator }} approves the install plan.

    :::note

    When {{ cgu_operator }} is remediating a policy containing a subscription, it automatically approves any install plans attached to that subscription.
    Where multiple install plans are needed to get the operator to the latest known version, {{ cgu_operator }} might approve multiple install plans, upgrading through one or more intermediate versions to get to the final version.
    
    :::

1.  Check if the cluster service version for the Operator of the policy that the `ClusterGroupUpgrade` is installing reached the `Succeeded` phase by running the following command:
    ```terminal
    $ oc get csv -n <operator_namespace>
    ```
    ```terminal title="Example output for OpenShift Logging Operator"
    NAME                    DISPLAY                     VERSION   REPLACES   PHASE
    cluster-logging.v6.2.1  Red Hat OpenShift Logging   6.2.1                Succeeded
    ```