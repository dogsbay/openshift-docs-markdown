{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a custom live {{ op_system }} ISO for remote server access {id="create-custom-live-rhcos-iso_{{ context }}"}

In some cases, you cannot attach an external disk drive to a server, however, you need to access the server remotely to provision a node.
It is recommended to enable SSH access to the server. {._abstract}

You can create a live {{ op_system }} ISO with SSHd enabled and with predefined credentials so that you can access the server after it boots.

**Prerequisites**

*   You installed the `butane` utility.

**Procedure**

1.  Download the `coreos-installer` binary from the `coreos-installer` image [mirror](https://mirror.openshift.com/pub/openshift-v4/clients/coreos-installer/latest/) page.
1.  Download the latest live {{ op_system }} ISO from [mirror.openshift.com](https://mirror.openshift.com/pub/openshift-v4/x86_64/dependencies/rhcos/4.12/latest/).
1.  Create the `embedded.yaml` file that the `butane` utility uses to create the Ignition file:
    ```yaml {minja}
    variant: openshift
    version: {{ product_version }}.0
    metadata:
      name: sshd
      labels:
        machineconfiguration.openshift.io/role: worker
    passwd:
      users:
        - name: core
          ssh_authorized_keys:
            - '<ssh_key>'
    ```

    For the `passwd.users.name` parameter, the `core` user has sudo privileges.
1.  Run the `butane` utility to create the Ignition file using the following command:
    ```terminal
    $ butane -pr embedded.yaml -o embedded.ign
    ```
1.  After the Ignition file is created, you can include the configuration in a new live {{ op_system }} ISO, which is named `rhcos-sshd-{{ product_version }}.0-x86_64-live.x86_64.iso`{minja}, with the `coreos-installer` utility:
    ```terminal {minja}
    $ coreos-installer iso ignition embed -i embedded.ign rhcos-{{ product_version }}.0-x86_64-live.x86_64.iso -o rhcos-sshd-{{ product_version }}.0-x86_64-live.x86_64.iso
    ```

**Verification**

*   Check that the custom live ISO can be used to boot the server by running the following command:
    ```terminal {minja}
    # coreos-installer iso ignition show rhcos-sshd-{{ product_version }}.0-x86_64-live.x86_64.iso
    ```

    ```json title="Example output"
    {
      "ignition": {
        "version": "3.2.0"
      },
      "passwd": {
        "users": [
          {
            "name": "core",
            "sshAuthorizedKeys": [
              "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCZnG8AIzlDAhpyENpK2qKiTT8EbRWOrz7NXjRzopbPu215mocaJgjjwJjh1cYhgPhpAp6M/ttTk7I4OI7g4588Apx4bwJep6oWTU35LkY8ZxkGVPAJL8kVlTdKQviDv3XX12l4QfnDom4tm4gVbRH0gNT1wzhnLP+LKYm2Ohr9D7p9NBnAdro6k++XWgkDeijLRUTwdEyWunIdW1f8G0Mg8Y1Xzr13BUo3+8aey7HLKJMDtobkz/C8ESYA/f7HJc5FxF0XbapWWovSSDJrr9OmlL9f4TfE+cQk3s+eoKiz2bgNPRgEEwihVbGsCN4grA+RzLCAOpec+2dTJrQvFqsD alosadag@sonnelicht.local"
            ]
          }
        ]
      }
    }
    ```