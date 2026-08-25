{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a live migration policy by using the CLI {id="virt-configuring-a-live-migration-policy_{{ context }}"}

You can create a live migration policy by using the command line. {._abstract}

KubeVirt applies the live migration policy to selected virtual machines (VMs) by using any combination of labels:

*   VM labels such as `size`, `os`, or `gpu`
*   Project labels such as `priority`, `bandwidth`, or `hpc-workload`

For the policy to apply to a specific group of VMs, all labels on the group of VMs must match the labels of the policy.


:::note

If multiple live migration policies apply to a VM, the policy with the greatest number of matching labels takes precedence.

If multiple policies meet this criteria, the policies are sorted by alphabetical order of the matching label keys, and the first one in that order takes precedence.

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the VM object to which you want to apply a live migration policy, and add the corresponding VM labels.
    1.  Open the YAML configuration of the resource:
        ```terminal
        $ oc edit vm <vm_name>
        ```
    1.  Adjust the required label values in the `.spec.template.metadata.labels` section of the configuration. For example, to mark the VM as a `production` VM for the purposes of migration policies, add the `kubevirt.io/environment: production` line:
        ```yaml
        apiVersion: migrations.kubevirt.io/v1alpha1
        kind: VirtualMachine
        metadata:
          name: <vm_name>
          namespace: default
          labels:
            app: my-app
            environment: production
        spec:
          template:
            metadata:
              labels:
                kubevirt.io/domain: <vm_name>
                kubevirt.io/size: large
                kubevirt.io/environment: production
        # ...
        ```
    1.  Save and exit the configuration.
1.  Configure a `MigrationPolicy` object with the corresponding labels. The following example configures a policy that applies to all VMs that are labeled as `production`:
    ```yaml
    apiVersion: migrations.kubevirt.io/v1alpha1
    kind: MigrationPolicy
    metadata:
      name: <migration_policy>
    spec:
      selectors:
        namespaceSelector:
          hpc-workloads: "True"
          xyz-workloads-type: ""
        virtualMachineInstanceSelector:
          kubevirt.io/environment: "production"
    ```

    where:

    `namespaceSelector`
    :   Specifies the project labels.

    `virtualMachineInstanceSelector`
    :   Specifies the VM labels.
    1.  Create the migration policy by running the following command:
    ```terminal
    $ oc create -f <migration_policy>.yaml
    ```