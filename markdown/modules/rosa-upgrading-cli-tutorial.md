{% if context == "rosa-upgrading-sts" %}
{%- set sts = true -%}
{% endif %}
{% if context == "rosa-hcp-upgrading" %}
{%- set rosa_hcp = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating with the {{ rosa_cli }} {id="rosa-upgrading-cli_{{ context }}"}

You can use the {{ rosa_cli_first }} to update a {{ product_title }} cluster either immediately within one hour or at a future time. {._abstract}

**Prerequisites**

*   You have installed and configured the latest {{ rosa_cli }} on your installation host.
*   Your {{ product_title }} cluster is in a `Ready` state.

**Procedure**

1.  To verify the current version of your cluster, enter the following command:
    ```terminal
    $ rosa describe cluster --cluster=<cluster_name_or_id>
    ```

    Replace `<cluster_name_or_id>` with the cluster name or the ID of the cluster.
1.  To verify that an upgrade is available, enter the following command:
    ```terminal
    $ rosa list upgrade --cluster=<cluster_name_or_id>
    ```

    The command returns a list of versions to which the cluster can be upgraded, including a recommended version. The recommendation is based on the conditional update risks. Each known risk might apply to all clusters or only clusters matching certain conditions. Refer to the OpenShift release notes to evaluate, validate and determine the appropriate version to upgrade to.
1.  Set the update channel. For more information about channels, refer to "Understanding update channels and releases" listed in the _Additional resources_.
    ```terminal
    $ rosa edit -c <cluster_name_or_id> --channel <channel>
    ```

    For example, to set the channel to `stable-4.19`:
    ```terminal
    $ rosa edit -c <cluster_name_or_id> --channel <stable-4.19>
    ```
1.  To upgrade the cluster to a specified version immediately within the next hour, enter the following command:
{% if not rosa_hcp %}
    ```terminal
    $ rosa upgrade cluster --cluster=<cluster_name_or_id> --version <version-id>
    ```
{% endif %}
{% if rosa_hcp %}
    ```terminal
    $ rosa upgrade cluster --cluster=<cluster_name_or_id> --control-plane
    ```
{% endif %}

    :::note

    If you are upgrading an AWS Security Token Service (STS) cluster, this command starts an interactive IAM Roles/policies upgrade mode process that verifies the account and operator role policies for the chosen cluster are compatible with the target version of the upgrade. If the policies are not compatible with the chosen upgrade version, the CLI automatically upgrades them in auto mode.
    
    :::


    The cluster is scheduled for an immediate upgrade as denoted by the _Scheduled Time_. The upgrade will begin within one hour from the scheduled time.
1.  Alternatively, to upgrade the cluster at a future time in UTC, enter the following command:
    ```terminal
    $ rosa upgrade cluster --cluster=<cluster_name|cluster_id>   \
              --version <version-id>   \
              --schedule-date yyyy-mm-dd \
              --schedule-time HH:mm
    ```
1.  To customize the grace period for every node to be drained during the cluster upgrade, enter the following command:
    ```terminal
    $ rosa upgrade cluster --cluster=<cluster_name_or_id>   \
              --version <version-id>   \
              --node-drain-grace-period 15 minutes
    ```

**Verification**

1.  You can view the status of the upgrade by entering the following command, which shows both the status (scheduled or started) and the scheduled time.
    ```terminal
    $ rosa list upgrade --cluster=<cluster_name_or_id>
    ```
    ```terminal title="Example output"
    VERSION  NOTES
    4.19.14  recommended - scheduled for 2026-04-02 15:00 UTC
    4.19.13
    ```

You will receive email notifications confirming the scheduling, beginning, and completion of the cluster upgrade.

**Troubleshooting**

*   Sometimes a scheduled upgrade does not trigger. See [Upgrade maintenance cancelled](https://access.redhat.com/solutions/6648291) for more information.