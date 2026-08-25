{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connecting to a virtual machine by using its internal FQDN {id="virt-connecting-vm-internal-fqdn_{{ context }}"}

You can connect to a virtual machine (VM) by using its internal fully qualified domain name (FQDN). {._abstract}

**Prerequisites**

*   You have installed the `virtctl` tool.
*   You have identified the internal FQDN of the VM from the web console or by mapping the VM to a headless service. The internal FQDN has the format `<vm.spec.hostname>.<vm.spec.subdomain>.<vm.metadata.namespace>.svc.cluster.local`.

**Procedure**

1.  Connect to the VM console by entering the following command:
    ```terminal
    $ virtctl console vm-fedora
    ```
1.  To connect to the VM by using the requested FQDN, run the following command:
    ```terminal
    $ ping myvm.mysubdomain.<namespace>.svc.cluster.local
    ```

    Example output:
    ```terminal
    PING myvm.mysubdomain.default.svc.cluster.local (10.244.0.57) 56(84) bytes of data.
    64 bytes from myvm.mysubdomain.default.svc.cluster.local (10.244.0.57): icmp_seq=1 ttl=64 time=0.029 ms
    ```

    In the preceding example, the DNS entry for `myvm.mysubdomain.default.svc.cluster.local` points to `10.244.0.57`, which is the cluster IP address that is currently assigned to the VM.