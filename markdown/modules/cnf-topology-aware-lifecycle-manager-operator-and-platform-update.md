{%- set _mod_docs_content_type = "PROCEDURE" %}
# Performing a platform and an Operator update together {id="talo-operator-and-platform-update_{{ context }}"}

You can perform a platform and an Operator update at the same time. {._abstract}

**Prerequisites**

*   Install the {{ cgu_operator_first }}.
*   Update {{ ztp_first }} to the latest version.
*   Provision one or more managed clusters with {{ ztp }}.
*   Log in as a user with `cluster-admin` privileges.
*   Create {{ rh_rhacm }} policies in the hub cluster.

**Procedure**

1.  Create the `{{ policy_gen_cr }}`{minja} CR for the updates by following the steps described in the "Performing a platform update" and "Performing an Operator update" sections.
1.  Apply the prep work for the platform and the Operator update.
    1.  Save the content of the `ClusterGroupUpgrade` CR with the policies for platform update preparation work, catalog source updates, and target clusters to the `cgu-platform-operator-upgrade-prep.yml` file, for example:
        ```yaml
        apiVersion: ran.openshift.io/v1alpha1
        kind: ClusterGroupUpgrade
        metadata:
          name: cgu-platform-operator-upgrade-prep
          namespace: default
        spec:
          managedPolicies:
          - du-upgrade-platform-upgrade-prep
          - du-upgrade-operator-catsrc-policy
          clusterSelector:
          - group-du-sno
          remediationStrategy:
            maxConcurrency: 10
          enable: true
        ```
    1.  Apply the `cgu-platform-operator-upgrade-prep.yml` file to the hub cluster by running the following command:
        ```terminal
        $ oc apply -f cgu-platform-operator-upgrade-prep.yml
        ```
    1.  Monitor the process. Upon completion, ensure that the policy is compliant by running the following command:
        ```terminal
        $ oc get policies --all-namespaces
        ```
1.  Create the `ClusterGroupUpdate` CR for the platform and the Operator update with the `spec.enable` field set to `false`.
    1.  Save the contents of the platform and Operator update `ClusterGroupUpdate` CR with the policies and the target clusters to the `cgu-platform-operator-upgrade.yml` file, as shown in the following example:
        ```yaml
        apiVersion: ran.openshift.io/v1alpha1
        kind: ClusterGroupUpgrade
        metadata:
          name: cgu-du-upgrade
          namespace: default
        spec:
          managedPolicies:
          - du-upgrade-platform-upgrade
          - du-upgrade-operator-catsrc-policy
          - common-subscriptions-policy
          preCaching: true
          clusterSelector:
          - group-du-sno
          remediationStrategy:
            maxConcurrency: 1
          enable: false
        ```
        *   `du-upgrade-platform-upgrade` is the platform update policy.
        *   `du-upgrade-operator-catsrc-policy` is the policy containing the catalog source information for the Operators to be updated. It is needed for the precaching feature to determine which Operator images to download to the managed cluster.
        *   `common-subscriptions-policy` is the policy to update the Operators.
    1.  Apply the `cgu-platform-operator-upgrade.yml` file to the hub cluster by running the following command:
        ```terminal
        $ oc apply -f cgu-platform-operator-upgrade.yml
        ```
1.  Optional: Precache the images for the platform and the Operator update.
    1.  Enable precaching in the `ClusterGroupUpgrade` CR by running the following command:
        ```terminal
        $ oc --namespace=default patch clustergroupupgrade.ran.openshift.io/cgu-du-upgrade \
        --patch '{"spec":{"preCaching": true}}' --type=merge
        ```
    1.  Monitor the update process and wait for the precaching to complete. Check the status of precaching by running the following command on the managed cluster:
        ```terminal
        $ oc get jobs,pods -n openshift-talm-pre-cache
        ```
    1.  Check if the precaching is completed before starting the update by running the following command:
        ```terminal
        $ oc get cgu cgu-du-upgrade -ojsonpath='{.status.conditions}'
        ```
1.  Start the platform and Operator update.
    1.  Enable the `cgu-du-upgrade` `ClusterGroupUpgrade` CR to start the platform and the Operator update by running the following command:
        ```terminal
        $ oc --namespace=default patch clustergroupupgrade.ran.openshift.io/cgu-du-upgrade \
        --patch '{"spec":{"enable":true, "preCaching": false}}' --type=merge
        ```
    1.  Monitor the process. Upon completion, ensure that the policy is compliant by running the following command:
        ```terminal
        $ oc get policies --all-namespaces
        ```

        :::note

        The CRs for the platform and Operator updates can be created from the beginning by configuring the setting to `spec.enable: true`. In this case, the update starts immediately after precaching completes and there is no need to manually enable the CR.

        Both precaching and the update create extra resources, such as policies, placement bindings, placement rules, managed cluster actions, and managed cluster view, to help complete the procedures. Setting the `afterCompletion.deleteObjects` field to `true` deletes all these resources after the updates complete.
        
        :::