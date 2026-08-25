{% if context == "installing-ibm-power" %}
{%- set ibm_power = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = true -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ op_system }} by using an ISO image {id="installation-user-infra-machines-iso_{{ context }}"}

To provision physical or virtual machines, install {{ op_system }} by using a bootable ISO image. {._abstract}

**Prerequisites**

*   You have created the Ignition config files for your cluster.
*   You have configured a suitable network, DNS, and load balancing infrastructure.
*   You have an HTTP server that can be accessed from your computer, and from the machines that you create.
*   You have reviewed the _Advanced {{ op_system }} installation configuration_ section for different ways to configure features, such as networking and disk partitioning.

**Procedure**

1.  Obtain the SHA512 digest for each of your Ignition config files. For example, you can use the following on a system running Linux to get the SHA512 digest for your `bootstrap.ign` Ignition config file:
    ```terminal
    $ sha512sum <installation_directory>/bootstrap.ign
    ```

    The digests are provided to the `coreos-installer` in a later step to validate the authenticity of the Ignition config files on the cluster nodes.
1.  Upload the bootstrap, control plane, and compute node Ignition config files that the installation program created to your HTTP server. Note the URLs of these files.

    :::important

    You can add or change configuration settings in your Ignition configs before saving them to your HTTP server. If you plan to add more compute machines to your cluster after you finish installation, do not delete these files.
    
    :::

1.  From the installation host, validate that the Ignition config files are available on the URLs. The following example gets the Ignition config file for the bootstrap node:
    ```terminal
    $ curl -k http://<HTTP_server>/bootstrap.ign
    ```
    *   &lt;HTTP_server>: Replace `bootstrap.ign` with `master.ign` or `worker.ign` in the command to validate that the Ignition config files for the control plane and compute nodes are also available.
        ```terminal title="Example output"
          % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                         Dload  Upload   Total   Spent    Left  Speed
          0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0{"ignition":{"version":"3.2.0"},"passwd":{"users":[{"name":"core","sshAuthorizedKeys":["ssh-rsa...
        ```
