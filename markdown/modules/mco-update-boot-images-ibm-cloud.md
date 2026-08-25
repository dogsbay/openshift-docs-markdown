{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually updating the boot image on an {{ ibm_cloud_name }} cluster {id="mco-update-boot-images-ibm-cloud_{{ context }}"}

For an {{ ibm_cloud_title }} cluster, you can manually update the boot image for the compute nodes in your cluster by configuring your machine sets to use the latest {{ product_title }} image as the boot image to help ensure any new nodes can scale up properly. {._abstract}


:::note

The standard boot image management feature is not supported for {{ ibm_cloud_title }} clusters.

:::


The following procedure, which includes steps to create environment variables that facilitate running the required commands, shows how to obtain {{ ibm_cloud_title }} authentication credentials, download a boot image, upload that image to the {{ ibm_cloud_title }} image service, and modify your compute machine sets to use the new boot image.

This procedure uses the default {{ ibm_cloud_title }} Cloud Object Storage (COS) bucket in your cluster, which was created during cluster installation. Each COS bucket has a specific Cloud Resource Name (CRN), which the {{ ibm_cloud_title }} CLI uses the to select the correct COS bucket. The following procedure shows how to obtain the CRN for the default COS bucket. For more information on the CRN, see [Cloud Resource Names in the {{ ibm_cloud_title }} documentation](https://cloud.ibm.com/docs/account?topic=account-crn).

**Prerequisites**

*   You have completed the general boot image prerequisites as described in the "Prerequisites" section of the [{{ product_title }} Boot Image Updates knowledgebase article](https://access.redhat.com/articles/7053165#prerequisites-2).
*   You have downloaded the latest version of the {{ product_title }} installation program, openshift-install, from the {{ cluster_manager_url }}. For more information, see "Obtaining the installation program."
*   You have the {{ oc_first }} installed.
*   You have the [{{ ibm_cloud_title }} CLI](https://cloud.ibm.com/docs/cli?topic=cli-getting-started) installed.
*   You have installed the {{ ibm_cloud_title }} Virtual Private Cloud (VPC) CLI plugin.
*   You have installed the {{ ibm_cloud_title }} Object Storage plugin.

**Procedure**

1.  Obtain the resource group and region from the `infrastructure` object and set the values in an environment variable by running the following commands:
    ```terminal
    $ export RESOURCE_GROUP=$(oc get infrastructure cluster -o jsonpath='{.status.infrastructureName}')
    ```
    ```terminal
    $ export REGION=$(oc get infrastructure cluster -o jsonpath='{.status.platformStatus.ibmcloud.location}')
    ```
1.  Generate an {{ ibm_cloud_title }} API key and log in to your {{ ibm_cloud_title }}:
    1.  Follow the instructions in [Creating your {{ ibm_cloud_title }} API key in the {{ ibm_cloud_title }}](https://www.ibm.com/docs/en/masv-and-l/cd?topic=cli-creating-your-cloud-api-key) documentation to generate the API key.

        To ensure that the key has the appropriate permissions, you must use the same {{ ibm_cloud_title }} account used to create the {{ product_title }} cluster when generating the key.
    1.  Set the API key in an environment variable by running the following command:
        ```terminal
        $ export IBM_API_KEY=<Your_IBM_Cloud_API_Key>
        ```
    1.  Log in to your {{ ibm_cloud_title }} by running the following command:
        ```terminal
        $ ibmcloud login --apikey ${IBM_API_KEY} -r ${REGION} -g ${RESOURCE_GROUP}
        ```

        `IBM_API_KEY`, `REGION`, and `RESOURCE_GROUP` are environment variables you created in previous steps.
        ```terminal title="Example output"
        API endpoint: https://cloud.ibm.com
        Authenticating...
        Retrieving API key token...
        OK

        Targeted account OpenShift-QE (xxxxxxxxxxxxxxxx) <-> xxxxxx

        Targeted resource group xxxxxxx-ibm3h-9pbgg

        Targeted region eu-gb

                                                                                        
        API endpoint:     https://cloud.ibm.com
        Region:           eu-gb
        User:             xxxxx
        Account:          xxxxx
        Resource group:   xxxxx
        ```
1.  Obtain the URL of the {{ op_system }} image to use as the boot image and set the location in an environment variable by running one of the following commands, based on your cluster architecture:
    *   Linux (x86_64, amd64):
        ```terminal
        $ export RHCOS_URL=$(openshift-install coreos print-stream-json | jq -r '.architectures.x86_64.artifacts.ibmcloud.formats["qcow2.gz"].disk.location')
        ```
    *   Linux on {{ ibm_z_name }} and {{ ibm_linuxone_name }} (s390x):
        ```terminal
        export RHCOS_URL=$(openshift-install coreos print-stream-json | jq -r '.architectures.s390x.artifacts.ibmcloud.formats["qcow2.gz"].disk.location')
        ```
1.  Obtain the boot image:
    1.  Download the image by using the following command: 
        ```terminal
        $ curl -L -o /tmp/rhcos-new.qcow2.gz "${RHCOS_URL}"
        ```

        `RHCOS_URL` is the environment variable you created in a previous step.
    1.  Decompress the downloaded image by running the following command:
        ```terminal
        $ gunzip /tmp/rhcos-new.qcow2.gz
        ```
1.  Upload the boot image to the default {{ ibm_cloud_title }} Cloud Object Storage (COS) bucket:
    1.  Obtain the CRN for your COS bucket and set the CRN in an environment variable by running the following command:
        ```terminal
        $ export COS_CRN=$(ibmcloud resource service-instance "${RESOURCE_GROUP}-cos" --output json | jq -r '.[0].crn') 
        ```
    1.  Optional: Check that the CRN is correct by running the following command:
        ```terminal
        $ echo ${COS_CRN}
        ```
    1.  Configure the default COS bucket with the CRN by running the following command:
        ```terminal
        $ ibmcloud cos config crn --crn "${COS_CRN}"
        ```

        `COS_CRN` is the environment variable you created in a previous step.
    1.  Upload the boot image to the COS bucket by running the following command:
        ```terminal
        $ ibmcloud cos object-put --bucket "${RESOURCE_GROUP}-vsi-image" --key "rhcos-new.qcow2" --body /tmp/rhcos-new.qcow2 --region "${REGION}"
        ```

        `RESOURCE_GROUP` and `REGION` are environment variables you created in previous steps.
    1.  Optional: Check that image was uploaded to the COS bucket by running the following command:
        ```terminal
        $ ibmcloud cos objects --bucket "${RESOURCE_GROUP}-vsi-image" --region "${REGION}"
        ```

        `RESOURCE_GROUP` and `REGION` are environment variables you created in previous steps.
        ```terminal title="Example output"
        OK
        Found 2 objects in bucket 'xxxxxx-ibm3h-9pbgg-vsi-image':
        ```
    1.  Set an environment variable to create a descriptive name for your boot image:
        ```terminal
        $ export IMAGE_NAME="<descriptive_image_name>"
        ```

        Setting a descriptive name for your boot image, such as using the {{ op_system_first }} version number in the image name, makes it easier to track which version is currently deployed if you update the cluster in the future.
    1.  Create a custom image for your {{ ibm_cloud_title }} Virtual Private Cloud (VPC) from the uploaded boot image by running one of the following commands, based on your cluster architecture:
        *   Linux (x86_64, amd64):
            ```terminal
            $ ibmcloud is image-create "${RESOURCE_GROUP}-${IMAGE_NAME}" --file "cos://${REGION}/${RESOURCE_GROUP}-vsi-image/rhcos-new.qcow2" --os-name rhel-coreos-stable-amd64 --resource-group-name "${RESOURCE_GROUP}"
            ```

            You must set  the `--os-name` argument to `rhel-coreos-stable-amd64` as shown. This parameter configures several {{ op_system_first }} default values that are required.

            `RESOURCE_GROUP`, `IMAGE_NAME`, and `REGION` are environment variables you created in previous steps.
        *   Linux on {{ ibm_z_name }} and {{ ibm_linuxone_name }} (s390x):
            ```terminal
            $ ibmcloud is image-create "${RESOURCE_GROUP}-${IMAGE_NAME}" --file "cos://${REGION}/${RESOURCE_GROUP}-vsi-image/rhcos-new.qcow2" --os-name red-8-s390x-byol --resource-group-name "${RESOURCE_GROUP}"
            ```

            You must set  the `--os-name` argument to `red-8-s390x-byol` as shown. This parameter configures several {{ op_system_first }} default values that are required.

            `RESOURCE_GROUP`, `IMAGE_NAME`, and `REGION` are environment variables you created in previous steps.
    1.  Optional: Observe the new image being uploaded until its status changes from `pending` to `available`.
        ```terminal
        $ watch ibmcloud is image "${RESOURCE_GROUP}-${IMAGE_NAME}"
        ```

        `RESOURCE_GROUP` and `IMAGE_NAME` are environment variables you created in previous steps.
1.  Update each of your compute machine sets to include the new boot image:
    1.  Obtain the name of your machine sets for use in the following step by running the following command:
        ```terminal
        $ oc get machineset -n openshift-machine-api
        ```
        ```terminal title="Example output"
        NAME                                 DESIRED   CURRENT   READY   AVAILABLE   AGE
        rhhdrbk-b5564-4pcm9-worker-0         3         3         3       3           123m
        ci-ln-xj96skb-72292-48nm5-worker-d   1         1         1       1           27m
        ```
    1.  Edit a machine set to update the `image` field in the `providerSpec` stanza to add your boot image by running the following command:
        ```terminal
        $ oc patch machineset <machineset-name> -n openshift-machine-api --type merge \
          -p '{"spec":{"template":{"spec":{"providerSpec":{"value":{"image":"'${RESOURCE_GROUP}'-'${IMAGE_NAME}'"}}}}}}'
        ```

        Replace `<machineset_name>` with the name of your machine set.

        `IMAGE_NAME` is the environment variable you created in a previous step.
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
    1.  Verify that the new node has been created and is in the `Ready` state by running the following command.
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

        `<version>`
        :   Specifies the boot image version.

    After you migrate all machine sets to the new boot image, the old boot image is no longer needed. You can remove the old boot image from your COS bucket.