{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a Cluster API machine template {id="capi-creating-machine-template_{{ context }}"}

You can create a provider-specific machine template resource by creating a YAML manifest file and applying it with the {{ oc_first }}. {._abstract}

**Prerequisites**

*   You have deployed an {{ product_title }} cluster.
*   You have enabled the use of the Cluster API.
*   You have access to the cluster using an account with `cluster-admin` permissions.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a YAML file similar to the following example. This procedure uses `<machine_template_resource_file>.yaml` as an example file name.
    ```yaml
    apiVersion: infrastructure.cluster.x-k8s.io/v1beta1
    kind: <machine_template_kind>
    metadata:
      name: <template_name>
      namespace: openshift-cluster-api
    spec:
      template:
        spec:
    ```

    where:


    `kind`
    :   Specifies the machine template kind. This value must match the value for your platform.


        The following values are valid:

        | Cluster infrastructure provider | Value |
        | --- | --- |
        | {{ aws_first }} | `AWSMachineTemplate` |
        | {{ gcp_first }} | `GCPMachineTemplate` |
        | {{ azure_first }} | `AzureMachineTemplate` |
        | {{ rh_openstack_first }} | `OpenStackMachineTemplate` |
        | {{ vmw_first }} | `VSphereMachineTemplate` |
        | Bare metal | `Metal3MachineTemplate` |


    `metadata.name`
    :   Specifies a name for the machine template.


    `spec.template.spec`
    :   Specifies the details for your environment. These parameters are provider specific. 
        For more information, see the sample Cluster API machine template YAML for your provider.
1.  Create the machine template CR by running the following command:
    ```terminal
    $ oc create -f <machine_template_resource_file>.yaml
    ```

**Verification**

*   Confirm that the machine template CR is created by running the following command:
    ```terminal
    $ oc get <machine_template_kind> -n openshift-cluster-api
    ```

    Replace `<machine_template_kind>` with the value that corresponds to your platform.
    ```text title="Example output"
    NAME              AGE
    <template_name>   77m
    ```