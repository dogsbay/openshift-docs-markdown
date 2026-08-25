{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually updating the boot image on an {{ azure_short }} cluster {id="mco-update-boot-images-azure_{{ context }}"}

You can manually update the boot image for your {{ azure_first }} cluster by configuring your machine sets to use the latest {{ product_title }} image as the boot image to ensure that new nodes can scale up properly. {._abstract}


:::note

Boot image updates are not supported for Azure confidential virtual machines and Azure Stack Hub clusters. Contact Red Hat Support for these cases.

:::


Use the following procedure to create environment variables that facilitate running the required commands, identify the correct boot image to use as the new boot image, and modify your compute machine sets to use that image.

The process requires you to determine the product variant and Hyper-V generation of your Azure boot image. The following procedure helps determine both values, which you need in order to look up the target image.


:::note

For clusters that use a default {{ op_system_first }}, Azure Red Hat OpenShift (ARO), or Azure Marketplace image, you can configure the cluster to automatically update the boot image each time the cluster is updated. If you are using the following procedure, ensure that automatic boot image updates are disabled and skew enforcement is in manual mode. For more information, see "Boot image management" and "Boot image skew enforcement".

:::


**Prerequisites**

*   You have completed the general boot image prerequisites as described in the "Prerequisites" section of the [{{ product_title }} Boot Image Updates knowledgebase article](https://access.redhat.com/articles/7053165#prerequisites-2).
*   You have installed the {{ oc_first }}.
*   You have set boot image skew enforcement to the manual or none mode. For more information, see "Configuring boot image skew enforcement".
*   You have disabled boot image management for the cluster. For more information, see "Disabling boot image management".
*   You have downloaded the latest version of the {{ product_title }} installation program from the {{ cluster_manager_url }}. For more information, see "Obtaining the installation program."
*   You have installed the [`jq`](https://stedolan.github.io/jq/) program.

**Procedure**

1.  Set an environment variable with your cluster architecture by running the following command:
    ```terminal
    $ export ARCH=<architecture_type>
    ```

    Replace `<architecture_type>` with one of the following values: 
    *   Use `aarch64` for the AArch64 or ARM64 architecture.
    *   Use `x86_64` for the x86_64 or AMD64 architecture.

    You can find the architecture as a label in any `MachineSet` object.
    ```terminal title="Example machine set with an architecture label"
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    metadata:
      annotations:
        capacity.cluster-autoscaler.kubernetes.io/labels: kubernetes.io/arch=amd64
    # ...
    ```
1.  Determine your Azure image variant and Hyper-V generation:
    1.  Obtain the required values from your machine set by running the following command:
        ```terminal
        $ oc get machineset <machineset-name> -n openshift-machine-api \
          -o jsonpath='{.spec.template.spec.providerSpec.value.image}'
        ```
        ```terminal title="Example output"
        {"offer":"rh-ocp-worker","publisher":"redhat","resourceID":"","sku":"rh-ocp-worker","type":"MarketplaceWithPlan","version":"4.16.20231023"}
        ```
    1.  Determine your image variant by comparing the output to the entries in the following table:
        | Output parmeters | Variant |
        | --- | --- |
        | `resourceID` is non-empty | `no-purchase-plan` |
        | `publisher` is `azureopenshift` | `no-purchase-plan` |
        | `publisher` is `redhat` and `offer` is `rh-ocp-worker` | `ocp` |
        | `publisher` is `redhat` and `offer` is `rh-opp-worker` | `opp` |
        | `publisher` is `redhat` and `offer` is `rh-oke-worker` | `oke` |
        | `publisher` is `redhat-limited` and `offer` is `rh-ocp-worker` | `ocp-emea` |
        | `publisher` is `redhat-limited` and `offer` is `rh-ocp-worker` | `opp-emea` |
        | `publisher` is `redhat-limited` and `offer` is `rh-ocp-worker` | `oke-emea` |


        Make note of the variant for later use. 
    1.  Determine your image Hyper-V generation by comparing the output to the entries in the following table:
<table>
<thead>
<tr>
  <th>Output</th>
  <th>Image type</th>
  <th>Hyper-V generation</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>resourceID</code> is non-empty</td>
  <td>Legacy uploaded</td>
  <td><ul><li><code>hyperVGen2</code> if the <code>resourceID</code> value contains <code>gen2</code></li><li><code>hyperVGen1</code>  if the <code>resourceID</code> value does not contain <code>gen2</code></li></ul></td>
</tr>
<tr>
  <td><code>publisher</code> is <code>azureopenshift</code></td>
  <td>Unpaid marketplace</td>
  <td><ul><li><code>hyperVGen2</code> if <code>sku</code> contains <code>v2</code> or the cluster architecture is AArch64 or ARM64</li><li><code>hyperVGen1</code> for all other images</li></ul></td>
</tr>
<tr>
  <td><code>publisher</code> is <code>redhat</code> or <code>redhat-limited</code>.</td>
  <td>Paid marketplace</td>
  <td><ul><li><code>hyperVGen1</code> if <code>sku</code> contains <code>-gen1</code></li><li><code>hyperVGen2</code> for all other images</li></ul></td>
</tr>
</tbody>
</table>


        Make note of the generation for later use. 
    1.  Optional: You can compare the output of the `version` parameter against the output of the following command to determine if your boot image needs updating.
        ```terminal
        $ openshift-install coreos print-stream-json | jq '.architectures."'"${ARCH}"'"."rhel-coreos-extensions"."marketplace"."azure"'
        ```

        `ARCH` is the environment variable you created in a previous step.

        In the output of the command, locate your variant and generation as shown in the following example:
        ```terminal title="Example output"
          "ocp": {
        # ...
            "hyperVGen2": {
              "publisher": "redhat",
              "offer": "rh-ocp-worker",
              "sku": "rh-ocp-worker",
              "version": "4.18.2025031114"
        ```

        If the boot image referenced in the `version` parameter of your machine set matches or is later than the version in this output, no further action on your part is required to update the boot image. If not, continue with this procedure.
1.  Obtain the values needed to identify the new boot image and set the values as environment variables:
    1.  Obtain the values required for the new boot image by running the following command:
        ```terminal
        $ openshift-install coreos print-stream-json | jq '.architectures."'"${ARCH}"'"."rhel-coreos-extensions"."marketplace"."azure"'
        ```

        `ARCH` is the environment variable you created in a previous step.
    1.  In the output of the command, locate your variant and generation as shown in the following example:
        ```terminal title="Example output"
          "ocp": {
          # ...
            "hyperVGen2": {
              "publisher": "redhat",
              "offer": "rh-ocp-worker",
              "sku": "rh-ocp-worker",
              "version": "9.6.20251015"
        ```
    1.  Set an environment variable with your image variant by running the following command:
        ```terminal
        $ export VARIANT=<variant>
        ```

        Replace `<variant>` with the variant of your image, one of the following vales: `no-purchase-plan`, `ocp`, `opp`, `oke`, `ocp-emea`, `opp-emea`, or `oke-emea`.
    1.  Set an environment variable with your image generation by running the following command:
        ```terminal
        $ export GEN=<generation>
        ```

        Replace `<generation>` with the generation of your image, one of the following vales: `hyperVGen1` or `hyperVGen2`.
    1.  Set environment variables for the `publisher`, `offer`, `sku`, and `version` fields based on the `openshift-install` output for your variant and generation by running the following commands:
        ```terminal
        $ export PUBLISHER=$(openshift-install coreos print-stream-json | jq -r '.architectures."'"${ARCH}"'"."rhel-coreos-extensions"."marketplace"."azure"."'"${VARIANT}"'"."'"${GEN}"'".publisher')
        ```

        `ARCH`, `VARIANT`, and `GEN` are environment variables you created in a previous step.
        ```terminal
        $ export OFFER=$(openshift-install coreos print-stream-json | jq -r '.architectures."'"${ARCH}"'"."rhel-coreos-extensions"."marketplace"."azure"."'"${VARIANT}"'"."'"${GEN}"'".offer')
        ```
        ```terminal
        $ export SKU=$(openshift-install coreos print-stream-json | jq -r '.architectures."'"${ARCH}"'"."rhel-coreos-extensions"."marketplace"."azure"."'"${VARIANT}"'"."'"${GEN}"'".sku')
        ```
        ```terminal
        $ export VERSION=$(openshift-install coreos print-stream-json | jq -r '.architectures."'"${ARCH}"'"."rhel-coreos-extensions"."marketplace"."azure"."'"${VARIANT}"'"."'"${GEN}"'".version')
        ```
    1.  Obtain the {{ op_system }} version by running the following command: 
        ```terminal
        $ echo $VERSION
        ```
        ```terminal title="Example output"
        9.6.20251015
        ```

        Make note of the {{ op_system }} version for later use.
    1.  Set an environment variable with the type of your image by running the following command:
        ```terminal
        $ export IMAGE_TYPE=<image_type>
        ```

        Replace `<image_type>` with one of the following values based on the variant of your image:
        *   For the `no-purchase-plan` variant, use `MarketplaceNoPlan`.
        *   For all other variants, use `MarketplaceWithPlan`.
1.  Update each of your compute machine sets to include the new boot image:
    1.  Obtain the name of your machine sets for use in the following step by running the following command:
        ```terminal
        $ oc get machineset -n openshift-machine-api
        ```
        ```terminal title="Example output"
        NAME                                        DESIRED   CURRENT   READY   AVAILABLE   AGE
        ci-ln-lbf9h9k-1d09d-fwh4l-worker-eastus21   1         1         1       1           135m
        ci-ln-lbf9h9k-1d09d-fwh4l-worker-eastus22   1         1         1       1           135m
        ci-ln-lbf9h9k-1d09d-fwh4l-worker-eastus23   1         1         1       1           135m
        ```
    1.  Edit a machine set to update the `image` field in the `providerSpec` stanza to add your boot image by running the following command:
        ```terminal
        $ oc patch machineset <machineset-name> -n openshift-machine-api --type merge \
          -p '{"spec":{"template":{"spec":{"providerSpec":{"value":{"image":{"publisher":"'${PUBLISHER}'","offer":"'${OFFER}'","sku":"'${SKU}'","version":"'${VERSION}'","resourceID":"","type":"'${IMAGE_TYPE}'"}}}}}}}'
        ```

        `PUBLISHER`, `OFFER`, `SKU`, `VERSION`, and `IMAGE_TYPE` are environment variables you created in previous steps. 
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
        "ref": "docker://ostree-image-signed:oci-archive:/rhcos-9.6.20251015-ostree.x86_64.ociarchive",
        "version": "9.6.20251015"
    }
    ```

    where:

    `version`
    :   Specifies the boot image version.

1.  Verify that the boot image is the same the {{ op_system }} version as the image you noted in a previous step by running the following command:
    ```terminal
    $ echo $VERSION
    ```
    ```terminal title="Example output"
    9.6.20251015
    ```