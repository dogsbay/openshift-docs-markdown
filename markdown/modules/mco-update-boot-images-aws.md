{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually updating the boot image on an {{ aws_short }} cluster {id="mco-update-boot-images-aws_{{ context }}"}

You can manually update the boot image for your {{ aws_first }} cluster by configuring your machine sets to use the latest {{ product_title }} image as the boot image to ensure that new nodes can scale up properly. {._abstract}

Use the following procedure to create environment variables that facilitate running the required commands, identify the correct Amazon Machine Image (AMI) to use as the new boot image, and modify your compute machine sets to use that image.

The process differs for clusters that use a default {{ op_system_first }} image and clusters that use a custom {{ op_system }} image from the {{ aws_short }} Marketplace. The following procedure helps determine which type of image you use.


:::note

For clusters that use a default {{ op_system }} image, you can configure the cluster to automatically update the boot image each time the cluster is updated. If you are using the following procedure, ensure that automatic boot image updates are disabled and skew enforcement is in manual mode. For more information, see "Boot image management" and "Boot image skew enforcement".

:::


**Prerequisites**

*   You have completed the general boot image prerequisites as described in the "Prerequisites" section of the [{{ product_title }} Boot Image Updates knowledgebase article](https://access.redhat.com/articles/7053165#prerequisites-2).
*   You have installed the {{ oc_first }}.
*   You have set boot image skew enforcement to the manual or none mode. For more information, see "Configuring boot image skew enforcement".  
*   You have disabled boot image management for the cluster. For more information, see "Disabling boot image management".
*   You have installed the [{{ aws_short }} CLI](https://aws.amazon.com/cli/).
*   You configured an AWS account to host the cluster. For information, see "Configuring an AWS account".
*   For a cluster that uses a default {{ op_system }} image, ensure you have met the following additional prerequisites:
    *   You have downloaded the latest version of the {{ product_title }} installation program from the {{ cluster_manager_url }}. For more information, see "Obtaining the installation program."
    *   For a cluster that uses a default {{ op_system }} image, you have installed the [`jq`](https://jqlang.org/) program.

**Procedure**

1.  Determine if your cluster uses a default {{ op_system }} image or a custom {{ op_system }} image from the {{ aws_short }} Marketplace image:
    1.  Obtain the current {{ aws_short }} region where the cluster is installed and set the value in an environment variable by running the following command:
        ```terminal
        $ export REGION=$(oc get infrastructure cluster -o jsonpath='{.status.platformStatus.aws.region}')
        ```
    1.  Obtain the current Amazon Machine Image (AMI) ID for your region and set the value in an environment variable by running the following command:
        ```terminal
        $ export CURRENT_AMI=$(oc get machineset -n openshift-machine-api -o jsonpath='{.items[0].spec.template.spec.providerSpec.value.ami.id}')
        ```
    1.  Obtain the product ID for your AMI and set the value in an environment variable by running the following command:
        ```terminal
        $ export PRODUCT_ID=$(aws ec2 describe-images --image-ids "$CURRENT_AMI" --region "$REGION" \
          --query 'Images[0].Name' --output text | \
          grep -oE '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')
        ```

        `CURRENT_AMI` and `REGION` are environment variables you created in previous steps.
    1.  Display the contents of the `PRODUCT_ID` environment variable by running the following command:
        ```terminal
        $ echo $PRODUCT_ID
        ```
        *   If the output for the `PRODUCT_ID` environment variable is empty, as shown in the following example, your cluster uses a standard {{ product_title }} image. 
            ```terminal title="Example with empty output"

            ```
        *   If the output for the `PRODUCT_ID` environment variable is not empty, as shown in the following example, your cluster uses an {{ aws_short }} Marketplace image.
            ```terminal title="Example with non-empty output"
            59ead7de-2540-4653-a8b0-fa7926d5c845
            ```
        *   If the command returns an error, and you are unable to determine your cluster variant, contact Red Hat Support. If Red Hat Support determines that your cluster uses an {{ aws_short }} Marketplace image, you can set the `PRODUCT_ID` environment variable with the appropriate product ID from the following table.
            ```terminal
            $ export PRODUCT_ID=<Product_ID_from_table>
            ```
            | Variant | Product ID |
            | --- | --- |
            | [{{ product_title }} on x86 - NA](https://aws.amazon.com/marketplace/procurement/?productId=59ead7de-2540-4653-a8b0-fa7926d5c845) | `59ead7de-2540-4653-a8b0-fa7926d5c845` |
            | [{{ oke }} on x86 - NA](https://aws.amazon.com/marketplace/procurement?productId=963b36c3-de6f-48ed-b802-2b38b2a2cdeb) | `963b36c3-de6f-48ed-b802-2b38b2a2cdeb` |
            | [{{ opp }} on x86 - NA](https://aws.amazon.com/marketplace/procurement?productId=f5da01a6-d046-487c-9072-42fe53b1cad4) | `f5da01a6-d046-487c-9072-42fe53b1cad4` |
            | [{{ product_title }} on ARM - NA](https://aws.amazon.com/marketplace/procurement?productId=abc249f8-7440-45f7-a4b1-c026baff64c1) | `abc249f8-7440-45f7-a4b1-c026baff64c1` |
            | [{{ oke }} on ARM - NA](https://aws.amazon.com/marketplace/procurement?productId=d2d3ebcd-c1ca-43d8-bf0a-530433200f35) | `d2d3ebcd-c1ca-43d8-bf0a-530433200f35` |
            | [{{ opp }} on ARM - NA](https://aws.amazon.com/marketplace/procurement?productId=be6d3e94-c8dc-4a3e-9218-4b449b11f06f) | `be6d3e94-c8dc-4a3e-9218-4b449b11f06f` |
            | [{{ product_title }} on x86 - EU, ME and Africa](https://aws.amazon.com/marketplace/procurement?productId=962791c7-3ae5-46d1-ba62-c7a5ebac54fd) | `962791c7-3ae5-46d1-ba62-c7a5ebac54fd` |
            | [{{ oke }} on x86 - EU, ME and Africa](https://aws.amazon.com/marketplace/procurement?productId=7026c8d7-392c-4010-b93c-f93f7bc5495f) | `7026c8d7-392c-4010-b93c-f93f7bc5495f` |
            | [{{ opp }} on x86 - EU, ME and Africa](https://aws.amazon.com/marketplace/procurement?productId=628c9df3-0254-4f91-bc1f-8619d1b8eaa8) | `628c9df3-0254-4f91-bc1f-8619d1b8eaa8` |
1.  Determine the AMI for the new boot image by using one of the following steps, depending upon the type of image used in your cluster:
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
        1.  Obtain the AMI for the new boot image and set an environment variable with the AMI by running the following command:
            ```terminal
            $ export AMI_ID=$(openshift-install coreos print-stream-json | jq -r ".architectures.\"${ARCH}\".images.aws.regions.\"${REGION}\".image")
            ```

            `ARCH` and `REGION` are environment variables you created in previous steps.
        1.  View the {{ op_system }} version of the new boot image by running the following command:
            ```terminal
            $ openshift-install coreos print-stream-json | jq -r ".architectures.\"${ARCH}\".images.aws.regions.\"${REGION}\".release"
            ```
            ```terminal title="Example output"
            9.6.20251212-1
            ```

            Make note of the {{ op_system }} version for later use.
    *   For a cluster that uses a custom {{ op_system }} image, perform the following steps:
        1.  Obtain a list of valid AMI images by running the following command:
            ```terminal
            $ aws ec2 describe-images --region "${REGION}" --filters "Name=name,Values=*${PRODUCT_ID}*" \
              --query 'reverse(sort_by(Images, &CreationDate))[].[CreationDate,ImageId,Name]' --output table
            ```

            `REGION` and `PRODUCT_ID` are environment variables you created in previous steps.

            This command returns the AMIs ordered by creation date, with the latest images first. The {{ op_system }} version of each AMI is contained in the AMI name. Choose the latest image version available.

            Make note of the {{ op_system_first }} version for later use.
        1.  Set an environment variable with the AMI of the new boot image by running the following command:
            ```terminal
            $ export AMI_ID=<ami-value>
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
        $ oc patch machineset <machineset_name> -n openshift-machine-api --type merge -p '{"spec":{"template":{"spec":{"providerSpec":{"value":{"ami":{"id":"'${AMI_ID}'"}}}}}}}'
        ```

        Replace `<machineset_name>` with the name of your machine set.

        `AMI_ID` is the environment variable you created in a previous step.
1.  If boot image skew enforcement in your cluster is set to the manual mode, update the boot image version in the `MachineConfiguration` object as described in "Updating the boot image skew enforcement version."

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