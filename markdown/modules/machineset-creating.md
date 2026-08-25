{% if context == "creating-windows-machineset-aws" %}
{%- set win = true -%}
{% endif %}
{% if context == "creating-windows-machineset-azure" %}
{%- set win = true -%}
{% endif %}
{% if context == "creating-machineset-azure-stack-hub" %}
{%- set ash = true -%}
{% endif %}
{% if context == "creating-windows-machineset-vsphere" %}
{%- set win = true -%}
{% endif %}
{% if context == "creating-machineset-vsphere" %}
{%- set vsphere = true -%}
{% endif %}
{% if context == "aws-compute-edge-zone-tasks" %}
{%- set post_aws_zones = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a compute machine set {id="machineset-creating_{{ context }}"}

To dynamically manage machine compute resources, you can create your own compute machine sets in addition to the compute machine sets created by the installation program. Use the {{ product_title }} CLI to automate node provisioning. {._abstract}

{% if vsphere %}

:::note

Clusters that are installed with user-provisioned infrastructure have a different networking stack than clusters with infrastructure that is provisioned by the installation program. As a result of this difference, automatic load balancer management is unsupported on clusters that have user-provisioned infrastructure. For these clusters, a compute machine set can only create `worker` and `infra` type machines.

:::

{% endif %}

**Prerequisites**

*   Deploy an {{ product_title }} cluster.
*   Install the OpenShift CLI (`oc`).
*   Log in to `oc` as a user with `cluster-admin` permission.
{%- if vsphere %}
*   Have the necessary permissions to deploy VMs in your vCenter instance and have the required access to the datastore specified.
*   If your cluster uses user-provisioned infrastructure, you have satisfied the specific Machine API requirements for that configuration.
{% endif %}
{% if ash %}
*   Create an availability set in which to deploy Azure Stack Hub compute machines.
{% endif %}
{% if win %}
*   In disconnected environments, the image specified in the `MachineSet` custom resource (CR) must have the [OpenSSH server v0.0.1.0 installed](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=powershell#install-openssh-for-windows).
{% endif %}

**Procedure**

1.  Create a new YAML file that contains the compute machine set custom resource (CR) sample and is named `<file_name>.yaml`.
{%- if not ash %}

    Ensure that you set the `<clusterID>` and `<role>` parameter values.
{% endif %}
{% if ash %}
    Ensure that you set the `<availabilitySet>`, `<clusterID>`, and `<role>` parameter values.
{% endif %}
1.  Optional: If you are not sure which value to set for a specific field, you can check an existing compute machine set from your cluster.
    1.  To list the compute machine sets in your cluster, run the following command:
        ```terminal
        $ oc get machinesets -n openshift-machine-api
        ```

        The following is example output:
        ```terminal
        NAME                                DESIRED   CURRENT   READY   AVAILABLE   AGE
        agl030519-vplxk-worker-us-east-1a   1         1         1       1           55m
        agl030519-vplxk-worker-us-east-1b   1         1         1       1           55m
        agl030519-vplxk-worker-us-east-1c   1         1         1       1           55m
        agl030519-vplxk-worker-us-east-1d   0         0                             55m
        agl030519-vplxk-worker-us-east-1e   0         0                             55m
        agl030519-vplxk-worker-us-east-1f   0         0                             55m
        ```
    1.  To view values of a specific compute machine set custom resource (CR), run the following command:
        ```terminal
        $ oc get machineset <machineset_name> \
          -n openshift-machine-api -o yaml
        ```

        The following is example output:
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

        `metadata.labels.machine.openshift.io/cluster-api-cluster`
        :   Specifies the cluster infrastructure ID.

        `metadata.labels.name`
        :   Specifies a default node label.

        :::note

        For clusters that have user-provisioned infrastructure, a compute machine set can only create `worker` and `infra` type machines.
        
        :::


        `spec.template.metadata.spec.providerSpec`
        :   Specifies the values of the compute machine set CR. The values are platform-specific. For more information about `<providerSpec>` parameters in the CR, see the sample compute machine set CR configuration for your provider.
{%- if vsphere %}
        1.  If you are creating a compute machine set for a cluster that has user-provisioned infrastructure, note the following important values:
        ```yaml title="Example vSphere providerSpec values"
        apiVersion: machine.openshift.io/v1beta1
        kind: MachineSet
        ...
        template:
          ...
          spec:
            providerSpec:
              value:
                apiVersion: machine.openshift.io/v1beta1
                credentialsSecret:
                  name: vsphere-cloud-credentials
                dataDisks:
                - name: <disk_name>
                  provisioningMode: <mode>
                  sizeGiB: 10
                diskGiB: 120
                kind: VSphereMachineProviderSpec
                memoryMiB: 16384
                network:
                  devices:
                    - networkName: "<vm_network_name>"
                numCPUs: 4
                numCoresPerSocket: 4
                snapshot: ""
                template: <vm_template_name>
                userDataSecret:
                  name: worker-user-data
                workspace:
                  datacenter: <vcenter_data_center_name>
                  datastore: <vcenter_datastore_name>
                  folder: <vcenter_vm_folder_path>
                  resourcepool: <vsphere_resource_pool>
                  server: <vcenter_server_address>
        ```

        where:

    `vsphere-cloud-credentials`
    :   Specifies the name of the secret in the `openshift-machine-api` namespace that contains the required vCenter credentials.

    `<disk_name>`
    :   Specifies the collection of data disk definitions. For more information, see "Configuring data disks by using machine sets".

    `<vm_template_name>`
    :   Specifies the name of the {{ op_system }} VM template for your cluster that was created during installation.

    `worker-user-data`
    :   Specifies the name of the secret in the `openshift-machine-api` namespace that contains the required Ignition configuration credentials.

    `<vcenter_server_address>`
    :   Specifies the IP address or fully qualified domain name (FQDN) of the vCenter server.

{% endif %}

1.  Create a `MachineSet` CR by running the following command:
    ```terminal
    $ oc create -f <file_name>.yaml
    ```

{% if context == "creating-machineset-aws" %}
1.  If you need compute machine sets in other availability zones, repeat this process to create more compute machine sets.
{% endif %}

**Verification**

*   View the list of compute machine sets by running the following command:
    ```terminal
    $ oc get machineset -n openshift-machine-api
    ```

    The following is example output:
    ```terminal
{%- if win or post_aws_zones %}
    NAME                                       DESIRED   CURRENT   READY   AVAILABLE   AGE
{%- if win %}
    agl030519-vplxk-windows-worker-us-east-1a  1         1         1       1           11m
{% endif %}
{% if post_aws_zones %}
    agl030519-vplxk-edge-us-east-1-nyc-1a      1         1         1       1           11m
{%- endif %}
    agl030519-vplxk-worker-us-east-1a          1         1         1       1           55m
    agl030519-vplxk-worker-us-east-1b          1         1         1       1           55m
    agl030519-vplxk-worker-us-east-1c          1         1         1       1           55m
    agl030519-vplxk-worker-us-east-1d          0         0                             55m
    agl030519-vplxk-worker-us-east-1e          0         0                             55m
    agl030519-vplxk-worker-us-east-1f          0         0                             55m
{% endif %}
{% if not (win or post_aws_zones) %}
    NAME                                DESIRED   CURRENT   READY   AVAILABLE   AGE
    agl030519-vplxk-infra-us-east-1a    1         1         1       1           11m
    agl030519-vplxk-worker-us-east-1a   1         1         1       1           55m
    agl030519-vplxk-worker-us-east-1b   1         1         1       1           55m
    agl030519-vplxk-worker-us-east-1c   1         1         1       1           55m
    agl030519-vplxk-worker-us-east-1d   0         0                             55m
    agl030519-vplxk-worker-us-east-1e   0         0                             55m
    agl030519-vplxk-worker-us-east-1f   0         0                             55m
{%- endif %}
    ```

    When the new compute machine set is available, the `DESIRED` and `CURRENT` values match. If the compute machine set is not available, wait a few minutes and run the command again.

{% if post_aws_zones %}
*   Optional: To check nodes that were created by the edge machine, run the following command:
    ```terminal
    $ oc get nodes -l node-role.kubernetes.io/edge
    ```
    ```terminal title="Example output"
    NAME                           STATUS   ROLES         AGE    VERSION
    ip-10-0-207-188.ec2.internal   Ready    edge,worker   172m   v1.25.2+d2e245f
    ```
{% endif %}

{% if context == "creating-machineset-vsphere" %}
{%- set vsphere = false -%}
{% endif %}
{% if context == "creating-windows-machineset-aws" %}
{%- set win = false -%}
{% endif %}
{% if context == "creating-machineset-azure-stack-hub" %}
{%- set ash = false -%}
{% endif %}
{% if context == "creating-windows-machineset-azure" %}
{%- set win = false -%}
{% endif %}
{% if context == "creating-windows-machineset-vsphere" %}
{%- set win = false -%}
{% endif %}
{% if context == "aws-compute-edge-zone-tasks" %}
{%- set post_aws_zones = false -%}
{% endif %}