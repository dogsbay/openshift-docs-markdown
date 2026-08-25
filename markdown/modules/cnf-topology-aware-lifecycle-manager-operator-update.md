{%- set _mod_docs_content_type = "PROCEDURE" %}
# Performing an Operator update with {{ policy_gen_cr }} CRs {id="talo-operator-update-{{ policy_gen_cr }}_{{ context }}"}

You can perform an Operator update with the {{ cgu_operator }}. {._abstract}

**Prerequisites**

*   Install the {{ cgu_operator_first }}.
*   Update {{ ztp_first }} to the latest version.
*   Provision one or more managed clusters with {{ ztp }}.
*   Mirror the required index image, bundle images, and all Operator images referenced in the bundle images.
*   Log in as a user with `cluster-admin` privileges.
*   Create {{ rh_rhacm }} policies in the hub cluster.

**Procedure**

1.  Update the `{{ policy_gen_cr }}`{minja} CR for the Operator update.
    1.  Update the `du-upgrade` `{{ policy_gen_cr }}`{minja} CR with the following additional contents in the `du-upgrade.yaml` file:
{% if policy-gen-cr == "PolicyGenTemplate" %}
        {% include "./snippets/pgt-cnf-topology-aware-lifecycle-manager-operator-update.md" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
        {% include "./snippets/pg-cnf-topology-aware-lifecycle-manager-operator-update.md" %}
{% endif %}
    1.  This update generates one policy, `du-upgrade-operator-catsrc-policy`, to update the `redhat-operators-disconnected` catalog source with the new index images that contain the required Operators images.

        :::note

        If you want to use the image precaching for Operators and there are Operators from a different catalog source other than `redhat-operators-disconnected`, you must perform the following tasks:

        *   Prepare a separate catalog source policy with the new index image or registry poll interval update for the different catalog source.
        *   Prepare a separate subscription policy for the required Operators that are from the different catalog source.
        
        :::


        For example, the required SRIOV-FEC Operator is available in the `certified-operators` catalog source. To update the catalog source and the Operator subscription, add the following contents to generate two policies, `du-upgrade-fec-catsrc-policy` and `du-upgrade-subscriptions-fec-policy`:
{% if policy-gen-cr == "PolicyGenTemplate" %}
        {% include "./snippets/pgt-sriov-fec-cnf-topology-aware-lifecycle-manager-operator-update.md" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
        {% include "./snippets/pg-sriov-fec-cnf-topology-aware-lifecycle-manager-operator-update.md" %}
{% endif %}
    1.  Remove the specified subscriptions channels in the common `{{ policy_gen_cr }}`{minja} CR, if they exist. The default subscriptions channels from the {{ ztp }} image are used for the update.

        :::note

        The default channel for the Operators applied through {{ ztp }} {{ product_version }} is `stable`, except for the `performance-addon-operator`. As of {{ product_title }} 4.11, the `performance-addon-operator` functionality was moved to the `node-tuning-operator`. For the 4.10 release, the default channel for PAO is `v4.10`. You can also specify the default channels in the common `{{ policy_gen_cr }}`{minja} CR.
        
        :::

    1.  Push the `{{ policy_gen_cr }}`{minja} CRs updates to the {{ ztp }} Git repository.

        ArgoCD pulls the changes from the Git repository and generates the policies on the hub cluster.
    1.  Check the created policies by running the following command:
        ```terminal
        $ oc get policies -A | grep -E "catsrc-policy|subscription"
        ```
1.  Apply the required catalog source updates before starting the Operator update.
    1.  Save the content of the `ClusterGroupUpgrade` CR named `operator-upgrade-prep` with the catalog source policies and the target managed clusters to the `cgu-operator-upgrade-prep.yml` file:
        ```yaml
        apiVersion: ran.openshift.io/v1alpha1
        kind: ClusterGroupUpgrade
        metadata:
          name: cgu-operator-upgrade-prep
          namespace: default
        spec:
          clusters:
          - spoke1
          enable: true
          managedPolicies:
          - du-upgrade-operator-catsrc-policy
          remediationStrategy:
            maxConcurrency: 1
        ```
    1.  Apply the policy to the hub cluster by running the following command:
        ```terminal
        $ oc apply -f cgu-operator-upgrade-prep.yml
        ```
    1.  Monitor the update process. Upon completion, ensure that the policy is compliant by running the following command:
        ```terminal
        $ oc get policies -A | grep -E "catsrc-policy"
        ```
1.  Create the `ClusterGroupUpgrade` CR for the Operator update with the `spec.enable` field set to `false`.
    1.  Save the content of the Operator update `ClusterGroupUpgrade` CR with the `du-upgrade-operator-catsrc-policy` policy and the subscription policies created from the common `{{ policy_gen_cr }}`{minja} and the target clusters to the `cgu-operator-upgrade.yml` file, as shown in the following example:
        ```yaml
        apiVersion: ran.openshift.io/v1alpha1
        kind: ClusterGroupUpgrade
        metadata:
          name: cgu-operator-upgrade
          namespace: default
        spec:
          managedPolicies:
          - du-upgrade-operator-catsrc-policy
          - common-subscriptions-policy
          preCaching: false
          clusters:
          - spoke1
          remediationStrategy:
            maxConcurrency: 1
          enable: false
        ```
        *   `du-upgrade-operator-catsrc-policy` is needed by the image precaching feature to retrieve the Operator images from the catalog source.
        *   `common-subscriptions-policy` contains Operator subscriptions. If you have followed the structure and content of the reference `PolicyGenTemplates`, all Operator subscriptions are grouped into the `common-subscriptions-policy` policy.

        :::note

        One `ClusterGroupUpgrade` CR can only precache the images of the required Operators defined in the subscription policy from one catalog source included in the `ClusterGroupUpgrade` CR. If the required Operators are from different catalog sources, such as in the example of the SRIOV-FEC Operator, another `ClusterGroupUpgrade` CR must be created with `du-upgrade-fec-catsrc-policy` and `du-upgrade-subscriptions-fec-policy` policies for the SRIOV-FEC Operator images precaching and update.
        
        :::

    1.  Apply the `ClusterGroupUpgrade` CR to the hub cluster by running the following command:
        ```terminal
        $ oc apply -f cgu-operator-upgrade.yml
        ```
1.  Optional: Precache the images for the Operator update.
    1.  Before starting image precaching, verify the subscription policy is `NonCompliant` at this point by running the following command:
        ```terminal
        $ oc get policy common-subscriptions-policy -n <policy_namespace>
        ```

        The following is example output:
        ```terminal
        NAME                          REMEDIATION ACTION   COMPLIANCE STATE     AGE
        common-subscriptions-policy   inform               NonCompliant         27d
        ```
    1.  Enable precaching in the `ClusterGroupUpgrade` CR by running the following command:
        ```terminal
        $ oc --namespace=default patch clustergroupupgrade.ran.openshift.io/cgu-operator-upgrade \
        --patch '{"spec":{"preCaching": true}}' --type=merge
        ```
    1.  Monitor the process and wait for the precaching to complete. Check the status of precaching by running the following command on the managed cluster:
        ```terminal
        $ oc get cgu cgu-operator-upgrade -o jsonpath='{.status.precaching.status}'
        ```
    1.  Check if the precaching is completed before starting the update by running the following command:
        ```terminal
        $ oc get cgu -n default cgu-operator-upgrade -ojsonpath='{.status.conditions}' | jq
        ```

        The following is example output:
        ```json
        [
            {
              "lastTransitionTime": "2022-03-08T20:49:08.000Z",
              "message": "The ClusterGroupUpgrade CR is not enabled",
              "reason": "UpgradeNotStarted",
              "status": "False",
              "type": "Ready"
            },
            {
              "lastTransitionTime": "2022-03-08T20:55:30.000Z",
              "message": "Precaching is completed",
              "reason": "PrecachingCompleted",
              "status": "True",
              "type": "PrecachingDone"
            }
        ]
        ```
1.  Start the Operator update.
    1.  Enable the `cgu-operator-upgrade` `ClusterGroupUpgrade` CR and disable precaching to start the Operator update by running the following command:
        ```terminal
        $ oc --namespace=default patch clustergroupupgrade.ran.openshift.io/cgu-operator-upgrade \
        --patch '{"spec":{"enable":true, "preCaching": false}}' --type=merge
        ```
    1.  Monitor the process. Upon completion, ensure that the policy is compliant by running the following command:
        ```terminal
        $ oc get policies --all-namespaces
        ```