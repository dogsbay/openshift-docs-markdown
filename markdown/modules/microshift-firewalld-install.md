{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the firewalld service {id="microshift-firewall-install_{{ context }}"}

To install and enable firewalld on your {{ op_system_ostree }} host when the package is missing, you can use `dnf` to install the package and `systemctl` to enable and start the service. Optionally check for the package with `rpm -q firewalld` before you install. {._abstract}

**Procedure**

1.  Optional: Check for firewalld on your system by running the following command:
    ```terminal
    $ rpm -q firewalld
    ```
1.  If the `firewalld` service is not installed, run the following command:
    ```terminal
    $ sudo dnf install -y firewalld
    ```
1.  To start the firewall, run the following command:
    ```terminal
    $ sudo systemctl enable firewalld --now
    ```