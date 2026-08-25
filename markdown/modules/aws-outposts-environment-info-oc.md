{%- set _mod_docs_content_type = "PROCEDURE" %}
# Obtaining information from your {{ product_title }} cluster {id="aws-outposts-environment-info-oc_{{ context }}"}

You can use the {{ oc_first }} to obtain information from your {{ product_title }} cluster. {._abstract}


:::tip

You might find it convenient to store some or all of these values as environment variables by using the `export` command.

:::


**Prerequisites**

*   You have installed an {{ product_title }} cluster into a custom VPC on AWS.
*   You have access to the cluster using an account with `cluster-admin` permissions.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  List the infrastructure ID for the cluster by running the following command. Retain this value.
    ```terminal
    $ oc get -o jsonpath='{.status.infrastructureName}{"\n"}' infrastructures.config.openshift.io cluster
    ```
1.  Obtain details about the compute machine sets that the installation program created by running the following commands:
    1.  List the compute machine sets on your cluster:
        ```terminal
        $ oc get machinesets.machine.openshift.io -n openshift-machine-api
        ```
        ```text title="Example output"
        NAME                           DESIRED   CURRENT   READY   AVAILABLE   AGE
        <compute_machine_set_name_1>   1         1         1       1           55m
        <compute_machine_set_name_2>   1         1         1       1           55m
        ```
    1.  Display the Amazon Machine Image (AMI) ID for one of the listed compute machine sets. Retain this value.
        ```terminal
        $ oc get machinesets.machine.openshift.io <compute_machine_set_name_1> \
          -n openshift-machine-api \
          -o jsonpath='{.spec.template.spec.providerSpec.value.ami.id}'
        ```
    1.  Display the subnet ID for the AWS VPC cluster. Retain this value.
        ```terminal
        $ oc get machinesets.machine.openshift.io <compute_machine_set_name_1> \
          -n openshift-machine-api \
          -o jsonpath='{.spec.template.spec.providerSpec.value.subnet.id}'
        ```