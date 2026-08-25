{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying Cluster API compute machines by using a Machine API compute machine set {id="deploying-capi-machines-via-mapi-machine-sets_{{ context }}"}

You can configure a Machine API compute machine set to deploy Cluster API compute machines.
With this process, you can test the Cluster API compute machine creation workflow without creating and scaling a Cluster API compute machine set. {._abstract}

A Machine API compute machine set with this configuration creates nonauthoritative Machine API compute machines that use the Cluster API as authoritative.
The two-way synchronization controller then creates corresponding authoritative Cluster API machines that provision on the underlying infrastructure.

{%- set FeatureName = "Deploying Cluster API compute machines by using a Machine API compute machine set" %}
{% include "./snippets/technology-preview.md" %}

**Prerequisites**

*   You have deployed an {{ product_title }} cluster on a supported infrastructure type.
*   You have enabled the use of the Cluster API.
*   You have enabled the `MachineAPIMigration` feature gate in the `TechPreviewNoUpgrade` feature set.
*   You have access to the cluster using an account with `cluster-admin` permissions.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  List the Machine API compute machine sets in your cluster by running the following command:
    ```terminal
    $ oc get machineset.machine.openshift.io -n openshift-machine-api
    ```
1.  Edit the resource specification by running the following command:
    ```terminal
    $ oc edit machineset.machine.openshift.io <machine_set_name> \
      -n openshift-machine-api
    ```

    Replace `<machine_set_name>` with the name of the Machine API compute machine set that you want to configure to deploy Cluster API compute machines.
1.  In the resource specification, update the value of the `spec.template.spec.authoritativeAPI` field:
    ```yaml
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    metadata:
      [...]
      name: <machine_set_name>
      [...]
    spec:
      authoritativeAPI: MachineAPI
      [...]
      template:
        [...]
        spec:
          authoritativeAPI: ClusterAPI
    status:
      authoritativeAPI: MachineAPI
      [...]
    ```

    where:

    `spec.authoritativeAPI`
    :   Specifies the unconverted value for the Machine API compute machine set. 
        Do not change the value in this part of the specification.

    `spec.template.spec.authoritativeAPI`
    :   Specifies the authoritative API for the machine set. 
        To configure the compute machine set to deploy Cluster API compute machines, set this value to `ClusterAPI`.

    `status.authoritativeAPI`
    :   Specifies the current value for the Machine API compute machine set. 
        Do not change the value in this part of the specification.

**Verification**

1.  List the machines that are managed by the updated compute machine set by running the following command:
    ```terminal
    $ oc get machines.machine.openshift.io \
      -n openshift-machine-api \
      -l machine.openshift.io/cluster-api-machineset=<machine_set_name>
    ```
1.  To verify that a machine created by the updated machine set has the correct configuration, examine the `status.authoritativeAPI` field in the CR for one of the new machines by running the following command:
    ```terminal
    $ oc describe machines.machine.openshift.io <machine_name> \
      -n openshift-machine-api
    ```

    For a Cluster API compute machine, the value of the field is `ClusterAPI`.