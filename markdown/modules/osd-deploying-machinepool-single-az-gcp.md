{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploy a machine pool in a single availability zone within a Multi-AZ cluster {id="osd-deploying-machinepool-single-az-gcp_{{ context }}"}

Deploy a single machine pool to a specific availability zone that is part of a Multi-AZ cluster. This option is useful when a required instance type is not available in all availability zones of a region or when your cluster does not need multiple instances of the required instance type. {._abstract}

**Prerequisites**

*   The [{{ cluster_manager }} API command-line interface (`ocm`)](https://console.redhat.com/openshift/downloads) is installed.

    :::important

    {{ cluster_manager }} API command-line interface (`ocm`) is a Developer Preview feature only.
    For more information about the support scope of Red Hat Developer Preview features, see [Developer Preview Support Scope](https://access.redhat.com/support/offerings/devpreview/).
    
    :::


**Procedure**

*   Deploy a machine pool to a specific availability zone by running the following command:
    ```bash
    ocm create machine-pool \
      --cluster <cluster_name> \
      --instance-type <instance_type> \
      --replicas <number_of_replicas> \
      --availability-zone <availability_zone> \
      [<flags>] \
      <machine_pool_id>
    ```

    Where:
    *   `<cluster_name>`: Replace with the name or ID of the cluster that you want to add the machine pool to.
    *   `<instance_type>`: Replace with the instance type you want to deploy to the single availability zone.
    *   `<number_of_replicas>`: Replace with the number of replicas of the selected instance type you want to include in the machine pool.
    *   `<availability_zone>`: Replace with the availability zone you want to add the machine pool to.
    *   `<flags>`: Optional. Replace with any additional flags available for machine pool creation.
    *   `<machine_pool_id>`: Replace with an ID for your machine pool.

        :::note

        To view the additional flags available for machine pool creation, run the `ocm create machine-pool --help` command.
        
        :::