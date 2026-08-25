{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing Performance Addon Operator subscriptions from deployed clusters with {{ policy_gen_cr }} CRs {id="talm-pao-update-{{ policy_gen_cr }}_{{ context }}"}

In earlier versions of {{ product_title }}, the Performance Addon Operator provided automatic, low latency performance tuning for applications. In {{ product_title }} 4.11 or later, these functions are part of the Node Tuning Operator. {._abstract}

Do not install the Performance Addon Operator on clusters running {{ product_title }} 4.11 or later. If you upgrade to {{ product_title }} 4.11 or later, the Node Tuning Operator automatically removes the Performance Addon Operator.


:::note

You need to remove any policies that create Performance Addon Operator subscriptions to prevent a re-installation of the Operator.

:::


The reference DU profile includes the Performance Addon Operator in the `{{ policy_gen_cr }}` CR `{{ policy_prefix }}common-ranGen.yaml`. To remove the subscription from deployed managed clusters, you must update `{{ policy_prefix }}common-ranGen.yaml`.


:::note

If you install Performance Addon Operator 4.10.3-5 or later on {{ product_title }} 4.11 or later, the Performance Addon Operator detects the cluster version and automatically hibernates to avoid interfering with the Node Tuning Operator functions. However, to ensure best performance, remove the Performance Addon Operator from your {{ product_title }} 4.11 clusters.

:::


**Prerequisites**

*   Create a Git repository where you manage your custom site configuration data. The repository must be accessible from the hub cluster and be defined as a source repository for ArgoCD.
*   Update to {{ product_title }} 4.11 or later.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Change the `complianceType` to `mustnothave` for the Performance Addon Operator namespace, Operator group, and subscription in the `{{ policy_prefix }}common-ranGen.yaml` file.
    ```yaml
{%- if policy-gen-cr == "PolicyGenTemplate" %}
{% include "./snippets/pgt-cnf-topology-aware-lifecycle-manager-pao-update.yaml" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
{% include "./snippets/pg-cnf-topology-aware-lifecycle-manager-pao-update.yaml" %}
{%- endif %}
    ```
1.  Merge the changes with your custom site repository and wait for the ArgoCD application to synchronize the change to the hub cluster. The status of the `common-subscriptions-policy` policy changes to `Non-Compliant`.
1.  Apply the change to your target clusters by using the {{ cgu_operator_full }}. For more information about rolling out configuration changes, see the "Additional resources" section.
1.  Monitor the process. When the status of the `common-subscriptions-policy` policy for a target cluster  is `Compliant`, the Performance Addon Operator has been removed from the cluster. Get the status of the `common-subscriptions-policy` by running the following command:
    ```terminal
    $ oc get policy -n ztp-common common-subscriptions-policy
    ```
1.  Delete the Performance Addon Operator namespace, Operator group and subscription CRs from `{{ rangen_yaml_path }}` in the `{{ policy_prefix }}common-ranGen.yaml` file.
1.  Merge the changes with your custom site repository and wait for the ArgoCD application to synchronize the change to the hub cluster. The policy remains compliant.