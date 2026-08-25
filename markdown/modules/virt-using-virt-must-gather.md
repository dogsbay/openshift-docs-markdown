{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the must-gather tool for {{ VirtProductName }} {id="virt-using-virt-must-gather_{{ context }}"}

You can collect data about {{ VirtProductName }} resources by running the `must-gather` command with the {{ VirtProductName }} image. {._abstract}

The default data collection includes information about the following resources:

*   {{ VirtProductName }} Operator namespaces, including child objects
*   {{ VirtProductName }} custom resource definitions
*   Namespaces that contain virtual machines
*   Basic virtual machine definitions

You can add optional environment details and scripts to the `must-gather` command to collect additional information. Use these environment variables and scripts to collect data about specific VMs, images, or instance types.

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

*   Run the `must-gather` command to collect data about {{ VirtProductName }}:
    ```terminal
    $ oc adm must-gather \
      --image=registry.redhat.io/container-native-virtualization/cnv-must-gather-rhel9:v{{ HCOVersion }} \
      -- /usr/bin/gather
    ```

    :::note

    You can also collect `must-gather` logs for all Operators and products on your cluster by running following command:

    ```terminal
    $ oc adm must-gather --all-images
    ```
    
    :::

    1.  Run the following command to modify the number of processes running in parallel when collecting `must-gather` data:
        ```terminal
        $ oc adm must-gather \
          --image=registry.redhat.io/container-native-virtualization/cnv-must-gather-rhel9:v{{ HCOVersion }} \
          -- PROS=<number> /usr/bin/gather
        ```

        `PROS` defines the number of parallel processes running to collect data. The default number of processes is 5. Increasing the number of processes may result in faster data collection, but uses more resources. Increasing the maximum number of parallel processes is not recommended.
    1.  Run the following command to collect detailed information for a specific VM in a specific namespace:
        ```terminal
        $ oc adm must-gather \
          --image=registry.redhat.io/container-native-virtualization/cnv-must-gather-rhel9:v{{ HCOVersion }} \
          -- NS=<namespace name> VM=<VM name> /usr/bin/gather --vms_details
        ```

        `NS` is the environment variable for `namespace`. It is mandatory when using the `VM` environment variable.
    1.  Run the following command to collect image, image-stream, and image-stream-tags information from the cluster:
        ```terminal
        $ oc adm must-gather \
         --image=registry.redhat.io/container-native-virtualization/cnv-must-gather-rhel9:v{{ HCOVersion }} \
         /usr/bin/gather --images
        ```
    1.  Run the following command to collect information about instance types from the cluster:
        ```terminal
        $ oc adm must-gather \
         --image=registry.redhat.io/container-native-virtualization/cnv-must-gather-rhel9:v{{ HCOVersion }} \
         /usr/bin/gather --instancetypes
        ```