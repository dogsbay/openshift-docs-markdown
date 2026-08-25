{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually updating the boot image on an {{ gcp_short }} cluster {id="mco-update-boot-images-gcp_{{ context }}"}

You can manually update the boot image for your {{ gcp_first }} cluster by configuring your machine sets to use the latest {{ product_title }} image as the boot image to ensure that new nodes can scale up properly. {._abstract}

Use the following procedure to create environment variables that facilitate running the required commands, identify the correct boot image to use as the new boot image, and modify your machine sets to use that image.

{% if not openshift_dedicated %}
The process differs for clusters that use a default {{ op_system_first }} image, clusters that use a custom {{ op_system_first }} image from the {{ gcp_short }} Marketplace, and user-provisioned infrastructure clusters. The following procedure helps determine which type of cluster you have.

For user-provisioned infrastructure {{ gcp_short }} clusters, which typically have no Machine API compute machine sets, you can provision new nodes based on the new boot image by updating the underlying {{ gcp_short }} infrastructure with the new boot image, such as instance templates, Deployment Manager templates, or Terraform configuration. For more information, see "Creating additional worker machines in {{ gcp_short }}".
{% endif %}


:::note

For clusters that use a default {{ op_system_first }} image, you can configure the cluster to automatically update the boot image each time the cluster is updated. If you are using the following procedure, ensure that automatic boot image updates are disabled and skew enforcement is in manual mode. For more information, see "Boot image management" and "Boot image skew enforcement".

:::


**Prerequisites**

*   You have completed the general boot image prerequisites as described in the "Prerequisites" section of the [{{ product_title }} Boot Image Updates knowledgebase article](https://access.redhat.com/articles/7053165#prerequisites-2).
*   You have installed the {{ oc_first }}.
*   You have set boot image skew enforcement to the manual or none mode. For more information, see "Configuring boot image skew enforcement".  
*   You have disabled boot image management for the cluster. For more information, see "Disabling boot image management".

{% if not openshift_dedicated %}
*   For a cluster that uses a default {{ op_system }} image, ensure that your cluster meets the following additional prerequisites: 
    *   You have downloaded the latest version of the {{ product_title }} installation program, openshift-install, from the {{ cluster_manager_url }}. For more information, see "Obtaining the installation program."
    *   You have installed the [`jq`](https://jqlang.github.io/jq/) program.
*   For a user-provisioned infrastructure cluster, ensure that your cluster meets the following additional prerequisites: 
    *   You have downloaded the latest version of the {{ product_title }} installation program from the {{ cluster_manager_url }}. For more information, see "Obtaining the installation program."
    *   You have installed the [{{ gcp_short }} CLI](https://cloud.google.com/sdk/docs/install).
    *   You have created a {{ gcp_short }} service account.
{% endif %}

**Procedure**

1.  Determine which image in the machine set is the boot image and set the value in an environment variable:
    1.  Set the boot image value in an environment variable by running the following command:
        ```terminal
        $ export BOOT_DISK_INDEX=$(oc get machineset -n openshift-machine-api -o json | \
          jq '.items[0].spec.template.spec.providerSpec.value.disks | map(.boot == true) | index(true)')
        ```
    1.  Display the contents of the `BOOT_DISK_INDEX` environment variable by running the following command:
        ```terminal
        $ echo $BOOT_DISK_INDEX
        ```
        ```terminal title="Example output"
        0
        ```

        If the output for the `BOOT_DISK_INDEX` environment variable is `null`, none of the disks in the machine set has the `boot` field explicitly set. In this case, the boot disk is typically the first disk. 
        ```terminal title="Example null output"
        null
        ```
    1.  If the  `BOOT_DISK_INDEX` output is `null`, set the boot image to the first image by running the following command:
        ```terminal
        $ export BOOT_DISK_INDEX=0
        ```

{% if not openshift_dedicated %}
1.  Determine if your cluster uses a default {{ op_system }} image or a GCP Marketplace {{ op_system }} image from the {{ gcp_short }} Marketplace, or is a user-provisioned infrastructure cluster:
    1.  Obtain the name of the current boot image and set the name as an environment variable by running the following command:
        ```terminal
        $ export CURRENT_IMAGE=$(oc get machineset -n openshift-machine-api -o json | \
          jq -r ".items[0].spec.template.spec.providerSpec.value.disks[${BOOT_DISK_INDEX}].image")
        ```

        `BOOT_DISK_INDEX` is the environment variable you created in a previous step.
    1.  View the name of the image by running the following command:
        ```terminal
        $ echo $CURRENT_IMAGE
        ```
        ```terminal title="Example output"
        projects/rhcos-cloud/global/images/rhcos-416-94-202510081640-0-gcp-x86-64
        ```
    1.  Compare the prefix of the image name to the entries in the following table:
        | Current image prefix | Variant |
        | --- | --- |
        | `projects/rhcos-cloud/global/images/` | Default |
        | `projects/redhat-marketplace-public/global/images/` | GCP Marketplace {{ op_system }} image |
        | No machine set present/custom prefix | User-provisioned infrastructure |


        Default {{ op_system }} clusters use images from the `rhcos-cloud` project in the `rhcos-<version>-<platform>-<arch>` format.

        GCP Marketplace {{ op_system }} clusters use images from the `redhat-marketplace-public` project in the `redhat-coreos-<offering>-<version>-<arch>-<date>` format.

        :::note

        The following images are the latest {{ gcp_short }} Marketplace images for the {{ product_title }}:


        {{ product_title }}
        :   `redhat-coreos-ocp-413-x86-64-202305021736`

        {{ opp }}
        :   `redhat-coreos-opp-413-x86-64-202305021736`

        {{ oke }}
        :   `redhat-coreos-oke-413-x86-64-202305021736`


            Red Hat has not published Marketplace images for {{ product_title }} later than these {{ product_title }} 4.13 images. If the current boot image in your cluster matches one of the listed images, no further action is necessary.
        
        :::

{% endif %}
{% if not openshift_dedicated %}
1.  Obtain the name of the new boot image by using one of the following steps, depending upon your cluster:
    *   For a cluster that uses a default {{ op_system }} image, perform the following steps:
        1.  Set an environment variable with your cluster architecture by running the following command:
            ```terminal
            $ export ARCH=<architecture_type>
            ```

            Replace `<architecture_type>` with one of the following values: 
            *   Specify `aarch64` for the AArch64 or ARM64 architecture.
            *   Specify `ppc64le` for the {{ ibm_power_name }} (ppc64le) architecture.
            *   Specify `s390x` for the {{ ibm_z_name }} and {{ ibm_linuxone_name }} (s390x) architecture.
            *   Specify `x86_64` for the x86_64 or AMD64 architecture.

            You can find the architecture as a label in any `MachineSet` object.
            ```terminal title="Example machine set with an architecture label"
            apiVersion: machine.openshift.io/v1beta1
            kind: MachineSet
            metadata:
              annotations:
                capacity.cluster-autoscaler.kubernetes.io/labels: kubernetes.io/arch=amd64
            # ...
            ```
        1.  Set an environment variable with the name of the new boot image by running the following command:
            ```terminal
            $ export GCP_IMAGE=$(openshift-install coreos print-stream-json | jq -r ".architectures.\"${ARCH}\".images.gcp.name")
            ```

            `ARCH` is the environment variable you created in a previous step.
        1.  Set an environment variable with the {{ gcp_short }} project of the new boot image by running the following command:
            ```terminal
            $ export GCP_PROJECT=$(openshift-install coreos print-stream-json | jq -r ".architectures.\"${ARCH}\".images.gcp.project")
            ```

            `ARCH` is the environment variable you created in a previous step.
        1.  View the {{ op_system_first }} version of the new boot image by running the following command:
            ```terminal
            $ openshift-install coreos print-stream-json | jq -r ".architectures.\"${ARCH}\".images.gcp.release"
            ```
            ```terminal title="Example output"
            9.6.20251212-1
            ```

            Make note of the {{ op_system }} version for later use.
    *   For a cluster that uses a GCP Marketplace {{ op_system }} image that is earlier than the 4.13 images listed above, perform the following steps:
        1.  Set an environment variable with the name of the new boot image by running the following command:
            ```terminal
            $ export GCP_IMAGE=<image_name>
            ```

            Replace `<image_name>` with one of the following values: 
            *   Specify `redhat-coreos-ocp-413-x86-64-202305021736` for an {{ product_title }} cluster. 
            *   Specify `redhat-coreos-opp-413-x86-64-202305021736` for an {{ opp }} cluster. 
            *   Specify `redhat-coreos-oke-413-x86-64-202305021736` for an {{ oke }} cluster. 
        1.  Set an environment variable with the {{ gcp_short }} project of the new boot image by running the following command:
            ```terminal
            $ export GCP_PROJECT=redhat-marketplace-public
            ```
    *   For a user-provisioned infrastructure cluster, perform the following steps:
        1.  Set an environment variable with your cluster architecture by running the following command:
            ```terminal
            $ export ARCH=<architecture_type>
            ```

            Replace `<architecture_type>` with one of the following values: 
            *   Specify `aarch64` for the AArch64 or ARM64 architecture.
            *   Specify `ppc64le` for the {{ ibm_power_name }} (ppc64le) architecture.
            *   Specify `s390x` for the {{ ibm_z_name }} and {{ ibm_linuxone_name }} (s390x) architecture.
            *   Specify `x86_64` for the x86_64 or AMD64 architecture.
        1.  Set an environment variable with the name of the new boot image by running the following command:
            ```terminal
            $ export GCP_IMAGE=$(openshift-install coreos print-stream-json | jq -r ".architectures.\"${ARCH}\".images.gcp.name")
            ```

            `ARCH` is the environment variable you created in a previous step.
        1.  Set an environment variable with the {{ gcp_short }} project of the new boot image in your cluster by running the following command:
            ```terminal
            $ export GCP_PROJECT=$(openshift-install coreos print-stream-json | jq -r ".architectures.\"${ARCH}\".images.gcp.project")
            ```

            `ARCH` is the environment variable you created in a previous step.

            If the default {{ op_system }} image is not accessible in your environment, for example in a restricted or disconnected environment, you could download the new boot image tar file and upload the file as a custom image to your own {{ gcp_short }} project before updating your {{ gcp_short }} instance templates.

            Update your {{ gcp_short }} instance template(s) to reference the new image, then create new instances from the updated template. The exact steps depend on how your infrastructure was provisioned. For more information, see "Creating additional worker machines in {{ gcp_short }}".

            After creating the new instances, you can proceed to the verification steps, unless your user-provisioned infrastructure cluster has any Machine API machine sets, such as for Day-2 scaling. You can update those machine sets as described in the following steps.
{% endif %}
{% if openshift_dedicated %}
1.  Set an environment variable with the name of the new boot image by running the following command:
    ```terminal
    $ export GCP_IMAGE=<osd_image_name>
    ```

    Replace `osd_image_name` with the name of the new boot image. 

    :::note

    The `redhat-marketplace-public` project does not grant image list permissions to external users. You must obtain the {{ product_dedicated }} image name Red Hat from support or release documentation.
    
    :::

1.  Set an environment variable with the project of the new boot image by running the following command:
    ```terminal
    $ export GCP_PROJECT=redhat-marketplace-public
    ```
{% endif %}
1.  Update each of your compute machine sets to include the new boot image:
    1.  Obtain the name of your machine sets for use in the following step by running the following command:
        ```terminal
        $ oc get machineset -n openshift-machine-api
        ```
        ```terminal title="Example output"
        NAME                                 DESIRED   CURRENT   READY   AVAILABLE   AGE
        ci-ln-xw7zmyt-72292-x7nqv-worker-a   1         1         1       1           53m
        ci-ln-xw7zmyt-72292-x7nqv-worker-b   1         1         1       1           53m
        ci-ln-xw7zmyt-72292-x7nqv-worker-c   1         1         1       1           53m
        ```
    1.  Edit a machine set to update the `image` field in the `providerSpec` stanza to add your boot image by running the following command:
        ```terminal
        $ oc patch machineset <machineset-name> -n openshift-machine-api --type json \
          -p '[{"op": "replace", "path": "/spec/template/spec/providerSpec/value/disks/'${BOOT_DISK_INDEX}'/image", "value": "projects/'${GCP_PROJECT}'/global/images/'${GCP_IMAGE}'"}]'
        ```

        Replace `<machineset_name>` with the name of your machine set.

        `BOOT_DISK_INDEX`, `GCP_PROJECT`, and `GCP_IMAGE` are environment variables you created in previous steps.
1.  If boot image skew enforcement in your cluster is set to the manual mode, update the version of the new boot image in the `MachineConfiguration` object as described in "Updating the boot image skew enforcement version".

**Verification**

1.  Scale up a machine set to check that the new node is using the new boot image:
    1.  Increase the machine set replicas by one to trigger a new machine by running the following command:
        ```terminal
        $ oc scale --replicas=<count> machineset <machineset_name> -n openshift-machine-api
        ```

        where:

        `<count>`
        :   Specifies the total number of replicas, including any existing replicas, that you want for this machine set.

        `<machineset_name>`
        :   Specifies the name of the machine set to scale.

    1.  Optional: View the status of the machine set as it provisions by running the following command:
        ```terminal
        $ oc get machines.machine.openshift.io -n openshift-machine-api -w
        ```

        It can take several minutes for the machine set to achieve the `Running` state.
    1.  Verify that the new node has been created and is in the `Ready` state by running the following command:
        ```terminal
        $ oc get nodes
        ```
1.  Verify that the new node is using the new boot image by running the following command:
    ```terminal
    $ oc debug node/<new_node> -- chroot /host cat /sysroot/.coreos-aleph-version.json
    ```

    Replace `<new_node>` with the name of your new node.
    ```terminal title="Example output"
    {
    # ...
        "ref": "docker://ostree-image-signed:oci-archive:/rhcos-9.6.20251212-1-ostree.x86_64.ociarchive",
        "version": "9.6.20251212-1"
    }
    ```

    where:

    `version`
    :   Specifies the boot image version.

1.  Verify that the boot image is the same the {{ op_system }} version as the image you noted in a previous step by running the following command:
    ```terminal
    $ echo $GCP_IMAGE
    ```

    `RHCOS_URL` is the environment variable you created in a previous step.
    ```terminal title="Example output"
    https://rhcos.mirror.openshift.com/art/storage/prod/streams/rhel-9.6/builds/9.6.20251212-1/x86_64/rhcos-9.6.20251212-1-nutanix.x86_64.qcow2
    ```