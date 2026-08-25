{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable extended support repositories for image building {id="microshift-enable-eus-repos_{{ context }}"}

If you have an extended support (EUS) release of {{ microshift_short }} or {{ op_system_base_full }}, you must enable the {{ op_system_base }} EUS repositories for image builder to use. If you do not have an EUS version, you can skip these steps. {._abstract}

**Prerequisites**

*   You have either an EUS version of {{ microshift_short }} or {{ op_system_base }}, or you are updating to one.
*   You have root-user access to your build host.
*   You have reviewed the following link:
    *   [{{ op_system_bundle }} release compatibility matrix](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/{{ ocp_version }}/html/getting_ready_to_install_microshift/microshift-install-get-ready#get-ready-install-rhde-compatibility-table_microshift-install-get-ready)
{% leveloffset +1 %}{% include "./snippets/microshift-unsupported-config-warn.md" %}{% endleveloffset %}

**Procedure**

1.  Create the `/etc/osbuild-composer/repositories` directory by running the following command:
    ```terminal
    $ sudo mkdir -p /etc/osbuild-composer/repositories
    ```
1.  Copy the `/usr/share/osbuild-composer/repositories/rhel-{{ op_system_version }}.json`{minja} file into the `/etc/osbuild-composer/repositories` directory by running the following command:
    ```terminal {minja}
    $ sudo cp /usr/share/osbuild-composer/repositories/rhel-{{ op_system_version }}.json /etc/osbuild-composer/repositories/rhel-{{ op_system_version }}.json
    ```
1.  Update the `baseos` source by modifying the `/etc/osbuild-composer/repositories/rhel-{{ op_system_version }}.json`{minja} file with the following values:
    ```terminal {minja}
    # ...
    "baseurl": "https://cdn.redhat.com/content/eus/rhel{{ op_system_version_major }}/{{ op_system_version }}//baseos/os",
    # ...
    ```

    You can replace _{{ op_system_version_major }}_ with the major {{ op_system_base }} version you are using if different from the value in this example, and replace _{{ op_system_version }}_ with the _&lt;major.minor>_ version. Be certain that the {{ op_system_base }} version you choose is compatible with the {{ microshift_short }} version you are using.
1.  Optional: Apply the `baseos` update by running the following command:
    ```terminal {minja}
    $ sudo sed -i "s,dist/rhel{{ op_system_version_major }}/{{ op_system_version }}/$(uname -m)/baseos/,eus/rhel{{ op_system_version_major }}/{{ op_system_version }}/$(uname -m)/baseos/,g" \
    /etc/osbuild-composer/repositories/rhel-{{ op_system_version }}.json
    ```

    You can replace _{{ op_system_version_major }}_ with the major {{ op_system_base }} version you are using if different from the value in this example, and replace _{{ op_system_version }}_ with the _&lt;major.minor>_ version. Be certain that the {{ op_system_base }} version you choose is compatible with the {{ microshift_short }} version you are using.
1.  Update the `appstream` source by modifying the `/etc/osbuild-composer/repositories/rhel-<major.minor>.json` file with the following values:
    ```terminal {minja}
    # ...
    "baseurl": "https://cdn.redhat.com/content/eus/rhel{{ op_system_version_major }}/{{ op_system_version }}//appstream/os",
    # ...
    ```

    You can replace _{{ op_system_version_major }}_ with the major {{ op_system_base }} version you are using if different from the value in this example, and replace _{{ op_system_version }}_ with the _&lt;major.minor>_ version. Be certain that the {{ op_system_base }} version you choose is compatible with the {{ microshift_short }} version you are using.
1.  Optional. Apply the `appstream` update by running the following command:
    ```terminal {minja}
    $ sudo sed -i "s,dist/rhel{{ op_system_version_major }}/{{ op_system_version }}/$(uname -m)/appstream/,eus/rhel{{ op_system_version_major }}/{{ op_system_version }}/$(uname -m)/appstream/,g" \
    /etc/osbuild-composer/repositories/rhel-{{ op_system_version }}.json
    ```

    You can replace _{{ op_system_version_major }}_ with the major {{ op_system_base }} version you are using if different from the value in this example, and replace _{{ op_system_version }}_ with the _&lt;major.minor>_ version. Be certain that the {{ op_system_base }} version you choose is compatible with the {{ microshift_short }} version you are using.

**Verification**

1.  Verify the `baseos` source by running the following command:
    ```terminal
    $ sudo composer-cli sources info baseos | grep 'url ='
    ```
    ```text title="Example output" {minja}
    url = "https://cdn.redhat.com/content/eus/rhel{{ op_system_version_major }}/{{ op_system_version }}/x86_64/baseos/os"
    ```
1.  Verify the `appstream` source by running the following command:
    ```terminal
    $ sudo composer-cli sources info appstream | grep 'url ='
    ```
    ```text title="Example output" {minja}
    url = "https://cdn.redhat.com/content/eus/rhel{{ op_system_version_major }}/{{ op_system_version }}/x86_64/appstream/os"
    ```