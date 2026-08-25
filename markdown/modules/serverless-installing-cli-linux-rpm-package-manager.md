{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Knative CLI for Linux by using an RPM package manager {id="serverless-installing-cli-linux-rpm-package-manager_{{ context }}"}

For {{ op_system_base_full }}, you can install the Knative (`kn`) CLI as an RPM by using a package manager, such as `yum` or `dnf`. This allows the Knative CLI version to be automatically managed by the system. For example, using a command like `dnf upgrade` upgrades all packages, including `kn`, if a new version is available.

**Prerequisites**

*   You have an active {{ product_title }} subscription on your Red Hat account.

**Procedure**

1.  Register with Red Hat Subscription Manager:
    ```terminal
    # subscription-manager register
    ```
1.  Pull the latest subscription data:
    ```terminal
    # subscription-manager refresh
    ```
1.  Attach the subscription to the registered system:
    ```terminal
    # subscription-manager attach --pool=<pool_id> (1)
    ```
    1.  Pool ID for an active {{ product_title }} subscription
1.  Enable the repositories required by the Knative (`kn`) CLI:
    *   Linux (x86_64, amd64)
        ```terminal
        # subscription-manager repos --enable="openshift-serverless-1-for-rhel-8-x86_64-rpms"
        ```
{% if not openshift_rosa %}
    *   Linux on {{ ibm_z_name }} and {{ ibm_linuxone_name }} (s390x)
        ```terminal
        # subscription-manager repos --enable="openshift-serverless-1-for-rhel-8-s390x-rpms"
        ```
    *   Linux on {{ ibm_power_name }} (ppc64le)
        ```terminal
        # subscription-manager repos --enable="openshift-serverless-1-for-rhel-8-ppc64le-rpms"
        ```
{% endif %}
1.  Install the Knative (`kn`) CLI as an RPM by using a package manager:
    ```terminal title="Example yum command"
    # yum install openshift-serverless-clients
    ```