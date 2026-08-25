{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generating the installation ISO with coreos-installer {id="generating-the-install-iso-manually_{{ context }}"}

You can install {{ product_title }} on a single node by generating an installation ISO. {._abstract}

**Prerequisites**

*   Install `podman`.


:::note

See "Requirements for installing OpenShift on a single node" for networking requirements, including DNS records.

:::


**Procedure**

{% if not openshift_origin %}
1.  Set the {{ product_title }} version:
    ```terminal
    $ export OCP_VERSION=<ocp_version>
    ```

    Replace `<ocp_version>` with the current version, for example, `latest-{{ product_version }}`{minja}
{% endif %}
{% if openshift_origin %}
1.  Set the {{ product_title }} version:
    ```terminal
    $ OKD_VERSION=<okd_version>
    ```

    Replace `<okd_version>` with the current version, for example, `4.14.0-0.okd-2024-01-26-175629`
{% endif %}
1.  Set the target cluster architecture:
    ```terminal
    $ export ARCH=<architecture>
    ```

    Replace `<architecture>` with the target host architecture, for example, `aarch64` or `x86_64`.
1.  Set the installation host architecture:
    ```terminal
    $ export HOST_ARCH=$(uname -m)
    ```

    This command detects the architecture of the installation host. If the installation host architecture differs from the target cluster architecture, the downloaded binaries must match the installation host. For example, if you are installing an `aarch64` cluster from an `x86_64` bastion host, `HOST_ARCH` is `x86_64`.

{% if not openshift_origin %}
1.  Download the {{ product_title }} client (`oc`) and make it available for use by entering the following commands:
    ```terminal
    $ curl -k https://mirror.openshift.com/pub/openshift-v4/$HOST_ARCH/clients/ocp/$OCP_VERSION/openshift-client-linux.tar.gz -o oc.tar.gz
    ```
    ```terminal
    $ tar zxf oc.tar.gz
    ```
    ```terminal
    $ chmod +x oc
    ```
{% endif %}
{% if openshift_origin %}
1.  Download the {{ product_title }} client (`oc`) and make it available for use by entering the following commands:
    ```terminal
    $ curl -L https://github.com/okd-project/okd/releases/download/$OKD_VERSION/openshift-client-linux-$OKD_VERSION.tar.gz -o oc.tar.gz
    ```
    ```terminal
    $ tar zxf oc.tar.gz
    ```
    ```terminal
    $ chmod +x oc
    ```
{% endif %}

{% if not openshift_origin %}
1.  Download the {{ product_title }} installer and make it available for use by entering the following commands:
    ```terminal
    $ curl -k https://mirror.openshift.com/pub/openshift-v4/$HOST_ARCH/clients/ocp/$OCP_VERSION/openshift-install-linux.tar.gz -o openshift-install-linux.tar.gz
    ```
{% endif %}
{% if openshift_origin %}
1.  Download the {{ product_title }} installer and make it available for use by entering the following commands:
    ```terminal
    $ curl -L https://github.com/okd-project/okd/releases/download/$OKD_VERSION/openshift-install-linux-$OKD_VERSION.tar.gz -o openshift-install-linux.tar.gz
    ```
{% endif %}
    ```terminal
    $ tar zxvf openshift-install-linux.tar.gz
    ```
    ```terminal
    $ chmod +x openshift-install
    ```
1.  Retrieve the {{ op_system }} ISO URL by running the following command:
    ```terminal
    $ export ISO_URL=$(./openshift-install coreos print-stream-json | grep location | grep $ARCH | grep iso | cut -d\" -f4)
    ```

{% if not openshift_origin %}
1.  Download the {{ op_system }} ISO:
    ```terminal
    $ curl -L $ISO_URL -o rhcos-live.iso
    ```
{% endif %}
{% if openshift_origin %}
1.  Download the {{ op_system }} ISO:
    ```terminal
    $ curl -L $ISO_URL -o fcos-live.iso
    ```
{% endif %}
1.  Prepare the `install-config.yaml` file:
    ```yaml
    apiVersion: v1
    baseDomain: <domain>
    compute:
    - name: worker
      replicas: 0
    controlPlane:
      name: master
      replicas: 1
    metadata:
      name: <name>
    networking:
      clusterNetwork:
      - cidr: 10.128.0.0/14
        hostPrefix: 23
      machineNetwork:
      - cidr: 10.0.0.0/16
      networkType: OVNKubernetes
      serviceNetwork:
      - 172.30.0.0/16
    platform:
      none: {}
    bootstrapInPlace:
      installationDisk: /dev/disk/by-id/<disk_id>
    pullSecret: '<pull_secret>'
    sshKey: |
      <ssh_key>
    ```

    where:

    `baseDomain`
    :   Specifies the cluster domain name.

    `compute.replicas`
    :   Specifies the value of `compute.replicas` as `0`. This makes the control plane node schedulable.

    `controlPlane.replicas`
    :   Specifies the value of `controlPlane.replicas` as `1`. In conjunction with the previous `compute` setting, this setting ensures the cluster runs on a single node.

    `metadata.name`
    :   Specifies the `metadata` name to the cluster name.

    `networking`
    :   Specifies the `networking` details. OVN-Kubernetes is the only allowed network plugin type for single-node clusters.

    `machineNetwork.cidr`
    :   Specifies the `cidr` value to match the subnet of the cluster.

    `installationDisk`
    :   Specifies the path to the installation disk drive, for example, `/dev/disk/by-id/wwn-0x64cd98f04fde100024684cf3034da5c2`.

    `pullSecret`
    :   Specifies the `pullSecret` parameter. Copy the {{ cluster_manager_url_pull }} and add the contents to this configuration setting.

    `sshKey`
    :   Specifies the `sshKey` parameter. Add the public SSH key from the administration host so that you can log in to the cluster after installation.

{% if not openshift_origin %}
1.  Generate {{ product_title }} assets by running the following commands:
    ```terminal
    $ mkdir ocp
    ```
    ```terminal
    $ cp install-config.yaml ocp
    ```
    ```terminal
    $ ./openshift-install --dir=ocp create single-node-ignition-config
    ```
1.  Embed the ignition data into the {{ op_system }} ISO by running the following commands:
    ```terminal
    $ alias coreos-installer='podman run --privileged --pull always --rm \
            -v /dev:/dev -v /run/udev:/run/udev -v $PWD:/data \
            -w /data quay.io/coreos/coreos-installer:release'
    ```
    ```terminal
    $ coreos-installer iso ignition embed -fi ocp/bootstrap-in-place-for-live-iso.ign rhcos-live.iso
    ```

    :::important

    The SSL certificates for the {{ op_system }} ISO installation image are only valid for 24 hours. If you use the ISO image to install a node more than 24 hours after creating the image, the installation can fail. To re-create the image after 24 hours, delete the `ocp` directory and re-create the {{ product_title }} assets.
    
    :::

{% endif %}
{% if openshift_origin %}
1.  Generate {{ product_title }} assets by running the following commands:
    ```terminal
    $ mkdir sno
    ```
    ```terminal
    $ cp install-config.yaml sno
    ```
    ```terminal
    $ ./openshift-install --dir=sno create single-node-ignition-config
    ```
1.  Embed the ignition data into the {{ op_system }} ISO by running the following commands:
    ```terminal
    $ alias coreos-installer='podman run --privileged --pull always --rm \
            -v /dev:/dev -v /run/udev:/run/udev -v $PWD:/data \
            -w /data quay.io/coreos/coreos-installer:release'
    ```
    ```terminal
    $ coreos-installer iso ignition embed -fi sno/bootstrap-in-place-for-live-iso.ign fcos-live.iso
    ```
{% endif %}