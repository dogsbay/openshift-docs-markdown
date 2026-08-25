{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a live installation ISO for a {{ sno }} image-based installation {id="ibi-create-iso-for-bmh_{{ context }}"}

You can embed your {{ sno }} seed image URL, and other installation artifacts, in a live installation ISO by using the `openshift-install` program. {._abstract}


:::note

For more information about the specification for the `image-based-installation-config.yaml` manifest, see the section "Reference specifications for the `image-based-installation-config.yaml` manifest".

:::


**Prerequisites**

*   You generated a seed image from a {{ sno }} seed cluster.
*   You downloaded the `openshift-install` program. The version of the `openshift-install` program must match the {{ product_title }} version in your seed image.
*   The target host has network access to the seed image URL and all other installation artifacts.
*   If you require static networking, you must install the `nmstatectl` library on the host that creates the live installation ISO.

**Procedure**

1.  Create a live installation ISO and embed your {{ sno }} seed image URL and other installation artifacts:
    1.  Create a working directory by running the following:
        ```terminal
        $ mkdir <working_directory>
        ```

        where `<working_directory>` is the name of your working directory, for example `ibi-iso-workdir`.
    1.  Optional. Create an installation configuration template to use as a reference when configuring the `ImageBasedInstallationConfig` resource:
        ```terminal
        $ openshift-install image-based create image-config-template --dir <working_directory>
        ```

        where `<working_directory>` is the name of your working directory, for example `ibi-iso-workdir`. If you do not specify a working directory, the command uses the current directory.

        Example output:
        ```terminal
        INFO Image-Config-Template created in: ibi-iso-workdir
        ```

        The command creates the `image-based-installation-config.yaml` installation configuration template in your target directory:
        ```yaml
        #
        # Note: This is a sample ImageBasedInstallationConfig file showing
        # which fields are available to aid you in creating your
        # own image-based-installation-config.yaml file.
        #
        apiVersion: v1beta1
        kind: ImageBasedInstallationConfig
        metadata:
          name: example-image-based-installation-config
        # The following fields are required
        seedImage: quay.io/openshift-kni/seed-image:4.22.0
        seedVersion: 4.22.0
        installationDisk: /dev/vda
        pullSecret: '<your_pull_secret>'
        # networkConfig is optional and contains the network configuration for the host in NMState format.
        # See https://nmstate.io/examples.html for examples.
        # networkConfig:
        #   interfaces:
        #     - name: eth0
        #       type: ethernet
        #       state: up
        #       mac-address: 00:00:00:00:00:00
        #       ipv4:
        #         enabled: true
        #         address:
        #           - ip: 192.168.122.2
        #             prefix-length: 23
        #         dhcp: false
        ```
    1.  Edit your installation configuration file:

        Example `image-based-installation-config.yaml` file:
        ```yaml
        apiVersion: v1beta1
        kind: ImageBasedInstallationConfig
        metadata:
          name: example-image-based-installation-config
        seedImage: quay.io/repo-id/seed:latest
        seedVersion: "4.22.0"
        extraPartitionStart: "-240G"
        installationDisk: /dev/disk/by-id/wwn-0x62c...
        sshKey: 'ssh-ed25519 AAAA...'
        pullSecret: '{"auths": ...}'
        networkConfig:
            interfaces:
              - name: ens1f0
                type: ethernet
                state: up
                ipv4:
                  enabled: true
                  dhcp: false
                  auto-dns: false
                  address:
                    - ip: 192.168.200.25
                      prefix-length: 24
                ipv6:
                  enabled: false
            dns-resolver:
              config:
                server:
                  - 192.168.15.47
                  - 192.168.15.48
            routes:
              config:
              - destination: 0.0.0.0/0
                metric: 150
                next-hop-address: 192.168.200.254
                next-hop-interface: ens1f0

        ```
    1.  Create the live installation ISO by running the following command:
        ```terminal
        $ openshift-install image-based create image --dir ibi-iso-workdir
        ```

        Example output:
        ```terminal
        INFO Consuming Image-based Installation ISO Config from target directory
        INFO Creating Image-based Installation ISO with embedded ignition
        ```

**Verification**

*   View the output in the working directory:
    ```text
    ibi-iso-workdir/
      └── rhcos-ibi.iso
    ```