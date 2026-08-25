{%- set _mod_docs_content_type = "PROCEDURE" %}
# Replacing compute machine sets to implement failure domains {id="post-installation-adding-nutanix-failure-domains-compute-machines-replace_{{ context }}"}

To distribute compute machines across Nutanix failure domains by replacing a compute machine set, you create a new compute machine set with your configuration, wait for the machines that it creates to start, and then delete the old compute machine set. {._abstract}

**Prerequisites**

*   You have configured the failure domains in the cluster’s Infrastructure custom resource (CR).

**Procedure**

1.  Run the following command to view the cluster’s Infrastructure CR.
    ```terminal
    $ oc describe infrastructures.config.openshift.io cluster
    ```
1.  For each failure domain (`platformSpec.nutanix.failureDomains`), note the cluster’s UUID, name, and subnet object UUID. These values are required to add a failure domain to a compute machine set.
1.  List the compute machine sets in your cluster by running the following command:
    ```terminal
    $ oc get machinesets -n openshift-machine-api
    ```
    ```text title="Example output"
    NAME                            DESIRED   CURRENT   READY   AVAILABLE   AGE
    <original_machine_set_name_1>   1         1         1       1           55m
    <original_machine_set_name_2>   1         1         1       1           55m
    ```
1.  Note the names of the existing compute machine sets.
1.  Create a YAML file that contains the values for your new compute machine set custom resource (CR) by using one of the following methods:
    *   Copy an existing compute machine set configuration into a new file by running the following command:
        ```terminal
        $ oc get machineset <original_machine_set_name_1> \
          -n openshift-machine-api -o yaml > <new_machine_set_name_1>.yaml
        ```

        You can edit this YAML file with your preferred text editor.
    *   Create a blank YAML file named `<new_machine_set_name_1>.yaml` with your preferred text editor and include the required values for your new compute machine set.

        If you are not sure which value to set for a specific field, you can view values of an existing compute machine set CR by running the following command:
        ```terminal
        $ oc get machineset <original_machine_set_name_1> \
          -n openshift-machine-api -o yaml
        ```
        The command returns output similar to the following example:

        ```yaml
        apiVersion: machine.openshift.io/v1beta1
        kind: MachineSet
        metadata:
          labels:
            machine.openshift.io/cluster-api-cluster: <infrastructure_id>
          name: <infrastructure_id>-<role>
          namespace: openshift-machine-api
        spec:
          replicas: 1
          selector:
            matchLabels:
              machine.openshift.io/cluster-api-cluster: <infrastructure_id>
              machine.openshift.io/cluster-api-machineset: <infrastructure_id>-<role>
          template:
            metadata:
              labels:
                machine.openshift.io/cluster-api-cluster: <infrastructure_id>
                machine.openshift.io/cluster-api-machine-role: <role>
                machine.openshift.io/cluster-api-machine-type: <role>
                machine.openshift.io/cluster-api-machineset: <infrastructure_id>-<role>
            spec:
              providerSpec:
                ...
        ```

        where:


        `<infrastructure_id>`
        :    Specifies the cluster infrastructure ID.

        `<role>`
        :   Specifies a default node label.

        `providerSpec`
        :   Specifies the values in the `providerSpec` section of the compute machine set CR are platform-specific. For more information about `providerSpec` parameters in the CR, see the sample compute machine set CR configuration for your provider.


            :::note


            For clusters that have user-provisioned infrastructure, a compute machine set can only create machines with a `worker` or `infra` role.
            
            :::

1.  Configure the new compute machine set to use the first failure domain by updating or adding the following to the `spec.template.spec.providerSpec.value` stanza in the `<new_machine_set_name_1>.yaml` file.

    :::note

    Be sure that the values you specify for the `cluster` and `subnets` fields match the values that were configured in the `failureDomains` stanza in the cluster’s Infrastructure CR.
    
    :::

    ```yaml title="Example compute machine set with Nutanix failure domains"
    apiVersion: machine.openshift.io/v1
    kind: MachineSet
    metadata:
      creationTimestamp: null
      labels:
        machine.openshift.io/cluster-api-cluster: <cluster_name>
      name: <new_machine_set_name_1>
      namespace: openshift-machine-api
    spec:
      replicas: 2
    # ...
      template:
        spec:
    # ...
          providerSpec:
            value:
              apiVersion: machine.openshift.io/v1
              failureDomain:
                name: <failure_domain_name_1>
              cluster:
                type: uuid
                uuid: <prism_element_uuid_1>
              subnets:
              - type: uuid
                uuid: <prism_element_network_uuid_1>
    # ...
    ```
1.  Save your changes.
1.  Create a compute machine set CR by running the following command:
    ```terminal
    $ oc create -f <new_machine_set_name_1>.yaml
    ```
1.  As required, continue to create compute machine sets to reference the additional failure domains that are available to the deployment.
1.  List the machines that are managed by the new compute machine sets by running the following command for each new compute machine set:
    ```terminal
    $ oc get -n openshift-machine-api machines -l machine.openshift.io/cluster-api-machineset=<new_machine_set_name_1>
    ```
    ```text title="Example output"
    NAME                             PHASE          TYPE   REGION    ZONE                 AGE
    <machine_from_new_1>             Provisioned    AHV    Unnamed   Development-STS   25s
    <machine_from_new_2>             Provisioning   AHV    Unnamed   Development-STS   25s
    ```

    When the new machines are in the `Running` phase, you can delete the old compute machine sets that do not include the failure domain configuration.
1.  When you have verified that the new machines are in the `Running` phase, delete the old compute machine sets by running the following command for each:
    ```terminal
    $ oc delete machineset <original_machine_set_name_1> -n openshift-machine-api
    ```

**Verification**

*   To verify that the compute machine sets without the updated configuration are deleted, list the compute machine sets in your cluster by running the following command:
    ```terminal
    $ oc get machinesets -n openshift-machine-api
    ```
    ```text title="Example output"
    NAME                       DESIRED   CURRENT   READY   AVAILABLE   AGE
    <new_machine_set_name_1>   1         1         1       1           4m12s
    <new_machine_set_name_2>   1         1         1       1           4m12s
    ```
*   To verify that the compute machines without the updated configuration are deleted, list the machines in your cluster by running the following command:
    ```terminal
    $ oc get -n openshift-machine-api machines
    ```
    ```text title="Example output while deletion is in progress"
    NAME                        PHASE           TYPE     REGION      ZONE                 AGE
    <machine_from_new_1>        Running         AHV      Unnamed     Development-STS   5m41s
    <machine_from_new_2>        Running         AHV      Unnamed     Development-STS   5m41s
    <machine_from_original_1>   Deleting        AHV      Unnamed     Development-STS   4h
    <machine_from_original_2>   Deleting        AHV      Unnamed     Development-STS   4h
    ```
    ```text title="Example output when deletion is complete"
    NAME                        PHASE           TYPE     REGION      ZONE                 AGE
    <machine_from_new_1>        Running         AHV      Unnamed     Development-STS   6m30s
    <machine_from_new_2>        Running         AHV      Unnamed     Development-STS   6m30s
    ```
*   To verify that a machine created by the new compute machine set has the correct configuration, examine the relevant fields in the CR for one of the new machines by running the following command:
    ```terminal
    $ oc describe machine <machine_from_new_1> -n openshift-machine-api
    ```