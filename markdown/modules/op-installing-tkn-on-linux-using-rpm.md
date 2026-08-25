{%- set _mod_docs_content_type = "PROCEDURE" %}

# Installing the {{ pipelines_title }} CLI on Linux using an RPM {id="installing-tkn-on-linux-using-rpm"}

For {{ op_system_base_full }} version 8, you can install the {{ pipelines_title }} CLI as an RPM. {._abstract}

**Prerequisites**

*   You have an active {{ product_title }} subscription on your Red Hat account.
*   You have root or sudo privileges on your local system.

**Procedure**

1.  Register with Red Hat Subscription Manager:
    ```terminal
    # subscription-manager register
    ```
1.  Pull the latest subscription data:
    ```terminal
    # subscription-manager refresh
    ```
1.  List the available subscriptions:
    ```terminal
    # subscription-manager list --available --matches '*pipelines*'
    ```
1.  In the output for the previous command, find the pool ID for your {{ product_title }} subscription and attach the subscription to the registered system:
    ```terminal
    # subscription-manager attach --pool=<pool_id>
    ```
1.  Enable the repositories required by {{ pipelines_title }}:
    *   Linux (x86_64, amd64)
        ```terminal
        # subscription-manager repos --enable="pipelines-{{ pipelines_version_number }}-for-rhel-8-x86_64-rpms"
        ```
    *   Linux on {{ ibm_z_name }} and {{ ibm_linuxone_name }} (s390x)
        ```terminal
        # subscription-manager repos --enable="pipelines-{{ pipelines_version_number }}-for-rhel-8-s390x-rpms"
        ```
    *   Linux on {{ ibm_power_name }} (ppc64le)
        ```terminal
        # subscription-manager repos --enable="pipelines-{{ pipelines_version_number }}-for-rhel-8-ppc64le-rpms"
        ```
    *   Linux on ARM (aarch64, arm64)
        ```terminal
        # subscription-manager repos --enable="pipelines-{{ pipelines_version_number }}-for-rhel-8-aarch64-rpms"
        ```
1.  Install the `openshift-pipelines-client` package:
    ```terminal
    # yum install openshift-pipelines-client
    ```

After you install the CLI, it is available using the `tkn` command:

```terminal
$ tkn version
```