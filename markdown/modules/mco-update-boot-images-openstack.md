{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually updating the boot image on an {{ rh_openstack }} cluster {id="mco-update-boot-images-openstack_{{ context }}"}

For a {{ rh_openstack_first }} cluster, you can manually update the boot image for your cluster by configuring your machine sets to use the latest {{ product_title }} image as the boot image to help ensure any new nodes can scale up properly. {._abstract}


:::note

The standard boot image management feature is not supported for {{ rh_openstack }} clusters.

:::


The following procedure, which includes steps to create environment variables that facilitate running the required commands, shows how to obtain {{ rh_openstack }} authentication credentials, download a boot image, upload that image to the {{ rh_openstack }} image service (Glance), and modify your worker machine sets to use the new boot image.

This procedure requires the `clouds.yaml` file, which is needed by the OpenStackClient CLI to connect to your {{ rh_openstack }} cloud. If you need to re-create this file, you can get the {{ rh_openstack }} credentials from an {{ product_title }} secret, the name of which you can find in the default compute machine set. You can decrypt this secret and export the credentials to create the `clouds.yaml` file, as described in the following procedure.


:::note

Updating control plane machine sets is not supported in {{ rh_openstack }}.

:::


**Prerequisites**

*   You have completed the general boot image prerequisites as described in the Prerequisites section of [{{ product_title }} Boot Image Updates](https://access.redhat.com/articles/7053165#prerequisites-2).
*   You have downloaded the latest version of the {{ product_title }} installation program, openshift-install, from the {{ cluster_manager_url }}. For more information, see "Obtaining the installation program."
*   You have installed the {{ oc_first }} installed.
*   You have installed the [OpenStackClient ({{ op_system }} documentation)](https://docs.openstack.org/python-openstackclient/latest/).
*   You have installed the [`jq`](https://stedolan.github.io/jq/) program.

**Procedure**

1.  If you need to re-create the `clouds.yaml` file, perform the following steps: 
    1.  Obtain the name of the secret that contains your credentials by running the following command:
        ```terminal
        $ oc get machineset -n openshift-machine-api -o yaml | grep cloudsSecret -A 1
        ```
        ```terminal title="Example output"
        cloudsSecret:
          name: openstack-cloud-credentials
        ```
    1.  Decrypt the secret and add the contents to the `clouds.yaml` file by running the following command:
        ```terminal
        $ oc get secret <secret_name> -n openshift-machine-api -o jsonpath='{.data.clouds\.yaml}' | base64 -d > <file_path>/clouds.yaml
        ```

        Replace `<secret_name>` with the name of the secret, which you obtained in the previous step, and `<file_path>` with the path to the `clouds.yaml` file.  
    1.  Optional: Verify the contents of the `clouds.yaml` file by running the following command:
        ```terminal
        $ cat <file_path>/clouds.yaml
        ```

        Replace `<file_path>` with the path to the `clouds.yaml` file.
        ```terminal title="Example output"
        clouds:
          openstack:
            auth:
              auth_url: https://your-openstack-url:13000
              username: "your-username"
              password: "your-password"
              project_name: "your-project"
              user_domain_name: "Default"
              project_domain_name: "Default"
        ```
1.  Set an environment variable for the location of the `clouds.yaml` file by running the following command:
    ```terminal
    $ export OS_CLIENT_CONFIG_FILE=<file_path>/clouds.yaml
    ```

    Replace `<file_path>` with the path to the `clouds.yaml` file.

    The OpenStackClient CLI uses this environment variable to locate the `clouds.yaml` file.
1.  Obtain the name of your {{ rh_openstack }} cloud from the default compute machine set and set the name in an environment variable by running the following command:
    ```terminal
    $ export CLOUD_NAME=$(oc get machineset -n openshift-machine-api -o jsonpath='{.items[0].spec.template.spec.providerSpec.value.cloudName}')
    ```
1.  Obtain the URL of the {{ op_system }} image you want to use as the boot image and set the location in an environment variable by running one of the following commands, based on cluster architecture:
    *   Linux (x86_64, amd64):
        ```terminal
        $ export RHCOS_URL=$(openshift-install coreos print-stream-json | jq -r \
          '.architectures.x86_64.artifacts.openstack.formats."qcow2.gz".disk.location')
        ```
    *   Linux on {{ ibm_z_name }} and {{ ibm_linuxone_name }} (s390x):
        ```terminal
        $ export RHCOS_URL=$(openshift-install coreos print-stream-json | jq -r \
          '.architectures.s390x.artifacts.openstack.formats."qcow2.gz".disk.location')
        ```
    *   Linux on ARM (aarch64, arm64)
        ```terminal
        $ export RHCOS_URL=$(openshift-install coreos print-stream-json | jq -r \
          '.architectures.aarch64.artifacts.openstack.formats."qcow2.gz".disk.location')
        ```
1.  Obtain the boot image and upload the image to the {{ rh_openstack }} image service (Glance):
    1.  Download the image by using the following command: 
        ```terminal
        $ curl -L -o /tmp/rhcos-new.qcow2.gz "${RHCOS_URL}"
        ```

        `RHCOS_URL` is the URL environment variables you created in a previous step.
    1.  Decompress the downloaded image by using the following command:
        ```terminal
        $ gunzip <file_path>/rhcos-new.qcow2.gz
        ```

        Replace `<file_path>` with the path to the location for the image.
    1.  Set an environment variable to create a descriptive name for your boot image in Glance by running the following command:
        ```terminal
        $ export IMAGE_NAME="<descriptive_image_name>"
        ```

        Setting a descriptive name for your boot image, such as using the {{ op_system_first }} version number in the image name, makes it easier to track which version is currently deployed if you update the cluster in the future.
        ```terminal title="Example command"
        $ export IMAGE_NAME="rhcos 9.6 boot image"
        ```
    1.  Upload the image to Glance by using the following command:
        ```terminal
        $ openstack --os-cloud "${CLOUD_NAME}" image create "${IMAGE_NAME}" \
          --disk-format qcow2 \
          --container-format bare \
          --file <file_path>/rhcos-new.qcow2 \
          --property os_type=linux \
          --property os_distro=rhcos
        ```

        Replace `<file_path>` with the path to the location for the image.

        `CLOUD_NAME` and `IMAGE_NAME` are environment variables you created in previous steps.

        It might take several minutes for the image to upload. When the upload is complete, details on the image displays, similar to the following example:
        ```terminal title="Example output"
        +------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
        | Field            | Value                                                                                                                                                                               |
        +------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
        | checksum         | 469fa549f706617ff15b41bd2a919679                                                                                                                                                    |
        # ...                                                                                                                                                         |
        | disk_format      | qcow2                                                                                                                                                                               |
        # ...
        | name             | rhcos 9.6 boot image            
        ```
    1.  Optional: Verify that the image has uploaded and is in active state by running the following command:
        ```terminal
        $ openstack --os-cloud "${CLOUD_NAME}" image show "${IMAGE_NAME}" -f json | jq '{name: .name, status: .status}'
        ```
        ```terminal title="Example output"
        {
          "name": "rhcos 9.6 boot image",
          "status": "active"
        }
        ```
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
        $ oc patch machineset <machineset_name> -n openshift-machine-api --type merge -p \
          '{"spec":{"template":{"spec":{"providerSpec":{"value":{"image":"'${IMAGE_NAME}'"}}}}}}'
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

    After you migrate all machine sets to the new boot image, you can remove the old boot image from Glance.