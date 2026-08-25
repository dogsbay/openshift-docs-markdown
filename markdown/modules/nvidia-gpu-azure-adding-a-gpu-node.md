{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a GPU node to an existing {{ product_title }} cluster {id="nvidia-gpu-aws-adding-a-gpu-node_{{ context }}"}

To provide specialized hardware for compute-intensive workloads that require NVIDIA GPU acceleration, you can copy and modify a default compute machine set configuration to create a GPU-enabled machine set and machines for the {{ azure_first }} cloud provider. {._abstract}

The following table lists the validated instance types:

| vmSize | NVIDIA GPU accelerator | Maximum number of GPUs | Architecture |
| --- | --- | --- | --- |
| `Standard_NC24s_v3` | V100 | 4 | x86 |
| `Standard_NC4as_T4_v3` | T4 | 1 | x86 |
| `ND A100 v4` | A100 | 8 | x86 |


:::note

By default, {{ azure_full }} subscriptions do not have a quota for the {{ azure_full }} instance types with GPU. Customers have to request a quota increase for the {{ azure_full }} instance families in the preceding list.

:::


**Procedure**

1.  View the machines and machine sets that exist in the `openshift-machine-api` namespace by running the following command. Each compute machine set is associated with a different availability zone within the {{ azure_full }} region. The installation program automatically load balances compute machines across availability zones.
    ```terminal
    $ oc get machineset -n openshift-machine-api
    ```
    ```terminal title="Example output"
    NAME                              DESIRED   CURRENT   READY   AVAILABLE   AGE
    myclustername-worker-centralus1   1         1         1       1           6h9m
    myclustername-worker-centralus2   1         1         1       1           6h9m
    myclustername-worker-centralus3   1         1         1       1           6h9m
    ```
1.  Make a copy of one of the existing compute `MachineSet` definitions and output the result to a YAML file by running the following command.
This will be the basis for the GPU-enabled compute machine set definition.
    ```terminal
    $ oc get machineset -n openshift-machine-api myclustername-worker-centralus1 -o yaml > machineset-azure.yaml
    ```
1.  View the content of the compute machine set:
    ```terminal
    $ cat machineset-azure.yaml
    ```
    ```yaml title="Example machineset-azure.yaml file"
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    metadata:
      annotations:
        machine.openshift.io/GPU: "0"
        machine.openshift.io/memoryMb: "16384"
        machine.openshift.io/vCPU: "4"
      creationTimestamp: "2023-02-06T14:08:19Z"
      generation: 1
      labels:
        machine.openshift.io/cluster-api-cluster: myclustername
        machine.openshift.io/cluster-api-machine-role: worker
        machine.openshift.io/cluster-api-machine-type: worker
      name: myclustername-worker-centralus1
      namespace: openshift-machine-api
      resourceVersion: "23601"
      uid: acd56e0c-7612-473a-ae37-8704f34b80de
    spec:
      replicas: 1
      selector:
        matchLabels:
          machine.openshift.io/cluster-api-cluster: myclustername
          machine.openshift.io/cluster-api-machineset: myclustername-worker-centralus1
      template:
        metadata:
          labels:
            machine.openshift.io/cluster-api-cluster: myclustername
            machine.openshift.io/cluster-api-machine-role: worker
            machine.openshift.io/cluster-api-machine-type: worker
            machine.openshift.io/cluster-api-machineset: myclustername-worker-centralus1
        spec:
          lifecycleHooks: {}
          metadata: {}
          providerSpec:
            value:
              acceleratedNetworking: true
              apiVersion: machine.openshift.io/v1beta1
              credentialsSecret:
                name: azure-cloud-credentials
                namespace: openshift-machine-api
              diagnostics: {}
              image:
                offer: ""
                publisher: ""
                resourceID: /resourceGroups/myclustername-rg/providers/Microsoft.Compute/galleries/gallery_myclustername_n6n4r/images/myclustername-gen2/versions/latest
                sku: ""
                version: ""
              kind: AzureMachineProviderSpec
              location: centralus
              managedIdentity: myclustername-identity
              metadata:
                creationTimestamp: null
              networkResourceGroup: myclustername-rg
              osDisk:
                diskSettings: {}
                diskSizeGB: 128
                managedDisk:
                  storageAccountType: Premium_LRS
                osType: Linux
              publicIP: false
              publicLoadBalancer: myclustername
              resourceGroup: myclustername-rg
              spotVMOptions: {}
              subnet: myclustername-worker-subnet
              userDataSecret:
                name: worker-user-data
              vmSize: Standard_D4s_v3
              vnet: myclustername-vnet
              zone: "1"
    status:
      availableReplicas: 1
      fullyLabeledReplicas: 1
      observedGeneration: 1
      readyReplicas: 1
      replicas: 1
    ```
1.  Make a copy of the `machineset-azure.yaml` file by running the following command:
    ```terminal
    $ cp machineset-azure.yaml machineset-azure-gpu.yaml
    ```
1.  Update the following fields in `machineset-azure-gpu.yaml`:
    *   Change `.metadata.name` to a name containing `gpu`.
    *   Change `.spec.selector.matchLabels["machine.openshift.io/cluster-api-machineset"]` to match the new .metadata.name.
    *   Change `.spec.template.metadata.labels["machine.openshift.io/cluster-api-machineset"]` to match the new `.metadata.name`.
    *   Change `.spec.template.spec.providerSpec.value.vmSize` to `Standard_NC4as_T4_v3`.
        ```yaml title="Example machineset-azure-gpu.yaml file"
        apiVersion: machine.openshift.io/v1beta1
        kind: MachineSet
        metadata:
          annotations:
            machine.openshift.io/GPU: "1"
            machine.openshift.io/memoryMb: "28672"
            machine.openshift.io/vCPU: "4"
          creationTimestamp: "2023-02-06T20:27:12Z"
          generation: 1
          labels:
            machine.openshift.io/cluster-api-cluster: myclustername
            machine.openshift.io/cluster-api-machine-role: worker
            machine.openshift.io/cluster-api-machine-type: worker
          name: myclustername-nc4ast4-gpu-worker-centralus1
          namespace: openshift-machine-api
          resourceVersion: "166285"
          uid: 4eedce7f-6a57-4abe-b529-031140f02ffa
        spec:
          replicas: 1
          selector:
            matchLabels:
              machine.openshift.io/cluster-api-cluster: myclustername
              machine.openshift.io/cluster-api-machineset: myclustername-nc4ast4-gpu-worker-centralus1
          template:
            metadata:
              labels:
                machine.openshift.io/cluster-api-cluster: myclustername
                machine.openshift.io/cluster-api-machine-role: worker
                machine.openshift.io/cluster-api-machine-type: worker
                machine.openshift.io/cluster-api-machineset: myclustername-nc4ast4-gpu-worker-centralus1
            spec:
              lifecycleHooks: {}
              metadata: {}
              providerSpec:
                value:
                  acceleratedNetworking: true
                  apiVersion: machine.openshift.io/v1beta1
                  credentialsSecret:
                    name: azure-cloud-credentials
                    namespace: openshift-machine-api
                  diagnostics: {}
                  image:
                    offer: ""
                    publisher: ""
                    resourceID: /resourceGroups/myclustername-rg/providers/Microsoft.Compute/galleries/gallery_myclustername_n6n4r/images/myclustername-gen2/versions/latest
                    sku: ""
                    version: ""
                  kind: AzureMachineProviderSpec
                  location: centralus
                  managedIdentity: myclustername-identity
                  metadata:
                    creationTimestamp: null
                  networkResourceGroup: myclustername-rg
                  osDisk:
                    diskSettings: {}
                    diskSizeGB: 128
                    managedDisk:
                      storageAccountType: Premium_LRS
                    osType: Linux
                  publicIP: false
                  publicLoadBalancer: myclustername
                  resourceGroup: myclustername-rg
                  spotVMOptions: {}
                  subnet: myclustername-worker-subnet
                  userDataSecret:
                    name: worker-user-data
                  vmSize: Standard_NC4as_T4_v3
                  vnet: myclustername-vnet
                  zone: "1"
        status:
          availableReplicas: 1
          fullyLabeledReplicas: 1
          observedGeneration: 1
          readyReplicas: 1
          replicas: 1
        ```
1.  To verify your changes, perform a `diff` of the original compute definition and the new GPU-enabled node definition by running the following command:
    ```terminal
    $ diff machineset-azure.yaml machineset-azure-gpu.yaml
    ```
    ```terminal title="Example output"
    14c14
    <   name: myclustername-worker-centralus1
    ---
    >   name: myclustername-nc4ast4-gpu-worker-centralus1
    23c23
    <       machine.openshift.io/cluster-api-machineset: myclustername-worker-centralus1
    ---
    >       machine.openshift.io/cluster-api-machineset: myclustername-nc4ast4-gpu-worker-centralus1
    30c30
    <         machine.openshift.io/cluster-api-machineset: myclustername-worker-centralus1
    ---
    >         machine.openshift.io/cluster-api-machineset: myclustername-nc4ast4-gpu-worker-centralus1
    67c67
    <           vmSize: Standard_D4s_v3
    ---
    >           vmSize: Standard_NC4as_T4_v3
    ```
1.  Create the GPU-enabled compute machine set from the definition file by running the following command:
    ```terminal
    $ oc create -f machineset-azure-gpu.yaml
    ```
    ```terminal title="Example output"
    machineset.machine.openshift.io/myclustername-nc4ast4-gpu-worker-centralus1 created
    ```
1.  View the machines and machine sets that exist in the `openshift-machine-api` namespace by running the following command. Each compute machine set is associated with a different availability zone within the {{ azure_full }} region. The installation program automatically load balances compute machines across availability zones.
    ```terminal
    $ oc get machineset -n openshift-machine-api
    ```
    ```terminal title="Example output"
    NAME                                               DESIRED   CURRENT   READY   AVAILABLE   AGE
    clustername-n6n4r-nc4ast4-gpu-worker-centralus1    1         1         1       1           122m
    clustername-n6n4r-worker-centralus1                1         1         1       1           8h
    clustername-n6n4r-worker-centralus2                1         1         1       1           8h
    clustername-n6n4r-worker-centralus3                1         1         1       1           8h
    ```
1.  View the machines that exist in the `openshift-machine-api` namespace by running the following command. You can only configure one compute machine per set, although you can scale a compute machine set to add a node in a particular region and zone.
    ```terminal
    $ oc get machines -n openshift-machine-api
    ```
    ```terminal title="Example output"
    NAME                                                PHASE     TYPE                   REGION      ZONE   AGE
    myclustername-master-0                              Running   Standard_D8s_v3        centralus   2      6h40m
    myclustername-master-1                              Running   Standard_D8s_v3        centralus   1      6h40m
    myclustername-master-2                              Running   Standard_D8s_v3        centralus   3      6h40m
    myclustername-nc4ast4-gpu-worker-centralus1-w9bqn   Running      centralus   1      21m
    myclustername-worker-centralus1-rbh6b               Running   Standard_D4s_v3        centralus   1      6h38m
    myclustername-worker-centralus2-dbz7w               Running   Standard_D4s_v3        centralus   2      6h38m
    myclustername-worker-centralus3-p9b8c               Running   Standard_D4s_v3        centralus   3      6h38m
    ```
1.  View the existing nodes, machines, and machine sets by running the following command. Note that each node is an instance of a machine definition with a specific Azure region and {{ product_title }} role.
    ```terminal
    $ oc get nodes
    ```
    ```terminal title="Example output"
    NAME                                                STATUS   ROLES                  AGE     VERSION
    myclustername-master-0                              Ready    control-plane,master   6h39m   v1.35.4
    myclustername-master-1                              Ready    control-plane,master   6h41m   v1.35.4
    myclustername-master-2                              Ready    control-plane,master   6h39m   v1.35.4
    myclustername-nc4ast4-gpu-worker-centralus1-w9bqn   Ready    worker                 14m     v1.35.4
    myclustername-worker-centralus1-rbh6b               Ready    worker                 6h29m   v1.35.4
    myclustername-worker-centralus2-dbz7w               Ready    worker                 6h29m   v1.35.4
    myclustername-worker-centralus3-p9b8c               Ready    worker                 6h31m   v1.35.4
    ```
1.  View the list of compute machine sets:
    ```terminal
    $ oc get machineset -n openshift-machine-api
    ```
    ```terminal title="Example output"
    NAME                                   DESIRED   CURRENT   READY   AVAILABLE   AGE
    myclustername-worker-centralus1        1         1         1       1           8h
    myclustername-worker-centralus2        1         1         1       1           8h
    myclustername-worker-centralus3        1         1         1       1           8h
    ```
1.  Create the GPU-enabled compute machine set from the definition file by running the following command:
    ```terminal
    $ oc create -f machineset-azure-gpu.yaml
    ```
1.  View the list of compute machine sets:
    ```terminal
    oc get machineset -n openshift-machine-api
    ```
    ```terminal title="Example output"
    NAME                                          DESIRED   CURRENT   READY   AVAILABLE   AGE
    myclustername-nc4ast4-gpu-worker-centralus1   1         1         1       1           121m
    myclustername-worker-centralus1               1         1         1       1           8h
    myclustername-worker-centralus2               1         1         1       1           8h
    myclustername-worker-centralus3               1         1         1       1           8h
    ```

**Verification**

1.  View the machine set you created by running the following command:
    ```terminal
    $ oc get machineset -n openshift-machine-api | grep gpu
    ```

    The MachineSet replica count is set to `1` so a new `Machine` object is created automatically.
    ```terminal title="Example output"
    myclustername-nc4ast4-gpu-worker-centralus1   1         1         1       1           121m
    ```
1.  View the `Machine` object that the machine set created by running the following command:
    ```terminal
    $ oc -n openshift-machine-api get machines | grep gpu
    ```
    ```terminal title="Example output"
    myclustername-nc4ast4-gpu-worker-centralus1-w9bqn   Running   Standard_NC4as_T4_v3   centralus   1      21m
    ```


    :::note

    There is no need to specify a namespace for the node. The node definition is cluster scoped.
    
    :::