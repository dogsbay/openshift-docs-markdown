{%- set _mod_docs_content_type = "PROCEDURE" %}
# Keeping {{ microshift_short }} and {{ op_system_base }} in a supported configuration {id="microshift-updates-rhde-config-rhel-repos_{{ context }}"}

When using RPM updates, avoid creating an unsupported configuration or breaking your node by carefully managing your {{ op_system_base }} repositories. {._abstract}

**Prerequisites**

*   You understand the support status of the version of {{ microshift_short }} you are using.
*   You have root-user access to your build host.
*   You reviewed the [{{ op_system_bundle }} release compatibility matrix](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/{{ ocp_version }}/html/getting_ready_to_install_microshift/microshift-install-get-ready#get-ready-install-rhde-compatibility-table_microshift-install-get-ready).

**Procedure**

1.  Avoid unintended updates by locking your operating system version by running the following command:
    ```terminal
    $ sudo subscription-manager release --set={{ op_system_version }}
    ```
1.  If you are using an EUS {{ microshift_short }} release, disable the {{ op_system_base }} standard-support-scope repositories by running the following command:
    ```terminal
    $ sudo subscription-manager repos \
        --disable=rhel-{{ op_system_version_major }}-for-$(uname -m)-appstream-rpms \
        --disable=rhel-{{ op_system_version_major }}-for-$(uname -m)-baseos-rpms
    ```

    You can replace _{{ op_system_version_major }}_ with the major version of your compatible {{ op_system_base }} system if it is not same version given in this example.
1.  After you disable the standard-support repositories, enable the {{ op_system_base }} EUS repos by running the following command:
    ```terminal
    $ sudo subscription-manager repos \
        --enable rhel-{{ op_system_version_major }}-for-$(uname -m)-appstream-eus-rpms \
        --enable rhel-{{ op_system_version_major }}-for-$(uname -m)-baseos-eus-rpms
    ```

    You can replace _{{ op_system_version_major }}_ with the major version of your compatible {{ op_system_base }} system if it is not same version given in this example.

**Verification**

*   List the repositories you have enabled for {{ op_system_base }} by running the following command:
    ```terminal
    $ sudo subscription-manager repos --list-enabled
    ```
    ```terminal title="Example output"
    +----------------------------------------------------------+
        Available Repositories in /etc/yum.repos.d/redhat.repo
    +----------------------------------------------------------+
    Repo ID:   rhel-9-for-x86_64-baseos-eus-rpms
    Repo Name: Red Hat Enterprise Linux 9 for x86_64 - BaseOS - Extended Update Support (RPMs)
    Repo URL:  https://cdn.redhat.com/content/eus/rhel9/$releasever/x86_64/baseos/os
    Enabled:   1
    Repo ID:   rhel-9-for-x86_64-appstream-eus-rpms
    Repo Name: Red Hat Enterprise Linux 9 for x86_64 - AppStream - Extended Update Support (RPMs)
    Repo URL:  https://cdn.redhat.com/content/eus/rhel9/$releasever/x86_64/appstream/os
    Enabled:   1
    ```