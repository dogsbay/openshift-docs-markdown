{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an InfraEnv resource and adding nodes {id="hcp-bm-add-nodes-to-inventory_{{ context }}"}

To ensure that your hardware is provisioned correctly before you create a hosted cluster on bare metal, create an `InfraEnv` resource. You can create the resource and add nodes by using the command-line interface (CLI). {._abstract}

**Procedure**

1.  Create a namespace to store your hardware inventory by entering the following command:
    ```terminal
    $ oc --kubeconfig ~/<directory_example>/mgmt-kubeconfig create \
      namespace <namespace_example>
    ```

    where:

    &lt;directory_example>
    :   Is the name of the directory where the `kubeconfig` file for the management cluster is saved.

    &lt;namespace_example>
    :   Is the name of the namespace that you are creating; for example, `hardware-inventory`.
    ```terminal title="Example output"
    namespace/hardware-inventory created
    ```

1.  Copy the pull secret of the management cluster by entering the following command:
    ```terminal
    $ oc --kubeconfig ~/<directory_example>/mgmt-kubeconfig \
      -n openshift-config get secret pull-secret -o yaml \
      | grep -vE "uid|resourceVersion|creationTimestamp|namespace" \
      | sed "s/openshift-config/<namespace_example>/g" \
      | oc --kubeconfig ~/<directory_example>/mgmt-kubeconfig \
      -n <namespace> apply -f -
    ```

    where:

    &lt;directory_example>
    :   Is the name of the directory where the `kubeconfig` file for the management cluster is saved.

    &lt;namespace_example>
    :   Is the name of the namespace that you are creating; for example, `hardware-inventory`.
    ```terminal title="Example output"
    secret/pull-secret created
    ```

1.  Create the `InfraEnv` resource by adding the following content to a YAML file:
    ```yaml
    apiVersion: agent-install.openshift.io/v1beta1
    kind: InfraEnv
    metadata:
      name: hosted
      namespace: <namespace_example>
    spec:
      additionalNTPSources:
      - <ip_address>
      pullSecretRef:
        name: pull-secret
      sshAuthorizedKey: <ssh_public_key>
    # ...
    ```
1.  Apply the changes to the YAML file by entering the following command:
    ```terminal
    $ oc apply -f <infraenv_config>.yaml
    ```

    Replace `<infraenv_config>` with the name of your file.
1.  Verify that the `InfraEnv` resource was created by entering the following command:
    ```terminal
    $ oc --kubeconfig ~/<directory_example>/mgmt-kubeconfig \
      -n <namespace_example> get infraenv hosted
    ```
1.  Add bare-metal hosts by following one of two methods:
    *   If you do not use the Metal3 Operator, obtain the discovery ISO from the `InfraEnv` resource and boot the hosts manually by completing the following steps:
        1.  Download the live ISO by entering the following commands:
            ```terminal
            $ oc get infraenv -A
            ```
            ```terminal
            $ oc get infraenv <namespace_example> -o jsonpath='{.status.isoDownloadURL}' -n <namespace_example> <iso_url>
            ```
        1.  Boot the ISO. The node communicates with the Assisted Service and registers as an agent in the same namespace as the `InfraEnv` resource.
        1.  For each agent, set the installation disk ID and hostname, and approve it to indicate that the agent is ready for use. 
            1.  Enter the following command to get the agents for your hosted control plane namespace:
                ```terminal
                $ oc -n <hosted_control_plane_namespace> get agents
                ```

                In this example, two agents are listed.
                ```terminal title="Example output"
                NAME                                   CLUSTER   APPROVED   ROLE          STAGE
                example-agent-1                        auto-assign
                example-agent-2                        auto-assign
                ```
            1.  Enter the following command to set the installation disk ID and hostname for the first agent:
                ```terminal
                $ oc -n <hosted_control_plane_namespace> \
                  patch agent example-agent-1 \
                  -p '{"spec":{"installation_disk_id":"/dev/sda","approved":true,"hostname":"worker-0.example.krnl.es"}}' \
                  --type merge
                ```
            1.  Enter the following command to set the installation disk ID and hostname for the second agent:
                ```terminal
                $ oc -n <hosted_control_plane_namespace> \
                  patch agent example-agent-2 -p \
                  '{"spec":{"installation_disk_id":"/dev/sda","approved":true,"hostname":"worker-1.example.krnl.es"}}' \
                  --type merge
                ```
    *   If you use the Metal3 Operator, you can automate the bare-metal host registration by creating the following objects:
        1.  Create a YAML file and add the following content to it:
            ```yaml
            apiVersion: v1
            kind: Secret
            metadata:
              name: hosted-worker0-bmc-secret
              namespace: <namespace_example>
            data:
              password: <password>
              username: <username>
            type: Opaque
            ---
            apiVersion: v1
            kind: Secret
            metadata:
              name: hosted-worker1-bmc-secret
              namespace: <namespace_example>
            data:
              password: <password>
              username: <username>
            type: Opaque
            ---
            apiVersion: v1
            kind: Secret
            metadata:
              name: hosted-worker2-bmc-secret
              namespace: <namespace_example>
            data:
              password: <password>
              username: <username>
            type: Opaque
            ---
            apiVersion: metal3.io/v1alpha1
            kind: BareMetalHost
            metadata:
              name: hosted-worker0
              namespace: <namespace_example>
              labels:
                infraenvs.agent-install.openshift.io: hosted
              annotations:
                inspect.metal3.io: disabled
                bmac.agent-install.openshift.io/hostname: hosted-worker0
            spec:
              automatedCleaningMode: disabled
              bmc:
                disableCertificateVerification: True
                address: <bmc_address>
                credentialsName: hosted-worker0-bmc-secret
              bootMACAddress: aa:aa:aa:aa:02:01
              online: true
            ---
            apiVersion: metal3.io/v1alpha1
            kind: BareMetalHost
            metadata:
              name: hosted-worker1
              namespace: <namespace_example>
              labels:
                infraenvs.agent-install.openshift.io: hosted
              annotations:
                inspect.metal3.io: disabled
                bmac.agent-install.openshift.io/hostname: hosted-worker1
            spec:
              automatedCleaningMode: disabled
              bmc:
                disableCertificateVerification: True
                address: <bmc_address>
                credentialsName: hosted-worker1-bmc-secret
              bootMACAddress: aa:aa:aa:aa:02:02
              online: true
            ---
            apiVersion: metal3.io/v1alpha1
            kind: BareMetalHost
            metadata:
              name: hosted-worker2
              namespace: <namespace_example>
              labels:
                infraenvs.agent-install.openshift.io: hosted
              annotations:
                inspect.metal3.io: disabled
                bmac.agent-install.openshift.io/hostname: hosted-worker2
            spec:
              automatedCleaningMode: disabled
              bmc:
                disableCertificateVerification: True
                address: <bmc_address>
                credentialsName: hosted-worker2-bmc-secret
              bootMACAddress: aa:aa:aa:aa:02:03
              online: true
            ---
            apiVersion: rbac.authorization.k8s.io/v1
            kind: Role
            metadata:
              name: capi-provider-role
              namespace: <namespace_example>
            rules:
            - apiGroups:
              - agent-install.openshift.io
              resources:
              - agents
              verbs:
              - '*'
            ```

            where:

            &lt;namespace_example>
            :   Is the your namespace.

            &lt;password>
            :   Is the password for your secret.

            &lt;username>
            :   Is the user name for your secret.

            &lt;bmc_address>
            :   Is the BMC address for the `BareMetalHost` object.

            :::note

            When you apply this YAML file, the following objects are created: 

            *   Secrets with credentials for the Baseboard Management Controller (BMCs)
            *   The `BareMetalHost` objects
            *   A role for the HyperShift Operator to be able to manage the agents

            Notice how the `InfraEnv` resource is referenced in the `BareMetalHost` objects by using the `infraenvs.agent-install.openshift.io: hosted` custom label. This ensures that the nodes are booted with the ISO generated.
            
            :::


        1.  Apply the changes to the YAML file by entering the following command:
            ```terminal
            $ oc apply -f <bare_metal_host_config>.yaml
            ```

            Replace `<bare_metal_host_config>` with the name of your file.
1.  Enter the following command, and then wait a few minutes for the `BareMetalHost` objects to move to the `Provisioning` state:
    ```terminal
    $ oc --kubeconfig ~/<directory_example>/mgmt-kubeconfig -n <namespace_example> get bmh
    ```
    ```terminal title="Example output"
    NAME             STATE          CONSUMER   ONLINE   ERROR   AGE
    hosted-worker0   provisioning              true             106s
    hosted-worker1   provisioning              true             106s
    hosted-worker2   provisioning              true             106s
    ```
1.  Enter the following command to verify that nodes are booting and showing up as agents. This process can take a few minutes, and you might need to enter the command more than once.
    ```terminal
    $ oc --kubeconfig ~/<directory_example>/mgmt-kubeconfig -n <namespace_example> get agent
    ```
    ```terminal title="Example output"
    NAME                                   CLUSTER   APPROVED   ROLE          STAGE
    aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaa0201             true       auto-assign
    aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaa0202             true       auto-assign
    aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaa0203             true       auto-assign
    ```