1.  Although it is possible to obtain the {{ op_system }} images that are required for your preferred method of installing operating system instances from the
    {%- if openshift_enterprise %}
    {% if not ibm_power %}
    [{{ op_system }} image mirror](https://mirror.openshift.com/pub/openshift-v4/x86_64/dependencies/rhcos/)
    {% endif %}
    {% endif %}
    {% if openshift_origin %}
    [{{ op_system }}](https://getfedora.org/en/coreos/download?tab=metal_virtualized&stream=stable)
    {% endif %}
    {% if ibm_power %}
    [{{ op_system }} image mirror](https://mirror.openshift.com/pub/openshift-v4/ppc64le/dependencies/rhcos/)
    {%- endif %}
    page, the recommended way to obtain the correct version of your {{ op_system }} images are from the output of `openshift-install` command:
    ```terminal
    $ openshift-install coreos print-stream-json | grep '\.iso[^.]'
    ```
    **Example output**

{%- if not openshift_origin %}
    ```terminal
    "location": "<url>/art/storage/releases/rhcos-4.22-aarch64/<release>/aarch64/rhcos-<release>-live.aarch64.iso",
    "location": "<url>/art/storage/releases/rhcos-4.22-ppc64le/<release>/ppc64le/rhcos-<release>-live.ppc64le.iso",
    "location": "<url>/art/storage/releases/rhcos-4.22-s390x/<release>/s390x/rhcos-<release>-live.s390x.iso",
    "location": "<url>/art/storage/releases/rhcos-4.22/<release>/x86_64/rhcos-<release>-live.x86_64.iso",
    ```
{% endif %}
{% if openshift_origin %}
    ```terminal
    "location": "<url>/prod/streams/stable/builds/<release>/x86_64/fedora-coreos-<release>-live.x86_64.iso",
    ```
{%- endif %}

    :::important

    The {{ op_system }} images might not change with every release of {{ product_title }}. You must download images with the highest version that is less than or equal to the {{ product_title }} version that you install. Use the image versions that match your {{ product_title }} version if they are available. Use only ISO images for this procedure. {{ op_system }} qcow2 images are not supported for this installation type.
    
    :::


    ISO file names resemble the following example:
{%- if not openshift_origin %}

    `rhcos-<version>-live.<architecture>.iso`
{% endif %}
{% if openshift_origin %}
    `fedora-coreos-<version>-live.<architecture>.iso`
{% endif %}
1.  Use the ISO to start the {{ op_system }} installation. Use one of the following installation options:
    *   Burn the ISO image to a disk and boot it directly.
    *   Use ISO redirection by using a lights-out management (LOM) interface.
1.  Boot the {{ op_system }} ISO image without specifying any options or interrupting the live boot sequence. Wait for the installer to boot into a shell prompt in the {{ op_system }} live environment.

    :::note

    It is possible to interrupt the {{ op_system }} installation boot process to add kernel arguments. However, for this ISO procedure you should use the `coreos-installer` command as outlined in the following steps, instead of adding kernel arguments.
    
    :::

1.  Run the `coreos-installer` command and specify the options that meet your installation requirements. At a minimum, you must specify the URL that points to the Ignition config file for the node type, and the device that you are installing to:
    {%- if restricted %}
    ```terminal
    $ sudo coreos-installer install --ignition-url=http://<HTTP_server>/<node_type>.ign <device> \
    --ignition-hash=sha512-<digest> --offline
    ```
{% endif %}
{% if not restricted %}
    ```terminal
    $ sudo coreos-installer install --ignition-url=http://<HTTP_server>/<node_type>.ign <device> \
    --ignition-hash=sha512-<digest>
    ```
{%- endif %}
    *   `<device>`: You must run the `coreos-installer` command by using `sudo`, because the `core` user does not have the required root privileges to perform the installation.
    *   `<digest>`: The `--ignition-hash` option is required when the Ignition config file is obtained through an HTTP URL to validate the authenticity of the Ignition config file on the cluster node. `<digest>` is the Ignition config file SHA512 digest obtained in a preceding step.

        :::note

        If you want to provide your Ignition config files through an HTTPS server that uses TLS, you can add the internal certificate authority (CA) to the system trust store before running `coreos-installer`.
        
        :::


        The following example initializes a bootstrap node installation to the `/dev/sda` device. The Ignition config file for the bootstrap node is obtained from an HTTP web server with the IP address 192.168.1.2:
{%- if restricted %}
        ```terminal
        $ sudo coreos-installer install --ignition-url=http://192.168.1.2:80/installation_directory/bootstrap.ign /dev/sda \
        --ignition-hash=sha512-a5a2d43879223273c9b60af66b44202a1d1248fc01cf156c46d4a79f552b6bad47bc8cc78ddf0116e80c59d2ea9e32ba53bc807afbca581aa059311def2c3e3b \
        --offline
        ```
{% endif %}
{% if not restricted %}
        ```terminal
        $ sudo coreos-installer install --ignition-url=http://192.168.1.2:80/installation_directory/bootstrap.ign /dev/sda \
        --ignition-hash=sha512-a5a2d43879223273c9b60af66b44202a1d1248fc01cf156c46d4a79f552b6bad47bc8cc78ddf0116e80c59d2ea9e32ba53bc807afbca581aa059311def2c3e3b
        ```
{% endif %}
1.  Monitor the progress of the {{ op_system }} installation on the console of the machine.

    :::important

    Be sure that the installation is successful on each node before commencing with the {{ product_title }} installation. Observing the installation process can also help to determine the cause of {{ op_system }} installation issues that might arise.
    
    :::

1.  After {{ op_system }} installs, you must reboot the system. During the system reboot, it applies the Ignition config file that you specified.
1.  Check the console output to verify that Ignition ran.
    ```terminal title="Example command"
    Ignition: ran on 2022/03/14 14:48:33 UTC (this boot)
    Ignition: user-provided config was applied
    ```
1.  Continue to create the other machines for your cluster.

    :::important

    You must create the bootstrap and control plane machines at this time. If the control plane machines are not made schedulable, also create at least two compute machines before you install {{ product_title }}.
    
    :::


    If the required network, DNS, and load balancer infrastructure are in place, the {{ product_title }} bootstrap process begins automatically after the {{ op_system }} nodes have rebooted.

    :::note

    {{ op_system }} nodes do not include a default password for the `core` user. You can access the nodes by running `ssh core@<node>.<cluster_name>.<base_domain>` as a user with access to the SSH private key that is paired to the public key that you specified in your `install_config.yaml` file. {{ product_title }} 4 cluster nodes running {{ op_system }} are immutable and rely on Operators to apply cluster changes. Accessing cluster nodes by using SSH is not recommended. However, when investigating installation issues, if the {{ product_title }} API is not available, or the kubelet is not properly functioning on a target node, SSH access might be required for debugging or disaster recovery.
    
    :::


{% if context == "installing-ibm-power" %}
{%- set ibm_power = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = false -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = false -%}
{% endif %}