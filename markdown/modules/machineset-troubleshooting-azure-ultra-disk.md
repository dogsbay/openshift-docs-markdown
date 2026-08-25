{% if context == "creating-machineset-azure" %}
{%- set mapi = true -%}
{% endif %}
{% if context == "cpmso-supported-features-azure" %}
{%- set mapi = true -%}
{% endif %}
{% if context == "persistent-storage-azure" %}
{%- set pvc = true -%}
{% endif %}
{% if context == "persistent-storage-csi-azure" %}
{%- set pvc = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Troubleshooting resources for machine sets that enable ultra disks {id="machineset-troubleshooting-azure-ultra-disk_{{ context }}"}

You can recover from issues that you might encounter when you enable ultra disks for machine sets. Review fields, such as disk settings, and ensure that the parameters are correctly configured. {._abstract}

{% if pvc %}
## Unable to mount a persistent volume claim backed by an ultra disk {id="ts-pvc-mounting-ultra_{{ context }}"}

If there is an issue mounting a persistent volume claim backed by an ultra disk, the pod becomes stuck in the `ContainerCreating` state and an alert is triggered.

For example, if the `additionalCapabilities.ultraSSDEnabled` parameter is not set on the machine that backs the node that hosts the pod, the following error message appears:

```terminal
StorageAccountType UltraSSD_LRS can be used only when additionalCapabilities.ultraSSDEnabled is set.
```

*   To resolve this issue, describe the pod by running the following command:
    ```terminal
    $ oc -n <stuck_pod_namespace> describe pod <stuck_pod_name>
    ```
{% endif %}

{% if mapi %}
## Incorrect ultra disk configuration {id="ts-mapi-attach-misconfigure_{{ context }}"}

If an incorrect configuration of the `ultraSSDCapability` parameter is specified in the machine set, the machine provisioning fails.

For example, if the `ultraSSDCapability` parameter is set to `Disabled`, but an ultra disk is specified in the `dataDisks` parameter, the following error message appears:

```terminal
StorageAccountType UltraSSD_LRS can be used only when additionalCapabilities.ultraSSDEnabled is set.
```

*   To resolve this issue, verify that your machine set configuration is correct.

## Unsupported disk parameters {id="ts-mapi-attach-unsupported_{{ context }}"}

If a region, availability zone, or instance size that is not compatible with ultra disks is specified in the machine set, the machine provisioning fails. Check the logs for the following error message:

```terminal
failed to create vm <machine_name>: failure sending request for machine <machine_name>: cannot create vm: compute.VirtualMachinesClient#CreateOrUpdate: Failure sending request: StatusCode=400 -- Original Error: Code="BadRequest" Message="Storage Account type 'UltraSSD_LRS' is not supported <more_information_about_why>."
```

*   To resolve this issue, verify that you are using this feature in a supported environment and that your machine set configuration is correct.

## Unable to delete disks {id="ts-mapi-delete_{{ context }}"}

If the deletion of ultra disks as data disks is not working as expected, the machines are deleted and the data disks are orphaned. You must delete the orphaned disks manually if desired.

{% endif %}

{% if context == "creating-machineset-azure" %}
{%- set mapi = "" -%}
{% endif %}
{% if context == "cpmso-supported-features-azure" %}
{%- set mapi = "" -%}
{% endif %}
{% if context == "persistent-storage-azure" %}
{%- set pvc = "" -%}
{% endif %}
{% if context == "persistent-storage-csi-azure" %}
{%- set pvc = "" -%}
{% endif %}