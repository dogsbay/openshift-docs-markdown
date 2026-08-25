{%- set _mod_docs_content_type = "PROCEDURE" %}
# Performing a platform update with {{ policy_gen_cr }} CRs {id="talo-platform-update-{{ policy_gen_cr }}_{{ context }}"}

You can perform a platform update with the {{ cgu_operator }}. {._abstract}

**Prerequisites**

*   Install the {{ cgu_operator_first }}.
*   Update {{ ztp_first }} to the latest version.
*   Provision one or more managed clusters with {{ ztp }}.
*   Mirror the required image repository.
*   Log in as a user with `cluster-admin` privileges.
*   Create {{ rh_rhacm }} policies in the hub cluster.

**Procedure**

1.  Create a `{{ policy_gen_cr }}`{minja} CR for the platform update:
    1.  Save the following `{{ policy_gen_cr }}`{minja} CR in the `du-upgrade.yaml` file:
        The following example shows the `{{ policy_gen_cr }}`{minja} CR for platform update:

{% if policy-gen-cr == "PolicyGenTemplate" %}
        {% include "./snippets/pgt-cnf-topology-aware-lifecycle-manager-platform-update.md" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
        {% include "./snippets/pg-cnf-topology-aware-lifecycle-manager-platform-update.md" %}
{% endif %}

        The `{{ policy_gen_cr }}`{minja} CR generates two policies:

        *   The `du-upgrade-platform-upgrade-prep` policy does the preparation work for the platform update. It creates the `ConfigMap` CR for the required release image signature, creates the image content source of the mirrored release image repository, and updates the cluster version with the required update channel and the update graph reachable by the managed cluster in the disconnected environment.
        *   The `du-upgrade-platform-upgrade` policy is used to perform platform upgrade.
    1.  Add the `du-upgrade.yaml` file contents to the `kustomization.yaml` file located in the {{ ztp }} Git repository for the `{{ policy_gen_cr }}`{minja} CRs and push the changes to the Git repository.

        ArgoCD pulls the changes from the Git repository and generates the policies on the hub cluster.
    1.  Check the created policies by running the following command:
        ```terminal
        $ oc get policies -A | grep platform-upgrade
        ```
1.  Create the `ClusterGroupUpdate` CR for the platform update with the `spec.enable` field set to `false`.
    1.  Save the content of the platform update `ClusterGroupUpdate` CR with the `du-upgrade-platform-upgrade-prep` and the `du-upgrade-platform-upgrade` policies and the target clusters to the `cgu-platform-upgrade.yml` file, as shown in the following example:
        ```yaml
        apiVersion: ran.openshift.io/v1alpha1
        kind: ClusterGroupUpgrade
        metadata:
          name: cgu-platform-upgrade
          namespace: default
        spec:
          managedPolicies:
          - du-upgrade-platform-upgrade-prep
          - du-upgrade-platform-upgrade
          preCaching: false
          clusters:
          - spoke1
          remediationStrategy:
            maxConcurrency: 1
          enable: false
        ```
    1.  Apply the `ClusterGroupUpdate` CR to the hub cluster by running the following command:
        ```terminal
        $ oc apply -f cgu-platform-upgrade.yml
        ```
1.  Optional: Precache the images for the platform update.
    1.  Enable precaching in the `ClusterGroupUpdate` CR by running the following command:
        ```terminal
        $ oc --namespace=default patch clustergroupupgrade.ran.openshift.io/cgu-platform-upgrade \
        --patch '{"spec":{"preCaching": true}}' --type=merge
        ```
    1.  Monitor the update process and wait for the pre-caching to complete. Check the status of pre-caching by running the following command on the hub cluster:
        ```terminal
        $ oc get cgu cgu-platform-upgrade -o jsonpath='{.status.precaching.status}'
        ```
1.  Start the platform update:
    1.  Enable the `cgu-platform-upgrade` policy and disable pre-caching by running the following command:
        ```terminal
        $ oc --namespace=default patch clustergroupupgrade.ran.openshift.io/cgu-platform-upgrade \
        --patch '{"spec":{"enable":true, "preCaching": false}}' --type=merge
        ```
    1.  Monitor the process. Upon completion, ensure that the policy is compliant by running the following command:
        ```terminal
        $ oc get policies --all-namespaces
        ```