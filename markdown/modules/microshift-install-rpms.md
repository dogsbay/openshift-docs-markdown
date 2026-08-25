{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install {{ microshift_short }} from an RPM package {id="installing-microshift-from-rpm-package_{{ context }}"}

Use the following procedure to install {{ microshift_short }} from an RPM package. {._abstract}

**Prerequisites**

*   The system requirements for installing {{ microshift_short }} have been met.
*   You completed the steps of preparing to install {{ microshift_short }} from an RPM package.

**Procedure**

1.  For all lifecycles, enable the repository for your release by running the following command:
    ```terminal {minja}
    $ sudo subscription-manager repos \
        --enable rhocp-{{ ocp_version }}-for-rhel-{{ op_system_version_major }}-$(uname -m)-rpms \
        --enable fast-datapath-for-rhel-{{ op_system_version_major }}-$(uname -m)-rpms
    ```
1.  For extended support (EUS) releases, also enable the EUS repositories by running the following command:
    ```terminal {minja}
    $ sudo subscription-manager repos \
        --enable rhel-{{ op_system_version_major }}-for-$(uname -m)-appstream-eus-rpms \
        --enable rhel-{{ op_system_version_major }}-for-$(uname -m)-baseos-eus-rpms
    ```
1.  Avoid unintended future updates into an unsupported configuration by locking your operating system version with the following command:
    ```terminal {minja}
    $ sudo subscription-manager release --set={{ op_system_version }}
    ```
1.  Install {{ microshift_short }} by running the following command:
    ```terminal
    $ sudo dnf install -y microshift
    ```
1.  Download your installation pull secret from the [Red Hat Hybrid Cloud Console](https://console.redhat.com/openshift/install/pull-secret) to a temporary folder, for example, `$HOME/openshift-pull-secret`. This pull secret allows you to authenticate with the container registries that serve the container images used by {{ product_title }}.
1.  To copy the pull secret to the `/etc/crio` folder of your {{ op_system_base }} machine, run the following command:
    ```terminal
    $ sudo cp $HOME/openshift-pull-secret /etc/crio/openshift-pull-secret
    ```
1.  Make the root user the owner of the `/etc/crio/openshift-pull-secret` file by running the following command:
    ```terminal
    $ sudo chown root:root /etc/crio/openshift-pull-secret
    ```
1.  Make the `/etc/crio/openshift-pull-secret` file readable and writeable by the root user only by running the following command:
    ```terminal
    $ sudo chmod 600 /etc/crio/openshift-pull-secret
    ```
1.  If your {{ op_system_base }} machine has a firewall enabled, you must configure a few mandatory firewall rules. For `firewalld`, run the following commands:
    ```terminal
    $ sudo firewall-cmd --permanent --zone=trusted --add-source=10.42.0.0/16
    ```
    ```terminal
    $ sudo firewall-cmd --permanent --zone=trusted --add-source=169.254.169.1
    ```
    ```terminal
    $ sudo firewall-cmd --reload
    ```
1.  If the Volume Group (VG) that you have prepared for {{ microshift_short }} used the default name `rhel`, no further configuration is necessary. If you have used a different name, or if you want to change more configuration settings, see the "Using the {{ microshift_short }} configuration file" section.