{%- set _mod_docs_content_type = "PROCEDURE" %}
{%- if context != "rosa-hcp-upgrading-whole-cluster" %}
# Updating the hosted control plane with the {{ rosa_cli }} {id="rosa-hcp-upgrading-cli-control-plane_{{ context }}"}

You can manually update the hosted control plane of a {{ product_title }} cluster by using the {{ rosa_cli_first }}. This method schedules the control plane for an update if a more recent version is available, either immediately, or at a specified future time. {._abstract}


:::note

Your control plane only supports machine pools within two minor y-stream versions. For example, a {{ product_title }} cluster with a control plane using version 4.17.z supports machine pools with version 4.15.z and 4.16.z, but the control plane does not support machine pools using version 4.14.z.

:::


{%- endif %}

{%- if context == "rosa-hcp-upgrading-whole-cluster" %}
# Updating the hosted control plane {id="_updating_the_hosted_control_plane"}

When you need to update the whole cluster, update the hosted control plane first.
{% endif %}

**Prerequisites**

*   You have installed and configured the latest version of the ROSA CLI.
*   No machine pool updates are in progress or scheduled to take place at the same time as the hosted control plane update.

**Procedure**

1.  Verify the current version of your cluster by running the following command:
    ```terminal
    $ rosa describe cluster --cluster=<cluster_name_or_id>
    ```

    Replace `<cluster_name_or_id>` with the cluster name or the cluster ID.
1.  List the versions that you can update your control plane to by running the following command:
    ```terminal
    $ rosa list upgrade --cluster=<cluster_name_or_id>
    ```

    The command returns a list of available updates, including the recommended version.

    **Example output**
    ```terminal
    VERSION  NOTES
    4.18.18   recommended
    4.18.17
    4.18.16
    ```
1.  Set the update channel. For more information about channels, refer to "Channels in {{ product_title }} clusters".
    ```terminal
    $ rosa edit cluster -c <cluster_name_or_id> --channel <channel>
    ```

    For example, to set the channel to `stable-4.19`:
    ```terminal
    $ rosa edit cluster -c <cluster_name_or_id> --channel stable-4.19
    ```
1.  Update the cluster’s hosted control plane by running the following command:
    ```terminal
    $ rosa upgrade cluster -c <cluster_name_or_id> [--schedule-date=<yyyy-mm-dd> --schedule-time=<HH:mm>] --version <version_number>
    ```
    *   To schedule an immediate update to the specified version, run the following command:
        ```terminal
        $ rosa upgrade cluster -c <cluster_name_or_id> --version <version_number>
        ```

        Your hosted control plane is scheduled for an immediate update.
    *   To schedule an update to the specified version at a future date, run the following command:
        ```terminal
        $ rosa upgrade cluster -c <cluster_name_or_id> --schedule-date=<yyyy-mm-dd> --schedule-time=<HH:mm> --version=<version_number>
        ```

        Your hosted control plane is scheduled for an update at the specified time in Coordinated Universal Time (UTC).

{% if context != "rosa-hcp-upgrading-whole-cluster" %}
**Troubleshooting**

*   Sometimes a scheduled update does not initiate. See [Upgrade maintenance canceled](https://access.redhat.com/solutions/6648291) for more information.
{% endif %}