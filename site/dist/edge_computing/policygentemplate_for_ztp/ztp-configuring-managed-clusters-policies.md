---
title: Configuring managed cluster policies by using PolicyGenTemplate resources
---

# Configuring managed cluster policies by using PolicyGenTemplate resources {#ztp-configuring-managed-clusters-policies}

Applied `Policy` custom resources (CRs) configure the managed clusters that you provision. You can customize how Red Hat Advanced Cluster Management (RHACM) uses `{{ policy_gen_cr }}` CRs to generate the applied `Policy` CRs.

> [!IMPORTANT]
> Using `PolicyGenTemplate` CRs to manage and deploy policies to managed clusters will be deprecated in an upcoming OpenShift Container Platform release. Equivalent and improved functionality is available using Red Hat Advanced Cluster Management (RHACM) and `PolicyGenerator` CRs.
>
> For more information about `PolicyGenerator` resources, see the RHACM [Integrating Policy Generator](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.17/html-single/governance/index#integrate-policy-generator) documentation.

**Additional resources**

- [Configuring managed cluster policies by using PolicyGenerator resources](/openshift-docs-markdown/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-configuring-managed-clusters-policygenerator)
- [Comparing RHACM PolicyGenerator and PolicyGenTemplate resource patching](/openshift-docs-markdown/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-comparing-pgt-and-rhacm-pg-patching-strategies_ztp-configuring-managed-clusters-policygenerator)

## About the PolicyGenTemplate CRD {#ztp-the-policygentemplate_ztp-configuring-managed-clusters-policies}

The `{{ policy_gen_cr }}` custom resource definition (CRD) tells the `PolicyGen` policy generator what custom resources (CRs) to include in the cluster configuration, how to combine the CRs into the generated policies, and what items in those CRs need to be updated with overlay content.

The following example shows a `{{ policy_gen_cr }}` CR (`{{ policy_prefix }}common-du-ranGen.yaml`) extracted from the `ztp-site-generate` reference container. The `{{ policy_prefix }}common-du-ranGen.yaml` file defines two Red Hat Advanced Cluster Management (RHACM) policies. The policies manage a collection of configuration CRs, one for each unique value of `policyName` in the CR. `{{ policy_prefix }}common-du-ranGen.yaml` creates a single placement binding and a placement rule to bind the policies to clusters based on the labels listed in the `{{ binding_field }}` section.

**Example PolicyGenTemplate CR - truecommon-ranGen.yaml**

```yaml
apiVersion: ran.openshift.io/v1
kind: PolicyGenTemplate
metadata:
  name: "common-latest"
  namespace: "ztp-common"
spec:
  bindingRules:
    common: "true"
    du-profile: "latest"
  sourceFiles:
    - fileName: SriovSubscriptionNS.yaml
      policyName: "subscriptions-policy"
    - fileName: SriovSubscriptionOperGroup.yaml
      policyName: "subscriptions-policy"
    - fileName: SriovSubscription.yaml
      policyName: "subscriptions-policy"
    - fileName: SriovOperatorStatus.yaml
      policyName: "subscriptions-policy"
    - fileName: PtpSubscriptionNS.yaml
      policyName: "subscriptions-policy"
    - fileName: PtpSubscriptionOperGroup.yaml
      policyName: "subscriptions-policy"
    - fileName: PtpSubscription.yaml
      policyName: "subscriptions-policy"
    - fileName: PtpOperatorStatus.yaml
      policyName: "subscriptions-policy"
    - fileName: ClusterLogNS.yaml
      policyName: "subscriptions-policy"
    - fileName: ClusterLogOperGroup.yaml
      policyName: "subscriptions-policy"
    - fileName: ClusterLogSubscription.yaml
      policyName: "subscriptions-policy"
    - fileName: ClusterLogOperatorStatus.yaml
      policyName: "subscriptions-policy"
    - fileName: StorageNS.yaml
      policyName: "subscriptions-policy"
    - fileName: StorageOperGroup.yaml
      policyName: "subscriptions-policy"
    - fileName: StorageSubscription.yaml
      policyName: "subscriptions-policy"
    - fileName: StorageOperatorStatus.yaml
      policyName: "subscriptions-policy"
    - fileName: DefaultCatsrc.yaml
      policyName: "config-policy"
      metadata:
        name: redhat-operators-disconnected
      spec:
        displayName: disconnected-redhat-operators
        image: registry.example.com:5000/disconnected-redhat-operators/disconnected-redhat-operator-index:v4.9
    - fileName: DisconnectedICSP.yaml
      policyName: "config-policy"
      spec:
        repositoryDigestMirrors:
        - mirrors:
          - registry.example.com:5000
          source: registry.redhat.io
```

where:

`common: "true"`
:   Applies the policies to all clusters with this label.

`sourceFiles`
:   Files listed under `sourceFiles` create the Operator policies for installed clusters.

`DefaultCatsrc.yaml`
:   Configures the catalog source for the disconnected registry.

`policyName: "config-policy"`
:   Configures Operator subscriptions. The `OperatorHub` CR disables the default and this CR replaces `redhat-operators` with a `CatalogSource` CR that points to the disconnected registry.

A `{{ policy_gen_cr }}` CR can be constructed with any number of included CRs. Apply the following example CR in the hub cluster to generate a policy containing a single CR:

```yaml
{%- if policy-gen-cr == "PolicyGenTemplate" %}
{% include "./snippets/ztp-the-policygentemplate-single.yaml" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
{% include "./snippets/ztp-the-policygenerator-single.yaml" %}
{%- endif %}
```

Using the source file `PtpConfigSlave.yaml` as an example, the file defines a `PtpConfig` CR. The generated policy for the `PtpConfigSlave` example is named `group-du-sno-config-policy`. The `PtpConfig` CR defined in the generated `group-du-sno-config-policy` is named `du-ptp-slave`. The `spec` defined in `PtpConfigSlave.yaml` is placed under `du-ptp-slave` along with the other `spec` items defined under the source file.

The following example shows the `group-du-sno-config-policy` CR:

```yaml
{%- if policy-gen-cr == "PolicyGenTemplate" %}
{% include "./snippets/pgt-group-du-sno-config-policy.yaml" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
{% include "./snippets/pg-group-du-sno-config-policy.yaml" %}
{%- endif %}
```

## Recommendations when customizing PolicyGenTemplate CRs {#ztp-pgt-config-best-practices_ztp-configuring-managed-clusters-policies}

Consider the following best practices when customizing site configuration `{{ policy_gen_cr }}` custom resources (CRs):

- Use as few policies as are necessary. Using fewer policies requires less resources. Each additional policy creates increased CPU load for the hub cluster and the deployed managed cluster. CRs are combined into policies based on the `policyName` field in the `{{ policy_gen_cr }}` CR. CRs in the same `{{ policy_gen_cr }}` which have the same value for `policyName` are managed under a single policy.
- In disconnected environments, use a single catalog source for all Operators by configuring the registry as a single index containing all Operators. Each additional `CatalogSource` CR on the managed clusters increases CPU usage.
- Reduce the overall time taken until the cluster is ready to deploy applications by including `MachineConfig` CRs as extra manifests in the installation. To do this, package `MachineConfig` CRs in a `ConfigMap` CR. Reference the `ConfigMap` CRs in the `extraManifestsRefs` field in the `ClusterInstance` CR.
- `{{ policy_gen_cr }}` CRs should override the channel field to explicitly identify the desired version. This ensures that changes in the source CR during upgrades does not update the generated subscription.
- The default setting for `policyDefaults.consolidateManifests` is `true`. This is the recommended setting for DU profile. Setting it to `false` might impact large scale deployments.
- The default setting for `policyDefaults.orderPolicies` is `false`. This is the recommended setting for DU profile.
  After the cluster installation is complete and a cluster becomes `Ready`, TALM creates a `ClusterGroupUpgrade` CR corresponding to this cluster. The `ClusterGroupUpgrade` CR contains a list of ordered policies defined by the `ran.openshift.io/ztp-deploy-wave` annotation. If you use the `{{ policy_gen_cr }}` CR to change the order of the policies, conflicts might occur and the configuration might not be applied.

**Additional resources**

- For recommendations about scaling clusters with RHACM, see [Performance and scalability](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.6/html/install/installing#performance-and-scalability).

> [!NOTE]
> When managing large numbers of spoke clusters on the hub cluster, minimize the number of policies to reduce resource consumption.
>
> Grouping multiple configuration CRs into a single or limited number of policies is one way to reduce the overall number of policies on the hub cluster. When using the common, group, and site hierarchy of policies for managing site configuration, it is especially important to combine site-specific configurations into a single policy.

## PolicyGenTemplate CRs for RAN deployments {#ztp-policygentemplates-for-ran_ztp-configuring-managed-clusters-policies}

Use `{{ policy_gen_cr }}` custom resources (CRs) to customize the configuration applied to the cluster by using the GitOps Zero Touch Provisioning (ZTP) pipeline. The `{{ policy_gen_cr }}` CR allows you to generate one or more policies to manage the set of configuration CRs on your fleet of clusters. The `{{ policy_gen_cr }}` CR identifies the set of managed CRs, bundles them into policies, builds the policy wrapping around those CRs, and associates the policies with clusters by using label binding rules.

The reference configuration, obtained from the GitOps ZTP container, is designed to provide a set of critical features and node tuning settings that ensure the cluster can support the stringent performance and resource utilization constraints typical of RAN (Radio Access Network) Distributed Unit (DU) applications. Changes or omissions from the baseline configuration can affect feature availability, performance, and resource utilization. Use the reference `{{ policy_gen_cr }}` CRs as the basis to create a hierarchy of configuration files tailored to your specific site requirements.

The baseline `{{ policy_gen_cr }}` CRs that are defined for RAN DU cluster configuration can be extracted from the GitOps ZTP `ztp-site-generate` container. See "Preparing the GitOps ZTP site configuration repository" for further details.

The `{{ policy_gen_cr }}` CRs can be found in the `./{{ argocd_folder }}` folder. The reference architecture has common, group, and site-specific configuration CRs. Each `{{ policy_gen_cr }}` CR refers to other CRs that can be found in the `./out/source-crs` folder.

The `{{ policy_gen_cr }}` CRs relevant to RAN cluster configuration are described below. Variants are provided for the group `{{ policy_gen_cr }}` CRs to account for differences in single-node, three-node compact, and standard cluster configurations. Similarly, site-specific configuration variants are provided for single-node clusters and multi-node (compact or standard) clusters. Use the group and site-specific configuration variants that are relevant for your deployment.

**PolicyGenTemplate CRs for RAN deployments**

| PolicyGenTemplate CR | Description |
| --- | --- |
| `{{ policy_prefix }}example-multinode-site.yaml` | Contains a set of CRs that get applied to multi-node clusters. These CRs configure SR-IOV features typical for RAN installations. |
| `{{ policy_prefix }}example-sno-site.yaml` | Contains a set of CRs that get applied to single-node OpenShift clusters. These CRs configure SR-IOV features typical for RAN installations. |
| `{{ policy_prefix }}common-mno-ranGen.yaml` | Contains a set of common RAN policy configuration that get applied to multi-node clusters. |
| `{{ policy_prefix }}common-ranGen.yaml` | Contains a set of common RAN CRs that get applied to all clusters. These CRs subscribe to a set of operators providing cluster features typical for RAN as well as baseline cluster tuning. |
| `{{ policy_prefix }}group-du-3node-ranGen.yaml` | Contains the RAN policies for three-node clusters only. |
| `{{ policy_prefix }}group-du-sno-ranGen.yaml` | Contains the RAN policies for single-node clusters only. |
| `{{ policy_prefix }}group-du-standard-ranGen.yaml` | Contains the RAN policies for standard three control-plane clusters. |
| `{{ policy_prefix }}group-du-3node-validator-ranGen.yaml` | `{{ policy_gen_cr }}` CR used to generate the various policies required for three-node clusters. |
| `{{ policy_prefix }}group-du-standard-validator-ranGen.yaml` | `{{ policy_gen_cr }}` CR used to generate the various policies required for standard clusters. |
| `{{ policy_prefix }}group-du-sno-validator-ranGen.yaml` | `{{ policy_gen_cr }}` CR used to generate the various policies required for single-node OpenShift clusters. |

**Additional resources**

- [Preparing the GitOps ZTP site configuration repository](/openshift-docs-markdown/edge_computing/ztp-preparing-the-hub-cluster#ztp-preparing-the-ztp-git-repository_ztp-preparing-the-hub-cluster)

## Customizing a managed cluster with PolicyGenTemplate CRs {#ztp-customizing-a-managed-site-using-pgt_ztp-configuring-managed-clusters-policies}

Use the following procedure to customize the policies that get applied to the managed cluster that you provision using the GitOps Zero Touch Provisioning (ZTP) pipeline.

**Prerequisites**

- You have installed the OpenShift CLI (`oc`).
- You have logged in to the hub cluster as a user with `cluster-admin` privileges.
- You configured the hub cluster for generating the required installation and policy CRs.
- You created a Git repository where you manage your custom site configuration data. The repository must be accessible from the hub cluster and be defined as a source repository for the Argo CD application.

**Procedure**

1. Create a `{{ policy_gen_cr }}` CR for site-specific configuration CRs.

   1. Choose the appropriate example for your CR from the `{{ argocd_folder }}` folder, for example, `{{ policy_prefix }}example-sno-site.yaml` or `{{ policy_prefix }}example-multinode-site.yaml`.
   2. Change the `{{ binding_field }}` field in the example file to match the site-specific label included in the `ClusterInstance` CR. In the example `ClusterInstance` file, the site-specific label is `sites: example-sno`.

      > [!NOTE]
      > Ensure that the labels defined in your `{{ policy_gen_cr }}` `{{ binding_field }}` field correspond to the labels that are defined in the related managed clusters `ClusterInstance` CR.
   3. Change the content in the example file to match the desired configuration.
2. Optional: Create a `{{ policy_gen_cr }}` CR for any common configuration CRs that apply to the entire fleet of clusters.

   1. Select the appropriate example for your CR from the `{{ argocd_folder }}` folder, for example, `{{ policy_prefix }}common-ranGen.yaml`.
   2. Change the content in the example file to match the required configuration.
3. Optional: Create a `{{ policy_gen_cr }}` CR for any group configuration CRs that apply to the certain groups of clusters in the fleet.

   Ensure that the content of the overlaid spec files matches your required end state. As a reference, the `out/source-crs` directory contains the full list of source-crs available to be included and overlaid by your PolicyGenTemplate templates.

   > [!NOTE]
   > Depending on the specific requirements of your clusters, you might need more than a single group policy per cluster type, especially considering that the example group policies each have a single `PerformancePolicy.yaml` file that can only be shared across a set of clusters if those clusters consist of identical hardware configurations.

   1. Select the appropriate example for your CR from the `{{ argocd_folder }}` folder, for example, `{{ policy_prefix }}group-du-sno-ranGen.yaml`.
   2. Change the content in the example file to match the required configuration.
4. Optional. Create a validator inform policy `{{ policy_gen_cr }}` CR to signal when the GitOps ZTP installation and configuration of the deployed cluster is complete. For more information, see "Creating a validator inform policy".
5. Define all the policy namespaces in a YAML file similar to the example `{{ argocd_folder }}/ns.yaml` file.

   > [!IMPORTANT]
   > Do not include the `Namespace` CR in the same file with the `{{ policy_gen_cr }}` CR.
6. Add the `{{ policy_gen_cr }}` CRs and `Namespace` CR to the `kustomization.yaml` file in the generators section, similar to the example shown in `{{ argocd_folder }}kustomization.yaml`.
7. Commit the `{{ policy_gen_cr }}` CRs, `Namespace` CR, and associated `kustomization.yaml` file in your Git repository and push the changes.

   The ArgoCD pipeline detects the changes and begins the managed cluster deployment. You can push the changes to the `ClusterInstance` CR and the `{{ policy_gen_cr }}` CR simultaneously.

**Additional resources**

- [Signalling GitOps ZTP cluster deployment completion with validator inform policies](/openshift-docs-markdown/edge_computing/policygenerator_for_ztp/ztp-advanced-policygenerator-config#ztp-creating-a-validator-inform-policy_ztp-advanced-policy-config)

## Monitoring managed cluster policy deployment progress {#ztp-monitoring-policy-deployment-progress_ztp-configuring-managed-clusters-policies}

The ArgoCD pipeline uses `{{ policy_gen_cr }}` CRs in Git to generate the RHACM policies and then sync them to the hub cluster. You can monitor the progress of the managed cluster policy synchronization after the assisted service installs OpenShift Container Platform on the managed cluster.

**Prerequisites**

- You have installed the OpenShift CLI (`oc`).
- You have logged in to the hub cluster as a user with `cluster-admin` privileges.

**Procedure**

1. The Topology Aware Lifecycle Manager (TALM) applies the configuration policies that are bound to the cluster.

   After the cluster installation is complete and the cluster becomes `Ready`, a `ClusterGroupUpgrade` CR corresponding to this cluster, with a list of ordered policies defined by the `ran.openshift.io/ztp-deploy-wave annotations`, is automatically created by the TALM. The cluster’s policies are applied in the order listed in `ClusterGroupUpgrade` CR.

   You can monitor the high-level progress of configuration policy reconciliation by using the following commands:

   ```terminal
   $ export CLUSTER=<clusterName>
   ```

   ```terminal
   $ oc get clustergroupupgrades -n ztp-install $CLUSTER -o jsonpath='{.status.conditions[-1:]}' | jq
   ```

   ```terminal {title="Example output"}
   {
     "lastTransitionTime": "2022-11-09T07:28:09Z",
     "message": "Remediating non-compliant policies",
     "reason": "InProgress",
     "status": "True",
     "type": "Progressing"
   }
   ```
2. You can monitor the detailed cluster policy compliance status by using the RHACM dashboard or the command line.

   1. To check policy compliance by using `oc`, run the following command:

      ```terminal
      $ oc get policies -n $CLUSTER
      ```

      ```terminal {title="Example output"}
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
   2. To check policy status from the RHACM web console, perform the following actions:

      1. Click **Governance** -> **Find policies**.
      2. Click on a cluster policy to check its status.

> [!NOTE]
> When all of the cluster policies become compliant, GitOps ZTP installation and configuration for the cluster is complete. The `ztp-done` label is added to the cluster.
>
> In the reference configuration, the final policy that becomes compliant is the one defined in the `*-du-validator-policy` policy. This policy, when compliant on a cluster, ensures that all cluster configuration, Operator installation, and Operator configuration is complete.

## Validating the generation of configuration policy CRs {#ztp-validating-the-generation-of-configuration-policy-crs_ztp-configuring-managed-clusters-policies}

`Policy` custom resources (CRs) are generated in the same namespace as the `{{ policy_gen_cr }}` from which they are created. The same troubleshooting flow applies to all policy CRs generated from a `{{ policy_gen_cr }}` regardless of whether they are `ztp-common`, `ztp-group`, or `ztp-site` based, as shown using the following commands:

```terminal
$ export NS=<namespace>
```

```terminal
$ oc get policy -n $NS
```

The expected set of policy-wrapped CRs should be displayed.

If the policies failed synchronization, use the following troubleshooting steps.

**Procedure**

1. To display detailed information about the policies, run the following command:

   ```terminal
   $ oc describe -n openshift-gitops application policies
   ```
2. Check for `Status: Conditions:` to show the error logs. For example, setting an invalid `sourceFile` entry to `fileName:` generates the error shown below:

   ```text
   Status:
     Conditions:
       Last Transition Time:  2021-11-26T17:21:39Z
       Message:               rpc error: code = Unknown desc = `kustomize build /tmp/https___git.com/ran-sites/policies/ --enable-alpha-plugins` failed exit status 1: 2021/11/26 17:21:40 Error could not find test.yaml under source-crs/: no such file or directory Error: failure in plugin configured via /tmp/kust-plugin-config-52463179; exit status 1: exit status 1
       Type:  ComparisonError
   ```
3. Check for `Status: Sync:`. If there are log errors at `Status: Conditions:`, the `Status: Sync:` shows `Unknown` or `Error`:

   ```text
   Status:
     Sync:
       Compared To:
         Destination:
           Namespace:  policies-sub
           Server:     https://kubernetes.default.svc
         Source:
           Path:             policies
           Repo URL:         https://git.com/ran-sites/policies/.git
           Target Revision:  master
       Status:               Error
   ```
4. When Red Hat Advanced Cluster Management (RHACM) recognizes that policies apply to a `ManagedCluster` object, the policy CR objects are applied to the cluster namespace. Check to see if the policies were copied to the cluster namespace:

   ```terminal
   $ oc get policy -n $CLUSTER
   ```

   ```terminal {title="Example output"}
   NAME                                         REMEDIATION ACTION   COMPLIANCE STATE   AGE
   ztp-common.common-config-policy              inform               Compliant          13d
   ztp-common.common-subscriptions-policy       inform               Compliant          13d
   ztp-group.group-du-sno-config-policy         inform               Compliant          13d
   ztp-group.group-du-sno-validator-du-policy   inform               Compliant          13d
   ztp-site.example-sno-config-policy           inform               Compliant          13d
   ```

   RHACM copies all applicable policies into the cluster namespace. The copied policy names have the format: `<{{ policy_gen_cr }}.Namespace>.<{{ policy_gen_cr }}.Name>-<policyName>`.
5. Check the placement rule for any policies not copied to the cluster namespace. The `matchSelector` in the `{{ placement_rule_cr }}` for those policies should match labels on the `ManagedCluster` object:

   ```terminal
   $ oc get {{ placement_rule_cr }} -n $NS
   ```
6. Note the `{{ placement_rule_cr }}` name appropriate for the missing policy, common, group, or site, using the following command:

   ```terminal
   $ oc get {{ placement_rule_cr }} -n $NS <placement_rule_name> -o yaml
   ```

   - The status-decisions should include your cluster name.
   - The key-value pair of the `matchSelector` in the spec must match the labels on your managed cluster.
7. Check the labels on the `ManagedCluster` object by using the following command:

   ```terminal
   $ oc get ManagedCluster $CLUSTER -o jsonpath='{.metadata.labels}' | jq
   ```
8. Check to see what policies are compliant by using the following command:

   ```terminal
   $ oc get policy -n $CLUSTER
   ```

   If the `Namespace`, `OperatorGroup`, and `Subscription` policies are compliant but the Operator configuration policies are not, it is likely that the Operators did not install on the managed cluster. This causes the Operator configuration policies to fail to apply because the CRD is not yet applied to the spoke.

## Restarting policy reconciliation {#ztp-restarting-policies-reconciliation_ztp-configuring-managed-clusters-policies}

You can restart policy reconciliation when unexpected compliance issues occur, for example, when the `ClusterGroupUpgrade` custom resource (CR) has timed out.

**Procedure**

1. A `ClusterGroupUpgrade` CR is generated in the namespace `ztp-install` by the Topology Aware Lifecycle Manager after the managed cluster becomes `Ready`:

   ```terminal
   $ export CLUSTER=<clusterName>
   ```

   ```terminal
   $ oc get clustergroupupgrades -n ztp-install $CLUSTER
   ```
2. If there are unexpected issues and the policies fail to become complaint within the configured timeout (the default is 4 hours), the status of the `ClusterGroupUpgrade` CR shows `UpgradeTimedOut`:

   ```terminal
   $ oc get clustergroupupgrades -n ztp-install $CLUSTER -o jsonpath='{.status.conditions[?(@.type=="Ready")]}'
   ```
3. A `ClusterGroupUpgrade` CR in the `UpgradeTimedOut` state automatically restarts its policy reconciliation every hour. If you have changed your policies, you can start a retry immediately by deleting the existing `ClusterGroupUpgrade` CR. This triggers the automatic creation of a new `ClusterGroupUpgrade` CR that begins reconciling the policies immediately:

   ```terminal
   $ oc delete clustergroupupgrades -n ztp-install $CLUSTER
   ```

> [!NOTE]
> When the `ClusterGroupUpgrade` CR completes with status `UpgradeCompleted` and the managed cluster has the label `ztp-done` applied, you can make additional configuration changes by using `{{ policy_gen_cr }}`. Deleting the existing `ClusterGroupUpgrade` CR will not make the TALM generate a new CR.
>
> At this point, GitOps ZTP has completed its interaction with the cluster and any further interactions should be treated as an update and a new `ClusterGroupUpgrade` CR created for remediation of the policies.

**Additional resources**

- For information about using Topology Aware Lifecycle Manager (TALM) to construct your own `ClusterGroupUpgrade` CR, see [About the ClusterGroupUpgrade CR](/openshift-docs-markdown/edge_computing/cnf-talm-for-cluster-upgrades#talo-about-cgu-crs_cnf-topology-aware-lifecycle-manager).

## Changing applied managed cluster CRs using policies {#ztp-removing-content-from-managed-clusters_ztp-configuring-managed-clusters-policies}

You can remove content from a custom resource (CR) that is deployed in a managed cluster through a policy.

By default, all `Policy` CRs created from a `{{ policy_gen_cr }}` CR have the `complianceType` field set to `musthave`. A `musthave` policy without the removed content is still compliant because the CR on the managed cluster has all the specified content. With this configuration, when you remove content from a CR, TALM removes the content from the policy but the content is not removed from the CR on the managed cluster.

With the `complianceType` field to `mustonlyhave`, the policy ensures that the CR on the cluster is an exact match of what is specified in the policy.

**Prerequisites**

- You have installed the OpenShift CLI (`oc`).
- You have logged in to the hub cluster as a user with `cluster-admin` privileges.
- You have deployed a managed cluster from a hub cluster running RHACM.
- You have installed Topology Aware Lifecycle Manager on the hub cluster.

**Procedure**

1. Remove the content that you no longer need from the affected CRs. In this example, the `disableDrain: false` line was removed from the `SriovOperatorConfig` CR.

```yaml {title="Example CR"}
apiVersion: sriovnetwork.openshift.io/v1
kind: SriovOperatorConfig
metadata:
  name: default
  namespace: openshift-sriov-network-operator
spec:
  configDaemonNodeSelector:
    "node-role.kubernetes.io/$mcp": ""
  disableDrain: true
  enableInjector: true
  enableOperatorWebhook: true
```

1. Change the `complianceType` of the affected policies to `mustonlyhave` in the `{{ policy_prefix }}group-du-sno-ranGen.yaml` file.

   ```yaml {title="Example YAML"}

   ```

{%- if policy-gen-cr == "PolicyGenTemplate" %} - fileName: SriovOperatorConfig.yaml policyName: "config-policy" complianceType: mustonlyhave {% endif %} {% if policy-gen-cr == "PolicyGenerator" %} # ... policyDefaults: complianceType: "mustonlyhave" # ... policies: - name: config-policy policyAnnotations: ran.openshift.io/ztp-deploy-wave: "" manifests: - path: source-crs/SriovOperatorConfig.yaml {%- endif %} \`\`\`

1. Create a `ClusterGroupUpdates` CR and specify the clusters that must receive the CR changes::

   ```yaml {title="Example ClusterGroupUpdates CR"}
   apiVersion: ran.openshift.io/v1alpha1
   kind: ClusterGroupUpgrade
   metadata:
     name: cgu-remove
     namespace: default
   spec:
     managedPolicies:
       - ztp-group.group-du-sno-config-policy
     enable: false
     clusters:
     - spoke1
     - spoke2
     remediationStrategy:
       maxConcurrency: 2
       timeout: 240
     batchTimeoutAction:
   ```
2. Create the `ClusterGroupUpgrade` CR by running the following command:

   ```terminal
   $ oc create -f cgu-remove.yaml
   ```
3. When you are ready to apply the changes, for example, during an appropriate maintenance window, change the value of the `spec.enable` field to `true` by running the following command:

   ```terminal
   $ oc --namespace=default patch clustergroupupgrade.ran.openshift.io/cgu-remove \
   --patch '{"spec":{"enable":true}}' --type=merge
   ```

**Verification**

1. Check the status of the policies by running the following command:

   ```terminal
   $ oc get <kind> <changed_cr_name>
   ```

   ```terminal {title="Example output"}
   NAMESPACE   NAME                                                   REMEDIATION ACTION   COMPLIANCE STATE   AGE
   default     cgu-ztp-group.group-du-sno-config-policy               enforce                                 17m
   default     ztp-group.group-du-sno-config-policy                   inform               NonCompliant       15h
   ```

   When the `COMPLIANCE STATE` of the policy is `Compliant`, it means that the CR is updated and the unwanted content is removed.
2. Check that the policies are removed from the targeted clusters by running the following command on the managed clusters:

   ```terminal
   $ oc get <kind> <changed_cr_name>
   ```

   If there are no results, the CR is removed from the managed cluster.

## Indication of done for GitOps ZTP installations {#ztp-definition-of-done-for-ztp-installations_ztp-configuring-managed-clusters-policies}

GitOps Zero Touch Provisioning (ZTP) simplifies the process of checking the GitOps ZTP installation status for a cluster. The GitOps ZTP status moves through three phases: cluster installation, cluster configuration, and GitOps ZTP done.

Cluster installation phase
:   The cluster installation phase is shown by the `ManagedClusterJoined` and  `ManagedClusterAvailable` conditions in the `ManagedCluster` CR . If the `ManagedCluster` CR does not have these conditions, or the condition is set to `False`, the cluster is still in the installation phase. Additional details about installation are available from the `AgentClusterInstall` and `ClusterDeployment` CRs. For more information, see "Troubleshooting GitOps ZTP".

Cluster configuration phase
:   The cluster configuration phase is shown by a `ztp-running` label applied the `ManagedCluster` CR for the cluster.

GitOps ZTP done
:   Cluster installation and configuration is complete in the GitOps ZTP done phase. This is shown by the removal of the `ztp-running` label and addition of the `ztp-done` label to the `ManagedCluster` CR. The `ztp-done` label shows that the configuration has been applied and the baseline DU configuration has completed cluster tuning.

    The change to the GitOps ZTP done state is conditional on the compliant state of a Red Hat Advanced Cluster Management (RHACM) validator inform policy. This policy captures the existing criteria for a completed installation and validates that it moves to a compliant state only when GitOps ZTP provisioning of the managed cluster is complete.

    The validator inform policy ensures the configuration of the cluster is fully applied and Operators have completed their initialization. The policy validates the following:

    - The target `MachineConfigPool` contains the expected entries and has finished updating. All nodes are available and not degraded.

- The SR-IOV Operator has completed initialization as indicated by at least one `SriovNetworkNodeState` with `syncStatus: Succeeded`.
- The PTP Operator daemon set exists.
