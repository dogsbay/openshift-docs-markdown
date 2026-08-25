{% if context == "installing-azure-customizations" %}
{%- set ipi = true -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set upi = true -%}
{% endif %}
{% if context == "creating-machineset-azure" %}
{%- set mapi = true -%}
{% endif %}
{% if context == "cpmso-supported-features-azure" %}
{%- set mapi = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set upi = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the {{ azure_short }} Marketplace offering {id="installation-azure-marketplace-subscribe_{{ context }}"}

{% if not mapi %}
You can use the {{ azure_short }} Marketplace offering to deploy an {{ product_title }} cluster, which is billed on pay-per-use basis (hourly, per core) through {{ azure_short }}, while still being supported directly by Red&#160;Hat. {._abstract}

To deploy an {{ product_title }} cluster using the {{ azure_short }} Marketplace offering, you must first obtain the {{ azure_short }} Marketplace image. The installation program uses this image to deploy worker or control plane nodes. When obtaining your image, consider the following:
{% endif %}
{% if mapi %}
You can create a machine set running on {{ azure_short }} that deploys machines that use the {{ azure_short }} Marketplace offering. To use this offering, you must first obtain the {{ azure_short }} Marketplace image. When obtaining your image, consider the following:
{% endif %}

*   While the images are the same, the {{ azure_short }} Marketplace publisher is different depending on your region. If you are located in North America, specify `redhat` as the publisher. If you are located in EMEA, specify `redhat-limited` as the publisher.
*   The offer includes a `rh-ocp-worker` SKU and a `rh-ocp-worker-gen1` SKU. The `rh-ocp-worker` SKU represents a Hyper-V generation version 2 VM image. The default instance types used in {{ product_title }} are version 2 compatible. If you plan to use an instance type that is only version 1 compatible, use the image associated with the `rh-ocp-worker-gen1` SKU. The `rh-ocp-worker-gen1` SKU represents a Hyper-V version 1 VM image.

{%- set platform_abbreviation = "an Azure" -%}
{%- set platform_abbreviation_short = "Azure" %}


:::important

Installing images with the {{ azure_short }} marketplace is not supported on clusters with 64-bit ARM instances.

{% include "./snippets/installation-marketplace-note.md" %}

:::


**Prerequisites**

*   You have installed the {{ azure_short }} CLI client `(az)`.
*   Your {{ azure_short }} account is entitled for the offer and you have logged into this account with the {{ azure_short }} CLI client.

**Procedure**

1.  Display all of the available {{ product_title }} images by running one of the following commands:
    *   North America:
        ```terminal
        $  az vm image list --all --offer rh-ocp-worker --publisher redhat -o table
        ```
        ```terminal title="Example output"
        Offer          Publisher       Sku                 Urn                                                             Version
        -------------  --------------  ------------------  --------------------------------------------------------------  -----------------
        rh-ocp-worker  RedHat          rh-ocp-worker       RedHat:rh-ocp-worker:rh-ocp-worker:4.17.2024100419              4.17.2024100419
        rh-ocp-worker  RedHat          rh-ocp-worker-gen1  RedHat:rh-ocp-worker:rh-ocp-worker-gen1:4.17.2024100419         4.17.2024100419
        ```
    *   EMEA:
        ```terminal
        $  az vm image list --all --offer rh-ocp-worker --publisher redhat-limited -o table
        ```
        ```terminal title="Example output"
        Offer          Publisher       Sku                 Urn                                                                     Version
        -------------  --------------  ------------------  --------------------------------------------------------------          -----------------
        rh-ocp-worker  redhat-limited  rh-ocp-worker       redhat-limited:rh-ocp-worker:rh-ocp-worker:4.17.2024100419              4.17.2024100419
        rh-ocp-worker  redhat-limited  rh-ocp-worker-gen1  redhat-limited:rh-ocp-worker:rh-ocp-worker-gen1:4.17.2024100419         4.17.2024100419
        ```

    :::note

    Use the latest image that is available for compute and control plane nodes. If required, your VMs are automatically upgraded as part of the installation process.
    
    :::

1.  Inspect the image for your offer by running one of the following commands:
    *   North America:
        ```terminal
        $ az vm image show --urn redhat:rh-ocp-worker:rh-ocp-worker:<version>
        ```
    *   EMEA:
        ```terminal
        $ az vm image show --urn redhat-limited:rh-ocp-worker:rh-ocp-worker:<version>
        ```
1.  Review the terms of the offer by running one of the following commands:
    *   North America:
        ```terminal
        $ az vm image terms show --urn redhat:rh-ocp-worker:rh-ocp-worker:<version>
        ```
    *   EMEA:
        ```terminal
        $ az vm image terms show --urn redhat-limited:rh-ocp-worker:rh-ocp-worker:<version>
        ```
1.  Accept the terms of the offering by running one of the following commands:
    *   North America:
        ```terminal
        $ az vm image terms accept --urn redhat:rh-ocp-worker:rh-ocp-worker:<version>
        ```
    *   EMEA:
        ```terminal
        $ az vm image terms accept --urn redhat-limited:rh-ocp-worker:rh-ocp-worker:<version>
        ```
{% if ipi %}
1.  Record the image details of your offer. You must update the `compute` section in the `install-config.yaml` file with values for `publisher`, `offer`, `sku`, and `version` before deploying the cluster. You may also update the `controlPlane` section to deploy control plane machines with the specified image details, or the `defaultMachinePlatform` section to deploy both control plane and compute machines with the specified image details. Use the latest available image for control plane and compute nodes.
    ```yaml title="Sample install-config.yaml file with the {{ azure_short }} Marketplace compute nodes"
    apiVersion: v1
    baseDomain: example.com
    compute:
    - hyperthreading: Enabled
      name: worker
      platform:
        azure:
          type: Standard_D4s_v5
          osImage:
            publisher: redhat
            offer: rh-ocp-worker
            sku: rh-ocp-worker
            version: 413.92.2023101700
      replicas: 3
    ```
{% endif %}
{% if upi %}
1.  Record the image details of your offer. If you use the {{ azure_short }} Resource Manager (ARM) template to deploy your compute nodes:
    1.  Update `storageProfile.imageReference` by deleting the `id` parameter and adding the `offer`, `publisher`, `sku`, and `version` parameters by using the values from your offer.
    1.  Specify a `plan` for the virtual machines (VMs).
        ```json title="Example 06_workers.json ARM template with an updated storageProfile.imageReference object and a specified plan"
        ...
          "plan" : {
            "name": "rh-ocp-worker",
            "product": "rh-ocp-worker",
            "publisher": "redhat"
          },
          "dependsOn" : [
            "[concat('Microsoft.Network/networkInterfaces/', concat(variables('vmNames')[copyIndex()], '-nic'))]"
          ],
          "properties" : {
        ...
          "storageProfile": {
            "imageReference": {
            "offer": "rh-ocp-worker",
            "publisher": "redhat",
            "sku": "rh-ocp-worker",
            "version": "413.92.2023101700"
            }
            ...
           }
        ...
          }
        ```

{% endif %}
{% if mapi %}
1.  Record the image details of your offer, specifically the values for `publisher`, `offer`, `sku`, and `version`.
1.  Add the following parameters to the `providerSpec` section of your machine set YAML file using the image details for your offer:
    ```yaml title="Sample providerSpec image values for {{ azure_short }} Marketplace machines"
    providerSpec:
      value:
        image:
          offer: rh-ocp-worker
          publisher: redhat
          resourceID: ""
          sku: rh-ocp-worker
          type: MarketplaceWithPlan
          version: 413.92.2023101700
    ```
{% endif %}

{% if context == "installing-azure-customizations" %}
{%- set ipi = "" -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set upi = "" -%}
{% endif %}
{% if context == "creating-machineset-azure" %}
{%- set mapi = "" -%}
{% endif %}
{% if context == "cpmso-supported-features-azure" %}
{%- set mapi = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set upi = "" -%}
{% endif %}