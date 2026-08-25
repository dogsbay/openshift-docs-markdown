{%- set _mod_docs_content_type = "PROCEDURE" %}
# Editing compute machine sets to implement failure domains {id="post-installation-adding-nutanix-failure-domains-compute-machines-edit_{{ context }}"}

To distribute compute machines across Nutanix failure domains by using an existing compute machine set, you update the compute machine set with your configuration and then use scaling to replace the existing compute machines. {._abstract}

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
    ```terminal title="Example output"
    NAME                   DESIRED   CURRENT   READY   AVAILABLE   AGE
    <machine_set_name_1>   1         1         1       1           55m
    <machine_set_name_2>   1         1         1       1           55m
    ```
1.  Edit the first compute machine set by running the following command:
    ```terminal
    $ oc edit machineset <machine_set_name_1> -n openshift-machine-api
    ```
1.  Configure the compute machine set to use the first failure domain by updating the following to the `spec.template.spec.providerSpec.value` stanza.

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
      name: <machine_set_name_1>
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
1.  Note the value of `spec.replicas`, because you need it when scaling the compute machine set to apply the changes.
1.  Save your changes.
1.  List the machines that are managed by the updated compute machine set by running the following command:
    ```terminal
    $ oc get -n openshift-machine-api machines \
      -l machine.openshift.io/cluster-api-machineset=<machine_set_name_1>
    ```
    ```text title="Example output"
    NAME                        PHASE     TYPE   REGION    ZONE                 AGE
    <machine_name_original_1>   Running   AHV    Unnamed   Development-STS   4h
    <machine_name_original_2>   Running   AHV    Unnamed   Development-STS   4h
    ```
1.  For each machine that is managed by the updated compute machine set, set the `delete` annotation by running the following command:
    ```terminal
    $ oc annotate machine/<machine_name_original_1> \
      -n openshift-machine-api \
      machine.openshift.io/delete-machine="true"
    ```
1.  To create replacement machines with the new configuration, scale the compute machine set to twice the number of replicas by running the following command:
    ```terminal
    $ oc scale --replicas=<twice_the_number_of_replicas> \
      machineset <machine_set_name_1> \
      -n openshift-machine-api
    ```

    For example, if the original number of replicas in the compute machine set is `2`, scale the replicas to `4`.
1.  List the machines that are managed by the updated compute machine set by running the following command:
    ```terminal
    $ oc get -n openshift-machine-api machines -l machine.openshift.io/cluster-api-machineset=<machine_set_name_1>
    ```

    When the new machines are in the `Running` phase, you can scale the compute machine set to the original number of replicas.
1.  To remove the machines that were created with the old configuration, scale the compute machine set to the original number of replicas by running the following command:
    ```terminal
    $ oc scale --replicas=<original_number_of_replicas> \
      machineset <machine_set_name_1> \
      -n openshift-machine-api
    ```

    For example, if the original number of replicas in the compute machine set was `2`, scale the replicas to `2`.
1.  As required, continue to modify machine sets to reference the additional failure domains that are available to the deployment.