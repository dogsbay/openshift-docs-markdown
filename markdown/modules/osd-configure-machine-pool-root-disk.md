{%- set _mod_docs_content_type = "PROCEDURE" %}

# Configure machine pool root disk sizes for clusters {id="osd-configure-machine-pool-root-disk_{{ context }}"}

You can configure a custom root disk size for worker nodes in an {{ product_title }} cluster on {{ GCP }}. By customizing the root disk volume size, you can safely host storage intensive workloads or scale space within your infrastructure. {._abstract}

First, you create a new cluster and specify a custom disk size for it. Then, you create a new machine pool with distinct disk allocations to handle changing infrastructure requirements for the cluster that you created.


:::note

You cannot resize existing cluster and machine pool node volumes. To change root disk sizing for active workloads, you must create a new machine pool with your preferred storage allocation, then migrate your running application and delete the outdated pool.

:::


**Prerequisites**

*   {{ cluster_manager_first }} command-line interface (CLI) is installed.
*   Ensure that you have appropriate project quotas and identity permissions configured on your targeted {{ GCP }} account.
*   You are logged in to the {{ cluster_manager_first }} CLI.

**Procedure**

1.  In your `ocm` CLI, create a cluster by running the interactive cluster creation wizard and including the `--root-disk-size` flag with the target value in gigabytes (GB):
    ```bash
    $ ocm create cluster --root-disk-size=250 --interactive
    ```
1.  Complete the prompts that your CLI gives you and specify the {{ GCP }} platform as your cloud provider and specify your required node sizes. For example:
    1.  **Cluster name:** rc-test
    1.  **Subscription type:** standard cloud provider account owned by Red&#160;Hat.
    1.  **Authentication type:** Workload Identity Federation (WIF)
    1.  **Compute machine type:** e2-standard-4
    1.  **Compute nodes:** 2
1.  When your CLI gives your cluster a `validating` or `creating` state, confirm the cluster configuration in the output summary.
1.  Create a machine pool by running the `create machine-pool` command:
    ```bash
    $ ocm create machine-pool --root-disk-size 320 --cluster __<cluster_id>__ --instance-type e2-standard-4 --replicas 1 __<machine_pool_name>__
    ```
1.  Define the following components:
    1.  Target cluster ID
    1.  Disk capacity
    1.  Machine compute type
    1.  Replica scale
    1.  Unique name

        For example, run the following `create machine-pool` command with all the defined components:
        ```bash
        $ ocm create machine-pool --root-disk-size 320 --cluster 2plhcmdsi3kijhr72h04mlrvvsltj9rn --instance-type e2-standard-4 --replicas 1 mp2
        ```
1.  Confirm that your CLI gives you a confirmation message, stating that the tracking instance attached successfully. For example:
`Machine pool 'mp2' created on cluster '2plhcmdsi3kijhr72h04mlrvvsltj9rn'`.

**Verification**

1.  Go to the cluster that you provisioned.
1.  Verify that the root disk value you customized is used by your machine pool by running the following command:
    ```bash
    $ oc get machineset __<MACHINESET_NAME>__ -n openshift-machine-api -o jsonpath='{.spec.template.spec.providerSpec.value.disks[*].sizeGb}'
    ```
1.  Make sure that the output for your value matches the root disk size that you set for your machine pool.