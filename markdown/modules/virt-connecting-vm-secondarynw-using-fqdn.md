{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connecting to a VM on a secondary network by using the cluster FQDN {id="virt-connecting-vm-secondarynw-fqdn_{{ context }}"}

You can access a running virtual machine (VM) attached to a secondary network interface by using the fully qualified domain name (FQDN) of the cluster. {._abstract}

**Prerequisites**

*   You installed the {{ oc_first }}.
*   You installed the QEMU guest agent on the VM.
*   The IP address of the VM is public.
*   You configured the DNS server for secondary networks.
*   You retrieved the fully qualified domain name (FQDN) of the cluster.

    To obtain the FQDN, use the `oc get` command as follows:
    ```terminal
    $ oc get dnses.config.openshift.io cluster -o json | jq .spec.baseDomain
    ```

**Procedure**

1.  Retrieve the network interface name from the VM configuration by running the following command:
    ```terminal
    $ oc get vm -n <namespace> <vm_name> -o yaml
    ```

    Example output:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: example-vm
      namespace: example-namespace
    spec:
      runStrategy: Always
      template:
        spec:
          domain:
            devices:
              interfaces:
                - bridge: {}
                  name: example-nic
    # ...
          networks:
          - multus:
              networkName: bridge-conf
            name: example-nic
    ```

    Note the `name` of the network interface.
1.  Connect to the VM by using the `ssh` command:
    ```terminal
    $ ssh <user_name>@<interface_name>.<vm_name>.<namespace>.vm.<cluster_fqdn>
    ```