{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring NC-SI and DisablePowerOff for shared NICs {id="bmo-configuring-ncsi-disable-poweroff_{{ context }}"}

The Network Controller Sideband Interface (NC-SI) enables the Baseboard Management Controller (BMC) to share a system network interface card (NIC) with the host for management traffic, using protocols like Redfish, IPMI, or vendor-specific interfaces. The `DisablePowerOff` feature prevents hard power-offs, ensuring soft reboots to maintain BMC connectivity. {._abstract}

**Prerequisites**

*   NC-SI-capable hardware and NICs.
*   BMC configured with an IP address and network connection.
*   Administrative access to the BMC.
*   Access to the OpenShift cluster with `cluster-admin` privileges.

**Procedure**

1.  Configure the BMC to enable NC-SI for a shared NIC.
1.  Verify BMC connectivity using Redfish or IPMI by running one of the following commands:
    ```terminal
    $ curl -k https://<bmc_ip>/redfish/v1/Systems/1
    ```
    ```terminal
    $ ipmitool -I lanplus -H <bmc_ip> -U <user> -P <pass> power status
    ```
1.  Enable the `DisablePowerOff` feature by editing the `BareMetalHost` resource in the `openshift-machine-api` namespace:
    ```yaml
    apiVersion: metal3.io/v1alpha1
    kind: BareMetalHost
    metadata:
      name: example-host
      namespace: openshift-machine-api
    spec:
      online: true
      bmc:
        address: <protocol>://<bmc_ip>/<bmc_address_format>
        credentialsName: bmc-secret
      disablePowerOff: true
    ```

    See the "BMC addressing" sections for details on supported protocols and BMC address formats.
1.  Apply the changes by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

**Verification**

*   Check the `BareMetalHost` status by running the following command:
    ```terminal
    $ oc get baremetalhost example-host -n openshift-machine-api -o yaml
    ```

    Confirm that `disablePowerOff: true` is in the `spec` section.
*   Test a reboot by restarting a node pod and verify that BMC connectivity remains active.
*   Attempt to set `BareMetalHost.spec.online=false`. It should fail with an error indicating power-off is disabled.