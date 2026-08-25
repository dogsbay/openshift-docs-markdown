{% if context == "installing-restricted-networks-vsphere" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = true -%}
{% endif %}
{% if openshift_origin %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z_kvm = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z_lpar = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z_lpar = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-ibm-power" %}
{%- set ibm_power = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = true -%}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Completing installation on user-provisioned infrastructure {id="installation-complete-user-infra_{{ context }}"}

To finalize the installation on user-provisioned infrastructure, complete the cluster deployment after configuring the Operators. This ensures the cluster is fully operational on the infrastructure that you provide. {._abstract}

**Prerequisites**

*   Your control plane has initialized.
*   You have completed the initial Operator configuration.

**Procedure**

1.  Confirm that all the cluster components are online with the following command:
    ```terminal
    $ watch -n5 oc get clusteroperators
    ```
    ```terminal title="Example output"
    NAME                                       VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE
    authentication                             {{ product_version }}.0    True        False         False      19m
    baremetal                                  {{ product_version }}.0    True        False         False      37m
    cloud-credential                           {{ product_version }}.0    True        False         False      40m
    cluster-autoscaler                         {{ product_version }}.0    True        False         False      37m
    config-operator                            {{ product_version }}.0    True        False         False      38m
    console                                    {{ product_version }}.0    True        False         False      26m
    csi-snapshot-controller                    {{ product_version }}.0    True        False         False      37m
    dns                                        {{ product_version }}.0    True        False         False      37m
    etcd                                       {{ product_version }}.0    True        False         False      36m
    image-registry                             {{ product_version }}.0    True        False         False      31m
    ingress                                    {{ product_version }}.0    True        False         False      30m
    insights                                   {{ product_version }}.0    True        False         False      31m
    kube-apiserver                             {{ product_version }}.0    True        False         False      26m
    kube-controller-manager                    {{ product_version }}.0    True        False         False      36m
    kube-scheduler                             {{ product_version }}.0    True        False         False      36m
    kube-storage-version-migrator              {{ product_version }}.0    True        False         False      37m
    machine-api                                {{ product_version }}.0    True        False         False      29m
    machine-approver                           {{ product_version }}.0    True        False         False      37m
    machine-config                             {{ product_version }}.0    True        False         False      36m
    marketplace                                {{ product_version }}.0    True        False         False      37muser
    monitoring                                 {{ product_version }}.0    True        False         False      29m
    network                                    {{ product_version }}.0    True        False         False      38m
    node-tuning                                {{ product_version }}.0    True        False         False      37m
    openshift-apiserver                        {{ product_version }}.0    True        False         False      32muser
    openshift-controller-manager               {{ product_version }}.0    True        False         False      30m
    openshift-samples                          {{ product_version }}.0    True        False         False      32m
    operator-lifecycle-manager                 {{ product_version }}.0    True        False         False      37m
    operator-lifecycle-manager-catalog         {{ product_version }}.0    True        False         False      37m
    operator-lifecycle-manager-packageserver   {{ product_version }}.0    True        False         False      32m
    service-ca                                 {{ product_version }}.0    True        False         False      38m
    storage                                    {{ product_version }}.0    True        False         False      37m
    ```

    Alternatively, the following command notifies you when all of the clusters are available. The command also retrieves and displays credentials:
    ```terminal
    $ ./openshift-install --dir <installation_directory> wait-for install-complete
    ```

    where:

    `<installation_directory>`
    :   Specifies the path to the directory that you
        stored the installation files in.
    ```terminal title="Example output"
    INFO Waiting up to 30m0s for the cluster to initialize...
    ```
    The command succeeds when the Cluster Version Operator finishes deploying the
    {{ product_title }} cluster from Kubernetes API server.

    :::important

    *   The Ignition config files that the installation program generates contain certificates that expire after 24 hours, which are then renewed at that time. If the cluster is shut down before renewing the certificates and the cluster is later restarted after the 24 hours have elapsed, the cluster automatically recovers the expired certificates. The exception is that you must manually approve the pending `node-bootstrapper` certificate signing requests (CSRs) to recover kubelet certificates. See the documentation for _Recovering from expired control plane certificates_ for more information.
    *   It is recommended that you use Ignition config files within 12 hours after they are generated because the 24-hour certificate rotates from 16 to 22 hours after the cluster is installed. By using the Ignition config files within 12 hours, you can avoid installation failure if the certificate update runs during installation.
    
    :::


1.  Confirm that the Kubernetes API server is communicating with the pods.
    1.  To view a list of all pods, use the following command:
        ```terminal
        $ oc get pods --all-namespaces
        ```
        ```terminal title="Example output"
        NAMESPACE                         NAME                                            READY   STATUS      RESTARTS   AGE
        openshift-apiserver-operator      openshift-apiserver-operator-85cb746d55-zqhs8   1/1     Running     1          9m
        openshift-apiserver               apiserver-67b9g                                 1/1     Running     0          3m
        openshift-apiserver               apiserver-ljcmx                                 1/1     Running     0          1m
        openshift-apiserver               apiserver-z25h4                                 1/1     Running     0          2m
        openshift-authentication-operator authentication-operator-69d5d8bf84-vh2n8        1/1     Running     0          5m
        ```
    1.  View the logs for a pod that is listed in the output of the previous command by using the following command:
        ```terminal
        $ oc logs <pod_name> -n <namespace>
        ```

        where:

        `<namespace>`
        :   Specifies the pod name and namespace, as shown in the output of an earlier command.
        If the pod logs display, the Kubernetes API server can communicate with the cluster machines.

{% if not ibm_power %}
1.  For an installation with Fibre Channel Protocol (FCP), additional steps are required to enable multipathing. Do not enable multipathing during installation.
{% endif %}
{% if ibm_power %}
1.  Additional steps are required to enable multipathing. Do not enable multipathing during installation.
{%- endif %}

    See "Enabling multipathing with kernel arguments on {{ op_system }}" in the _Postinstallation machine configuration tasks_ documentation for more information.

{% if restricted %}
1.  Register your cluster on the [Cluster registration](https://console.redhat.com/openshift/register) page.
{% endif %}

{% if ibm_z or ibm_z_lpar %}

**Verification**

If you have enabled secure boot during the {{ product_title }} bootstrap process, the following verification steps are required:

1.  Debug the node by running the following command:
    ```terminal
    $ oc debug node/<node_name>
    ```
    ```terminal title="Example output"
    chroot /host
    ```
1.  Confirm that secure boot is enabled by running the following command. Example output states `1` if secure boot is enabled and `0` if secure boot is not enabled.
    ```terminal
    $ cat /sys/firmware/ipl/secure
    ```
{% endif %}

{% if ibm_z_lpar %}
1.  List the re-IPL configuration by running the following command:
    ```terminal
    # lsreipl
    ```
    ```terminal title="Example output for an FCP disk"
    Re-IPL type: fcp
    WWPN: 0x500507630400d1e3
    LUN: 0x4001400e00000000
    Device: 0.0.810e
    bootprog: 0
    br_lba: 0
    Loadparm: ""
    Bootparms: ""
    clear: 0
    ```
    ```terminal title="Example output for a DASD disk"
    for DASD output:
    Re-IPL type: ccw
    Device: 0.0.525d
    Loadparm: ""
    clear: 0
    ```
1.  Shut down the node by running the following command:
    ```terminal
    sudo shutdown -h
    ```
1.  Initiate a boot from LPAR from the Hardware Management Console (HMC). See [Initiating a secure boot from an LPAR](https://www.ibm.com/docs/en/linux-on-systems?topic=boot-lpar) in IBM documentation.
1.  When the node is back, check the secure boot status again.
{% endif %}

{% if context == "installing-restricted-networks-vsphere" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = false -%}
{% endif %}
{% if openshift_origin %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-ibm-power" %}
{%- set ibm_power = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z_kvm = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z_lpar = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z_lpar = false -%}
{%- set restricted = false -%}
{% endif %}