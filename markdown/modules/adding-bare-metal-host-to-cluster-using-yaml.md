{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a bare-metal host to the cluster using YAML in the web console {id="adding-bare-metal-host-to-cluster-using-yaml_{{ context }}"}

You can add bare-metal hosts to the cluster in the web console by using a YAML file that describes the bare-metal host. {._abstract}

**Prerequisites**

*   Install a {{ op_system }} compute machine on bare-metal infrastructure for use in the cluster.
*   Log in as a user with `cluster-admin` privileges.
*   Create a `Secret` CR for the bare-metal host.

**Procedure**

1.  In the web console, navigate to **Compute** → **Bare Metal Hosts**.
1.  Select **Add Host** → **New from YAML**.
1.  Copy and paste the below YAML, modifying the relevant fields with the details of your host:
    ```yaml
    apiVersion: metal3.io/v1alpha1
    kind: BareMetalHost
    metadata:
      name: <bare_metal_host_name>
    spec:
      online: true
      bmc:
        address: <bmc_address>
        credentialsName: <secret_credentials_name>
        disableCertificateVerification: True
      bootMACAddress: <host_boot_mac_address>
    # ...
    ```

    where:

    `spec.bmc.credentialsName`
    :   Specifies a reference to a valid `Secret` CR. The Bare Metal Operator cannot manage the bare-metal host without a valid `Secret` referenced in the `credentialsName`. For more information about secrets and how to create them, see "Understanding secrets".


`spec.bmc.disableCertificateVerification`
:   Specifies whether to require TLS host validation between the cluster and the baseboard management controller (BMC). When this field is set to `true`, TLS host validation is disabled.

1.  Select **Create** to save the YAML and create the new bare-metal host.
1.  Scale up the number of replicas to match the number of available bare-metal hosts. Navigate to **Compute** → **MachineSets**, and increase the number of machines in the cluster by selecting **Edit Machine count** from the **Actions** drop-down menu.

    :::note

    You can also manage the number of bare-metal nodes by using the `oc scale` command and the appropriate bare-metal compute machine set.
    
    :::