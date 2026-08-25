{%- set _mod_docs_content_type = "PROCEDURE" %}

# Configuring a provisioning resource to scale user-provisioned clusters {id="configuring-a-provisioning-resource-to-scale-user-provisioned-clusters_{{ context }}"}

Create a `Provisioning` custom resource (CR) to enable Metal platform components on a user-provisioned infrastructure cluster.

**Prerequisites**

*   You installed a user-provisioned infrastructure cluster on bare metal.

**Procedure**

1.  Create a `Provisioning` CR.
    1.  Save the following YAML in the `provisioning.yaml` file:
        ```yaml
        apiVersion: metal3.io/v1alpha1
        kind: Provisioning
        metadata:
          name: provisioning-configuration
        spec:
          provisioningNetwork: "Disabled"
          watchAllNamespaces: false
        ```

        :::note

        {{ product_title }} {{ product_version }} does not support enabling a provisioning network when you scale a user-provisioned cluster by using the Bare Metal Operator.
        
        :::

1.  Create the `Provisioning` CR by running the following command:
    ```terminal
    $ oc create -f provisioning.yaml
    ```
    ```terminal title="Example output"
    provisioning.metal3.io/provisioning-configuration created
    ```

**Verification**

*   Verify that the provisioning service is running by running the following command:
    ```terminal
    $ oc get pods -n openshift-machine-api
    ```
    ```terminal title="Example output"
    NAME                                                  READY   STATUS    RESTARTS        AGE
    cluster-autoscaler-operator-678c476f4c-jjdn5          2/2     Running   0               5d21h
    cluster-baremetal-operator-6866f7b976-gmvgh           2/2     Running   0               5d21h
    control-plane-machine-set-operator-7d8566696c-bh4jz   1/1     Running   0               5d21h
    ironic-proxy-64bdw                                    1/1     Running   0               5d21h
    ironic-proxy-rbggf                                    1/1     Running   0               5d21h
    ironic-proxy-vj54c                                    1/1     Running   0               5d21h
    machine-api-controllers-544d6849d5-tgj9l              7/7     Running   1 (5d21h ago)   5d21h
    machine-api-operator-5c4ff4b86d-6fjmq                 2/2     Running   0               5d21h
    metal3-6d98f84cc8-zn2mx                               5/5     Running   0               5d21h
    metal3-image-customization-59d745768d-bhrp7           1/1     Running   0               5d21h
    ```